import React from "react";

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
    <div className="px-8  flex items-center justify-between gap-2 w-full mt-5  ">
      {/* Airports Section */}
      <div className="flex items-center justify-center bg-[var(--color-custom-light-gray)] rounded-md flex-1 p-3 gap-[10px]">
        <span className="text-[14px] font-medium  text-[var(--color-custom-background)]">
          {origin}
        </span>
        <img
          src="/images/icons_logos/chevron-icon.svg"
          alt="Chevron Icon"
          className="w-4 h-4"
        />
        <span className="text-[13px] font-medium  text-[var(--color-custom-background)]">
          {destination}
        </span>
      </div>

      {/* Dates Section */}
      <div className="flex items-center justify-center bg-[var(--color-custom-light-gray)] rounded-md flex-1 p-3 gap-[10px]">
        <span className="text-[14px] font-medium  text-[var(--color-custom-background)]">
          {startDate}
        </span>
        <img
          src="/images/icons_logos/chevron-icon.svg"
          alt="Chevron Icon"
          className="w-4 h-4 "
        />
        <span className="text-[14px] font-medium  text-[var(--color-custom-background)]">
          {endDate}
        </span>
      </div>

      {/* Modify Button */}
      <button
        onClick={onModify}
        className="bg-[var(--color-custom-blue)] text-white text-[14px] rounded-md hover:bg-blue-700 transition min-w-[100px] p-3"
      >
        Modificar
      </button>
    </div>
  );
};

export default ReservationDetails;
