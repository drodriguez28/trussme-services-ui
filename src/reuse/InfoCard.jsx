import React from "react";
import { Card } from "flowbite-react";

export const InfoCard = () => {
  return (
    <Card className="max-w-sm !bg-slate-600">
      <h5 className="text-2xl font-bold tracking-tight text-white">
        Service Areas
      </h5>
      <p className="font-normal text-white">
        Roswell, Alpharetta, Dunwoody, Sandy Springs
      </p>
      <h6 className="text-lg font-semibold mt-4 text-white">
        Hours
      </h6>
      <ul className="font-normal text-white list-disc list-inside">
        <p>Monday 9am-9pm</p>
        <p>Tuesday 9am-9pm</p>
        <p>Wednesday 9am-9pm</p>
        <p>Thursday 9am-9pm</p>
        <p>Friday 9am-9pm</p>
        <p>Saturday 9am-9pm</p>
        <p>Sunday 9am-9pm</p>
      </ul>
    </Card>
  );
};
