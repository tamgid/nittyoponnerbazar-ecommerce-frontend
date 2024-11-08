/* eslint-disable no-unused-vars */
import React from "react";
import Banner from "./Banner";
import Category from "./Category";
import SectionHeading from "./SectionHeading";
import ServiceFooter from "../../components/serviceFooter";
import Catalogs from "../../components/catelogCategories/Catalogs";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Banner />
      <Catalogs />
      <Category />
      <ServiceFooter />
    </div>
  );
}
