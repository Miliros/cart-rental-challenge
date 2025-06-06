import React from "react";
import { IoIosArrowForward } from "react-icons/io";

interface ReservationDetailsProps {
  origin: string;
  destination: string;
  startDate: string;
  endDate: string;
  onModify: () => void;
}

const ReservationDetails: React.FC<ReservationDetailsProps> = ({
  origin,
  destination,
  startDate,
  endDate,
  onModify,
}) => {
  return (
    <div className="px-8 flex items-center justify-between gap-2 w-full mt-5">
      <div className="flex items-center justify-center bg-[var(--color-custom-light-gray)] rounded-md flex-1 p-3 gap-[16px]">
        <span className="text-[14px] font-medium text-[var(--color-custom-background)]">
          {origin}
        </span>
        <IoIosArrowForward className="text-gray-500 mx-4" size={16} />
        <span className="text-[13px] font-medium text-[var(--color-custom-background)]">
          {destination}
        </span>
      </div>

      <div className="flex items-center justify-center bg-[var(--color-custom-light-gray)] rounded-md flex-1 p-3 gap-[19px]">
        <span className="text-[14px] font-medium text-[var(--color-custom-background)]">
          {startDate}
        </span>
        <IoIosArrowForward className="text-gray-500 mx-4" size={16} />
        <span className="text-[14px] font-medium text-[var(--color-custom-background)]">
          {endDate}
        </span>
      </div>

      <button
        onClick={onModify}
        className="bg-[var(--color-custom-blue)] text-white text-[14px] rounded-md hover:bg-blue-700 transition min-w-[100px] p-3 font-font1 cursor-pointer"
      >
        Modificar
      </button>
    </div>
  );
};

export default ReservationDetails;
