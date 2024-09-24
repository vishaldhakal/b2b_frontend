import HeroSection from "@/components/HeroSection";
import EventsList from "@/components/EventsList";
import FeatureSection from "@/components/FeatureSection";
import DistrictSection from "@/components/District";

async function getEvents() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/events`);
  const events = await res.json();
  return events;
}

export default async function Home() {
  let events = await getEvents();

  return (
    <main>
      <HeroSection />
      <EventsList events={events} />
      <FeatureSection />
      <DistrictSection />
    </main>
  );
}
