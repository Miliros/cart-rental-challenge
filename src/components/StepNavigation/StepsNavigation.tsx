export const StepsNavigation = () => {
  return (
    <div className="w-[70%] mx-auto bg-[var(--color-custom-2)] rounded-lg flex items-center justify-between py-4">
      <div className="flex items-center gap-[40px]">
        <div className="text-[14px] font-bold text-amber-50 flex items-center">
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

      <div className="flex items-center gap-[40px]">
        <div className="text-[14px] text-[var(--color-custom-highlight)] flex items-center">
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

      <div className="flex items-center gap-[40px]">
        <div className="text-[14px] text-[var(--color-custom-highlight)] flex items-center">
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

      <div className="flex items-center gap-[40px]">
        <div className="text-[14px] text-[var(--color-custom-highlight)] flex items-center">
          Confirmación de la reserva
        </div>
      </div>
    </div>
  );
};
