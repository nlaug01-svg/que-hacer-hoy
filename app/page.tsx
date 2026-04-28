export const dynamic = 'force-dynamic'
import { getEvents } from "@/lib/events";
import EventList from "@/components/EventList";
import Navbar from "@/components/Navbar";

export default async function HomePage() {
  const events = await getEvents();

  return (
    <main className="max-w-6xl mx-auto px-4">
      <Navbar />

      <h1 className="text-2xl font-bold mt-6">
        Qué hacer hoy
      </h1>

      <EventList events={events} />
    </main>
  );
}