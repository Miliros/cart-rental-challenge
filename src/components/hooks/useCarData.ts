import { useEffect, useState } from "react";
import type { Car } from "../../types/Car";

const useCarData = (jsonData: any): Car[] => {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    const extractedCars: Car[] = [];
    for (const company in jsonData.cars) {
      extractedCars.push(
        ...jsonData.cars[company].map((car: any) => ({
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
              car.rates?.USD?.total_charge?.base?.total_amount || "0.00",
            copAmount:
              car.rates?.COP?.total_charge?.base?.total_amount || "0.00",
          },
        }))
      );
    }
    setCars(extractedCars);
  }, [jsonData]);
  return cars;
};

export default useCarData;
