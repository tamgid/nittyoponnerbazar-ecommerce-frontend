import { Rating } from "@smastrom/react-rating";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ProductReview = () => {
  const axiosSecure = useAxiosSecure();
  
  // review deletion function
  const handleDelete = async (id) => {
    console.log("Deleted.", id);
    Swal.fire({
      title: "Are you sure you want to delete this review?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.put("/api/product-review/:id").then((res) => {
          //   messages need to be shown after getting response
        });
      }
    });
  };
  return (
    <div>
      <div className="card p-6 border border-y-teal-600 my-5 rounded-lg shadow-lg">
        <h1 className="text-slate-800 font-medium text-2xl mb-5">
          Customer Reviews: (2)
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Review 1 */}
          <div className="relative p-4 bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow group">
            <div className="absolute top-3 right-3 hidden group-hover:flex items-center justify-center">
              <button
                className="p-1 bg-red-100 rounded-full hover:bg-red-200 transition"
                onClick={() => {
                  handleDelete("1");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex items-center mb-4">
              <img
                className="w-12 h-12 rounded-full border border-teal-500"
                src="https://via.placeholder.com/150"
                alt="Customer 1"
              />
              <div className="ml-3">
                <p className="text-lg font-semibold text-slate-700">John Doe</p>
                <p className="text-sm text-teal-600">Food Enthusiast</p>
              </div>
            </div>
            <p className="text-neutral-600 text-base">
              &quot;Absolutely loved the biryani! Perfectly spiced, fresh, and
              just the right amount of portion. Will definitely order
              again!&quot;
            </p>
            <div className="mt-4 flex items-center">
              <span className="text-teal-600 font-medium">Rating:</span>
              <div className="flex ml-2">
                <Rating style={{ maxWidth: 150 }} value={4} readOnly />
              </div>
            </div>
          </div>
          {/* Review 2 */}
          <div className="relative p-4 bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow group">
            <div className="absolute top-3 right-3 hidden group-hover:flex items-center justify-center">
              <button
                className="p-1 bg-red-100 rounded-full hover:bg-red-200 transition"
                onClick={() => {
                  handleDelete("2");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex items-center mb-4">
              <img
                className="w-12 h-12 rounded-full border border-teal-500"
                src="https://via.placeholder.com/150"
                alt="Customer 1"
              />
              <div className="ml-3">
                <p className="text-lg font-semibold text-slate-700">John Doe</p>
                <p className="text-sm text-teal-600">Food Enthusiast</p>
              </div>
            </div>
            <p className="text-neutral-600 text-base">
              &quot;Absolutely loved the biryani! Perfectly spiced, fresh, and
              just the right amount of portion. Will definitely order
              again!&quot;
            </p>
            <div className="mt-4 flex items-center">
              <span className="text-teal-600 font-medium">Rating:</span>
              <div className="flex ml-2">
                <Rating style={{ maxWidth: 150 }} value={5} readOnly />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductReview;
