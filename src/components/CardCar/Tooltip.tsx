import React from "react";
import { HiCheck } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";

interface TooltipProps {
  inclusions: { name: string }[];
}

const Tooltip: React.FC<TooltipProps> = ({ inclusions }) => {
  return (
    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 shadow-lg rounded-xl bg-white p-7 w-[300px] h-auto max-w-none z-50 overflow-y-auto">
      <p className="text-[14px] font-font3 mb-2 border-b border-gray-200 pb-3">
        Detalle de la tarifa
      </p>
      <p className="text-[13px] font-font3 mb-2">Inclusive Light (H8)</p>
      {inclusions.map((item, idx) => (
        <div
          key={idx}
          className="flex justify-between items-center text-[10px] font-font1 "
        >
          <div className="flex items-center gap-2 text-[10.5px] text-[var(--color-custom-GreyB)]">
            <HiCheck className="text-[var(--color-custom-green)]" size={10} />
            {item.name}
          </div>
          <IoIosArrowDown size={10} color="grey" />
        </div>
      ))}
    </div>
  );
};

export default Tooltip;
