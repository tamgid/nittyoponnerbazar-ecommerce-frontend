// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types"; // Import PropTypes for validation
import { Link } from "react-router-dom";

// Data for new arrivals - object containing product details
const newArrivalProducts = [
  { name: "Grocery", imageUrl: "/Groceriess.jpg", link: "/product/1" },
  { name: "Beverages", imageUrl: "/juice.png", link: "/product/2" },
  { name: "Cake & Pastry", imageUrl: "/pastry.jpg", link: "/product/3" },
  { name: "Bread & Bakery", imageUrl: "/bakery.jpg", link: "/product/4" },
  { name: "Snacks", imageUrl: "/snacks.jpeg", link: "/product/5" },
  { name: "Dairy", imageUrl: "/dairy.jpeg", link: "/product/6" },
  { name: "Chocolate & Candy", imageUrl: "/chocolates.jpeg", link: "/product/7" },
  { name: "Rice & Biriani", imageUrl: "/rice&biriani.jpeg", link: "/product/8" },
  { name: "Fresh Vegetables", imageUrl: "/Groceriess.jpg", link: "/product/9" },
  { name: "Juices", imageUrl: "/Groceriess.jpg", link: "/product/10" },
];

// Main NewArrival component
const NewArrival = () => {
  return (
    <div className="p-6 mx-6 my-10 bg-white shadow-lg">
      {/* Heading */}
      <h2 className="text-lg font-semibold mb-3">
        New Arrivals You Can Explore
      </h2>

      {/* Product grid layout with 5 products per row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {newArrivalProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

// ProductCard component to display individual product
const ProductCard = ({ product }) => {
  return (
    <div className="flex flex-col items-center h-[18rem]">
      <Link to={product.link}>
        <img
          src={product.imageUrl}
          alt={product.name}
          className="md:w-[13rem] md:h-[13rem] object-cover rounded-full transition-transform duration-100 ease-in-out hover:scale-110"
        />
      </Link>
      <p className="text-lg font-semibold mt-4">
        {product.name}
      </p>
    </div>
  );
};

// PropTypes for validation
NewArrival.propTypes = {
  // No props are passed to the NewArrival component, as it uses static data.
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default NewArrival;
