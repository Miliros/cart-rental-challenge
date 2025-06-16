export const StepsNavigation = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-6 items-center justify-center py-4 px-4 sm:w-full">
      {/* Paso 1 */}
      <div className="flex items-center justify-between gap-2 sm:gap-4">
        <div className="text-[11px] sm:text-[12px] md:text-[14px] font-bold text-amber-50 flex items-center">
          Selecciona tu vehículo
        </div>
        <img
          src="/images/icons_logos/chevron-icon.svg"
          alt="Chevron Icon"
          className="w-[9px] h-[9px]"
        />
      </div>

      {/* Paso 2 */}
      <div className="flex items-center justify-between gap-2 sm:gap-4">
        <div className="text-[11px] sm:text-[12px] md:text-[14px] text-[var(--color-custom-highlight)] flex items-center">
          Agrega equipamiento adicional
        </div>
        <img
          src="/images/icons_logos/chevron-icon.svg"
          alt="Chevron Icon"
          className="w-[9px] h-[9px]"
        />
      </div>

      {/* Paso 3 */}
      <div className="flex items-center justify-between gap-2 sm:gap-4">
        <div className="text-[11px] sm:text-[12px] md:text-[14px] text-[var(--color-custom-highlight)] flex items-center">
          Información del conductor
        </div>
        <img
          src="/images/icons_logos/chevron-icon.svg"
          alt="Chevron Icon"
          className="w-[9px] h-[9px]"
        />
      </div>

      {/* Paso 4 */}
      <div className="flex items-center justify-between gap-2 sm:gap-4">
        <div className="text-[11px] sm:text-[12px] md:text-[14px] text-[var(--color-custom-highlight)] flex items-center">
          Confirmación de la reserva
        </div>
      </div>
    </div>
  );
};
