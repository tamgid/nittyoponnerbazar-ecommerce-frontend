/* eslint-disable no-unused-vars */
// src/components/Navbar.jsx
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaCaretDown,
  FaSearch,
  FaCartPlus,
} from "react-icons/fa";
import PersonalDetailsDropdown from "../PersonalDetailsDropdown";
import { MdLocationOn } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import cart from "../../assets/cart.png";
import logo from "../../assets/logo-home.jpg";
import usa from "../../assets/usa-flag.webp";
import bd from "../../assets/bd-flag.png";

const Navbar = () => {
  const [languageDropdown, setLanguageDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN"); // Default language
  const [flagImage, setFlagImage] = useState(usa); // Default flag
  const [personalDropdown, setPersonalDropdown] = useState(false);
  const [categoryDropdown, setCategoryDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchInput, setSearchInput] = useState("");
  const [itemsInCart, setItemsInCart] = useState(0); // Set initial count to 0

  const navigate = useNavigate();

  const toggleLanguageDropdown = () => {
    setLanguageDropdown(!languageDropdown);
  };

  const handleLanguageChange = (language, flag) => {
    setSelectedLanguage(language); // Set selected language
    setFlagImage(flag); // Update the flag image
    setLanguageDropdown(false); // Close dropdown
  };

  const togglePersonalDropdown = () => {
    setPersonalDropdown(!personalDropdown);
  };

  const toggleCategoryDropdown = () => {
    setCategoryDropdown(!categoryDropdown);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory("All"); // Set the selected category
    setSearchInput(category); // Update the search input
    setCategoryDropdown(false); // Close the dropdown
  };

  const handleLogoClick = () => {
    if (window.location.pathname === "/") {
      // If already on the home page, force a reload
      window.location.reload();
    } else {
      // Navigate to home page
      navigate("/", { replace: true });
    }
  };

  return (
    <div style={{ backgroundColor: "#1a2223" }} className="shadow-lg p-1">
      <div className="mx-auto flex items-center justify-between px-5">
        {/* Logo */}
        <Link
          to="/"
          className="hover:border hover:border-white rounded-md hover:shadow-lg pt-0.5 pr-2 pb-0.5 pl-2 transition-all duration-300"
        >
          <img
            src={logo}
            alt="Nittyoponnerbazar Logo"
            className="h-[3.3rem] w-[4.5rem] cursor-pointer"
            onClick={handleLogoClick} // Handle click event
          />
        </Link>

        <Link
          to="/your-target-route"
          className="flex items-center cursor-pointer hover:border hover:border-white rounded-md hover:shadow-lg pt-1.5 pr-2 pb-1.5 pl-2 transition-all duration-300"
        >
          <MdLocationOn className="text-white mr-1 size-8" />
          <div className="flex flex-col">
            <span className="text-sm text-gray-300">Deliver to</span>
            <span className="font-semibold text-white">Chittagong</span>
          </div>
        </Link>

        <div className="flex items-center">
          <div className="relative flex items-center">
            {/* Category Dropdown Button */}
            <button
              onClick={toggleCategoryDropdown}
              className="bg-gray-200 text-gray-700 py-2.5 px-2 rounded-l flex items-center border border-gray-300"
            >
              {selectedCategory}
              <FaCaretDown className="ml-2" />
            </button>

            {/* Dropdown List */}
            {categoryDropdown && (
              <div className="absolute z-10 bg-white border rounded shadow-md mt-[40rem] w-[15rem] max-h-[37rem] overflow-y-auto">
                <div>
                  {[
                    "All Departments",
                    "Arts & Crafts",
                    "Automotive",
                    "Baby",
                    "Beauty & Personal Care",
                    "Books",
                    "Boys Fashion",
                    "Computers",
                    "Deals",
                    "Digital Music",
                    "Electronics",
                    "Girls Fashion",
                    "Health & Household",
                    "Home & Kitchen",
                    "Industrial & Scientific",
                    "Kindle Store",
                    "Luggage",
                    "Mens Fashion",
                    "Movies & TV",
                    "Music",
                    "CDs & Vinyl",
                    "Pet Supplies",
                    "Prime Video",
                    "Software",
                    "Sports & Outdoors",
                    "Tools & Home Improvement",
                    "Toys & Games",
                    "Video Games",
                    "Womens Fashion",
                  ].map((category) => (
                    <div
                      key={category}
                      className="py-2 px-4 hover:bg-gray-200 cursor-pointer"
                      onClick={() => handleCategoryClick(category)}
                    >
                      {category}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Search Input */}
            <input
              type="text"
              value={searchInput} // Set the value from the state
              onChange={(e) => setSearchInput(e.target.value)} // Update search input state
              placeholder="Search Nittyoponnerbazar"
              className="border border-gray-300 py-2.5 px-4 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 w-[45rem]"
            />

            {/* Search Icon Button */}
            <Link to="/your-search-result" className="cursor-pointer">
              <button className="bg-gray-200 text-gray-700 py-3 px-3 rounded-r border border-gray-300 flex items-center">
                <FaSearch className="size-5" />
              </button>
            </Link>
          </div>
        </div>

        <div className="relative inline-block hover:border hover:border-white rounded-md hover:shadow-lg pt-4 pr-2 pb-4 pl-2 transition-all duration-300">
          <button
            onClick={toggleLanguageDropdown}
            className="flex items-center space-x-2 text-white"
          >
            <img
              src={flagImage}
              alt={selectedLanguage === "EN" ? "USA Flag" : "Bangladesh Flag"}
              className="w-7 h-5"
            />
            <span className="font-semibold">{selectedLanguage}</span>
            <FaCaretDown className="text-gray-300 ml-1" />
          </button>

          {languageDropdown && (
            <div className="absolute z-10 bg-white border rounded shadow-md mt-3 w-40">
              <div className="p-2 font-semibold">Change Language</div>
              <div
                className="flex items-center py-2 px-4 hover:bg-gray-200 cursor-pointer font-semibold"
                onClick={
                  () => handleLanguageChange("EN", usa) // Pass the usa flag directly
                }
              >
                <input
                  type="radio"
                  name="language"
                  className="mr-2 size-4"
                  checked={selectedLanguage === "EN"}
                  readOnly
                />
                <label>English</label>
                <span className="ml-auto">EN</span>
              </div>
              <div
                className="flex items-center py-2 px-4 hover:bg-gray-200 cursor-pointer font-semibold"
                onClick={
                  () => handleLanguageChange("BAN", bd) // Pass the bd flag directly
                }
              >
                <input
                  type="radio"
                  name="language"
                  className="mr-2 size-4"
                  checked={selectedLanguage === "BAN"}
                  readOnly
                />
                <label>Bangla</label>
                <span className="ml-auto">BAN</span>
              </div>
            </div>
          )}
        </div>

        {/* Personal Details */}
        <div className="relative inline-block hover:border hover:border-white rounded-md hover:shadow-lg pt-1 pr-2 pb-1 pl-2 transition-all duration-300">
          <button
            onClick={togglePersonalDropdown}
            className="flex flex-col items-start"
          >
            <span className="text-white">Hello, sign in</span>
            <span className="flex items-center text-white font-semibold">
              Accounts & Lists <FaCaretDown className="ml-1 text-gray-300" />
            </span>
          </button>
          {personalDropdown && (
            <PersonalDetailsDropdown toggle={togglePersonalDropdown} /> // Render the new component
          )}
        </div>

        {/* Returns & Orders */}
        <Link
          to="/returns-and-orders"
          className="cursor-pointer flex flex-col items-start hover:border hover:border-white rounded-md hover:shadow-lg pt-1 pr-2.5 pb-1 pl-2.5 transition-all duration-300"
        >
          <span className="text-white">Returns</span>
          <span className="text-white font-semibold">& Orders</span>
        </Link>

        <Link
          to="/your-shopping-cart"
          className="relative flex items-center hover:border hover:border-white rounded-md hover:shadow-lg pt-2 pr-2 pb-2 pl-2 transition-all duration-300"
        >
          <FaShoppingCart className="text-3xl text-white w-10 h-10" />

          {/* Dynamic item count */}
          <span
            className="absolute top-2 left-7 flex items-center justify-center text-lg font-semibold"
            style={{ color: "#b96800" }}
          >
            {itemsInCart > 0 ? itemsInCart : "0"} {/* Display item count */}
          </span>

          <span className="ml-2 text-white font-semibold">Cart</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
