import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const MobileNav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handlerToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="mobile-nav  justify-end">
        <div className="">
          <div
            onClick={handlerToggleMobileMenu}
            className="menu-icon cursor-pointer"
          >
            <img
              src={`${
                isMobileMenuOpen
                  ? "/src/assets/icons/close-menu.svg"
                  : "/src/assets/icons/menu-smartphone.svg"
              }`}
              width={24}
              height={24}
              alt=""
            />
          </div>
        </div>
      </nav>

      <div
        className={`mobile-menu-container ${isMobileMenuOpen ? "show" : ""}`}
      >
        <ul
          onClick={() => {
            setIsMobileMenuOpen(false);
          }}
          className="flex flex-col gap-6"
        >
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "purple-black-shadow" : "text-white"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "purple-black-shadow" : "text-white"
              }
            >
              Projects
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "purple-black-shadow" : "text-white"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileNav;
