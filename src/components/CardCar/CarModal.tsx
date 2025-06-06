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
    <div className="justify-center fixed bottom-0 left-0 w-full bg-white shadow-xl z-50">
      <div className="justify-around flex items-center ">
        <div className="flex items-center space-x-4 ">
          <img
            src={modalData.logo}
            alt="Car Logo"
            className="w-14 h-14 object-contain"
          />
          <div className="ml-4">
            <p className="text-[17px] font-font3">Inclusive Light - H8</p>
            <p className="font-font2 text-[var(--color-custom-blue)] text-[12px]">
              Ver detalle de la tarifa
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-8 mr-10 ml-10">
          <div>
            <img
              src={modalData.image}
              alt="Car Image"
              className="w-32 h-auto"
            />
          </div>

          <div className="space-y-1 ml-12">
            <p className="text-[16px] text-[var(--color-custom-blue)] font-font3">
              COP {parseFloat(modalData.copPrice).toLocaleString()}
            </p>
            <p className="text-[14px] text-gray-500 font-font2 justify-self-end-safe">
              USD {parseFloat(modalData.usdPrice).toLocaleString()}
            </p>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={handleCloseModal}
              className="bg-[var(--color-custom-blue)] text-white text-[12px] rounded-md transition w-[125px] h-[35px] font-font3 ml-2 cursor-pointer"
            >
              Continuar
            </button>
            <button
              onClick={handleDelete}
              className="flex items-center justify-center gap-2 bg-red-600 text-white text-[11px] rounded-md transition w-[125px] h-[35px] font-font3 cursor-pointer"
            >
              <RiDeleteBin6Line size={12} />
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarModal;
