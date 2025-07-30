"use client";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";
import { Car } from "@/types/car";
import CarMarker from "./CarMarker";

type Props = {
  cars: Car[];
};

const userIcon = new L.Icon({
  iconUrl: "/user-icon.png",
  iconSize: [40, 40],
});

export default function LeafletMap({ cars }: Props) {
  const [userLocation, setUserLocation] = useState<[number, number] | null>(
    null,
  );

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setUserLocation([pos.coords.latitude, pos.coords.longitude]);
    });
  }, []);

  if (!userLocation) return <p>Loading map...</p>;

  return (
    <div className="mx-auto mb-16 max-w-[1720px] px-4 sm:px-6 md:mb-24 md:px-8 lg:mb-28 lg:px-10 xl:mb-32 xl:px-12 2xl:mb-[155px]">
      <MapContainer
        center={userLocation}
        zoom={13}
        style={{ height: "600px", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <Marker position={userLocation} icon={userIcon}>
          <Popup>You are here</Popup>
        </Marker>

        {cars
          .filter((car) => car.available)
          .map((car) => (
            <CarMarker key={car.id} car={car} userLocation={userLocation} />
          ))}
      </MapContainer>
    </div>
  );
}
