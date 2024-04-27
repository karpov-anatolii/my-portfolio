import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";
import MobileNav from "./MobileNav";
import { useEffect, useRef, useState } from "react";
import { soundoff, soundon } from "../assets/icons";
import space from "../assets/floating-in-empty-space.mp3";

const Navbar = () => {
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  const audioRef = useRef(new Audio(space));
  audioRef.current.volume = 0.9;
  audioRef.current.loop = true;

  useEffect(() => {
    // joystickRef.current.addEventListener("touchmove", handlePointerMove);
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      // joystickRef.current.removeEventListener("touchmove", handlePointerMove);
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

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

      <div className=" hologram rounded-lg  px-4 py-2">
        <img
          src={isPlayingMusic ? soundoff : soundon}
          alt="jukebox"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className="w-[30px] h-[30px] cursor-pointer object-contain"
        />
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

      <MobileNav />
    </header>
  );
};

export default Navbar;
