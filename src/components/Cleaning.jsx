import React, { useEffect } from "react";
import Carousel from "../reuse/Carousel";
import PricingCard from "../reuse/PricingCard";

function Cleaning() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contentTypes = [
    {
      id: "1",
      name: "Residential",
      type: "Apartment / Townhome / House",
      description: [
        "Let us take care of your home with love, respect, and care.",
        "We use proper products and procedures for all surface types.",
      ],
    },
    {
      id: "2",
      name: "Commercial",
      type: "Business buildings / leased offices / realty companies",
      description: [
        "Need cleaning for employees and clients? We offer an easy solution.",
        "We can clean daily or follow a custom schedule that works for you.",
        "Our goal is a safe, clean, and professional environment so you can focus on your business.",
      ],
    },
    {
      id: "3",
      name: "Construction",
      type: "Construction company support",
      description: [
        "We partner with construction companies to keep job sites clean and safe.",
        "This helps support faster, smoother project delivery.",
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-white">Cleaning</h1>

      <div className="flex flex-col items-center justify-center bg-gray-50 rounded-xl px-4 py-8">
        <div className="w-full max-w-md my-8">
          <Carousel
            images={[
              "/images/clean1.png",
              "/images/clean2.png",
              "/images/clean3.png",
              "/images/clean4.png",
              "/images/clean5.png",
              "/images/clean6.png",
              "/images/clean7.png",
              "/images/clean8.png",
              "/images/clean9.png",
            ]}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
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

export default Cleaning;