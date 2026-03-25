import { BedDouble, Coffee, MapPin, Users, Wifi } from "lucide-react";
import Button from "./Button";

const amenityIcons = {
  wifi: Wifi,
  coffee: Coffee,
  bed: BedDouble,
  mapPin: MapPin,
};

export default function RoomCard({ room }) {
  return (
    <article className="group panel overflow-hidden">
      <div className="relative h-64 overflow-hidden">
        <img
          src={room.image}
          alt={room.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute right-4 top-4 rounded-full bg-deepblue px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-platinum">
          ${room.pricePerNight}/night
        </div>
      </div>
      <div className="space-y-5 p-6">
        <div>
          <h3 className="text-2xl text-deepblue">{room.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-700">{room.description}</p>
        </div>

        <div className="flex flex-wrap gap-3 text-xs font-medium text-slate-700">
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5">
            <Users size={14} /> {room.maxGuests} Guests
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5">
            <MapPin size={14} /> {room.sqft} sq ft
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {room.amenities.map((amenity) => {
            const Icon = amenityIcons[amenity.key] || MapPin;
            return (
              <div
                key={`${room.id}-${amenity.key}`}
                className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-xs font-medium text-slate-700 ring-1 ring-slate-200"
              >
                <Icon size={14} className="text-deepblue" />
                <span>{amenity.label}</span>
              </div>
            );
          })}
        </div>

        <Button className="w-full">Reserve Suite</Button>
      </div>
    </article>
  );
}
