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
    <div className="px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 w-full max-w-md sm:w-auto sm:max-w-full mx-auto mt-5 overflow-hidden">
      {/* Route Details */}
      <div
        className="flex items-center justify-center bg-[var(--color-custom-light-gray)] rounded-md
                  w-full max-w-xs mx-auto
                  sm:flex-1 sm:w-auto sm:max-w-full sm:mx-0
                  p-3 gap-4 sm:gap-[16px]"
      >
        <span className="text-sm sm:text-[14px] font-font2 text-[var(--color-custom-background)] truncate">
          {origin}
        </span>
        <IoIosArrowForward className="text-gray-500 mx-2 sm:mx-4" size={16} />
        <span className="text-sm sm:text-[14px] font-font2 text-[var(--color-custom-background)] truncate">
          {destination}
        </span>
      </div>

      {/* Date Details */}
      <div
        className="flex items-center justify-center bg-[var(--color-custom-light-gray)] rounded-md
                  w-full max-w-xs mx-auto
                  sm:flex-1 sm:w-auto sm:max-w-full sm:mx-0
                  p-3 gap-4 sm:gap-[19px]"
      >
        <span className="text-sm sm:text-[14px] font-font2 text-[var(--color-custom-background)] truncate">
          {startDate}
        </span>
        <IoIosArrowForward className="text-gray-500 mx-2 sm:mx-4" size={16} />
        <span className="text-sm sm:text-[14px] font-font2 text-[var(--color-custom-background)] truncate">
          {endDate}
        </span>
      </div>

      {/* Modify Button */}
      <button
        onClick={onModify}
        className="bg-[var(--color-custom-blue)] text-white text-sm sm:text-[14px] rounded-md hover:bg-blue-700 transition w-auto sm:w-auto sm:min-w-[100px] p-3 font-font1 cursor-pointer"
      >
        Modificar
      </button>
    </div>
  );
};

export default ReservationDetails;
