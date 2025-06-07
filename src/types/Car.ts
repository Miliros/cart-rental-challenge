export interface Car {
  name: string;
  name_details: string;
  code: string;
  stars: number;
  vehicle_group: string;
  company: string;
  logo_url: string;
  features: {
    doors: string;
    seats: string;
    air_conditioner: boolean;
    transmition: string;
    category: string;
    large_suitcase: number;
    small_suitcase: number;
  };
  picture_url: {
    normal: string;
    featured: string;
  };
  pricing: {
    usdAmount: string;
    copAmount: string;
  };
  inclusions: {
    name: string;
    description: string;
  }[];
}
