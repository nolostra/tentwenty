"use client";
import React from "react";

const Header: React.FC = () => (
  <header className="bg-white shadow-md h-24 w-full font-sans">
    <nav className="flex flex-col md:flex-row justify-between items-center px-6 h-full">
      {/* Logo or Branding could go here */}
      <div className="flex-1">
        <ul className="flex flex-col md:flex-row md:space-x-5 text-xs ">
          <li>
            <a href="#about" className="text-gray-800 hover:text-blue-600">
              About
            </a>
          </li>
          <li>
            <a href="#news" className="text-gray-800 hover:text-blue-600">
              News
            </a>
          </li>
          <li>
            <a href="#services" className="text-gray-800 hover:text-blue-600">
              Services
            </a>
          </li>
          <li>
            <a href="#team" className="text-gray-800 hover:text-blue-600">
              Our Team
            </a>
          </li>
          <li>
            <a href="#enquiry" className="text-gray-800 hover:text-blue-600">
              Make Enquiry
            </a>
          </li>
        </ul>
      </div>
      <button className="  flex items-center justify-center bg-navbar-button text-black border-2 border-black w-28 h-8 text-sm">
        <span>Contact us</span>
        <i className="fas fa-arrow-right ml-2"></i>
      </button>
    </nav>
  </header>
);

export default Header;
