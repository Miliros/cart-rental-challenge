import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useCarStore } from "../../store/carStore";

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
  const unselectCar = useCarStore((state) => state.unselectCar);

  const handleDelete = () => {
    unselectCar(modalData.code);
    handleCloseModal();
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-xl z-50 ">
      <div className="flex flex-row items-center justify-around lg:gap-8">
        {/* Logo y detalles */}
        <div className="flex md:flex-row flex-col items-center md: gap-4 lg:gap-6 mb-4 lg:mb-0">
          <img
            src={modalData.logo}
            alt="Car Logo"
            className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
          />
          <div>
            <p className="text-[14px] sm:text-[17px] font-font3">
              Inclusive Light - H8
            </p>
            <p className="font-font2 text-[var(--color-custom-blue)] text-[11px] sm:text-[12px]">
              Ver detalle de la tarifa
            </p>
          </div>
        </div>

        {/* Imagen y precios */}
        <div className="flex flex-row items-center gap-4 lg:gap-6 mb-4 lg:mb-0">
          <img
            src={modalData.image}
            alt="Car Image"
            className="w-28 h-auto sm:w-32"
          />
          <div className="text-center lg:text-left">
            <p className="text-[14px] sm:text-[16px] text-[var(--color-custom-blue)] font-font3">
              COP {parseFloat(modalData.copPrice).toLocaleString()}
            </p>
            <p className="text-[12px] sm:text-[14px] text-gray-500 font-font2">
              USD {parseFloat(modalData.usdPrice).toLocaleString()}
            </p>
          </div>
        </div>

        {/* Botones */}
        <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-4">
          <button
            onClick={handleCloseModal}
            className="bg-[var(--color-custom-blue)] text-white text-[10px] sm:text-[12px] rounded-md transition w-[100px] sm:w-[125px] h-[30px] sm:h-[35px] font-font3"
          >
            Continuar
          </button>
          <button
            onClick={handleDelete}
            className="flex items-center justify-center bg-red-600 text-white text-[10px] sm:text-[11px] rounded-md transition w-[100px] sm:w-[125px] h-[30px] sm:h-[35px] font-font3"
          >
            <RiDeleteBin6Line className="mr-1 sm:mr-2" size={12} />
            <span>Eliminar</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarModal;
