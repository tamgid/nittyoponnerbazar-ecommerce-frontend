import SectionHeading from "./SectionHeading";

const FeaturedProducts = () => {
  return (
    <>
      <section className="py-8 px-4 md:px-8">
        <SectionHeading heading="Featured Products List"></SectionHeading>
      </section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-5 mb-5">
        {/* Product Card */}
        {[1, 2, 3, 4].map((product) => (
          <div
            key={product}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src="https://via.placeholder.com/300x400"
              alt="Product"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Product Name</h3>
              <p className="text-gray-600 mb-4">
                Brief description of the product.
              </p>
              <p className="text-lg font-bold text-teal-500">$99.99</p>
            </div>
            <button className="w-full bg-teal-500 text-white py-2 hover:bg-teal-600 transition duration-300">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default FeaturedProducts;
