import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="max-w-full">
      {/* Navbar container with fixed position */}
      <div className="fixed top-0 w-full z-10">
        <nav className="bg-[#1d2534] font-primary text-white flex justify-between mx-auto p-2 md:p-4">
          <a
            className="pt-2 md:pt-5 pl-2 md:pl-5 text-xl md:text-2xl xl:ml-[6rem]"
            href="/"
          >
            Portfolio
          </a>
          <div className="flex md:hidden">
            <button
              id="mobile-menu-button"
              className="text-white focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
          <ul
            className={`hidden md:flex px-2 md:px-12 py-2 md:py-4 space-x-4 md:space-x-8 justify-end items-center text-[20px] ${
              mobileMenuOpen ? 'hidden' : 'block'
            }`}
          >
            <li className="py-2 hover:text-cyan-400 transition-all duration-500 group relative cursor-pointer">
            <Link
              activeClass="active" // Class to apply when the link is active
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
          </li>
          <li className="hover:text-cyan-400 transition-all duration-500 cursor-pointer">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={toggleMobileMenu}
            >
              About
            </Link>
          </li>
          <li className="hover:text-cyan-400 transition-all duration-500 cursor-pointer">
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={toggleMobileMenu}
            >
              Skills
            </Link>
          </li>
          <li className="hover:text-cyan-400 transition-all duration-500 cursor-pointer">
            <Link
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={toggleMobileMenu}
            >
              Portfolio
            </Link>
          </li>
          <li className="hover:text-cyan-400 transition-all duration-500 cursor-pointer">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={toggleMobileMenu}
            >
              Contact
            </Link>
          </li>
          </ul>
        </nav>
      </div>
      <div
        id="mobile-menu"
        className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}
      >
        <li className="py-2 hover:text-cyan-400 transition-all duration-500 group relative cursor-pointer">
            <Link
              activeClass="active" // Class to apply when the link is active
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
          </li>
          <li className="hover:text-cyan-400 transition-all duration-500 cursor-pointer">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={toggleMobileMenu}
            >
              About
            </Link>
          </li>
          <li className="hover:text-cyan-400 transition-all duration-500 cursor-pointer">
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={toggleMobileMenu}
            >
              Skills
            </Link>
          </li>
          <li className="hover:text-cyan-400 transition-all duration-500 cursor-pointer">
            <Link
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={toggleMobileMenu}
            >
              Portfolio
            </Link>
          </li>
          <li className="hover:text-cyan-400 transition-all duration-500 cursor-pointer">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={toggleMobileMenu}
            >
              Contact
            </Link>
          </li>
      </div>
    </div>
  );
};

export default Navbar;
