import { Car } from "@/types/car";
import Image from "next/image";

type Props = {
  car: Car;
  distance: number;
};

export default function CarPopup({ car, distance }: Props) {
  return (
    <div className="w-48 space-y-2 text-sm">
      <Image
        src={car.imageUrl}
        alt={car.name}
        width={40}
        height={40}
        className="h-24 w-full rounded-lg object-cover"
      />
      <div>
        <p className="font-semibold">{car.name}</p>
        <p className="text-gray-500">{distance.toFixed(2)} km away</p>
      </div>
      <button className="w-full rounded bg-blue-600 px-2 py-1 text-sm text-white hover:bg-blue-700">
        Rent This Car
      </button>
    </div>
  );
}
