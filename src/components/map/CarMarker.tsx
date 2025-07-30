import { Marker, Popup } from "react-leaflet";
import L from "leaflet";

import CarPopup from "./CarPopup";
import { Car } from "@/types/car";

type Props = {
  car: Car;
  userLocation: [number, number];
};

function getDistanceKM(
  [lat1, lon1]: [number, number],
  [lat2, lon2]: [number, number]
): number {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;

  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export default function CarMarker({ car, userLocation }: Props) {
  const icon = new L.Icon({
    iconUrl: car.logoUrl,
    iconSize: [40, 40],
  });

  const distance = getDistanceKM(userLocation, [car.lat, car.lng]);

  return (
    <Marker position={[car.lat, car.lng]} icon={icon}>
      <Popup>
        <CarPopup car={car} distance={distance} />
      </Popup>
    </Marker>
  );
}
