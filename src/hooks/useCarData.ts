import { useEffect } from "react";
import { useCarStore } from "../store/carStore";

const useCarData = (jsonData: any): void => {
  const setCars = useCarStore((state) => state.setCars);
  const applyFilters = useCarStore((state) => state.applyFilters);

  const companyLogos: Record<string, string> = {
    Avis: "/images/logos/avis-logo.png",
    Budget: "/images/logos/budget-logo.png",
    Payless: "/images/logos/payless-logo.png",
  };

  useEffect(() => {
    const extractedCars = [];
    let count = 0;
    const maxCars = 18;

    for (const company in jsonData.cars) {
      for (const car of jsonData.cars[company]) {
        if (count >= maxCars) break;

        const firstRateKey = Object.keys(car.rates)[0];
        const rate = car.rates[firstRateKey];

        const inclusionsMeta = rate?.inclusions_meta || {};
        const inclusions = Object.values(inclusionsMeta)
          .filter((inc: any) => inc.visible_voucher)
          .map((inc: any) => ({
            name: inc.name,
            description: inc.description,
          }));

        extractedCars.push({
          name: car.name,
          name_details: car.name_details,
          code: car.code,
          stars: car.stars,
          vehicle_group: car.vehicle_group,
          company,
          logo_url: companyLogos[company],
          features: {
            doors: car.features.doors,
            seats: car.features.seats,
            air_conditioner: car.features.air_conditioner,
            transmition: car.features.transmition
              ? car.features.transmition.charAt(0)
              : "-",
            category: car.features.category,
            large_suitcase: car.features.large_suitcase,
            small_suitcase: car.features.small_suitcase,
          },
          picture_url: car.picture_url,
          pricing: {
            usdAmount:
              rate?.pricing?.USD?.total_charge?.base?.total_amount || "0.00",
            copAmount:
              rate?.pricing?.COP?.total_charge?.base?.total_amount || "0.00",
          },
          inclusions,
        });
        count++;
      }
      if (count >= maxCars) break;
    }

    setCars(extractedCars);
    applyFilters();
  }, [jsonData, setCars, applyFilters]);
};

export default useCarData;
