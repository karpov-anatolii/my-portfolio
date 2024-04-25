import React, { createContext, useContext, useState } from "react";

// Step 1: Create a context
export const DashboardContext = createContext();

// Step 2: Create a component that provides the context
export const DashboardProvider = ({ children }) => {
  const [fly, setFly] = useState(false);
  const [orbitMode, setOrbitMode] = useState(false);
  const [speed, setSpeed] = useState(0);
  const [location, setLocation] = useState([0, 0, 2200]);
  const [joystickXY, setJoystickXY] = useState({ x: 0, y: 0 });
  return (
    <DashboardContext.Provider
      value={{
        fly,
        setFly,
        orbitMode,
        setOrbitMode,
        speed,
        setSpeed,
        location,
        setLocation,
        joystickXY,
        setJoystickXY,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
