import DashboardHeading from "../../Dashboard/DashboardHeading";

const AddProduct = () => {
    return (
        <>
        <div className="my-5">
           <DashboardHeading heading="Add Product" subheading="Add a new product providing the following information."></DashboardHeading>
        </div>
        <div>
      <form className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-5 items-stretch justify-center ">
          <div className="">
            <label className="label">
              <span className="label-text">Name of Your Item</span>
            </label>
            <input
              type="text"
              name="item_name"
              placeholder="Enter the name of your item"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="">
            <label className="label">
              <span className="label-text">Image of Your Item</span>
            </label>
            <input
              type="text"
              name="item_photo"
              placeholder="Enter the photoURL of your item"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="">
            <label className="label">
              <span className="label-text">Select Category of Your Item</span>
            </label>
            <select
              className="select select-bordered w-full "
              required
            //   value={category}
            //   onChange={(e) => setCategory(e.target.value)}
            >
              <option disabled selected>
                ---Category---
              </option>
              <option>Landscape Painting</option>
              <option>Portrait Drawing</option>
              <option>Watercolor Painting</option>
              <option>Oil Painting</option>
              <option>Charcoal Sketching</option>
              <option>Cartoon Drawing</option>
            </select>
          </div>
          <div>
            <label className="label">
              <span className="label-text">Price of Your Item</span>
            </label>
            <input
              type="number"
              name="item_price"
              placeholder="Enter the price of your item"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Rating of Your Item</span>
            </label>
            <input
              type="text"
              name="item_rating"
              placeholder="Enter the rating of your item"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Processing Time of Your Item</span>
            </label>
            <input
              type="text"
              name="item_processing_time"
              placeholder="Enter the processing time of your item"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Your email</span>
            </label>
            <input
              type="email"
              name="email"
            //   defaultValue={user.email}
              className="input input-bordered w-full"
            //   disabled={true}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              name="name"
            //   defaultValue={user.displayName}
              className="input input-bordered w-full"
            //   disabled={true}
            />
          </div>
          <div className="">
            <label className="label">
              <span className="label-text">Is your item customizable?</span>
            </label>
            <div className="flex flex-row items-center gap-3">
              <div className="flex flex-row gap-1 items-center">
                <input
                  type="radio"
                  name="customization"
                  value="Yes"
                  className="radio"
                //   onChange={(e) => setCustomization(e.target.value)}
                //   checked={customization === "Yes"}
                />
                <p>Yes</p>
              </div>
              <div className="flex flex-row gap-1 items-center">
                <input
                  type="radio"
                  name="customization"
                  value="No"
                  className="radio"
                //   onChange={(e) => setCustomization(e.target.value)}
                //   checked={customization === "No"}
                />
                <p>No</p>
              </div>
            </div>
          </div>

          <div className="">
            <label className="label">
              <span className="label-text">
                {" "}
                Select Stock Status of Your Item
              </span>
            </label>
            <div className="flex flex-row items-center gap-3">
              <div className="flex flex-row gap-1 items-center">
                <input
                  type="radio"
                  name="stockStatus"
                  value="In Stock"
                  className="radio"
                //   onChange={(e) => setStockStatus(e.target.value)}
                //   checked={stockStatus === "In Stock"}
                />
                <p>In Stock</p>
              </div>
              <div className="flex flex-row gap-1 items-center">
                <input
                  type="radio"
                  name="stockStatus"
                  value="Made TO Order"
                  className="radio"
                //   onChange={(e) => setStockStatus(e.target.value)}
                //   checked={stockStatus === "Made TO Order"}
                />
                <p>Made To Order</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" my-5 px-5">
          <label className="label">
            <span className="label-text">Description of Your Item</span>
          </label>
          <textarea
            name="item_description"
            placeholder="Write short description of your item"
            className="textarea textarea-bordered textarea-md w-full "
          ></textarea>
        </div>
        <div className="flex flex-row items-center justify-center mx-auto">
          <button
            type="submit"
            className="btn btn-ghost btn-wide my-5 text-center bg-teal-500 text-white text-lg"
            required
          >
            Add
          </button>
        </div>
      </form>
    </div>
        </>
    );
};

export default AddProduct;