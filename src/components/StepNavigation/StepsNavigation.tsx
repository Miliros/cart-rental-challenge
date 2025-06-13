export const StepsNavigation = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-6 items-center justify-center py-4 px-4">
      <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
        <div className="text-[12px] md:text-[14px] font-bold text-amber-50 flex items-center">
          Selecciona tu vehículo
        </div>
        <div className="flex items-center">
          <img
            src="/images/icons_logos/chevron-icon.svg"
            alt="Chevron Icon"
            className="w-[9px] h-[9px]"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
        <div className="text-[12px] md:text-[14px] text-[var(--color-custom-highlight)] flex items-center">
          Agrega equipamiento adicional
        </div>
        <div className="flex items-center">
          <img
            src="/images/icons_logos/chevron-icon.svg"
            alt="Chevron Icon"
            className="w-[9px] h-[9px]"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
        <div className="text-[12px] md:text-[14px] text-[var(--color-custom-highlight)] flex items-center">
          Información del conductor
        </div>
        <div className="flex items-center">
          <img
            src="/images/icons_logos/chevron-icon.svg"
            alt="Chevron Icon"
            className="w-[9px] h-[9px]"
          />
        </div>
      </div>

      <div className="flex items-center sm:gap-4 md:gap-6">
        <div className="text-[12px] md:text-[14px] text-[var(--color-custom-highlight)] flex items-center">
          Confirmación de la reserva
        </div>
      </div>
    </div>
  );
};
