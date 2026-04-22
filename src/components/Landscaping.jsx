import React, { useEffect } from "react";
import PricingCard from "../reuse/PricingCard";

function Landscaping() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contentTypes = [
    {
      id: "1",
      name: "Residential",
      type: "Townhome / House",
      description: [
        "Lawn mowing",
        "Bush hedging",
        "Weed eating",
        "Curb and driveway edging for a clean look",
        "Simple tree limb removal on request",
      ],
    },
    {
      id: "2",
      name: "Commercial",
      type: "Property management companies / realty companies",
      description: [
        "Maintain business properties to keep a professional appearance",
        "Add curb appeal and value through consistent upkeep",
        "Landscaping support for realty properties and flips",
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-white">Landscaping</h1>

      <div className="flex flex-col items-center justify-center bg-gray-50 rounded-xl px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {contentTypes.map((service) => (
            <PricingCard
              key={service.id}
              title={service.name}
              description={[`Type: ${service.type}`, ...service.description]}
              pricing={[]}
              buttonLabel="Book this service"
              buttonTo="/contact-me"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Landscaping;