import React from "react";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const districts = [
  "Taplejung",
  "Panchthar",
  "Ilam",
  "Jhapa",
  "Morang",
  "Sunsari",
  "Dhankuta",
  "Terhathum",
  "Sankhuwasabha",
  "Bhojpur",
  "Solukhumbu",
  "Okhaldhunga",
  "Khotang",
  "Udayapur",
];

const DistrictButton = ({ name }) => (
  <Button
    variant="outline"
    className="w-full justify-start shadow-none border-gray-200"
  >
    <MapPin className="mr-2 h-4 w-4 text-blue-600" />
    {name}
  </Button>
);

const DistrictSection = () => (
  <div className="py-16">
    <div>
      <h3 className="text-2xl font-black">District B2B Networking</h3>
      <p className="text-gray-600">
        Explore business opportunities in specific districts and regions.
      </p>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-5 mt-10">
        {districts.map((district) => (
          <DistrictButton key={district} name={district} />
        ))}
      </div>
    </div>
  </div>
);

export default DistrictSection;
