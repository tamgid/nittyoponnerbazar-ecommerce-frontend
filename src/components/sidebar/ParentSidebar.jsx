/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import Tamgid from "../../assets/tamjid.jpg";
import ChildSidebar from "./ChildSidebar"; // Import ChildSidebar
import categoryProducts from "../../data/sidebarCategoryProducts"; // Import category products
import PropTypes from "prop-types"; // Import PropTypes

const ParentSidebar = () => {
  const [isChildSidebarVisible, setIsChildSidebarVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState([]);

  // Handle category click
  const handleCategoryClick = (category, products) => {
    setSelectedCategory(category);
    setSelectedProducts(products || []);
    setIsChildSidebarVisible(true);
  };

  // Handle back to parent sidebar
  const handleBackToParent = () => {
    setIsChildSidebarVisible(false);
  };

  return (
    <div className="w-[24rem] h-full bg-white overflow-y-auto shadow-lg">
      {isChildSidebarVisible ? (
        <ChildSidebar
          selectedCategory={selectedCategory}
          products={selectedProducts}
          onBackToParent={handleBackToParent}
        />
      ) : (
        <div className="w-[24rem] h-full bg-white overflow-y-auto shadow-lg">
          {/* Close button */}
          <div
            className="flex justify-between items-center pl-5 pt-2 pb-2 bg-gray-200"
            style={{ backgroundColor: "#232f3e" }}
          >
            <div className="flex items-center">
              <img
                src={Tamgid}
                alt="Profile"
                className="rounded-full w-11 h-11 mr-3"
              />
              <span className=" text-xl font-bold text-white">
                Hello, sign in
              </span>
            </div>
          </div>

          <div className="p-5">
            {Object.entries(categoryProducts).map(
              ([catalogName, categories], index, array) => (
                <React.Fragment key={catalogName}>
                  <Catalog
                    name={catalogName}
                    categories={categories}
                    onCategoryClick={handleCategoryClick}
                  />
                  {/* Divider - only add if it's not the last item */}
                  {index < array.length - 1 && <hr className="my-4" />}
                </React.Fragment>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

// Updated Catalog component to handle multiple categories in each catalog
const Catalog = ({ name, categories, onCategoryClick }) => (
  <div className="mb-4">
    <h2 className="font-semibold text-xl mb-2">{name}</h2>
    <ul>
      {Object.entries(categories).map(([category, products]) => (
        <li
          key={category}
          className="flex justify-between items-center text-gray-800 cursor-pointer hover:bg-gray-200 p-2 rounded-md"
          onClick={() => onCategoryClick(category, products)}
        >
          <span>{category}</span>
          <FaAngleRight className="text-xl font-semibold text-gray-500" />
        </li>
      ))}
    </ul>
  </div>
);

// Prop Types validation for ParentSidebar
ParentSidebar.propTypes = {
  // No props are passed directly to ParentSidebar in this case
};

// Prop Types validation for Catalog
Catalog.propTypes = {
  name: PropTypes.string.isRequired, // Ensure 'name' is a required string
  categories: PropTypes.objectOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
      })
    )
  ).isRequired, // Ensure 'categories' is an object where keys are strings and values are arrays of products
  onCategoryClick: PropTypes.func.isRequired, // Ensure 'onCategoryClick' is a function
};

export default ParentSidebar;
