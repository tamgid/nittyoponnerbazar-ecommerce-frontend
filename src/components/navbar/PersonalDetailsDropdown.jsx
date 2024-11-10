/* eslint-disable no-unused-vars */
// src/components/PersonalDetailsDropdown.jsx
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"; // Import PropTypes

const PersonalDetailsDropdown = ({ toggle }) => {
  return (
    <div
      className="absolute z-20 w-[35rem] bg-white shadow-lg rounded-md border border-gray-300 p-4"
      style={{ left: "-180%" }}
    >
      {/* Sign In Button */}
      <div className="flex justify-center mb-1">
        {" "}
        {/* Wrap with flex container */}
        <button
          className="w-[15rem] bg-yellow-500 text-gray-700 font-bold py-2 rounded-md"
          onClick={toggle} // Call the toggle function when clicked
        >
          Sign In
        </button>
      </div>

      {/* New Customer Section */}
      <div className="flex items-center justify-center">
        {" "}
        {/* Use flex and justify-center for row alignment */}
        <span className="text-gray-600">New customer?</span>
        <Link to="/signup" className="text-blue-500 font-semibold ml-1">
          {" "}
          {/* Add margin-left for spacing */}
          Start here
        </Link>
      </div>

      {/* Divider */}
      <hr className="my-4" />

      {/* Account Links Section */}
      <div className="flex justify-between">
        {/* Your Lists */}
        <div className="flex flex-col w-3/4">
          {" "}
          {/* Adjust width here, e.g., w-1/3 */}
          <span className="font-semibold">Your Lists</span>
          <Link to="/create-list" className="text-gray-700">
            Create a List
          </Link>
          <Link to="/find-list" className="text-gray-700">
            Find a List or Registry
          </Link>
        </div>

        <div className="border-l border-gray-300 pl-4 w-2/3">
          {" "}
          {/* Adjust width of this section as needed */}
          {/* Divider line between sections */}
          <span className="font-semibold">Your Account</span>
          <div className="flex flex-col text-gray-700">
            <Link to="/my-profile">Account</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/recommendations">Recommendations</Link>
            <Link to="/browsing-history">Browsing History</Link>
            <Link to="/watchlist">Watchlist</Link>
            <Link to="/video-purchases">Video Purchases & Rentals</Link>
            <Link to="/kindle-unlimited">Kindle Unlimited</Link>
            <Link to="/content-devices">Content & Devices</Link>
            <Link to="/subscribe-save">Subscribe & Save Items</Link>
            <Link to="/memberships">Memberships & Subscriptions</Link>
            <Link to="/music-library">Music Library</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Prop Types Validation
PersonalDetailsDropdown.propTypes = {
  toggle: PropTypes.func.isRequired, // Ensure toggle is a required function
};

export default PersonalDetailsDropdown;
