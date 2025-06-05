import type { Car } from "../types/Car";

export const createFeaturesList = (car: Car) => [
  {
    icon: "images/icons_logos/passengers-icon.svg",
    label: car.features.seats,
  },
  {
    icon: "images/icons_logos/doors-icon.svg",
    label: car.features.doors,
  },
  {
    icon: "images/icons_logos/transmission-icon.svg",
    label: car.features.transmition,
  },
  {
    icon: "images/icons_logos/carry-icon.svg",
    label: car.features.small_suitcase,
  },
  {
    icon: "images/icons_logos/luggage-icon.svg",
    label: car.features.large_suitcase,
  },
  {
    icon: "images/icons_logos/air-conditioning-icon.svg",
    label: car.features.air_conditioner,
  },
];
