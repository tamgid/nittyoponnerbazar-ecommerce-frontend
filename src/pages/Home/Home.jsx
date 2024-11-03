/* eslint-disable no-unused-vars */
import React from "react";
import Banner from "./Banner";
import Category from "./Category";
import SectionHeading from "./SectionHeading";
import FeaturedProducts from "./FeaturedProducts";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Banner></Banner>
      <Category></Category>
      <FeaturedProducts></FeaturedProducts>
    </div>
  );
}
