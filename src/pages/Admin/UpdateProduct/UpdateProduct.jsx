import { Helmet } from "react-helmet-async";
import DashboardHeading from "../../Dashboard/DashboardHeading";
import { useState } from "react";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import { useNavigate } from "react-router-dom";

const UpdateProduct = () => {
  const [productCategory, setProductCategory] = useState("Bakery");
  const [productSubCategory, setProductSubCategory] = useState("Pastry");
  const [productImage, setProductImage] = useState([]);
  const [variationType, setVariationType] = useState(null);
  const [variation, setVariation] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  //   const axiosSecure = useAxiosSecure();
  //   const navigate = useNavigate();

  const handleSelectVariation = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      // Add the selected option
      setVariation((prev) => [...prev, value]);
    } else {
      // Remove the deselected option
      setVariation((prev) => prev.filter((option) => option !== value));
    }
  };
  const handleImageInput = (e) => {
    setProductImage(e.target.files);
    const files = e.target.files;
    const fileArray = Array.from(files);

    // Check if the number of selected files is greater than 3
    if (fileArray.length + imagePreviews.length > 3) {
      e.target.value = "";
      setImagePreviews([]);
      setProductImage([]);
      alert("You can upload a maximum of 3 images only.");
      return; // Exit the function if more than 3 images are selected
    }
    // Generate image previews from the selected files
    const previews = fileArray.map((file) => URL.createObjectURL(file));

    // Update the state with the new image previews
    setImagePreviews((prevImages) => [...prevImages, ...previews]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const images = [];
    const formData = new FormData();
    console.log(productImage);
    for (let i = 0; i < productImage.length; i++) {
      formData.append("items", productImage[i]);
      console.log(productImage[i]);
    }
    // try {
    //   const response = await axiosSecure.post("/upload", formData, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   });
    //   const getImage = response?.data?.files;
    //   getImage.forEach((a) => {
    //     images.push({
    //       image_filename: a.filename,
    //     });
    //   });
    const updatedProduct = {
      product_name: e.target.product_name.value,
      sku: e.target.sku.value,
      product_price: e.target.product_price.value,
      product_quantity: e.target.product_quantity.value,
      product_description: e.target.product_description.value,
      product_term_and_condition: e.target.product_term_and_condition.value,
      product_expiry_date: e.target.product_expiry_date.value,
      product_category: productCategory,
      product_sub_category: productSubCategory,
      variationType: variationType,
      variation: variation,
      product_image: images,
    };
    console.log(updatedProduct);
    //   const formResponse = await axiosSecure.put(
    //     "/api/product/:id",
    //     updatedProduct,
    //     {
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   );
    //   if (formResponse.status == 200) {
    //     //an alert must be shown as post successful message
    //     navigate("/dashboard/see-all-products");
    //   }
    // } catch (error) {
    //   console.log(error);
    //   // an alert must be shown as post failed message
    //   e.target.reset();
    // }

    e.target.reset();
  };
  return (
    <>
      <Helmet>
        <title>Nittyoponner Bazar|Admin-Update Product</title>
      </Helmet>

      {/* heading */}
      <div className="my-3">
        <DashboardHeading
          heading="Update Product"
          subheading="If you want to update any information of this product, please insert below."
        ></DashboardHeading>
      </div>

      {/* form */}
      <div className="p-4 m-4 rounded-xl border border-y-teal-700 shadow-lg shadow-teal-800">
        <form onSubmit={handleSubmit} className="mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-5 items-stretch justify-center ">
            {/* product name */}
            <div className="">
              <label className="label">
                <span className="label-text">Name of Your Product</span>
              </label>
              <input
                type="text"
                name="product_name"
                defaultValue="Jhalmuri"
                className="input input-bordered w-full"
                required
              />
            </div>
            {/* SKU of product */}
            <div className="">
              <label className="label">
                <span className="label-text">SKU of Your Product</span>
              </label>
              <input
                type="text"
                name="sku"
                defaultValue="BK1234"
                className="input input-bordered w-full"
                required
              />
            </div>
            {/* product image */}
            <div className="">
              <label className="label">
                <span className="label-text">Image of Your Product</span>
                <br />
                <p className="text-red-600 font-normal text-xs">
                  [Upload not more than 3 images of your product.]
                </p>
              </label>
              <input
                type="file"
                name="product_image"
                className="input input-bordered w-full py-2"
                onChange={handleImageInput}
                multiple={true}
              />
              {/* preview pictures */}
              <div className="mt-4 flex flex-wrap gap-3">
                {imagePreviews.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`preview-${index}`}
                    className="w-20 h-20 object-cover rounded-md border"
                  />
                ))}
              </div>
            </div>
            {/* product product category */}
            <div className="">
              <label className="label">
                <span className="label-text">
                  Select Category of Your Product
                </span>
              </label>
              <select
                className="select select-bordered w-full "
                required
                defaultValue={productCategory}
                onChange={(e) => setProductCategory(e.target.value)}
              >
                <option value="" disabled selected>
                  ---Category---
                </option>
                <option>Grocery</option>
                <option>Beverages</option>
                <option>Cake & Pastry</option>
                <option>Bread & Bakery</option>
                <option>Snacks</option>
                <option>Dairy</option>
                <option>Chocolate & Candy</option>
                <option>Rice & Biriani</option>
                <option>Fresh Vegetables</option>
                <option>Juices</option>
              </select>
            </div>
            {/* product sub category */}
            <div className="">
              <label className="label">
                <span className="label-text">
                  Select Sub Category of Your Product
                </span>
              </label>
              <select
                className="select select-bordered w-full "
                required
                defaultValue={productSubCategory}
                onChange={(e) => setProductSubCategory(e.target.value)}
              >
                <option value="" disabled selected>
                  ---Sub category---
                </option>
                <option>Juice</option>
                <option>Tea & Coffee</option>
                <option>Water & Sprinkler</option>
                <option>Soft Drinks</option>
              </select>
            </div>
            {/* product price */}
            <div>
              <label className="label">
                <span className="label-text">Price of Your Product</span>
              </label>
              <input
                type="number"
                name="product_price"
                defaultValue={500}
                className="input input-bordered w-full"
                required
              />
            </div>
            {/* product quantity */}
            <div>
              <label className="label">
                <span className="label-text">Quantity of Your Product</span>
              </label>
              <input
                type="number"
                name="product_quantity"
                defaultValue={400}
                className="input input-bordered w-full"
                required
              />
            </div>
            {/* expiry date */}
            <div>
              <label className="label">
                <span className="label-text">Expiry Date of Your Product</span>
              </label>
              <input
                type="date"
                name="product_expiry_date"
                defaultValue={new Date("2024-11-24")}
                className="input input-bordered w-full"
                required
              />
            </div>
            {/* product variation type */}
            {/* need to discuss later either to keep it like this or add variation with product name like the site othoba */}
            <div className="">
              <label className="label">
                <span className="label-text">
                  Select Variation Type of Your Product
                </span>
              </label>
              <select
                className="select select-bordered w-full "
                required
                onChange={(e) => setVariationType(e.target.value)}
              >
                <option value="" disabled selected>
                  ---Variation Type---
                </option>
                <option>Color</option>
                <option>Weight</option>
                <option>Size</option>
              </select>
            </div>
            {/* variations */}
            <div className="">
              <label className="label">
                <span className="label-text">
                  Select Variation of Your Product
                </span>
              </label>
              <div className="flex flex-row  space-x-2">
                <label className="cursor-pointer flex items-center">
                  <input
                    type="checkbox"
                    value="1L"
                    className="checkbox checkbox-primary"
                    onChange={handleSelectVariation}
                  />
                  <span className="ml-2">1L</span>
                </label>
                <label className="cursor-pointer flex items-center">
                  <input
                    type="checkbox"
                    value="1.5L"
                    className="checkbox checkbox-primary"
                    onChange={handleSelectVariation}
                  />
                  <span className="ml-2">1.5L</span>
                </label>
                <label className="cursor-pointer flex items-center">
                  <input
                    type="checkbox"
                    value="2L"
                    className="checkbox checkbox-primary"
                    onChange={handleSelectVariation}
                  />
                  <span className="ml-2">2L</span>
                </label>
                <label className="cursor-pointer flex items-center">
                  <input
                    type="checkbox"
                    value="5L"
                    className="checkbox checkbox-primary"
                    onChange={handleSelectVariation}
                  />
                  <span className="ml-2">5L</span>
                </label>
              </div>
            </div>
          </div>
          {/* description of product */}
          <div className=" my-5 px-5">
            <label className="label">
              <span className="label-text">Description of Your Product</span>
            </label>
            <textarea
              name="product_description"
              placeholder="Enter short description of your product here"
              className="textarea textarea-bordered textarea-md w-full "
              required
              defaultValue="This is for test"
            ></textarea>
          </div>
          {/* terms and conditions of product */}
          <div className=" my-5 px-5">
            <label className="label">
              <span className="label-text">
                Terms and Conditions of Your Product
              </span>
            </label>
            <textarea
              name="product_term_and_condition"
              placeholder="Enter terms and conditions of your product here"
              className="textarea textarea-bordered textarea-md w-full "
              defaultValue="This is for test"
            ></textarea>
          </div>
          <div className="flex flex-row items-center justify-center mx-auto">
            <button
              type="submit"
              className="btn btn-ghost btn-wide my-5 text-center bg-teal-500 text-white text-lg"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateProduct;
