import React from "react";

const Joystick = () => {
  return (
    <div className="flex justify-center items-center w-full h-full border-2 border-purple-600  rounded-full hologram ">
      {" "}
      <div className="flex justify-center items-center w-[60%] h-[60%] border-2 border-purple-600  rounded-full  ">
        {" "}
        <div className=" w-[40%] h-[40%] border-2 border-purple-600  rounded-full  "></div>
      </div>
    </div>
  );
};

export default Joystick;
