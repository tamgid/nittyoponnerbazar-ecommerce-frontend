import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaCircleCheck } from "react-icons/fa6";
import { useState } from "react";
import ProductReview from "./ProductReview";
import TermsAndConditions from "./TermsAndConditions";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ViewAProduct = () => {
  const [rating, setRating] = useState(5);
  const axiosSecure = useAxiosSecure();

  // product deletion function
  const handleDelete = async (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure you want to delete this product?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.put("/api/product").then((res) => {
          //   messages need to be shown after getting response
        });
      }
    });
  };

  return (
    <>
      <div className="flex flex-col md:flex-row gap-5 p-4 border border-b-teal-600 m-2 rounded-md">
        {/* product images */}
        <div className="md:w-1/2">
          <Carousel autoPlay>
            {/* there will be mapping of images where images will be placed dynamically */}
            <div>
              <img alt="" src="/biriani.jpg" width={50} />
            </div>
            <div>
              <img alt="" width={50} src="/biriani.jpg" />
            </div>
            <div>
              <img alt="" width={50} src="/biriani.jpg" />
            </div>
          </Carousel>
        </div>
        {/* information of product */}
        <div className="md:w-1/2 space-y-3 pr-6">
          <div className="flex flex-row  items-center justify-between">
            <h2 className="text-slate-800 text-2xl font-semibold">
              Kacchi Biriani
            </h2>
            <p>Product ID: 1220001</p>
          </div>
          <p className="text-lg text-neutral-600">SKU: bk123455</p>
          <p className="text-neutral-800 text-base">
            Biryani is a dish that is typically prepared using rice, lentils,
            and meat or fish, often served with vegetables, spices, and a sauce
            called biryani sauce.
          </p>
          <p className="text-lg">
            <span className="text-neutral-600">Category:</span>{" "}
            <span className="text-teal-600">Rice & Biriani</span>
          </p>
          <p className="text-lg">
            <span className="text-neutral-600">Sub Category:</span>{" "}
            <span className="text-teal-600">Kacchi Biriani</span>
          </p>
          <p className="text-lg">
            <span className="text-neutral-600">
              Price:{" "}
              <span className="line-through decoration-teal-600 px-1">
                310 BDT
              </span>
            </span>{" "}
            <span className="text-teal-600">320 BDT</span>
          </p>
          <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between">
            <div>
              {" "}
              <p className="text-teal-700 inline-flex items-center">
                <FaCircleCheck className="mr-1"></FaCircleCheck>In Stock
              </p>
              <p className="text-sm text-neutral-600 px-3">
                (25 pieces available)
              </p>
            </div>
            <div>
              <p className="text-md">
                <span className="text-neutral-600 mr-1">Expiry Date:</span>
                <span className="text-teal-600">2024-11-30</span>
              </p>
            </div>
          </div>
          <p className="text-lg inline-flex items-center">
            <span className="text-neutral-600 mr-2">Rating:</span>
            <Rating style={{ maxWidth: 150 }} value={rating} readOnly />
          </p>
          <div>
            <button className="btn btn-ghost btn-md bg-teal-600 text-white">
              {/* <Link to={`/dashboard/update-product/${}`}>  */}
              <Link to={`/dashboard/update-product`}>Update</Link>
            </button>
            <button
              onClick={() => {
                handleDelete("01");
              }}
              className="btn btn-ghost btn-md bg-red-700 text-white ml-3"
            >
              Delete
            </button>
          </div>
        </div>
      </div>

      <div className="p-6">
        <TermsAndConditions></TermsAndConditions>
        <ProductReview></ProductReview>
      </div>
    </>
  );
};

export default ViewAProduct;
