import React from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";

function Aims() {
  // Aims tags and info
  return (
    <div className="flex flex-row px-28 py-20 w-full justify-between items-center ">
      <Image width={462} height={694} alt="Aims" src={"/chairspeech.png"} />
      <div className="flex max-w-xl flex-col gap-12 items-start justify-start ">
        <h2 className=" text-3xl font-bold text-primary font-mono text-left  ">
          Aims & Objectives
        </h2>
        <div className="flex p-4 rounded-2xl flex-col bg-primary ">
          <div className="flex flex-row items-start gap-2 justify-start p-2">
            <div className=" w-8 h-8 bg-white rounded flex items-center justify-center p-2">
              <FaCheck className="w-8 h-8" />
            </div>
            <p className=" text-white font-medium text-2xl ">
              To uphold the tenets of the Institute in the District
            </p>
          </div>
          <p className=" text-white font-normal text-base ">
            To uphold the tenets of the Institute in the DistrictTo uphold the
            tenets of the Institute in the DistrictTo uphold the tenets of the
            Institute in the District
          </p>
        </div>
        <div className="flex p-4 rounded-2xl flex-col bg-purple-500 ">
          <div className="flex flex-row items-start gap-2 justify-start p-2">
            <div className=" w-8 h-8 bg-white rounded flex items-center justify-center p-2">
              <FaCheck className="w-8 h-8" />
            </div>
            <p className=" text-black font-medium text-2xl ">
              To uphold the tenets of the Institute in the District
            </p>
          </div>
          <p className=" text-black font-normal text-base ">
            To uphold the tenets of the Institute in the DistrictTo uphold the
            tenets of the Institute in the DistrictTo uphold the tenets of the
            Institute in the District
          </p>
        </div>{" "}
        <div className="flex p-4 rounded-2xl flex-col bg-green-200 ">
          <div className="flex flex-row items-start gap-2 justify-start p-2">
            <div className=" w-8 h-8 bg-white rounded flex items-center justify-center p-2">
              <FaCheck className="w-8 h-8" />
            </div>
            <p className=" text-black font-medium text-2xl ">
              To uphold the tenets of the Institute in the District
            </p>
          </div>
          <p className=" text-black font-normal text-base ">
            To uphold the tenets of the Institute in the DistrictTo uphold the
            tenets of the Institute in the DistrictTo uphold the tenets of the
            Institute in the District
          </p>
        </div>
      </div>
    </div>
  );
}

export default Aims;
