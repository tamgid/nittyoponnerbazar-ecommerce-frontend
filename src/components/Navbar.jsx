/* eslint-disable no-unused-vars */
// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaCaretDown } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

const Navbar = () => {
  const [languageDropdown, setLanguageDropdown] = useState(false);
  const [personalDropdown, setPersonalDropdown] = useState(false);
  
  // Sample dynamic items (you can fetch or manage these dynamically later)
  const itemsInCart = 0; // This will be dynamic in your app
  
  const toggleLanguageDropdown = () => {
    setLanguageDropdown(!languageDropdown);
  };

  const togglePersonalDropdown = () => {
    setPersonalDropdown(!personalDropdown);
  };

  return (
    <div className="bg-white shadow-lg p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">Logo</Link>

        {/* Location */}
        <div className="flex items-center cursor-pointer">
          <MdLocationOn className="text-gray-700 mr-1" />
          <div className="flex flex-col">
            <span className="text-sm">Deliver to</span>
            <span className="font-semibold">Bangladesh</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex items-center space-x-2">
          <div className="relative">
            <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-l">
              All
            </button>
            <div className="absolute z-10 hidden bg-white border rounded shadow-md mt-1 w-48">
              {/* Dropdown categories - Can be made dynamic */}
              <div className="overflow-y-scroll h-48">
                <div className="py-2 px-4 hover:bg-gray-200">All Departments</div>
                <div className="py-2 px-4 hover:bg-gray-200">Arts & Crafts</div>
                <div className="py-2 px-4 hover:bg-gray-200">Automotive</div>
                {/* Add other categories as needed */}
              </div>
            </div>
          </div>
          <input
            type="text"
            placeholder="Search Nittyoponnerbazar"
            className="border border-gray-300 rounded py-2 px-4"
          />
          <button className="bg-gray-200 text-gray-700 p-2 rounded">
            <FaShoppingCart />
          </button>
        </div>

        {/* Language Selection */}
        <div className="relative inline-block">
          <button
            onClick={toggleLanguageDropdown}
            className="flex items-center space-x-2">
            <img src="path_to_usa_flag_image" alt="USA Flag" className="w-4 h-4" />
            <span>EN</span>
            <FaCaretDown />
          </button>
          {languageDropdown && (
            <div className="absolute z-10 bg-white border rounded shadow-md mt-1 w-40">
              <div className="p-2 font-semibold">Change Language</div>
              <div className="flex items-center py-2 px-4 hover:bg-gray-200">
                <input type="radio" name="language" className="mr-2" />
                <label>English</label>
                <span className="ml-auto">EN</span>
              </div>
              <div className="flex items-center py-2 px-4 hover:bg-gray-200">
                <input type="radio" name="language" className="mr-2" />
                <label>Bangla</label>
                <span className="ml-auto">BAN</span>
              </div>
            </div>
          )}
        </div>

        {/* Personal Details */}
        <div className="relative inline-block">
          <button
            onClick={togglePersonalDropdown}
            className="flex flex-col items-start">
            <span>Hello, sign in</span>
            <span className="flex items-center">
              Accounts & Lists <FaCaretDown className="ml-1" />
            </span>
          </button>
          {personalDropdown && (
            <div className="absolute z-10 bg-white border rounded shadow-md mt-1 w-40">
              {/* Dropdown content goes here */}
            </div>
          )}
        </div>

        {/* Returns & Orders */}
        <div className="cursor-pointer flex flex-col items-start">
          <span>Returns</span>
          <span>& Orders</span>
        </div>

        {/* Shopping Cart */}
        <Link to="/cart" className="flex items-center">
          <FaShoppingCart className="text-2xl" />
          {itemsInCart > 0 && (
            <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">{itemsInCart}</span>
          )}
          <span className="ml-2">Cart</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
