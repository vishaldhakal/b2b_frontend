"use client";

import { useState, useEffect } from "react";
import { Heart, HandMetal } from "lucide-react";

let API_URL = process.env.NEXT_PUBLIC_API_URL;

const WishAndOfferPage = () => {
  const [wishes, setWishes] = useState([]);
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [wishesResponse, offersResponse] = await Promise.all([
          fetch(`${API_URL}/api/wishes`),
          fetch(`${API_URL}/api/offers`),
        ]);
        const wishesData = await wishesResponse.json();
        const offersData = await offersResponse.json();
        setWishes(wishesData.results);
        setOffers(offersData.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <header className="bg-white">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-800 text-center">
            Matchmaking
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
          <Column
            title="Wishes"
            icon={<Heart className="text-red-500" />}
            items={wishes}
            type="wish"
          />
          <Column
            title="Offers"
            icon={<HandMetal className="text-green-500" />}
            items={offers}
            type="offer"
          />
        </div>
      </main>
    </div>
  );
};

const Column = ({ title, icon, items, type }) => (
  <div className="w-full md:w-1/2">
    <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center justify-center">
      {icon}
      <span className="ml-2">{title}</span>
    </h2>
    <div className="bg-white rounded-lg border overflow-hidden">
      <div className="h-[600px] overflow-y-auto">
        {items.map((item) => (
          <WishOfferCard key={`${type}-${item.id}`} item={item} />
        ))}
      </div>
    </div>
  </div>
);

const WishOfferCard = ({ item }) => (
  <div className="p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors duration-150">
    <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
    <p className="text-sm text-gray-600 mb-2">
      Status:{" "}
      <span className={`font-semibold ${getStatusColor(item.status)}`}>
        {item.status}
      </span>
    </p>
    <p className="text-sm text-gray-600">
      {item.product
        ? `Product: ${item.product.name}`
        : `Service: ${item.service.name}`}
    </p>
  </div>
);

const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case "pending":
      return "text-yellow-600";
    case "accepted":
      return "text-green-600";
    case "rejected":
      return "text-red-600";
    default:
      return "text-gray-600";
  }
};

export default WishAndOfferPage;
