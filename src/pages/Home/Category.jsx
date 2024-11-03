import SectionHeading from "./SectionHeading";

const Category = () => {
  return (
    <div className="mt-16 mb-5">
      <SectionHeading
        heading="Shop By Category"
        subheading="Easily browse our wide selection of groceries, including organics, frozen foods, and personal care essentials for a simpler shopping experience."
      ></SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-5">
        <div className="flex flex-col items-center">
          <img
            src="/Groceriess.jpg"
            alt="Grocery"
            className="w-24 h-24 md:w-40 md:h-40 object-cover rounded-full transition-transform duration-100 ease-in-out hover:scale-110"
          />
          <p className="text-center text-xl font-semibold text-slate-800 mt-2">
            Grocery
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/juice.png"
            alt="Beverages"
            className="w-24 h-24 md:w-40 md:h-40 object-cover rounded-full transition-transform duration-100 ease-in-out hover:scale-110"
          />
          <p className="text-center text-xl font-semibold text-slate-800 mt-2">
            Beverages
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/pastry.jpg"
            alt="Cake"
            className="w-24 h-24 md:w-40 md:h-40 object-cover rounded-full transition-transform duration-100 ease-in-out hover:scale-110"
          />
          <p className="text-center text-xl font-semibold text-slate-800 mt-2">
            Cake & Pastry
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/bakery.jpg"
            alt="Bakery"
            className="w-24 h-24 md:w-40 md:h-40 object-cover rounded-full transition-transform duration-100 ease-in-out hover:scale-110"
          />
          <p className="text-center text-xl font-semibold text-slate-800 mt-2">
            Bread & Bakery
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/snacks.jpeg"
            alt="Snacks"
            className="w-24 h-24 md:w-40 md:h-40 object-cover rounded-full transition-transform duration-100 ease-in-out hover:scale-110
            "
          />
          <p className="text-center text-xl font-semibold text-slate-800 mt-2">
            Snacks
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/dairy.jpeg"
            alt="Dairy"
            className="w-24 h-24 md:w-40 md:h-40 object-cover rounded-full transition-transform duration-100 ease-in-out hover:scale-110"
          />
          <p className="text-center text-xl font-semibold text-slate-800 mt-2">
            Dairy
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/chocolates.jpeg"
            alt="Chocolate"
            className="w-24 h-24 md:w-40 md:h-40 object-cover rounded-full transition-transform duration-100 ease-in-out hover:scale-110"
          />
          <p className="text-center text-xl font-semibold text-slate-800 mt-2">
            Chocolate & Candy
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/rice&biriani.jpeg"
            alt="Biriani"
            className="w-24 h-24 md:w-40 md:h-40 object-cover rounded-full transition-transform duration-100 ease-in-out hover:scale-110"
          />
          <p className="text-center text-xl font-semibold text-slate-800 mt-2">
            Rice & Biriani
          </p>
        </div>
      </div>
    </div>
  );
};

export default Category;
