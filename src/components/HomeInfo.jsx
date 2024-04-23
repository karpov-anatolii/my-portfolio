import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";
import { useState } from "react";

const HomeInfo = ({ currentStage }) => {
  const [isDeactive, setIsDeactive] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();

    setIsDeactive(!isDeactive);
  };

  if (currentStage === 1)
    return (
      <div
        className={`hologram ${
          isDeactive ? "deactive" : ""
        } rounded-lg shadow-lg p-4`}
        onClick={(e) => handleClick(e)}
      >
        <img
          src="/src/assets/icons/x-mark.svg"
          alt="close"
          className="absolute top-2 right-2 w-[20px] h-[20px] cursor-pointer pointer-events-auto"
        />
        <h1 className="sm:text-xl sm:leading-snug text-center  py-4 px-8 text-white mx-5">
          Hi, I'm
          <span className="font-semibold mx-2 text-purple-600">Anatolii</span>
          👋
          <br />A Full Stack Developer from Ukraine 🇺🇦
        </h1>
        <p>
          Now you are in my portfolio. You are actually in a spacecraft, which
          is inside a huge staircase. Why inside a staircase? Because for many
          years, I designed concrete stairs. But now I'm moving on to something
          new and more exciting. So, push the start button and explore my
          space-site.
        </p>
      </div>
    );

  if (currentStage === 2) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          Worked with many companies <br /> and picked up many skills along the
          way
        </p>

        <Link to="/about" className="neo-brutalism-white neo-btn">
          Learn more
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className="info-box">
        <p className="font-medium text-center sm:text-xl">
          Led multiple projects to success over the years. <br /> Curious about
          the impact?
        </p>

        <Link to="/projects" className="neo-brutalism-white neo-btn">
          Visit my portfolio
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          Need a project done or looking for a dev? <br /> I'm just a few
          keystrokes away
        </p>

        <Link to="/contact" className="neo-brutalism-white neo-btn">
          Let's talk
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
