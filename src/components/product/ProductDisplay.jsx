// ProductDisplay.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ProductCard from "./ProductCard";
import { categoryProductsData } from "../../data/categoryProductsData"; // Import product data
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"; // Import arrow icons for Previous and Next buttons

const ProductDisplay = ({ category }) => {
  const products = categoryProductsData[category] || [];
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 20; // 5 rows of 5 cards each

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(products.length / productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Generate page numbers based on the current page
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    if (i >= currentPage - 2 && i <= currentPage + 2 && i <= totalPages) {
      pageNumbers.push(i);
    }
  }

  // Disable "Previous" and "Next" buttons based on current page
  const isPrevDisabled = currentPage === 1;
  const isNextDisabled = currentPage === totalPages;

  // Scroll to the top whenever the page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="flex-1 px-6 py-6">
      {/* Heading and Description */}
      <div className="mb-4">
        <h2 className="text-2xl font-semibold mb-1">Results</h2>
        <p className="text-gray-700 text-medium">
          Check each product page for other buying options. Price and other
          details may vary based on product size and color.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-4 gap-5">
        {currentProducts.map((product, index) => (
          <ProductCard
            key={index}
            id={product.product_id} // Pass the unique id here
            {...product}
            onAddToCart={() => console.log("Add to Cart")}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10">
        <div className="flex items-center space-x-2 border p-1">
          {/* "Previous" Button with Text and Left Arrow */}
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={isPrevDisabled}
            className={`flex items-center px-2 py-2 text-lg ${
              isPrevDisabled
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-teal-500 text-white"
            }`}
          >
            <HiChevronLeft className="mr-2" />
            Previous
          </button>

          {/* Page Numbers */}
          {pageNumbers.map((num) => (
            <button
              key={num}
              onClick={() => paginate(num)}
              className={`px-5 py-2 text-lg ${
                currentPage === num
                  ? "bg-teal-500 text-white border-2 border-teal-600"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {num}
            </button>
          ))}

          {/* "Next" Button with Text and Right Arrow */}
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={isNextDisabled}
            className={`flex items-center px-2 py-2 text-lg ${
              isNextDisabled
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-teal-500 text-white"
            }`}
          >
            Next
            <HiChevronRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

ProductDisplay.propTypes = {
  category: PropTypes.string.isRequired, // Category should be a required string
};

export default ProductDisplay;
