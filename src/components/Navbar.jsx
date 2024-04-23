import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <header className="header">
      <div className="hologram flex text-lg gap-7 text-white font-bold rounded-lg shadow-lg px-4 py-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "purple-black-shadow" : "text-white"
          }
        >
          AK
        </NavLink>
      </div>

      <nav className="">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "purple-black-shadow" : "text-white"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "purple-black-shadow" : "text-white"
          }
        >
          Projects
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "purple-black-shadow" : "text-white"
          }
        >
          Contact
        </NavLink>
      </nav>

      <MobileNav/>
      
    </header>
  );
};

export default Navbar;
