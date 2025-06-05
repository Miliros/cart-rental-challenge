import React from "react";
import { RiShieldCheckLine } from "react-icons/ri"; // Icono de react-icons/ri
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io"; // Iconos de react-icons/io
import { HiCheck } from "react-icons/hi"; // Icono de react-icons/hi

import type { Car } from "../../types/Car";

interface CardCarProps {
  car: Car;
  onActionClick: (id: string) => void;
}

const CardCar: React.FC<CardCarProps> = ({ car, onActionClick }) => {
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
      label: car.features.small_suitcase,
    },
    {
      icon: "images/icons_logos/luggage-icon.svg",
      label: car.features.large_suitcase,
    },
    {
      icon: "images/icons_logos/air-conditioning-icon.svg",
      label: car.features.air_conditioner,
    },
  ];

  return (
    <div className="flex flex-row justify-between shadow-lg rounded-xl overflow-hidden bg-white border border-gray-200 w-[890px] h-[249px]">
      {/* Columna Izquierda */}
      <div className="flex flex-col items-start p-6 pl-8 relative w-[25%]">
        <div className="absolute left-0 top-0 h-full w-2 bg-[var(--color-custom-highlight)]" />

        <img
          src={car.picture_url.normal}
          alt={`${car.name} logo`}
          className="w-16 object-contain mb-2"
        />

        <div className="flex items-center gap-1">
          {[...Array(car.stars)].map((_, index) => (
            <img
              key={index}
              src="images/icons_logos/star-solid-icon.svg"
              alt="Estrella sólida"
              className="w-2 h-2"
            />
          ))}
          {[...Array(5 - car.stars)].map((_, index) => (
            <img
              key={index}
              src="images/icons_logos/star-outlined-icon.svg"
              alt="Estrella delineada"
              className="w-2 h-2"
            />
          ))}
        </div>

        <img
          src={car.picture_url.featured}
          alt={`${car.name}`}
          className="w-60 h-auto object-contain mb-4"
        />

        {car.stars > 4 && (
          <div className="flex items-center gap-2 mt-2 bg-green-100 text-green-600 p-2 rounded-md text-sm font-medium">
            <img
              src="images/icons_logos/featured-icon.svg"
              alt="Ícono destacado"
              className="w-4 h-4"
            />
            Destacado
          </div>
        )}
      </div>

      {/* Columna Central */}
      <div className="flex flex-col justify-between p-6 flex-grow border-gray-200 w-[25%]">
        <div>
          <p className="text-[12px] text-[var(--color-custom-bold)] font-bold">
            GRUPO {car.vehicle_group} - {car.code}
          </p>

          <h3 className="text-lg font-bold text-[var(--color-custom-blue)] mb-1">
            {car.features.category}
          </h3>

          <p className="text-sm text-gray-600">{car.name_details}</p>
        </div>

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
                className="flex items-center gap-1 rounded-md bg-gray-100 p-2 text-[var(--color-custom-background)] font-bold"
              >
                <img
                  src={feature.icon}
                  alt={`Ícono de ${feature.label}`}
                  className="w-4 h-4"
                />
                {feature.icon === "images/icons_logos/air-conditioning-icon.svg"
                  ? feature.label
                    ? "SI"
                    : "No"
                  : feature.label}
              </li>
            ))}
        </ul>

        {/* Nota con ícono */}
        <p className="text-green-600 text-sm mt-4 flex items-center gap-2">
          <HiCheck className="text-green-600" size={18} />
          Vehículo agregado a su cotización (1 de 5)
        </p>

        {/* Selección con ícono */}
        {/* <p className="text-[var(--color-custom-blue)] text-sm  font-bold flex items-center gap-2">
          <RiShieldCheckLine className="text-blue-500" size={18} />
          Seleccionar este vehículo para cotizar
        </p> */}
      </div>
      {/* Columna Derecha */}
      <div className="flex flex-col justify-center items-center p-4 w-[280px] border-l border-gray-200 border-dashed">
        {/* Contenedor tipo tarjeta */}
        <div className="shadow-lg rounded-xl b p-4 w-full max-h-[260px] relative">
          {/* Inclusive Light Section */}
          <div className="flex items-center justify-center gap-2 mb-2">
            <p className="text-sm font-bold">Inclusive Light</p>
            <img
              src="images/icons_logos/info-icon.svg"
              alt="Información adicional"
              className="w-3 h-3"
            />
          </div>

          {/* Precio por tres días de renta */}
          <p className="text-[11px] text-gray-500 text-center mb-2">
            Precio por 3 días de renta
          </p>

          {/* Flechas a los lados */}
          <div className="absolute flex items-center justify-between w-full px-1 top-1/2 transform -translate-y-1/2">
            {/* Flecha izquierda */}
            <div className="flex items-center justify-center w-9 h-9  rounded-full bg-white shadow-md ml-[-27px]">
              <IoMdArrowRoundBack className="text-gray-500" size={20} />
            </div>

            {/* Flecha derecha */}
            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-white shadow-md">
              <IoMdArrowRoundForward
                className="text-[var(--color-custom-blue)]"
                size={20}
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center border-t border-gray-200 mt-3.5 w-full p-4">
            <p className="text-[var(--color-custom-blue)] font-bold">
              COP {parseFloat(car.pricing.copAmount).toLocaleString()}
            </p>
            <p className="text-xs text-gray-500 font-bold">
              (USD {parseFloat(car.pricing.usdAmount).toLocaleString()})
            </p>
            <button
              onClick={() => onActionClick(car.code)}
              className="flex items-center justify-center bg-[var(--color-custom-blue)] text-white text-[12px] rounded-md hover:bg-blue-700 transition w-full h-[35px] mt-4"
            >
              Seleccionar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCar;
