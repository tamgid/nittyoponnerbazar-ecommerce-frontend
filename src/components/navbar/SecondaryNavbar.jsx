/* eslint-disable no-unused-vars */
// src/components/SecondaryNavbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { FaBars } from "react-icons/fa"; // Importing icon for the three-bar icon
import PropTypes from "prop-types"; // Import PropTypes for validation
import ParentSidebar from "../sidebar/ParentSidebar"; // Import the ParentSidebar component
import ChildSidebar from "../sidebar/ChildSidebar"; // Import the ChildSidebar component

const SecondaryNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar state
  const [isChildSidebarOpen, setIsChildSidebarOpen] = useState(false); // Child Sidebar state
  const [selectedCategory, setSelectedCategory] = useState(null); // Selected category state

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setIsChildSidebarOpen(false); // Ensure child sidebar is closed when parent opens
  };

  // Function to handle category click and open child sidebar
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setIsChildSidebarOpen(true);
  };

  // Function to close sidebar
  const closeSidebar = () => {
    setIsSidebarOpen(false);
    setIsChildSidebarOpen(false);
  };

  // Function to go back to the parent sidebar from the child sidebar
  const handleBackToParent = () => {
    setIsChildSidebarOpen(false);
  };

  return (
    <div>
      {/* Main Navbar */}
      <div className="text-white py-1.5" style={{ backgroundColor: "#085749" }}>
        <div className="mx-auto flex items-center w-full px-7">
          {/* Sidebar Toggle */}
          <div
            className="flex items-center cursor-pointer mr-2 hover:border hover:border-white rounded-md hover:shadow-lg p-2 transition-all duration-300"
            onClick={toggleSidebar} // Toggle sidebar on click
          >
            <FaBars className="text-white text-xl mr-1" />
            <span className="font-semibold">All</span>
          </div>

          {/* Navbar Items */}
          <div className="flex items-center space-x-2 font-semibold">
            <NavItem text="Today's Deals" to="/todays-deals" />
            <NavItem text="Customer Service" to="/customer-service" />
            <NavItem text="Registry" to="/registry" />
            <NavItem text="Gift Cards" to="/gift-cards" />
            <NavItem text="Sell" to="/sell" />
          </div>
        </div>
      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 flex z-50">
          {/* Overlay to close sidebar when clicking outside */}
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={closeSidebar}
          ></div>

          {/* Sidebar Component */}
          <div className="relative">
            {!isChildSidebarOpen ? (
              // Parent Sidebar
              <ParentSidebar
                onCategoryClick={handleCategoryClick}
                toggleSidebar={toggleSidebar}
              />
            ) : (
              // Child Sidebar (When a category is selected)
              <ChildSidebar
                selectedCategory={selectedCategory}
                onBackToParent={handleBackToParent}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

// Navbar Item Component
const NavItem = ({ text, to }) => {
  return (
    <Link
      to={to}
      className="cursor-pointer py-2 hover:border hover:border-white rounded-md hover:shadow-lg p-2 transition-all duration-300"
    >
      {text}
    </Link>
  );
};

// Prop Types Validation for NavItem
NavItem.propTypes = {
  text: PropTypes.string.isRequired, // Ensure text is a required string
  to: PropTypes.string.isRequired,   // Ensure to is a required string
};

export default SecondaryNavbar;
