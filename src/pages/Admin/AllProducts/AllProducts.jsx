import { Helmet } from "react-helmet-async";
import DashboardHeading from "../../Dashboard/DashboardHeading";
import { FaFilter, FaSort } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllProducts = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [subDropdown, setSubDropdown] = useState(null);
  const [filterText, setFilterText] = useState("Filter by");
  const [selectedFilter, setSelectedFilter] = useState("");
  const [isSortdownOpen, setIsSortdownOpen] = useState(false);
  const [sortOption, setSortOption] = useState("Sort by");
  const axiosSecure = useAxiosSecure();

  //   sort dropdown related functions
  const toggleSortdown = () => {
    setIsSortdownOpen(!isSortdownOpen);
  };

  const handleSortType = (option) => {
    setSortOption(option);
    setIsSortdownOpen(false); // Close the dropdown after selection
  };

  //   filter dropdown related functions
  const closeDropdowns = () => {
    setActiveDropdown(null);
    setSubDropdown(null);

    // Remove the click listener from the document
    document.removeEventListener("click", handleClickOutside);
  };
  const handleClickOutside = (event) => {
    // Close dropdown if the click is outside the dropdown
    if (!event.target.closest(".dropdown-container")) {
      closeDropdowns();
    }
  };
  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    setSubDropdown(null); // Close the sub-dropdown if switching categories
    // Add a click listener to the document
    if (!activeDropdown) {
      document.addEventListener("click", handleClickOutside);
    }
  };
  const handleSubDropdown = (subDropdownOption) => {
    setSubDropdown(
      subDropdown === subDropdownOption ? null : subDropdownOption
    );
  };
  const handleSelection = (mainOption, subOption) => {
    const newFilter = `${mainOption}: ${subOption}`;
    setSelectedFilter(newFilter);
    setFilterText(newFilter); // Update the button text
    setActiveDropdown(null); // Close all dropdowns after selection
    setSubDropdown(null);
  };

  //   search related functions
  const handleSearch = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Helmet>
        <title>Nittyoponner Bazar|Admin-All Products</title>
      </Helmet>

      {/* heading */}
      <div className="my-3">
        <DashboardHeading
          heading="All Products"
          subheading=""
        ></DashboardHeading>
      </div>

      {/* filter, sort and search functionalities */}
      <div className="grid grid-cols-2 md:grid-cols-3 space-y-4 items-center justify-center md:justify-between my-5">
        {/* filter button */}
        <div className="relative pl-6  dropdown-container">
          <button
            className="btn btn-ghost btn-md bg-transparent text-teal-600 border border-teal-700 ml-1 flex items-center"
            onClick={() => toggleDropdown("main")}
          >
            {filterText}
            {filterText === "Filter by" && <FaFilter className="ml-2" />}
          </button>

          {/* Main Dropdown */}
          {activeDropdown === "main" && (
            <div className="absolute bg-white border shadow-md mt-2 py-2 w-40 z-10">
              <button
                className="block w-full text-left px-4 py-2 hover:bg-teal-100"
                onClick={() => handleSubDropdown("Price")}
              >
                Price
              </button>
              <button
                className="block w-full text-left px-4 py-2 hover:bg-teal-100"
                onClick={() => handleSubDropdown("Weight")}
              >
                Weight
              </button>
              <button
                className="block w-full text-left px-4 py-2 hover:bg-teal-100"
                onClick={() => handleSubDropdown("Availability")}
              >
                Availability
              </button>
            </div>
          )}

          {/* Sub-Dropdown for Price */}
          {subDropdown === "Price" && (
            <div className="absolute bg-white border shadow-md mt-2 py-2 w-40 z-20">
              <button
                className="block w-full text-left px-4 py-2 hover:bg-teal-100"
                onClick={() => handleSelection("Price", "0-200")}
              >
                0-200
              </button>
              <button
                className="block w-full text-left px-4 py-2 hover:bg-teal-100"
                onClick={() => handleSelection("Price", "201-500")}
              >
                201-500
              </button>
              <button
                className="block w-full text-left px-4 py-2 hover:bg-teal-100"
                onClick={() => handleSelection("Price", "500-1000")}
              >
                500-1000
              </button>
            </div>
          )}

          {/* Sub-Dropdown for Weight */}
          {subDropdown === "Weight" && (
            <div className="absolute bg-white border shadow-md mt-2 py-2 w-40 z-20">
              <button
                className="block w-full text-left px-4 py-2 hover:bg-teal-100"
                onClick={() => handleSelection("Weight", "500g")}
              >
                500g
              </button>
              <button
                className="block w-full text-left px-4 py-2 hover:bg-teal-100"
                onClick={() => handleSelection("Weight", "1kg")}
              >
                1kg
              </button>
              <button
                className="block w-full text-left px-4 py-2 hover:bg-teal-100"
                onClick={() => handleSelection("Weight", "2kg")}
              >
                2kg
              </button>
            </div>
          )}

          {/* Sub-Dropdown for Availability */}
          {subDropdown === "Availability" && (
            <div className="absolute bg-white border shadow-md mt-2 py-2 w-40 z-20">
              <button
                className="block w-full text-left px-4 py-2 hover:bg-teal-100"
                onClick={() =>
                  handleSelection("Availability", "In Stock & Not Expired")
                }
              >
                In Stock & Not Expired
              </button>
              <button
                className="block w-full text-left px-4 py-2 hover:bg-teal-100"
                onClick={() =>
                  handleSelection("Availability", "Out of Stock / Expired")
                }
              >
                Out of Stock / Expired
              </button>
            </div>
          )}
        </div>
        {/* sort button */}
        <div className="relative">
          <button
            className="btn btn-ghost btn-md bg-transparent text-teal-600 border border-teal-700 ml-1 flex items-center"
            onClick={toggleSortdown}
          >
            {sortOption} <FaSort className="ml-2" />
          </button>

          {/* Dropdown */}
          {isSortdownOpen && (
            <div className="absolute bg-white border shadow-md mt-2 py-2 w-40 z-10">
              <button
                className="block w-full text-left px-4 py-2 hover:bg-teal-100"
                onClick={() => handleSortType("Price: Low to High")}
              >
                Price: Low to High
              </button>
              <button
                className="block w-full text-left px-4 py-2 hover:bg-teal-100"
                onClick={() => handleSortType("Price: High to Low")}
              >
                Price: High to Low
              </button>
            </div>
          )}
        </div>
        {/* search field */}
        <div className=" px-8 md:pr-12 col-span-2 md:col-auto">
          {" "}
          <form onSubmit={handleSearch} className="flex flex-row ">
            <input
              type="text"
              placeholder="Type here to search"
              name="searchTerm"
              className="input input-bordered input-accent w-full max-w-xs"
            />
            <button className="btn btn-ghost btn-md bg-teal-600 text-white ml-1">
              Search
            </button>
          </form>
        </div>
      </div>

      {/* table starts here */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-center">
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Sub category</th>
              <th>Price (in Taka)</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="text-center">
              <td>01</td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-14 w-14">
                      <img src="/biriani.jpg" alt="Grocery" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Kacchi Biriani</div>
                  </div>
                </div>
              </td>
              <td>Rice & Biriani</td>
              <td>Kacchi</td>
              <td>290</td>
              <td>100</td>
              <th>
                <button className="btn btn-ghost btn-md bg-teal-600 text-white">
                <Link to={`/dashboard/view-product`}>View Product</Link>
                </button>
              </th> 
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllProducts;
