import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { useCarStore } from "../store/carStore";

const FilterSidebar: React.FC = () => {
  const [minPrice, setMinPrice] = useState<number>(2000000);
  const [maxPrice, setMaxPrice] = useState<number>(7000000);

  const setFilter = useCarStore((state) => state.setFilter);
  const filtersState = useCarStore((state) => state.filters);

  const filters: {
    id: keyof typeof filtersState;
    title: string;
    options: string[];
  }[] = [
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
    const min = 0;
    const max = 10000000;
    const start = ((minPrice - min) / (max - min)) * 100;
    const end = ((maxPrice - min) / (max - min)) * 100;
    return {
      background: `linear-gradient(to right, #e5e7eb ${start}%, var(--color-custom-blue) ${start}%, var(--color-custom-blue) ${end}%, #e5e7eb ${end}%)`,
    };
  };

  return (
    <div className="w-[420px] h-full bg-white pt-6 pb-6 rounded-lg shadow-lg">
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
          <div className="space-y-2 w-full px-4 mt-2 pl-8">
            {filter.options.map((option) => (
              <label key={option} className="flex items-center">
                <input
                  type="checkbox"
                  checked={
                    filtersState[filter.id].includes(option) ||
                    (filter.id === "category" &&
                      filtersState.category.length === 0)
                  }
                  onChange={() => setFilter(filter.id as any, option)}
                  className="h-4 w-4 text-[var(--color-custom-blue)] rounded-full border-[0.125rem] border-slate-300"
                />
                <span className="ml-5 text-black font-font1">{option}</span>
              </label>
            ))}
          </div>
        </div>
      ))}

      <div className="flex flex-col items-center mb-4">
        <div className="flex items-center justify-between w-full cursor-pointer bg-[var(--color-custom-filters)] pr-6 pt-4 pb-4 pl-8">
          <h3 className="text-md text-[var(--color-custom-blue)] font-font3">
            Fijar un rango de precio (COP)
          </h3>
          <AiOutlineDown className="w-5 h-5" color="grey" />
        </div>

        <div className="w-full px-4 mt-2 space-y-4">
          <div className="relative w-[92%] h-6 flex items-center pl-3">
            <div
              className="absolute w-full h-1 rounded-full"
              style={getSliderTrackStyle()}
            />
            <input
              type="range"
              min={0}
              max={10000000}
              step={100000}
              value={minPrice}
              onChange={(e) =>
                setMinPrice(Math.min(Number(e.target.value), maxPrice - 100000))
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
              min={0}
              max={10000000}
              step={100000}
              value={maxPrice}
              onChange={(e) =>
                setMaxPrice(Math.max(Number(e.target.value), minPrice + 100000))
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
