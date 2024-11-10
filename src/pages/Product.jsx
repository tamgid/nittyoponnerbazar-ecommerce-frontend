// Product.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { categoryProductsData } from "../data/categoryProductsData";
import ReactImageMagnify from "react-image-magnify";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    // Find product by ID
    let foundProduct = null;
    for (let category in categoryProductsData) {
      foundProduct = categoryProductsData[category].find(
        (item) => item.product_id === parseInt(id)
      );
      if (foundProduct) break;
    }
    if (foundProduct) {
      setProduct(foundProduct);
      setMainImage(foundProduct.imageUrl1 || foundProduct.imageUrl); // Set main image
    }
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto my-[5rem] grid grid-cols-2 gap-8">
      {/* Left Column: Product Images */}
      <div>
        {/* Zoomable Main Image */}
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: product.shortDescription,
              isFluidWidth: true,
              src: mainImage,
            },
            largeImage: {
              src: mainImage,
              width: 1000,
              height: 1000,
            },
            enlargedImageContainerStyle: { background: "#fff" },
            enlargedImageContainerDimensions: {
              width: "150%",
              height: "100%",
            },
          }}
          className="border rounded-md"
        />

        {/* Thumbnail Images */}
        <div className="flex mt-4 gap-3">
          {[
            product.imageUrl1,
            product.imageUrl2,
            product.imageUrl3,
            product.imageUrl4,
            product.imageUrl5,
          ].map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              onClick={() => setMainImage(img)}
              className={`w-20 h-20 border rounded cursor-pointer ${
                mainImage === img ? "border-yellow-500" : "border-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Right Column: Product Details */}
      <div>
        <h2 className="text-2xl font-medium mb-2">
          {product.shortDescription}
        </h2>

        {/* Rating Section */}
        <div className="flex items-center mb-3">
          <span className="text-xl text-yellow-600 mr-2">
            {/* Render filled stars */}
            {Array(Math.floor(product.rating)).fill("★").join("")}
            {/* Render unfilled stars */}
            {Array(5 - Math.floor(product.rating))
              .fill("☆")
              .join("")}
          </span>
          <span
            className="text-gray-600 cursor-pointer underline hover:text-blue-700"
            onClick={() => {
              // Handle the click event, such as opening a review modal or navigating to a reviews section.
              console.log("Ratings clicked");
            }}
          >
            {product.noOfRating} ratings
          </span>
        </div>

        {/* Product Info */}
        <div className="space-y-1 mb-5">
          <p>
            <strong className="font-semibold mr-1">Sales Last Month:</strong> {product.salesLastMonth}
          </p>
          <p>
            <strong className="font-semibold mr-1">Price:</strong> ${product.price.toFixed(2)}
          </p>
          <p>
            <strong className="font-semibold mr-1">Delivery Date:</strong> {product.deliveryDate}
          </p>
          <p>
            <strong className="font-semibold mr-1">Shipping Location:</strong> {product.shippingLocation}
          </p>
        </div>

        {/* Additional Product Info */}
        <div className="mb-5">
          <p>
            <strong className="font-semibold mr-1">Brand:</strong> Premium Foods
          </p>
          <p>
            <strong className="font-semibold mr-1">Item Form:</strong> Whole
          </p>
          <p>
            <strong className="font-semibold mr-1">Flavor:</strong> Original
          </p>
          <p>
            <strong className="font-semibold mr-1">Diet Type:</strong> Vegetarian
          </p>
          <p>
            <strong className="font-semibold mr-1">Number of Items:</strong> 1
          </p>
        </div>

        {/* About the Items */}
        <div>
          <h3 className="text-xl font-medium mb-3">About the Items</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>
              High-quality organic product sourced directly from
              farms.High-quality organic product sourced directly from farms.
            </li>
            <li>
              Excellent choice for a healthy and balanced diet.High-quality
              organic product sourced directly from farms.
            </li>
            <li>
              Fresh and fast shipping directly to your location.High-quality
              organic product sourced directly from farms.
            </li>
            <li>
              100% natural with no added preservatives or colors.High-quality
              organic product sourced directly from farms.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// Define prop types
Product.propTypes = {
  id: PropTypes.string,
};

export default Product;
