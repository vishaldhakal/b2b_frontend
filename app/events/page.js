import EventsList from "@/components/EventsList";

async function getEvents() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/events`);
  const events = await res.json();
  return events;
}

export default async function EventsPage() {
  let events = await getEvents();
  return (
    <main className="mt-20">
      <EventsList events={events} />
    </main>
  );
}
