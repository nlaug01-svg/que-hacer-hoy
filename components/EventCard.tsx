import Link from "next/link";
import { Event } from "@/types/event";

interface Props {
  event: Event;
}

export default function EventCard({ event }: Props) {
  return (
    <div className="border rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
      {event.image_url && (
        <img
          src={event.image_url}
          alt={event.title}
          className="w-full h-48 object-cover"
        />
      )}

      <div className="p-4">
        <h2 className="text-lg font-semibold">{event.title}</h2>

        <p className="text-sm text-gray-500">
          {new Date(event.date).toLocaleDateString()}
        </p>

        <p className="text-sm mt-2 line-clamp-2">
          {event.description}
        </p>

        <p className="text-sm mt-2 font-medium">
          📍 {event.location}
        </p>

        <Link href={`/${event.id}`}>
          <button className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">
            Ver más
          </button>
        </Link>
      </div>
    </div>
  );
}