import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";
import { useState } from "react";
import { useContext } from "react";
import { DashboardContext } from "./DashboardContext";
import Button from "./Button";

const Dashboard = () => {
  const {
    fly,
    setFly,
    orbitMode,
    setOrbitMode,
    speed,
    setSpeed,
    location,
    setLocation,
  } = useContext(DashboardContext);

  const handleStart = (e) => {
    e.stopPropagation();

    setFly(true);
    setSpeed(1);
  };
  const handleStop = (e) => {
    e.stopPropagation();
    setFly(false);
  };

  const handleOrbit = (e) => {
    e.stopPropagation();
    setOrbitMode(!orbitMode);
  };
  const handleLocation = (e) => {
    e.stopPropagation();
    setLocation([0, 0, 2200]);
    setOrbitMode(false);
    setFly(false);
    setSpeed(0);
  };

  return (
    <div
      className={`hologram flex flex-col gap-3 rounded-lg shadow-lg sm:p-4 p-2`}
    >
      <div className="flex sm:text-lg text-sm gap-3">
        <button
          className={`btn-dashboard ${fly ? "active" : ""} `}
          onClick={handleStart}
        >
          Start
          <p className="text-xs mt-0.5">left click</p>
        </button>
        <button
          className={`btn-dashboard ${!fly ? "active" : ""} `}
          onClick={handleStop}
        >
          Stop
          <p className="text-xs mt-0.5">left click</p>
        </button>
        <button
          className={`btn-dashboard ${orbitMode ? "active" : ""} `}
          onClick={handleOrbit}
        >
          Orbit
          <p className="text-xs mt-0.5">right click</p>
        </button>
        <button
          className={`btn-dashboard ${
            location.every((value) => value === 0) ? "active" : ""
          } `}
          onClick={handleLocation}
        >
          Home
        </button>
      </div>
      <div>
        <p className="font-medium text-sm text-center">
          Location: [{location.map((e) => e.toFixed(2) + " ")}]
        </p>
      </div>
      <div className="flex gap-2 items-center">
        <span className="font-medium text-sm text-center whitespace-nowrap">
          Speed (scroll): {speed}
        </span>
        <input
          className="slider flex-grow"
          type="range"
          min="-100"
          max="100"
          value={speed}
          step="1"
          onChange={(e) => setSpeed(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Dashboard;
