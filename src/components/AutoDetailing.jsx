import React, { useEffect } from "react";
import { Table } from "@contentful/f36-components";
import Carousel from "../reuse/Carousel";
import { Link } from "react-router-dom";

function AutoDetailing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contentTypes = [
    {
      id: "1",
      name: "Exterior Only",
      description:
        "Full deep clean of exterior, includes tire cleaning/tire shine, wheel rim cleaning inside and outside, fender cleaning, condition outside black liner. Clean gas tank hinge and clean outside glass. Also a deep clean of the engine bay.",
      prices: "Sedan $60, SUV $80, Truck $100",
    },
    {
      id: "2",
      name: "Basic Package",
      description:
        "Exterior and interior basic clean, includes tire cleaning/tire shine, wheel rim cleaning inside and outside, fender cleaning, condition outside black liner. Clean gas tank hinge and clean outside glass. Interior includes, vacuuming and wiping down all areas inside car. Clean floor mats. Clean inside glass and clean door hinges. Also a deep clean of the engine bay.",
      prices: "Sedan $130, SUV $150, Truck $180-$200",
    },
    {
      id: "3",
      name: "Premium Package",
      description:
        "Exterior and interior Premium clean, includes tire cleaning/tire shine, wheel rim cleaning inside and outside, fender cleaning, condition outside black liner. Clean gas tank hinge and clean outside glass. Interior includes, vacuuming and wiping down all areas inside car. Clean floor mats(condition, if all weather proof mats). Clean inside glass and clean door hinges. Leather seats will be conditioned, if cloth seats carpet extraction for all seats. Also a deep clean of the engine bay.",
      prices: "Sedan $170, SUV $190,Truck $220",
    },
  ];
  return (
    <div className="max-w-3xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-white">
        Auto Detailing Services
      </h1>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
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
        <Table>
          <Table.Head>
            <Table.Row>
              <Table.Cell>Service</Table.Cell>
              <Table.Cell>Description</Table.Cell>
              <Table.Cell>Price</Table.Cell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {contentTypes.map((service) => (
              <Table.Row key={service.id}>
                <Table.Cell>{service.name}</Table.Cell>
                <Table.Cell>{service.description}</Table.Cell>
                <Table.Cell>{service.prices}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
      <div className="mt-8 ">
        <Link to="/contact-me">
          <button className="block w-full text-center px-4 py-3 bg-green-600 text-white rounded font-semibold transition">
            Click here to book !
          </button>
        </Link>
      </div>
    </div>
  );
}

export default AutoDetailing;
