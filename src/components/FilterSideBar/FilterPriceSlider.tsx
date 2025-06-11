import { useMemo, useCallback } from "react";
import Slider from "@mui/material/Slider";
import { Box } from "@mui/material";
import { useCarStore } from "../../store/carStore";

const FilterPriceSlider = () => {
  const allCars = useCarStore((state) => state.allCars);
  const { priceRange } = useCarStore((state) => state.filters);
  const setPriceRange = useCarStore((state) => state.setPriceRange);

  const prices = useMemo(
    () => allCars.map((c) => parseFloat(c.pricing.copAmount)),
    [allCars]
  );
  const minLimit = useMemo(() => Math.min(...prices), [prices]);
  const maxLimit = useMemo(() => Math.max(...prices), [prices]);

  const handleChange = useCallback(
    (_: any, newValue: number | number[]) => {
      const [min, max] = newValue as number[];
      setPriceRange(min, max);
    },
    [setPriceRange]
  );

  return (
    <Box sx={{ width: "100%" }}>
      <Slider
        value={[priceRange.min, priceRange.max]}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={minLimit}
        max={maxLimit}
        step={10000}
        getAriaLabel={() => "Rango de precio"}
        sx={{
          color: "var(--color-custom-blue)",
          "& .MuiSlider-rail": {
            color: "var(--color-custom-GreyB)",
          },
          "& .MuiSlider-thumb": {
            color: "white",
            border: "3px solid var(--color-custom-blue)",
            width: "20px",
            height: "20px",
          },
        }}
      />
    </Box>
  );
};

export default FilterPriceSlider;
