"use client";

import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import { SearchIcon } from "lucide-react";
// import Image from "next/image";
const customIcon = L.divIcon({
  className: "",
  html: `<img src="/assets/png/map-marker.png" style="width: 60px; height: 60px;" alt="marker" />`,
  iconSize: [60, 60],
  iconAnchor: [60, 60],
});

// Map view updater on position change
function ChangeMapView({ coords }: { coords: [number, number] }) {
  const map = useMap();
  useEffect(() => {
    map.setView(coords, map.getZoom());
  }, [coords, map]);
  return null;
}

export default function Map({ className = "" }: { className?: string }) {
  const [position, setPosition] = useState<[number, number]>([28.6139, 77.209]); // New Delhi
  const [search, setSearch] = useState("");

  const handleSearch = async () => {
    if (!search) return;
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${search}`,
        {
          headers: {
            "User-Agent": "NextLeafletApp",
          },
        }
      );
      const data = await res.json();
      if (data && data[0]) {
        const lat = parseFloat(data[0].lat);
        const lon = parseFloat(data[0].lon);
        setPosition([lat, lon]);
      } else {
        alert("Location not found!");
      }
    } catch (error) {
      console.error("Search error:", error);
    }
  };

  return (
    <div className={`relative h-[60vh] w-full ${className}`}>
      <div className="absolute top-4 left-[120px] z-[10] w-full max-w-[200px] -translate-x-1/2 min-[380px]:left-[150px] min-[420px]:left-[180px]">
        <div className="flex w-full max-w-[200px] rounded-full bg-white shadow-lg">
          <input
            type="text"
            className="rounded-l-full bg-white py-2 pr-2 pl-3 outline-0"
            placeholder="Search Location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <button
            className="cursor-pointer rounded-r-full bg-white px-2 py-2"
            onClick={handleSearch}
          >
            <SearchIcon />
          </button>
        </div>
      </div>

      {/* Map */}
      <MapContainer center={position} zoom={13} className="z-0 h-full w-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
        />
        <Marker position={position} icon={customIcon} />
        <ChangeMapView coords={position} />
      </MapContainer>
    </div>
  );
}
