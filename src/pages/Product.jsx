// Product.jsx (or CategoryProducts.jsx if this is where the product page is defined)
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams to get the route parameter

const Product = () => {
  const { id } = useParams(); // Get the product id from the URL params

  useEffect(() => {
    // You can now use the `id` to fetch product details, e.g., from an API or static data
    console.log("Product ID:", id);
  }, [id]); // Trigger when id changes (useful for dynamic content)

  return (
    <div className="max-w-4xl mx-auto my-10 p-6 border rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-4">Product Name: {id}</h2>
      
      {/* Product Image Section */}
      <div className="flex mb-6">
        <img
          src="https://via.placeholder.com/400"
          alt="Product"
          className="w-[400px] h-[400px] object-cover border rounded-md"
        />
        <div className="ml-6 flex-1">
          {/* Product Details */}
          <p className="text-lg font-semibold text-gray-700 mb-2">Product Description</p>
          <p className="text-gray-600 mb-4">
            This is a placeholder description for the product with ID {id}. You can replace it with actual product details.
          </p>
          
          <p className="text-2xl font-bold text-gray-800 mb-4">$49.99</p>

          {/* Add to Cart Button */}
          <button className="bg-yellow-600 text-white py-2 px-4 rounded-md text-lg">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Product Reviews Section */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-4">Customer Reviews</h3>
        <div className="space-y-4">
          {/* Review 1 */}
          <div className="border-t pt-4">
            <p className="font-semibold text-gray-800">John Doe</p>
            <p className="text-gray-600">★★★★☆</p>
            <p className="text-gray-700">
              Great product! Very high quality, exactly as described.
            </p>
          </div>

          {/* Review 2 */}
          <div className="border-t pt-4">
            <p className="font-semibold text-gray-800">Jane Smith</p>
            <p className="text-gray-600">★★★☆☆</p>
            <p className="text-gray-700">
              The product is good, but the color was not as expected.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
