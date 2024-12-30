import React from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";

function Aims() {
  // Aims tags and info
  return (
    <div className="flex flex-row lg:px-40 md:p-20 p-4 gap-8 w-full justify-between items-center ">
      <Image
        width={462}
        height={694}
        alt="Aims"
        className="hidden sm:flex"
        src={"/chairspeech.png"}
      />
      <div className="flex max-w-xl flex-col gap-12 items-start justify-start ">
        <h2 className=" text-5xl font-bold text-primary font-mono text-left  ">
          Aims & Objectives
        </h2>
        <div className="flex p-6 rounded-2xl flex-col bg-primary ">
          <div className="flex flex-row items-center gap-2 justify-start ">
            <div className=" p-1  bg-white rounded flex items-center justify-center ">
              <FaCheck className="w-6 h-6" />
            </div>
            <p className=" text-[#e0f5e6]  font-semibold text-xl ">
              To uphold the tenets of the Institute in the District
            </p>
          </div>
          <p className=" text-white font-normal text-base ">
            Maintaining the core values of the Institute within our District{" "}
          </p>
        </div>
        <div className="flex p-6 rounded-2xl flex-col bg-[#dce2f9] ">
          <div className="flex flex-row items-center gap-2 justify-start ">
            <div className=" p-1  bg-white rounded flex items-center justify-center">
              <FaCheck className="w-6 h-6" />
            </div>
            <p className=" text-black font-semibold text-xl ">
              To Empower Future Accountants{" "}
            </p>
          </div>
          <p className=" text-gray-600   font-normal text-base ">
            Nurturing the next generation of accounting professionals.
          </p>
        </div>{" "}
        <div className="flex p-6 rounded-2xl flex-col bg-green-100 ">
          <div className="flex flex-row items-center gap-2 justify-start ">
            <div className=" p-1  bg-white rounded flex items-center justify-center">
              <FaCheck className="w-6 h-6" />
            </div>
            <p className=" text-black font-semibold text-xl ">
              To Foster Community Growth
            </p>
          </div>
          <p className=" text-gray-600 font-normal text-base ">
            Supporting the professional development of our members through
            training, networking, and mentorship
          </p>
        </div>
      </div>
    </div>
  );
}

export default Aims;
