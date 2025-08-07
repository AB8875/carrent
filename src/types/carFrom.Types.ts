export type CarFormData = {
  carNumber?: string;
  brand?: string;
  year?: number;
  carModel?: string;
  carVariants?: string[];
  registrationState?: string;
  odometerReading?: string;
  rentPrice?: string;

  exteriorColorCar?: string;
  interiorColorCar?: string;

  stockId?: string;
  engine?: string;
  horsepower?: string;
  driveType?: string;
  bodyType?: string;
  seats?: number;
  transmission?: string;
  photos?: string[];
  features?: {
    comfort?: string[];
    entertainment?: string[];
    safety?: string[];
    seating?: string[];
  };
  isAvailable?: boolean;
};
