import React, { useState } from "react";

const Button = ({ onClick, children }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    onClick();
  };
  return (
    <button
      onClick={handleClick}
      className={` ${
        isActive
          ? "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          : "bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
