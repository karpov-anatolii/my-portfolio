import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  menuSmartphone,
  closeMenu,
  arrowsIn,
  arrowsOut,
} from "../assets/icons";

const MobileNav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const handlerToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleToggleFullscreen = () => {
    const element = document.documentElement;
    if (!isFullscreen) {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  return (
    <>
      <nav className="mobile-nav  justify-end">
        <div className="flex items-center gap-6">
          <div>
            <img
              src={isFullscreen ? arrowsIn : arrowsOut}
              alt="fullscreen toggle"
              width={30}
              height={30}
              onClick={handleToggleFullscreen}
            />
          </div>
          <div
            onClick={handlerToggleMobileMenu}
            className="menu-icon cursor-pointer"
          >
            <img
              src={`${isMobileMenuOpen ? closeMenu : menuSmartphone}`}
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
