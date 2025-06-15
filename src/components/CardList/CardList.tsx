import useCarData from "../../hooks/useCarData";
import { useCarStore } from "../../store/carStore";
import CardCar from "../CardCar/CardCar";
import { IoIosArrowDown } from "react-icons/io";
import carDataJSON from "../../data/carsJSON.json";

const CardList = () => {
  useCarData(carDataJSON);

  const cars = useCarStore((state) => state.filteredCars);
  const setSort = useCarStore((state) => state.setSort);
  const highlighted = useCarStore((state) => state.highlighted);
  const toggleHighlightedCars = useCarStore(
    (state) => state.toggleHighlightedCars
  );

  return (
    <div className="flex-1 p-4 w-full h-full">
      <div className="md:max-w-[890px] md:w-[890px] ">
        <div className="flex flex-col md:flex-row items-center justify-start bg-[var(--color-light-red)] rounded-md mb-6 space-y-6 md:space-y-0 md:space-x-8 w-full">
          <h2 className="order-3 md:order-1 flex text-sm text-[var(--color-custom-blue)] font-font3 justify-start md:text-left mb-0 md:pl-2">
            Encontramos {cars.length} vehículos para tu búsqueda
          </h2>

          <div className="order-1 md:order-2 flex items-center justify-center text-gray-600 w-full md:w-auto">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={highlighted}
                onChange={toggleHighlightedCars}
                className="form-checkbox rounded-lg h-5 w-5 text-blue-600"
              />
              <span className="appearance-none rounded-xl md:mr-8 md:ml-2 ml-2 text-sm text-black font-font1">
                Mostrar destacados primero
              </span>
            </label>
          </div>

          <div className="order-2 md:order-3 flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 w-full md:w-auto">
            <button className="flex items-center justify-center bg-[var(--color-custom-blue)] text-white text-[12px] rounded-md mb-3 md:mb-0 hover:bg-blue-700 transition w-full md:w-[125px] h-[35px] font-font3">
              Enviar cotización
            </button>
            <div className="flex items-center justify-center relative w-full md:w-[125px] mb-2 md:mb-0">
              <select
                onChange={(e) => setSort(e.target.value as "mayor" | "menor")}
                className="w-full h-[35px] text-[12px] font-bold text-[var(--color-light-gray)] bg-white border border-[var(--color-custom-gray)] rounded-md hover:bg-blue-100 transition appearance-none text-center justify-center pr-6 font-font3"
              >
                <option value="mayor">Mayor precio</option>
                <option value="menor">Menor precio</option>
              </select>
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <IoIosArrowDown size={10} color="grey" />
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-6 md:w-[895px] ">
          {cars.length === 0 ? (
            <div className="flex justify-center items-center md:w-[895px] md:h-[182px]">
              <div className="bg-white rounded-md p-6 text-center shadow-md ">
                <p className="text-[var(--color-custom-blue)] font-font3 text-lg">
                  No hay búsquedas disponibles
                </p>
              </div>
            </div>
          ) : (
            cars.map((car, index) => (
              <CardCar key={`${car.code}-${index}`} car={car} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CardList;
