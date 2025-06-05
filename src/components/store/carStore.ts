import { create } from "zustand";
import type { Car } from "../../types/Car";

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
}

export const useCarStore = create<CarStoreState>((set) => ({
  allCars: [],
  filteredCars: [],
  filters: {
    category: [],
    doors: [],
    large_suitcase: [],
    sort: "none",
    priceRange: { min: 650000, max: 1510000 }, // nuevo campo
  },

  setCars: (cars) =>
    set((state) => {
      const newState = { ...state, allCars: cars };
      return { ...newState, filteredCars: aplicarFiltros(cars, state.filters) };
    }),

  setSort: (sort) => {
    set((state) => {
      const newFilters = { ...state.filters, sort };
      return {
        filters: newFilters,
        filteredCars: aplicarFiltros(state.allCars, newFilters),
      };
    });
  },
  setFilter: (type, value) =>
    set((state) => {
      let updated: string[];

      if (type === "category") {
        if (value === "Todas las categorias") {
          updated = [];
        } else {
          const currentValues = state.filters.category;
          if (currentValues.includes(value)) {
            updated = currentValues.filter((v) => v !== value);
          } else {
            updated = [
              ...currentValues.filter((v) => v !== "Todas las categorias"),
              value,
            ];
          }
        }
      } else {
        const currentValues = state.filters[type];
        updated = currentValues.includes(value)
          ? currentValues.filter((v) => v !== value)
          : [...currentValues, value];
      }

      const newFilters = { ...state.filters, [type]: updated };
      return {
        filters: newFilters,
        filteredCars: aplicarFiltros(state.allCars, newFilters),
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
        filteredCars: aplicarFiltros(state.allCars, newFilters),
      };
    }),
  applyFilters: () =>
    set((state) => {
      const filtered = aplicarFiltros(state.allCars, state.filters);
      return { filteredCars: filtered };
    }),
}));

function aplicarFiltros(cars: Car[], filters: CarStoreState["filters"]): Car[] {
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
  return result;
}
