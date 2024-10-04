import Link from "next/link";

export default function EventCard({ event }) {
  return (
    <div className="bg-white shadow-2xl rounded-lg">
      <img
        src={event.thumbnail ? event.thumbnail : "/no-image.jpg"}
        alt={event.title}
        className="w-full h-40 object-cover rounded-t-lg mb-4 object-center"
      />
      <div className="px-6 pb-3">
        <h2 className="text-2xl font-bold mb-2">{event.title}</h2>
        <p className="text-gray-700 mb-1">{event.description}</p>
        <p className="text-gray-500 mb-2">
          <span className="font-normal">Happening At</span> {event.location}
        </p>
        <div className="text-gray-500 text-sm mb-2">
          {new Date(event.start_date).toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          to{" "}
          {new Date(event.end_date).toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
        <p className="text-gray-800 text-sm mb-3">
          {event.attendees_count} person attending
        </p>
        <Link
          href={`/events/${event.id}`}
          className="border border-primary p-2 w-full flex rounded-md justify-center border-blue-900 text-blue-900 hover:bg-blue-800 hover:text-white transition-all duration-300"
        >
          View and Register
        </Link>
      </div>
    </div>
  );
}
