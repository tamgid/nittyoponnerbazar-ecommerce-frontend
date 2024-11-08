/* eslint-disable no-unused-vars */
// ServiceFooter.jsx
import React from "react";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { TbTruckDelivery, TbMoneybag } from "react-icons/tb";
import { FaPhone } from "react-icons/fa";

const ServiceFooter = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 bg-gray-200">
      <div className="flex flex-row gap-2 py-4 px-10 items-center">
        <div>
          <PiSuitcaseSimpleBold className="text-4xl text-teal-600" />
        </div>
        <div className="text-neutral-700">
          <p className="font-bold">Privacy Policy</p>
          <p>Check before dealing</p>
        </div>
      </div>

      <div className="flex flex-row gap-2 py-4 px-10 items-center">
        <div>
          <TbTruckDelivery className="text-4xl text-teal-600" />
        </div>
        <div className="text-neutral-700">
          <p className="font-bold">Safe Delivery Service</p>
          <p>Get products in time safely</p>
        </div>
      </div>

      <div className="flex flex-row gap-2 py-4 px-10 items-center">
        <div>
          <TbMoneybag className="text-4xl text-teal-600" />
        </div>
        <div className="text-neutral-700">
          <p className="font-bold">Fast & Secure Payment</p>
          <p>Enjoy secure payment</p>
        </div>
      </div>

      <div className="flex flex-row gap-2 py-4 px-10 items-center">
        <div>
          <FaPhone className="text-3xl text-teal-600" />
        </div>
        <div className="text-neutral-700">
          <p className="font-bold">Customer Support</p>
          <p>Call us at +996627381</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceFooter;
