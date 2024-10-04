"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Calendar,
  MapPin,
  Users,
  Gift,
  Briefcase,
  Speaker,
  Tag,
  User,
  Clock,
  Package,
  Wrench,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

function EventDetail({ event }) {
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegister = () => {
    // TODO: Implement registration logic
    setIsRegistered(true);
  };

  return (
    <div className="max-w-7xl mx-auto bg-white rounded-lg overflow-hidden">
      <div className="relative">
        <img
          src={event.thumbnail || "/no-image.jpg"}
          alt={event.title}
          className="w-full h-64 object-cover object-center"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
          <h1 className="text-3xl font-bold text-white mb-2">{event.title}</h1>
          <div className="flex items-center text-white">
            <Calendar className="w-5 h-5 mr-2" />
            <span>
              {new Date(event.start_date).toLocaleDateString(undefined, {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
        </div>
      </div>

      {/* New section for buttons */}
      <div className="bg-gray-100 p-4 flex justify-between items-center">
        <Link href="/events">
          <Button variant="outline">Back to Events</Button>
        </Link>
        <Button
          onClick={handleRegister}
          disabled={isRegistered}
          className={isRegistered ? "bg-green-500" : ""}
        >
          {isRegistered ? "Registered" : "Register Now"}
        </Button>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <MapPin className="w-5 h-5 mr-2 text-gray-600" />
            <span className="text-gray-600">{event.location}</span>
          </div>
          <Badge variant="outline" className="text-sm">
            {isRegistered ? "Registered" : "Registration Open"}
          </Badge>
        </div>

        <p className="text-gray-700 mb-6">{event.description}</p>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center text-lg">
              <Speaker className="w-5 h-5 mr-2" /> Event Schedule
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {event.agenda_items &&
                event.agenda_items.map((item) => (
                  <li key={item.id} className="flex items-start">
                    <div className="font-semibold text-sm min-w-[100px] flex flex-col">
                      <span>
                        {new Date(item.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span className="text-xs text-gray-600">{item.time}</span>
                    </div>
                    <div>
                      <p className="font-medium">{item.title}</p>
                      {item.speaker && (
                        <p className="text-sm text-gray-600">
                          Speaker: {item.speaker}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
            </ul>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <Gift className="w-5 h-5 mr-2" /> Wishes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {event.wishes &&
                  event.wishes.map((wish) => (
                    <li
                      key={wish.id}
                      className="border-b pb-4 last:border-b-0 last:pb-0"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold">{wish.title}</h3>
                        <Badge
                          variant={
                            wish.status === "Pending" ? "secondary" : "success"
                          }
                        >
                          {wish.status}
                        </Badge>
                      </div>
                      <div className="text-sm text-gray-600 flex items-center">
                        {wish.wish_type === "Product" ? (
                          <Package className="w-4 h-4 mr-1" />
                        ) : (
                          <Wrench className="w-4 h-4 mr-1" />
                        )}
                        {wish.wish_type}:{" "}
                        {wish.product ? wish.product.name : wish.service.name}
                      </div>
                    </li>
                  ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm">
                Add Wish
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <Briefcase className="w-5 h-5 mr-2" /> Offers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {event.offers &&
                  event.offers.map((offer) => (
                    <li
                      key={offer.id}
                      className="border-b pb-4 last:border-b-0 last:pb-0"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold">{offer.title}</h3>
                        <Badge
                          variant={
                            offer.status === "Pending" ? "secondary" : "success"
                          }
                        >
                          {offer.status}
                        </Badge>
                      </div>
                      <div className="text-sm text-gray-600 flex items-center">
                        {offer.offer_type === "Product" ? (
                          <Package className="w-4 h-4 mr-1" />
                        ) : (
                          <Wrench className="w-4 h-4 mr-1" />
                        )}
                        {offer.offer_type}:{" "}
                        {offer.product
                          ? offer.product.name
                          : offer.service.name}
                      </div>
                    </li>
                  ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm">
                Add Offer
              </Button>
            </CardFooter>
          </Card>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center text-lg">
              <Users className="w-5 h-5 mr-2" /> Attendees
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-2 gap-2">
              {event.attendees &&
                event.attendees.map((attendee) => (
                  <li key={attendee.id} className="text-sm">
                    {attendee.user.username}
                  </li>
                ))}
            </ul>
          </CardContent>
        </Card>

        {event.sponsors && event.sponsors.length > 0 && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg">Sponsors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-4">
                {event.sponsors.map((sponsor) => (
                  <div key={sponsor.id} className="text-center">
                    <img
                      src={sponsor.logo || "/no-logo.jpg"}
                      alt={sponsor.name}
                      className="w-16 h-16 object-contain mx-auto"
                    />
                    <p className="mt-1 text-sm">{sponsor.name}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

export default EventDetail;
