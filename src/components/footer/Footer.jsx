/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleBackToTop = (e) => {
    e.preventDefault(); // Prevent default link behavior
    window.scrollTo({
      top: 0,
      behavior: "smooth", // This makes the scroll smooth
    });
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Back to top link */}
      <div
        className="group text-center mb-8 py-5 relative"
        style={{
          backgroundColor: "#1F2937", // Initial background color
        }}
      >
        <div className="absolute inset-0 group-hover:bg-[#485769] transition-all duration-300"></div>
        <Link
          to="/"
          className="relative z-10 text-white"
          onClick={handleBackToTop}
        >
          Back to top
        </Link>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-10 py-5">
        {/* Services Column */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Services</h3>
          <ul className="space-y-3 text-sm">
            {" "}
            {/* Add space between the list items */}
            <li>
              <Link to="#" className="text-gray-300 hover:text-white">
                Branding
              </Link>
            </li>
            <li>
              <Link to="#" className="text-gray-300 hover:text-white">
                Design
              </Link>
            </li>
            <li>
              <Link to="#" className="text-gray-300 hover:text-white">
                Marketing
              </Link>
            </li>
            <li>
              <Link to="#" className="text-gray-300 hover:text-white">
                Advertisement
              </Link>
            </li>
          </ul>
        </div>

        {/* Company Column */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Company</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="#" className="text-gray-300 hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link to="#" className="text-gray-300 hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link to="#" className="text-gray-300 hover:text-white">
                Jobs
              </Link>
            </li>
            <li>
              <Link to="#" className="text-gray-300 hover:text-white">
                Press Kit
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal Column */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Legal</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="#" className="text-gray-300 hover:text-white">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link to="#" className="text-gray-300 hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="#" className="text-gray-300 hover:text-white">
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Let Us Help You Column */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Let Us Help You</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="#" className="text-gray-300 hover:text-white">
                Your Account
              </Link>
            </li>
            <li>
              <Link to="#" className="text-gray-300 hover:text-white">
                Your Orders
              </Link>
            </li>
            <li>
              <Link to="#" className="text-gray-300 hover:text-white">
                Shipping Rates & Policies
              </Link>
            </li>
            <li>
              <Link to="#" className="text-gray-300 hover:text-white">
                Returns & Replacements
              </Link>
            </li>
            <li>
              <Link to="#" className="text-gray-300 hover:text-white">
                Manage Your Content and Devices
              </Link>
            </li>
            <li>
              <Link to="#" className="text-gray-300 hover:text-white">
                Help
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* License and legal links */}
      <div className="bg-gray-800 text-gray-400 text-sm py-6 mt-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* First line of links (all in the same row) */}
          <div className="flex justify-center space-x-4 mb-4">
            <Link to="#" className="hover:text-white">
              Conditions of Use
            </Link>
            <Link to="#" className="hover:text-white">
              Privacy Notice
            </Link>
            <Link to="#" className="hover:text-white">
              Consumer Health Data Privacy Disclosure
            </Link>
            <Link to="#" className="hover:text-white">
              Your Ads Privacy Choices
            </Link>
          </div>

          {/* Second line of the license (centered below) */}
          <div>
            <span>
              © 1996-2024, nittyoponnerbazar.com, Inc. or its affiliates
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
