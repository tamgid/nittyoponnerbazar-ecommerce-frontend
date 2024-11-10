// Sidebar.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PropTypes from "prop-types";
import { productsSidebarData } from "../../data/productsSidebarData";

const ProductSidebar = ({ category }) => {
  const [priceRange, setPriceRange] = useState({ min: 1, max: 10000 });

  if (!productsSidebarData || !category) {
    return <div>Loading...</div>;
  }

  const categoryFilters = productsSidebarData[category];

  const handleRangeChange = (e, isMin) => {
    const value = parseInt(e.target.value, 10);
    setPriceRange((prev) => ({
      ...prev,
      [isMin ? "min" : "max"]: value,
    }));
  };

  return (
    <div className="w-[17rem] bg-gray-100 px-4 py-6">
      {categoryFilters.map((section, index) => (
        <div key={index} className="mb-6">
          <h3 className="font-semibold mb-3 text-md">{section.name}</h3>

          {/* Customer Reviews Section */}
          {section.name === "Customer Reviews" && (
            <div>
              {section.items.map((item, itemIdx) => {
                const starsCount = parseInt(item[0], 10); // Extract the number of stars
                return (
                  <a
                    href="#"
                    key={itemIdx}
                    className="flex items-center mb-2 text-gray-800 hover:text-blue-700"
                  >
                    {[...Array(starsCount)].map((_, starIdx) => (
                      <span key={starIdx} className="text-yellow-600 text-2xl">
                        {" "}
                        {/* Increase font size */}
                        &#9733;
                      </span> // Filled star
                    ))}
                    <span className="ml-2 text-sm font-medium">{item}</span>
                  </a>
                );
              })}
            </div>
          )}

          {/* Other sections */}
          {[
            "Popular Shopping Ideas",
            "Department",
            "Deals & Discounts",
            "Condition",
          ].includes(section.name) && (
            <div>
              {section.items.map((item, itemIdx) => (
                <a
                  key={itemIdx}
                  href="#"
                  className="text-gray-800 hover:text-blue-700 block mb-2 text-sm font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
          )}

          {["Brands", "All Top Brands", "From Our Brands"].includes(
            section.name
          ) && (
            <div>
              {section.items.map((item, itemIdx) => (
                <div key={itemIdx} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    id={`${section.name}-${itemIdx}`}
                    className="mr-2 scale-125" // Scale up the checkbox size
                  />
                  <a
                    href="#"
                    className="text-gray-800 hover:text-blue-700 text-sm font-medium"
                  >
                    {item}
                  </a>
                </div>
              ))}
            </div>
          )}

          {section.name === "Color" && (
            <div className="grid grid-cols-7 gap-2">
              {section.items.slice(0, 20).map((color, colorIdx) => (
                <a
                  key={colorIdx}
                  href="#"
                  className="w-8 h-8 rounded-md inline-block border"
                  style={{ backgroundColor: color.colorCode }}
                  title={color.name}
                />
              ))}
            </div>
          )}

          {section.name === "Price" && (
            <div>
              <p className="text-sm font-semibold mb-2">
                ${priceRange.min} - ${priceRange.max}
              </p>
              <div className="flex items-center">
                <input
                  type="range"
                  min="1"
                  max="10000"
                  value={priceRange.min}
                  onChange={(e) => handleRangeChange(e, true)}
                  className="w-1/2"
                />
                <input
                  type="range"
                  min="1"
                  max="10000"
                  value={priceRange.max}
                  onChange={(e) => handleRangeChange(e, false)}
                  className="w-1/2 ml-2"
                />
                <button className="ml-3 bg-teal-500 text-white py-1 px-2 rounded">
                  Go
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

ProductSidebar.propTypes = {
  category: PropTypes.string.isRequired,
};

export default ProductSidebar;
