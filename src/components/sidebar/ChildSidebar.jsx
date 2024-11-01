/* eslint-disable no-unused-vars */
import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import PropTypes from "prop-types";
import Tamgid from "../../assets/tamjid.jpg";

const ChildSidebar = ({ selectedCategory, products, onBackToParent }) => {
  return (
    <div className="w-[24rem] h-full bg-white overflow-y-auto shadow-lg">
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
          <span className=" text-xl font-bold text-white">Hello, sign in</span>
        </div>
      </div>
      {/* Back to Parent Sidebar */}
      <div
        className="flex items-center p-4 cursor-pointer"
        onClick={onBackToParent}
      >
        <FaAngleLeft className="text-xl font-semibold text-gray-500" />
        <span className="font-semibold ml-1">MAIN MENU</span>
      </div>
      <hr/>

      {/* Heading for Selected Category */}
      <div className="p-5">
        <h2 className="font-bold text-xl mb-2">{selectedCategory}</h2>

        {/* List of products */}
        <ul>
          {products.map((product) => (
            <li key={product.name} className="p-2 hover:bg-gray-200 rounded-md">
              <a href={product.link} className="text-lg font-semibold">
                {product.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// PropTypes validation
ChildSidebar.propTypes = {
  selectedCategory: PropTypes.string.isRequired, // The category selected in the parent sidebar
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired, // Ensure product name is a string
      link: PropTypes.string.isRequired, // Ensure product link is a string
    })
  ).isRequired, // Array of product objects with 'name' and 'link' as required fields
  onBackToParent: PropTypes.func.isRequired, // Function to go back to parent sidebar
};

export default ChildSidebar;
