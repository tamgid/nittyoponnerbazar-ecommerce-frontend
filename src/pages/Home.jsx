/* eslint-disable no-unused-vars */
import React from "react";
import Banner from "../components/homeComponents/Banner";
import Category from "../components/homeComponents/NewArrival";
import ServiceFooter from "../components/footer/ServiceFooter";
import Catalogs from "../components/homeComponents/catalogCategories/Catalogs";
import RelatedProducts from "../components/homeComponents/RelatedProducts";
import BestSales from "../components/homeComponents/BestSales";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Banner />
      <Catalogs />
      <RelatedProducts />
      <BestSales />
      <Category />
      <ServiceFooter />
    </div>
  );
}
