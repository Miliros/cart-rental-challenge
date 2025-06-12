import { create } from "zustand";
import type { Car } from "../types/Car";

interface CarStoreState {
  allCars: Car[];
  filteredCars: Car[];
  filters: {
    category: string[];
    doors: string[];
    large_suitcase: string[];
    sort: "mayor" | "menor" | "none";
    priceRange: {
      min: number;
      max: number;
    };
  };
  setCars: (cars: Car[]) => void;
  setSort: (sort: "mayor" | "menor" | "none") => void;
  setFilter: (
    type: "category" | "doors" | "large_suitcase",
    value: string
  ) => void;
  setPriceRange: (min: number, max: number) => void;
  applyFilters: () => void;
  toggleHighlightedCars: () => void;
  highlighted: boolean;
  selectedCars: string[];
  selectCar: (code: string) => void;
  unselectCar: (code: string) => void;
}

export const useCarStore = create<CarStoreState>((set) => ({
  allCars: [],
  filteredCars: [],
  filters: {
    category: [],
    doors: [],
    large_suitcase: [],
    sort: "none",
    priceRange: { min: 647278, max: 880000 },
  },
  highlighted: false,

  setCars: (cars) =>
    set((state) => {
      const updatedCars = cars.map((car, index) => ({
        ...car,
        uniqueId: `${car.code}-${index}`,
      }));
      const newFilters = { ...state.filters };
      return {
        ...state,
        allCars: updatedCars,
        filteredCars: aplicarFiltros(
          updatedCars,
          newFilters,
          state.highlighted
        ),
      };
    }),

  setSort: (sort) => {
    set((state) => {
      const newFilters = { ...state.filters, sort };
      return {
        filters: newFilters,
        filteredCars: aplicarFiltros(
          state.allCars,
          newFilters,
          state.highlighted
        ),
      };
    });
  },

  toggleHighlightedCars: () =>
    set((state) => {
      const newHighlighted = !state.highlighted;
      return {
        highlighted: newHighlighted,
        filteredCars: aplicarFiltros(
          state.allCars,
          state.filters,
          newHighlighted
        ),
      };
    }),

  setFilter: (type, value) =>
    set((state) => {
      let updated: string[];
      const currentValues =
        state.filters[type as "category" | "doors" | "large_suitcase"];

      if (type === "category" && value === "Todas las categorias") {
        updated = [];
      } else {
        updated = currentValues.includes(value)
          ? currentValues.filter((v) => v !== value)
          : [...currentValues, value];
      }

      const newFilters = { ...state.filters, [type]: updated };
      return {
        filters: newFilters,
        filteredCars: aplicarFiltros(
          state.allCars,
          newFilters,
          state.highlighted
        ),
      };
    }),

  setPriceRange: (min, max) =>
    set((state) => {
      const newFilters = {
        ...state.filters,
        priceRange: { min, max },
      };
      return {
        filters: newFilters,
        filteredCars: aplicarFiltros(
          state.allCars,
          newFilters,
          state.highlighted
        ),
      };
    }),

  applyFilters: () =>
    set((state) => ({
      filteredCars: aplicarFiltros(
        state.allCars,
        state.filters,
        state.highlighted
      ),
    })),

  selectedCars: [],
  selectCar: (uniqueId) =>
    set((state) => ({
      selectedCars: [...state.selectedCars, uniqueId],
    })),

  unselectCar: (uniqueId) =>
    set((state) => ({
      selectedCars: state.selectedCars.filter((id) => id !== uniqueId),
    })),
}));

function aplicarFiltros(
  cars: Car[],
  filters: CarStoreState["filters"],
  highlight: boolean
): Car[] {
  let result = [...cars];

  if (filters.category.length > 0) {
    result = result.filter((car) =>
      filters.category.includes(car.features.category)
    );
  }

  if (filters.doors.length > 0) {
    result = result.filter((car) => {
      const n = parseInt(car.features.doors);
      return filters.doors.some((d) => {
        if (d === "2 puertas") return n === 2;
        if (d === "4 puertas") return n === 4;
        if (d === "Más de 4 puertas") return n > 4;
        return false;
      });
    });
  }

  if (filters.large_suitcase.length > 0) {
    result = result.filter((car) => {
      const n = car.features.large_suitcase;
      return filters.large_suitcase.some((opt) => {
        if (opt === "1-2 maletas") return n <= 2;
        if (opt === "3-4 maletas") return n >= 3 && n <= 4;
        if (opt === "5+ maletas") return n >= 5;
        return false;
      });
    });
  }

  if (filters.sort === "mayor") {
    result.sort(
      (a, b) =>
        parseFloat(b.pricing.copAmount) - parseFloat(a.pricing.copAmount)
    );
  } else if (filters.sort === "menor") {
    result.sort(
      (a, b) =>
        parseFloat(a.pricing.copAmount) - parseFloat(b.pricing.copAmount)
    );
  }

  if (filters.priceRange) {
    result = result.filter((car) => {
      const price = parseFloat(car.pricing.copAmount);
      return price >= filters.priceRange.min && price <= filters.priceRange.max;
    });
  }

  if (highlight) {
    result.sort((a, b) => b.stars - a.stars);
  }

  return result;
}
