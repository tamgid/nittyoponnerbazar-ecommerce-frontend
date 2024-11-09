// CategoryProducts.jsx
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../components/product/ProductSidebar";
import ProductDisplay from "../components/product/ProductDisplay";

const CategoryProducts = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryName = queryParams.get("name"); // Get the 'name' query parameter
  
  // Scroll to the top whenever this component renders or category changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryName]); // Runs every time categoryName changes
  
  // Log the categoryName to the console
  console.log("Category Name:", categoryName);

  return (
    <div className="flex">
      <Sidebar category={categoryName} />
      <ProductDisplay category={categoryName} /> {/* Pass the category name to ProductDisplay */}
    </div>
  );
};

export default CategoryProducts;
