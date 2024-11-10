// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const ProductCard = ({
  id, // Accept the product id
  imageUrl,
  shortDescription,
  rating,
  salesLastMonth,
  price,
  deliveryDate,
  shippingLocation,
  onAddToCart,
}) => {
  // Function to render stars based on the rating value
  const renderStars = (rating) => {
    const filledStars = Math.ceil(rating); // Whole number part for filled stars
    const emptyStars = 5 - filledStars; // The rest will be empty stars
    return (
      <>
        {[...Array(filledStars)].map((_, idx) => (
          <span key={`filled-${idx}`} className="text-yellow-600 text-xl">
            &#9733; {/* Filled star */}
          </span>
        ))}
        {[...Array(emptyStars)].map((_, idx) => (
          <span key={`empty-${idx}`} className="text-gray-300 text-xl">
            &#9733; {/* Empty star */}
          </span>
        ))}
      </>
    );
  };

  return (
    <div className="border p-5 shadow-md">
      {/* Make image clickable and link to the product page */}
      <Link to={`/product/${id}`} className="block mb-3">
        <img
          src={imageUrl}
          alt={shortDescription}
          className="w-full h-[13rem] object-cover"
        />
      </Link>

      {/* Make short description clickable and link to the product page */}
      <h4 className="font-semibold text-md">
        <Link
          to={`/product/${id}`} // Pass product id as parameter
          className="hover:underline text-gray-800 hover:text-blue-700"
        >
          {shortDescription.length > 100
            ? `${shortDescription.slice(0, 100)}...`
            : shortDescription}
        </Link>
      </h4>

      {/* Render rating stars */}
      <p className="text-gray-500 text-sm">
        {renderStars(rating)} {/* Rating stars */}
      </p>

      <p className="text-gray-600 text-sm mb-1">
        {salesLastMonth} bought in past month
      </p>
      <p className="text-lg font-bold mb-1">${price}</p>
      <p className="text-gray-600 text-sm mb-1">Delivery: {deliveryDate}</p>
      <p className="text-gray-600 text-[0.85rem] mb-3">{shippingLocation}</p>

      <button
        onClick={onAddToCart}
        className="bg-yellow-600 text-white py-2 px-2 rounded text-sm mb-3"
      >
        Add to Cart
      </button>
    </div>
  );
};

ProductCard.propTypes = {
  id: PropTypes.string.isRequired, // Make sure to validate id as a string (or number if needed)
  imageUrl: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  salesLastMonth: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  deliveryDate: PropTypes.string.isRequired,
  shippingLocation: PropTypes.string.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductCard;
