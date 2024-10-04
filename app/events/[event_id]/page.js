import EventDetail from "@/components/EventDetail";

async function getEvent(event_id) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/events/${event_id}`
  );
  const event = await res.json();
  return event;
}

export default async function EventPage({ params }) {
  let event = await getEvent(params.event_id);

  return (
    <main className="mt-20">
      <EventDetail event={event} />
    </main>
  );
}
