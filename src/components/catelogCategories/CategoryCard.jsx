// CategoryCard.js
// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CategoryCard = ({ heading, categories, bottomLinkName, bottomLink }) => {
  return (
    <div className="border p-6 shadow-lg">
      {/* Card Heading */}
      <h2 className="text-lg font-semibold mb-3">{heading}</h2>

      {/* Categories as clickable images */}
      <div className="grid grid-cols-2 gap-5">
        {categories.map((category, index) => (
          <div key={index} className="text-left">
            <Link to={category.link}>
              <img src={category.imageUrl} alt={category.name} className="rounded-md" />
              <p className="mt-1 text-sm">{category.name}</p>
            </Link>
          </div>
        ))}
      </div>

      {/* Bottom Link */}
      <Link to={bottomLink} className="text-teal-500 mt-4 block">
        {bottomLinkName}
      </Link>
    </div>
  );
};

// Prop validation
CategoryCard.propTypes = {
  heading: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
  bottomLink: PropTypes.string.isRequired,
  bottomLinkName: PropTypes.string.isRequired,
};

export default CategoryCard;
