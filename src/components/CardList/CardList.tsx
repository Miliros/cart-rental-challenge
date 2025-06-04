import useCarData from "../hooks/useCarData";
import carDataJSON from "../../data/carsJSON.json";
import CardCar from "../CardCar/CardCar";

const CardList = () => {
  const cars = useCarData(carDataJSON);

  const handleActionClick = (id: string) => {
    alert(`Seleccionaste el vehículo con código: ${id}`);
  };

  return (
    <div className="flex-1 p-4 w-full">
      {/* Barra de filtros */}
      <div className="flex flex-col md:flex-row items-center justify-center bg-[var(--color-light-gray)] rounded-md mb-6 space-y-6 md:space-y-0 md:space-x-8">
        <h2 className="text-sm text-[var(--color-custom-blue)] font-bold">
          Encontramos {cars.length} vehículos para tu búsqueda
        </h2>
        <div className="flex items-center mt-4 md:mt-0 space-x-10">
          <label className="flex items-center text-gray-600">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-4 text-sm text-black">
              Mostrar destacados primero
            </span>
          </label>
          <div className="flex space-x-6">
            <button className="flex items-center justify-center bg-[var(--color-custom-blue)] text-white text-[12px] rounded-md hover:bg-blue-700 transition w-[125px] h-[40px]">
              Enviar cotización
            </button>
            <button className="flex items-center justify-center bg-white border border-[var(--color-custom-gray)] text-[12px] font-bold text-[var(--color-light-gray)] rounded-md hover:bg-blue-100 transition w-[125px] h-[40px]">
              <span className="flex items-center space-x-2">
                <span>Mayor precio</span>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Tarjetas */}
      <div className="flex flex-col space-y-6 w-full">
        {cars.map((car) => (
          <CardCar key={car.code} car={car} onActionClick={handleActionClick} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
