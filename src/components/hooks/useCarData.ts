import { useEffect, useState } from "react";
import type { Car } from "../../types/Car";

const useCarData = (jsonData: any): Car[] => {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    const extractedCars: Car[] = [];
    let count = 0;
    const maxCars = 19;

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

        console.log(inclusions);
        extractedCars.push({
          name: car.name,
          name_details: car.name_details,
          code: car.code,
          stars: car.stars,
          vehicle_group: car.vehicle_group,
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
  }, [jsonData]);

  return cars;
};

export default useCarData;
