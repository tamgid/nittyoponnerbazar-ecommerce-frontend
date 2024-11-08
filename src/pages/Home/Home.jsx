/* eslint-disable no-unused-vars */
import React from "react";
import Banner from "./Banner";
import Category from "../../components/NewArrival";
import ServiceFooter from "../../components/footer/ServiceFooter";
import Catalogs from "../../components/catelogCategories/Catalogs";
import RelatedProducts from "../../components/RelatedProducts";
import BestSales from "../../components/BestSales";

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
