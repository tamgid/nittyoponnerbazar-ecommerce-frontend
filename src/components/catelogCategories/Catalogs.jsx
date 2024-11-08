// Catalogs.js
// eslint-disable-next-line no-unused-vars
import React from "react";
import CategoryCard from "./CategoryCard";
import { catalogData } from "../../data/catalogData"; // Import catalog data

const Catalogs = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-5 py-10">
      {Object.values(catalogData).map((catalog, index) => (
        <CategoryCard
          key={index}
          heading={catalog.heading}
          categories={catalog.categories}
          bottomLink={catalog.bottomLink}
        />
      ))}
    </div>
  );
};

export default Catalogs;
