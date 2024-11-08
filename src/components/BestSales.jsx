// BestSales.js
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Laptop from "../assets/laptop.png"; 
import Watch from "../assets/watch.png";// Replace with relevant image or dynamic image path

// Mock data for best sales products
const bestSalesProducts = [
  { name: "Product 1", heading: "Top-rated product", link: "/product/1", imageUrl: Laptop },
  { name: "Product 2", heading: "Best seller this week", link: "/product/2", imageUrl: Watch },
  { name: "Product 3", heading: "Limited time offer", link: "/product/3", imageUrl: Laptop },
  { name: "Product 4", heading: "Customer favorite", link: "/product/4", imageUrl: Watch },
  { name: "Product 5", heading: "Shop now!", link: "/product/5", imageUrl: Laptop },
  { name: "Product 6", heading: "Must-have item", link: "/product/6", imageUrl: Watch },
  { name: "Product 7", heading: "Top pick", link: "/product/7", imageUrl: Laptop },
  { name: "Product 8", heading: "On sale", link: "/product/8", imageUrl: Watch },
  { name: "Product 9", heading: "Popular choice", link: "/product/9", imageUrl: Laptop },
  { name: "Product 10", heading: "Seasonal favorite", link: "/product/10", imageUrl: Watch },
  // Add more products as needed
];

// Main BestSales component
const BestSales = () => {
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
    <div className="p-6 mx-6 my-10 bg-white shadow-lg">
      {/* Heading with "See more" link */}
      <div className="flex items-center">
        <h2 className="text-lg font-semibold mb-3">
        The Best Sales and Popular Products
        </h2>
        <Link
          to="/all-best-sales"
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

        {/* Scrollable division with cards */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-6"
          style={{ height: "23rem" }}
        >
          {bestSalesProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

// ProductCard component to render each product card
const ProductCard = ({ product }) => {
  return (
    <div className="flex-shrink-0 p-5 bg-gray-100 shadow-md">
      <h3 className="text-md font-semibold mb-2">{product.heading}</h3>
      <Link to={product.link}>
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-[15rem] w-full object-cover rounded-md mb-3"
        />
      </Link>
      <Link to={product.link} className="text-teal-500 text-sm font-semibold">
        Shop Now
      </Link>
    </div>
  );
};

// PropTypes for BestSales component (if you have any props to validate here)
BestSales.propTypes = {
  // Define any props passed to BestSales if applicable
};

// PropTypes for ProductCard component
ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default BestSales;
