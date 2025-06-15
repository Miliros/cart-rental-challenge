import { useState } from "react";
import { Drawer, IconButton } from "@mui/material";
import { AiOutlineDown } from "react-icons/ai";
import { useMediaQuery } from "@mui/material";
import { useCarStore } from "../../store/carStore";
import filters from "./filters";
import FilterPriceSlider from "./FilterPriceSlider";

const FilterSidebar: React.FC = () => {
  const isDesktop = useMediaQuery("(min-width:1024px)");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const allCars = useCarStore((state) => state.allCars);
  // const { priceRange } = useCarStore((state) => state.filters);
  const filtersState = useCarStore((state) => state.filters);
  const setFilter = useCarStore((state) => state.setFilter);

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

  const FilterContent = (
    <div className="w-[290px] max-w-[290px] bg-white pt-6 pb-6 rounded-lg shadow-lg">
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
                    filter.id === "category"
                      ? option === "Todas las categorias"
                        ? filtersState.category.length === 0
                        : filtersState.category.includes(option)
                      : filter.id === "doors"
                      ? filtersState.doors.includes(option)
                      : filtersState.large_suitcase.includes(option)
                  }
                  onChange={() => setFilter(filter.id as any, option)}
                  className="h-4 w-4 text-[var(--color-custom-blue)] rounded-full border-[0.125rem] border-slate-300"
                />
                <span className="ml-5 font-font1">
                  {option}
                  <span className="text-gray-500 m-1">
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
          <h3 className="text-[16px] text-[var(--color-custom-blue)] whitespace-nowrap font-font3">
            Fijar un rango de precio (COP)
          </h3>
          <AiOutlineDown className="w-3 h-3 ml-3" color="grey" />
        </div>

        <div className="w-full px-4 space-y-4 p-7">
          <FilterPriceSlider />
        </div>
      </div>
    </div>
  );

  return (
    <>
      {isDesktop ? (
        <div className="">{FilterContent}</div>
      ) : (
        <>
          <IconButton
            onClick={() => setDrawerOpen(true)}
            className="fixed left-86 md:left-100 bottom-0 z-50 bg-transparent   rounded-full"
          >
            <img
              src="images/icons_logos/filter-icon.svg"
              alt="Filtrar"
              className="w-[28px] h-[28px]"
            />
          </IconButton>
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
          >
            {FilterContent}
          </Drawer>
        </>
      )}
    </>
  );
};

export default FilterSidebar;
