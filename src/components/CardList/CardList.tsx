import useCarData from "../hooks/useCarData";
import { useCarStore } from "../../store/carStore";
import CardCar from "../CardCar/CardCar";
import { IoIosArrowDown } from "react-icons/io";
import carDataJSON from "../../data/carsJSON.json";

const CardList = () => {
  useCarData(carDataJSON);

  const cars = useCarStore((state) => state.filteredCars);
  const setSort = useCarStore((state) => state.setSort);
  const setHighlightedCars = useCarStore((state) => state.setHighlightedCars);
  const applyFilters = useCarStore((state) => state.applyFilters);

  const handleShowHighlighted = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setHighlightedCars();
    } else {
      applyFilters();
    }
  };

  return (
    <div className="flex-1 p-4 w-full">
      <div className="flex flex-col md:flex-row items-center justify-center bg-[var(--color-light-gray)] rounded-md mb-6 space-y-6 md:space-y-0 md:space-x-8">
        <h2 className="text-sm text-[var(--color-custom-blue)] font-font3">
          Encontramos {cars.length} vehículos para tu búsqueda
        </h2>
        <div className="flex items-center mt-4 md:mt-0 space-x-10">
          <label className="flex items-center text-gray-600">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-600"
              onChange={handleShowHighlighted}
            />
            <span className="ml-4 text-sm text-black font-font1">
              Mostrar destacados primero
            </span>
          </label>
          <div className="flex space-x-6">
            <button className="flex items-center justify-center bg-[var(--color-custom-blue)] text-white text-[12px] rounded-md hover:bg-blue-700 transition w-[125px] h-[35px] font-font3">
              Enviar cotización
            </button>
            <div className="relative">
              <select
                onChange={(e) => setSort(e.target.value as "mayor" | "menor")}
                className="w-[125px] h-[35px] text-[10px] font-bold text-[var(--color-light-gray)] bg-white border border-[var(--color-custom-gray)] rounded-md hover:bg-blue-100 transition appearance-none text-center pr-6 font-font3"
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
      </div>

      <div className="flex flex-col space-y-6 w-full">
        {cars.length === 0 ? (
          <div className="flex justify-center items-center w-full h-full">
            <div className="bg-white rounded-md p-6 text-center shadow-md w-[890px] h-auto">
              <p className="text-[var(--color-custom-blue)] font-font3 text-lg">
                No hay búsquedas disponibles
              </p>
            </div>
          </div>
        ) : (
          cars.map((car) => (
            <CardCar
              key={car.code}
              car={car}
              // onActionClick={handleActionClick}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default CardList;
