// RelatedProducts.js
import React from "react";
import PropTypes from "prop-types"; // Import PropTypes for validation
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Watch from "../assets/watch.png";
import Laptop from "../assets/laptop.png"; 

// Mock data for related products
const relatedProducts = [
  { name: "Product 1", link: "/product/1", imageUrl: Watch },
  { name: "Product 2", link: "/product/2", imageUrl: Laptop },
  { name: "Product 3", link: "/product/3", imageUrl: Watch },
  { name: "Product 4", link: "/product/4", imageUrl: Laptop },
  { name: "Product 5", link: "/product/5", imageUrl: Watch },
  { name: "Product 6", link: "/product/6", imageUrl: Laptop },
  { name: "Product 7", link: "/product/7", imageUrl: Watch },
  { name: "Product 8", link: "/product/8", imageUrl: Laptop },
  { name: "Product 9", link: "/product/9", imageUrl: Watch },
  { name: "Product 10", link: "/product/10", imageUrl: Laptop },
  // Add more products as needed
];

// Main RelatedProducts component
const RelatedProducts = () => {
  // Reference to the scrollable div
  const scrollRef = React.useRef(null);

  // Function to scroll the div left or right
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="p-6 mx-6 bg-white shadow-lg">
      {/* Heading with "See more" link */}
      <div className="flex items-center">
        <h2 className="text-lg font-semibold mb-3">
          Related to items you have viewed
        </h2>
        <Link
          to="/all-interested-products"
          className="text-teal-500 text-lg ml-5 mb-3"
        >
          See more
        </Link>
      </div>

      {/* Scroll container */}
      <div className="relative">
        {/* Left and right scroll buttons */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-3 shadow-md rounded-full"
          onClick={() => scroll("left")}
        >
          <FaChevronLeft />
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-3 shadow-md rounded-full"
          onClick={() => scroll("right")}
        >
          <FaChevronRight />
        </button>

        {/* Scrollable division with images */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-6"
          style={{ height: "19rem" }}
        >
          {relatedProducts.map((product, index) => (
            <ProductImage key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

// ProductImage component to render each product image
const ProductImage = ({ product }) => {
  return (
    <Link to={product.link} className="flex-shrink-0">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="h-[17rem] w-full object-cover rounded-md"
      />
    </Link>
  );
};

// PropTypes for RelatedProducts component (if you have any props to validate here)
RelatedProducts.propTypes = {
  // Here you could define any props passed to RelatedProducts component if applicable
};

// PropTypes for ProductImage component
ProductImage.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default RelatedProducts;
