import React from "react";
import { RiDeleteBin6Line, RiArrowRightLine } from "react-icons/ri";
import { useCarStore } from "../../store/carStore";
import { useMediaQuery } from "@mui/material";

interface CarModalProps {
  modalData: {
    code: string;
    image: string;
    logo: string;
    copPrice: string;
    usdPrice: string;
  };
  handleCloseModal: () => void;
  handleSelect: () => void;
}

const CarModal: React.FC<CarModalProps> = ({ modalData, handleCloseModal }) => {
  const isDesktop = useMediaQuery("(min-width:1024px)");

  const unselectCar = useCarStore((state) => state.unselectCar);

  const handleDelete = () => {
    unselectCar(modalData.code);
    handleCloseModal();
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-xl z-50 ">
      <div className="flex flex-row items-center justify-around lg:gap-8">
        <div className="flex md:flex-row flex-col items-center md: md:gap-4 lg:gap-6 md:mb-4 lg:mb-0">
          <img
            src={modalData.logo}
            alt="Car Logo"
            className="w-10 h-9 sm:w-14 sm:h-14 object-contain"
          />
          <div>
            <p className="text-[10px] md:text-[17px] font-font3">
              Inclusive Light - H8
            </p>
            <p className="font-font2 text-[var(--color-custom-blue)] text-[9px] md:text-[12px]">
              Ver detalle de la tarifa
            </p>
          </div>
        </div>{" "}
        <div className="flex flex-row items-center md:gap-4 lg:gap-6 md:mb-4 lg:mb-0">
          <img
            src={modalData.image}
            alt="Car Image"
            className="w-20 h-auto md:w-24"
          />
          <div className="text-center lg:text-left">
            <p className="text-[11px] sm:text-[16px] text-[var(--color-custom-blue)] font-font3">
              COP {parseFloat(modalData.copPrice).toLocaleString()}
            </p>
            <p className="text-[12px] sm:text-[14px] text-gray-500 font-font2">
              USD {parseFloat(modalData.usdPrice).toLocaleString()}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 lg:gap-4">
          {isDesktop ? (
            // Botones completos para desktop
            <>
              <button
                onClick={handleCloseModal}
                className="bg-[var(--color-custom-blue)] text-white text-[10px] sm:text-[12px] rounded-md transition w-[80px] sm:w-[105px] h-[30px] sm:h-[30px] font-font3 flex items-center justify-center"
              >
                Continuar
              </button>
              <button
                onClick={handleDelete}
                className="flex items-center justify-center bg-red-600 text-white text-[10px] sm:text-[11px] rounded-md transition w-[80px] sm:w-[105px] h-[30px] sm:h-[30px] font-font3"
              >
                <RiDeleteBin6Line className="mr-1 sm:mr-2" size={12} />
                <span>Eliminar</span>
              </button>
            </>
          ) : (
            // Solo iconos para mobile
            <>
              <button
                onClick={handleCloseModal}
                className="bg-[var(--color-custom-blue)] text-white rounded-full w-8 h-8 flex items-center justify-center"
              >
                <RiArrowRightLine size={16} />
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center"
              >
                <RiDeleteBin6Line size={16} />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarModal;
