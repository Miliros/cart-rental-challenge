import React from "react";
import type { Car } from "../../types/Car";

interface CardCarProps {
  car: Car;
  onActionClick: (id: string) => void;
}

const CardCar: React.FC<CardCarProps> = ({ car, onActionClick }) => {
  // Ahora sí, orden correcto de features y con las props correctas:
  const featuresList = [
    {
      icon: "images/icons_logos/passengers-icon.svg",
      label: car.features.seats,
    },
    {
      icon: "images/icons_logos/doors-icon.svg",
      label: car.features.doors,
    },
    {
      icon: "images/icons_logos/transmission-icon.svg",
      label: car.features.transmition,
    },
    {
      icon: "images/icons_logos/carry-icon.svg",
      label: car.features.small_suitcase, // acá corregí para que sea small_suitcase (cantidad)
    },
    {
      icon: "images/icons_logos/luggage-icon.svg",
      label: car.features.large_suitcase, // nuevo ícono para large_suitcase
    },
    {
      icon: "images/icons_logos/air-conditioning-icon.svg",
      // Mostrar sí/no para booleano o ícono:
      label: car.features.air_conditioner ? "A/C" : "No A/C",
    },
  ];

  return (
    <div className="flex flex-row justify-between shadow-lg rounded-xl overflow-hidden bg-white border border-gray-200 w-[900px] h-[249px]">
      {/* Columna Izquierda */}
      <div className="flex flex-col items-start p-6 pl-8 relative">
        <div className="absolute left-0 top-0 h-full w-2 bg-[var(--color-custom-highlight)]" />

        {/* Logo */}
        <img
          src={car.picture_url.featured}
          alt={`${car.name} logo`}
          className="w-25 object-contain mb-2"
        />

        {/* Estrellas */}
        <div className="flex items-center gap-0.5">
          {[...Array(car.stars)].map((_, index) => (
            <img
              key={index}
              src="images/icons_logos/star-solid-icon.svg"
              alt="Estrella sólida"
              className="w-3 h-3"
            />
          ))}
          {[...Array(5 - car.stars)].map((_, index) => (
            <img
              key={index}
              src="images/icons_logos/star-outlined-icon.svg"
              alt="Estrella delineada"
              className="w-3 h-3"
            />
          ))}
        </div>

        {/* Imagen normal */}
        <img
          src={car.picture_url.normal}
          alt={`${car.name}`}
          className="w-48 h-auto object-contain"
        />

        {/* Destacado */}
        <div className="flex items-center gap-2 mt-2 bg-green-100 text-green-700 px-2 py-1 rounded-md text-sm font-medium">
          <img
            src="images/icons_logos/featured-icon.svg"
            alt="Ícono destacado"
            className="w-4 h-3"
          />
          Destacado
        </div>
      </div>

      {/* Columna Central */}
      <div className="flex flex-col justify-between p-6 flex-grow border-l border-gray-200">
        <div>
          {/* Grupo y Código */}
          <p className="text-gray-700 text-sm font-medium">
            GRUPO {car.vehicle_group} - {car.code}
          </p>

          {/* Categoría */}
          <h3 className="text-lg font-bold text-gray-800 mb-1">
            {car.features.category}
          </h3>

          {/* Detalles */}
          <p className="text-sm text-gray-600">{car.name_details}</p>
        </div>

        {/* Características */}
        <ul className="flex flex-wrap items-center gap-3 text-sm text-gray-700 mt-4 border-b-2 pb-7 border-gray-200">
          {featuresList
            .filter(
              (feature) =>
                feature.label !== undefined &&
                feature.label !== null &&
                feature.label !== ""
            )
            .map((feature, index) => (
              <li
                key={index}
                className="flex items-center gap-2 rounded-md bg-gray-100 p-2 font-medium text-gray-800"
              >
                <img
                  src={feature.icon}
                  alt={`Ícono de ${feature.label}`}
                  className="w-4 h-4"
                />
                {feature.label}
              </li>
            ))}
        </ul>

        {/* Nota */}
        <p className="text-green-600 text-sm mt-4">
          Vehículo agregado a su cotización (1 de 5)
        </p>
      </div>

      {/* Columna Derecha */}
      <div className="flex flex-col justify-center items-center bg-pink-100 p-6 w-[243px] border-l border-gray-200">
        <p className="text-sm font-bold mb-4">Inclusive Light</p>
        <p className="text-2xl font-bold">
          COP {parseFloat(car.pricing.copAmount).toLocaleString()}
        </p>
        <p className="text-xs text-gray-500">
          USD {parseFloat(car.pricing.usdAmount).toLocaleString()}
        </p>
        <button
          onClick={() => onActionClick(car.code)}
          className="bg-[var(--color-custom-highlight)] text-white text-sm py-3 px-6 rounded-lg hover:bg-blue-700 transition mt-4"
        >
          Seleccionar
        </button>
      </div>
    </div>
  );
};

export default CardCar;
