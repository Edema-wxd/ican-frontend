import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";

function Exco({ name, role }) {
  // Exco image and Info card
  return (
    <div className="w-80 h-[435px] bg-blue-300 rounded-3xl flex-col justify-center items-center inline-flex">
      <div className="w-80 h-full relative rounded-lg flex-col justify-end items-end flex">
        <div className="justify-between px-4 py-4 w-full items-center flex flex-row bg-gradient-to-b from-transparent to-[#121212] rounded-lg">
          <div className="w-44 flex-col justify-start  items-start gap-2 inline-flex">
            <h5 className="self-stretch text-white text-xl font-bold  ">
              {name}
            </h5>
            <p className="text-white text-base font-normal  ">{role}</p>
          </div>
          <div className="w-8 h-8 p-1 bg-[#1a379a] rounded justify-center items-center flex">
            <FaLinkedinIn className="fill-white h-6 w-6" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exco;
