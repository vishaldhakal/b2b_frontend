import EventCard from "./EventCard";

export default function EventsList({ events }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {events &&
        events.map((event) => <EventCard key={event.id} event={event} />)}
    </div>
  );
}
