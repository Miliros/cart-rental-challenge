import React, { useState } from "react";
import { RiShieldCheckLine } from "react-icons/ri";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import { HiCheck } from "react-icons/hi";
import CarModal from "./CarModal";

import { useCarStore } from "../../store/carStore";

import type { Car } from "../../types/Car";
import { createFeaturesList } from "../../data/createFeaturesList";
import Tooltip from "./Tooltip";

interface CardCarProps {
  car: Car;
}

const CardCar: React.FC<CardCarProps> = ({ car }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const selectedCars = useCarStore((state) => state.selectedCars);
  const selectionIndex = selectedCars.indexOf(car.code);

  const selectCar = useCarStore((state) => state.selectCar);

  const [modalData, setModalData] = useState<{
    image: string;
    logo: string;
    copPrice: string;
    usdPrice: string;
    code: string;
  } | null>(null);

  const handleSelect = () => {
    if (!selectedCars.includes(car.code)) {
      selectCar(car.code);
      setModalData({
        image: car.picture_url.featured,
        logo: car.picture_url.normal,
        copPrice: car.pricing.copAmount,
        usdPrice: car.pricing.usdAmount,
        code: car.code,
      });
    }
  };

  const handleCloseModal = () => setModalData(null);

  return (
    <div className="flex flex-row justify-between shadow-lg shadow-bg-[var(--color-custom-disabled)] rounded-xl overflow-hidden bg-white  w-[890px] h-[282px]">
      <div className="flex flex-col items-start pt-5 pl-6 relative w-[26%]">
        <div className="absolute left-0 top-0 h-full w-2 bg-[var(--color-custom-highlight)]" />
        {selectionIndex !== -1 && (
          <div className="absolute top-5 right-9 bg-[var(--color-custom-green)] text-white rounded-full w-6 h-6 flex items-center justify-center text-[10px] font-bold z-10">
            {selectionIndex + 1}°
          </div>
        )}
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
          className="w-90 h-auto mb-4 pt-6"
        />

        {car.stars > 4 && (
          <div className="flex items-center gap-2 mt-2 bg-green-100 text-[var(--color-custom-green)] p-2 rounded-md text-sm font-font2">
            <img
              src="images/icons_logos/featured-icon.svg"
              alt="Ícono destacado"
              className="w-4 h-4"
            />
            Destacado
          </div>
        )}
      </div>

      <div className="flex flex-col justify-between p-6 flex-grow border-gray-200 w-[25%]">
        <div>
          <p className="text-[12px] text-[var(--color-custom-bold)] font-font3 tracking-wider">
            GRUPO {car.vehicle_group} - {car.code}
          </p>

          <h3 className="text-lg font-font3 text-[var(--color-custom-blue)] mb-1">
            {car.features.category}
          </h3>

          <p className="text-sm text-black font-font1">{car.name_details}</p>
        </div>
        <ul className="flex flex-wrap items-center gap-2 text-sm text-gray-700 mt-4 border-b-2 pb-7 border-gray-200">
          {createFeaturesList(car)
            .filter(
              (feature) =>
                feature.label !== undefined &&
                feature.label !== null &&
                feature.label !== ""
            )
            .map((feature, index) => (
              <li
                key={index}
                className="flex items-center gap-1 rounded-md bg-gray-100 p-2 text-[var(--color-custom-background)] font-font3"
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

        {selectedCars.includes(car.code) ? (
          <p className="text-[var(--color-custom-green)] text-sm mt-4 flex items-center gap-1 font-font2">
            <HiCheck className="text-[var(--color-custom-green)]" size={18} />
            Vehículo agregado a su cotización ({selectedCars.length} de 5)
          </p>
        ) : (
          <p className="text-[var(--color-custom-blue)] text-sm mt-4 font-font3 flex items-center gap-2">
            <RiShieldCheckLine
              className="text-[var(--color-custom-blue)]"
              size={15}
            />
            Seleccionar este vehículo para cotizar
          </p>
        )}
      </div>
      <div className="flex flex-col justify-center items-center p-4 w-[280px] border-l border-gray-200 border-dashed">
        <div className="shadow-md shadow-bg-[var(--color-custom-disabled)]  rounded-xl p-3 w-full relative overflow-visible">
          <div className="relative flex items-center justify-center gap-2 mb-2">
            <p className="text-sm font-font3 mr-1">Inclusive Light</p>
            <img
              src="images/icons_logos/info-icon.svg"
              alt="Información adicional"
              className="w-3.5 h-3.5 cursor-pointer"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            />
            {showTooltip && <Tooltip inclusions={car.inclusions} />}
          </div>

          <p className="text-[11px] text-gray-500 text-center mb-2 font-font1">
            Precio por 3 días de renta
          </p>

          <div className="absolute flex items-center justify-between w-full px-1 top-1/2 transform -translate-y-1/2">
            <div className="flex items-center justify-center w-9 h-9  rounded-full bg-white shadow-md ml-[-27px]">
              <IoMdArrowRoundBack className="text-gray-300" size={20} />
            </div>

            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-white shadow-md">
              <IoMdArrowRoundForward
                className="text-[var(--color-custom-blue)]"
                size={20}
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center border-t border-gray-200 mt-3.5 w-full p-4">
            <p className=" text-[14px] text-[var(--color-custom-blue)] font-font3">
              <span className="text-xs">COP</span>{" "}
              <span className="text-lg">
                {parseFloat(car.pricing.copAmount).toLocaleString()}
              </span>
            </p>

            <p className="text-[14px] text-[var(--color-custom-GreyB)] font-font2">
              (USD {parseFloat(car.pricing.usdAmount).toLocaleString()})
            </p>
            <button
              onClick={handleSelect}
              className={`flex items-center justify-center ${
                selectedCars.includes(car.code) || selectedCars.length >= 5
                  ? "bg-[var(--color-custom-disabled)] cursor-not-allowed"
                  : "bg-[var(--color-custom-blue)] hover:bg-blue-700"
              } text-white text-[12px] rounded-md transition w-full h-[35px] mt-4 font-font3`}
              disabled={
                selectedCars.includes(car.code) || selectedCars.length >= 5
              }
            >
              {selectedCars.includes(car.code) ? "Plan Actual" : "Seleccionar"}
            </button>
          </div>
        </div>
      </div>
      {modalData && (
        <CarModal
          modalData={modalData}
          handleCloseModal={handleCloseModal}
          handleSelect={handleSelect}
        />
      )}
    </div>
  );
};

export default CardCar;
