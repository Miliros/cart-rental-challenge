import { useState, useEffect } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { useCarStore } from "../../store/carStore";

const FilterSidebar: React.FC = () => {
  const allCars = useCarStore((state) => state.allCars);
  const setPriceRange = useCarStore((state) => state.setPriceRange);
  const filtersState = useCarStore((state) => state.filters);
  const setFilter = useCarStore((state) => state.setFilter);

  const prices = allCars.map((car) => parseFloat(car.pricing.copAmount));
  const minSliderLimit = Math.floor(Math.min(...prices));
  const maxSliderLimit = Math.ceil(Math.max(...prices));

  const [minPrice, setMinPrice] = useState<number>(minSliderLimit);
  const [maxPrice, setMaxPrice] = useState<number>(maxSliderLimit);

  useEffect(() => {
    setMinPrice(minSliderLimit);
    setMaxPrice(maxSliderLimit);
    setPriceRange(minSliderLimit, maxSliderLimit);
  }, [minSliderLimit, maxSliderLimit]);

  useEffect(() => {
    setPriceRange(minPrice, maxPrice);
  }, [minPrice, maxPrice]);

  const getOptionCount = (filterId: string, option: string) => {
    if (filterId === "category") {
      if (option === "Todas las categorias") return allCars.length;
      return allCars.filter((car) => car.features.category === option).length;
    }
    if (filterId === "doors") {
      if (option === "2 puertas")
        return allCars.filter((car) => parseInt(car.features.doors) === 2)
          .length;
      if (option === "4 puertas")
        return allCars.filter((car) => parseInt(car.features.doors) === 4)
          .length;
    }
    if (filterId === "large_suitcase") {
      if (option === "1-2 maletas")
        return allCars.filter((car) => car.features.large_suitcase <= 2).length;
      if (option === "3-4 maletas")
        return allCars.filter(
          (car) =>
            car.features.large_suitcase >= 3 && car.features.large_suitcase <= 4
        ).length;
    }
    return 0;
  };

  const filters = [
    {
      id: "category",
      title: "Categoría del auto",
      options: [
        "Todas las categorias",
        "Económico",
        "Compacto",
        "Intermedio",
        "Estándar",
        "SUV",
        "Van",
        "Premium",
        "Lujo",
        "Convertible",
        "Eléctrico",
        "Híbrido",
      ],
    },
    {
      id: "large_suitcase",
      title: "Capacidad de maletas",
      options: ["1-2 maletas", "3-4 maletas"],
    },
    {
      id: "doors",
      title: "Cantidad de puertas",
      options: ["2 puertas", "4 puertas"],
    },
  ];

  const getSliderTrackStyle = () => {
    const min = minSliderLimit;
    const max = maxSliderLimit;
    const start = ((minPrice - min) / (max - min)) * 100;
    const end = ((maxPrice - min) / (max - min)) * 100;
    return {
      background: `linear-gradient(to right, #e5e7eb ${start}%, var(--color-custom-blue) ${start}%, var(--color-custom-blue) ${end}%, #e5e7eb ${end}%)`,
    };
  };

  return (
    <div className=" bg-white pt-6 pb-6 rounded-lg shadow-lg ">
      <div className="flex items-center mb-4 pl-8">
        <img
          src="images/icons_logos/filter-icon.svg"
          alt="Filtrar"
          className="w-[18px] h-[18px] mr-4"
        />
        <h2 className="text-[16px] text-[var(--color-custom-blue)] font-font3">
          Filtrar resultados
        </h2>
      </div>

      {filters.map((filter) => (
        <div key={filter.id} className="flex flex-col items-center mb-4">
          <div className="flex items-center justify-between w-full cursor-pointer bg-[var(--color-custom-filters)] pt-4 pb-4 pr-6">
            <h3 className="text-[16px] text-[var(--color-custom-blue)] font-font3 pl-8">
              {filter.title}
            </h3>
            <AiOutlineDown size={12} color="grey" />
          </div>
          <div className="space-y-2 w-full px-7 mt-6 mb-6">
            {filter.options.map((option) => (
              <label key={option} className="flex items-center">
                <input
                  type="checkbox"
                  checked={
                    (filter.id === "category" &&
                      (filtersState.category.includes(option) ||
                        filtersState.category.length === 0)) ||
                    (filter.id === "doors" &&
                      filtersState.doors.includes(option)) ||
                    (filter.id === "large_suitcase" &&
                      filtersState.large_suitcase.includes(option))
                  }
                  onChange={() => setFilter(filter.id as any, option)}
                  className="h-4 w-4 p-1 text-[var(--color-custom-blue)] roun"
                />
                <span className="ml-5 font-font1">
                  {option}
                  <span className="text-gray-500">
                    ({getOptionCount(filter.id, option)})
                  </span>
                </span>
              </label>
            ))}
          </div>
        </div>
      ))}

      <div className="flex flex-col items-center mb-4">
        <div className="flex items-center justify-between w-full cursor-pointer bg-[var(--color-custom-filters)] pr-6 pt-4 pb-4 pl-8">
          <h3 className="text-[15px] text-[var(--color-custom-blue)] font-font3">
            Fijar un rango de precio (COP)
          </h3>
          <AiOutlineDown className="w-3 h-3" color="grey" />
        </div>

        <div className="w-full px-4 space-y-4 p-7">
          <div className="relative w-[92%] h-6 flex items-center pl-3">
            <div
              className="absolute w-full h-1 rounded-full"
              style={getSliderTrackStyle()}
            />
            <input
              type="range"
              min={minSliderLimit}
              max={maxSliderLimit}
              step={10000}
              value={minPrice}
              onChange={(e) =>
                setMinPrice(Math.min(Number(e.target.value), maxPrice - 10000))
              }
              className="absolute w-full appearance-none bg-transparent
                [&::-webkit-slider-thumb]:appearance-none 
                [&::-webkit-slider-thumb]:h-5 
                [&::-webkit-slider-thumb]:w-5 
                [&::-webkit-slider-thumb]:bg-white 
                [&::-webkit-slider-thumb]:border-5
                [&::-webkit-slider-thumb]:border-[var(--color-custom-blue)] 
                [&::-webkit-slider-thumb]:rounded-full 
                [&::-webkit-slider-thumb]:cursor-pointer 
                pointer-events-auto"
            />
            <input
              type="range"
              min={minSliderLimit}
              max={maxSliderLimit}
              step={10000}
              value={maxPrice}
              onChange={(e) =>
                setMaxPrice(Math.max(Number(e.target.value), minPrice + 10000))
              }
              className="absolute w-full appearance-none bg-transparent
                [&::-webkit-slider-thumb]:appearance-none
                [&::-webkit-slider-thumb]:h-5
                [&::-webkit-slider-thumb]:w-5
                [&::-webkit-slider-thumb]:bg-white
                [&::-webkit-slider-thumb]:border-5
                [&::-webkit-slider-thumb]:border-[var(--color-custom-blue)]
                [&::-webkit-slider-thumb]:rounded-full
                [&::-webkit-slider-thumb]:cursor-pointer
                pointer-events-auto"
            />
          </div>

          <div className="flex flex-col gap-3 pl-2">
            <div className="flex rounded-lg border border-[var(--color-custom-gray)] overflow-hidden">
              <div className="bg-gray-200 flex items-center px-3 py-2">
                <span className="text-[var(--color-custom-bold)] font-font3 text-[12px]">
                  COP
                </span>
              </div>
              <div className="bg-white flex items-center justify-between px-3 py-2 w-full">
                <span className="text-[var(--color-custom-bold)] font-font2 mr-2">
                  desde
                </span>
                <input
                  type="text"
                  readOnly
                  value={minPrice.toLocaleString("es-CO", {
                    style: "decimal",
                    minimumFractionDigits: 2,
                  })}
                  className="bg-transparent focus:outline-none w-full text-right font-font3 text-[var(--color-custom-blue)]"
                />
              </div>
            </div>

            <div className="flex rounded-lg border border-[var(--color-custom-gray)] overflow-hidden">
              <div className="bg-gray-200 flex items-center px-3 py-2">
                <span className="text-[var(--color-custom-bold)] font-font3 text-[12px]">
                  COP
                </span>
              </div>
              <div className="bg-white flex items-center justify-between px-3 py-2 w-full">
                <span className="text-[var(--color-custom-bold)] font-font2 mr-2">
                  hasta
                </span>
                <input
                  type="text"
                  readOnly
                  value={maxPrice.toLocaleString("es-CO", {
                    style: "decimal",
                    minimumFractionDigits: 2,
                  })}
                  className="bg-transparent focus:outline-none w-full text-right font-font3 text-[var(--color-custom-blue)]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
