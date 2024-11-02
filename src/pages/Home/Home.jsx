/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from './Banner';
import Category from './Category';
import SectionHeading from './SectionHeading';

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Banner></Banner>
      <Category></Category>
      <section className="py-16 px-4 md:px-8">
        <SectionHeading heading='Featured Products List'></SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Product Card */}
          {[1, 2, 3,4].map((product) => (
            <div key={product} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/300x400"
                alt="Product"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Product Name</h3>
                <p className="text-gray-600 mb-4">Brief description of the product.</p>
                <p className="text-lg font-bold text-teal-500">$99.99</p>
              </div>
              <button className="w-full bg-teal-500 text-white py-2 hover:bg-teal-600 transition duration-300">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
