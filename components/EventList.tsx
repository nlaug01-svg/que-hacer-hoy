import { Event } from "@/types/event";
import EventCard from "./EventCard";

interface Props {
  events: Event[];
}

export default function EventList({ events }: Props) {
  if (!events || events.length === 0) {
    return <p className="text-center mt-10">No hay eventos disponibles</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}