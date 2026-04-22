import React, { useEffect } from "react";
import Carousel from "../reuse/Carousel";
import PricingCard from "../reuse/PricingCard";

function AutoDetailing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contentTypes = [
    {
      id: "1",
      name: "Exterior Only",
      description: [
        "Full deep clean of exterior",
        "Tire cleaning and tire shine",
        "Wheel rim cleaning inside and outside",
        "Fender cleaning",
        "Condition outside black liner",
        "Clean gas tank hinge and outside glass",
        "Deep clean of the engine bay",
      ],
      pricing: [
        { label: "Sedan", value: "60" },
        { label: "SUV", value: "80" },
        { label: "Truck", value: "100" },
      ],
    },
    {
      id: "2",
      name: "Basic Package",
      description: [
        "Exterior and interior basic clean",
        "Tire cleaning and tire shine",
        "Wheel rim cleaning inside and outside",
        "Fender cleaning",
        "Condition outside black liner",
        "Vacuum and wipe down interior",
        "Clean floor mats, inside glass, and door hinges",
        "Deep clean of the engine bay",
      ],
      pricing: [
        { label: "Sedan", value: "130" },
        { label: "SUV", value: "150" },
        { label: "Truck", value: "180-200" },
      ],
    },
    {
      id: "3",
      name: "Premium Package",
      description: [
        "Exterior and interior premium clean",
        "Tire cleaning and tire shine",
        "Wheel rim cleaning inside and outside",
        "Fender cleaning",
        "Condition outside black liner",
        "Vacuum and wipe down interior",
        "Clean floor mats, inside glass, and door hinges",
        "Leather seat conditioning or cloth seat extraction",
        "Deep clean of the engine bay",
      ],
      pricing: [
        { label: "Sedan", value: "170" },
        { label: "SUV", value: "190" },
        { label: "Truck", value: "220" },
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-white">
        Auto Detailing Services
      </h1>

      <div className="flex flex-col items-center justify-center bg-gray-50 rounded-xl px-4 py-8">
        <div className="w-full max-w-md my-8">
          <Carousel
            images={[
              "/images/ad.png",
              "/images/ad2.png",
              "/images/ad3.png",
              "/images/ad4.png",
              "/images/ad5.png",
              "/images/ad6.png",
              "/images/ad7.png",
              "/images/ad8.png",
              "/images/ad9.png",
              "/images/ad10.png",
              "/images/ad11.png",
              "/images/ad12.png",
              "/images/ad13.png",
              "/images/ad14.png",
              "/images/ad15.png",
              "/images/ad16.png",
              "/images/ad17.png",
              "/images/ad18.png",
              "/images/ad19.png",
            ]}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
          {contentTypes.map((service) => (
            <PricingCard
              key={service.id}
              title={service.name}
              description={service.description}
              pricing={service.pricing}
              buttonLabel="Book this package"
              buttonTo="/contact-me"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AutoDetailing;