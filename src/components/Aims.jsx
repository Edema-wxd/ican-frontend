import React from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";

function Aims() {
  // Aims tags and info
  return (
    <div className="flex flex-row px-40 py-20 w-full justify-between items-center ">
      <Image width={462} height={694} alt="Aims" src={"/chairspeech.png"} />
      <div className="flex max-w-xl flex-col gap-12 items-start justify-start ">
        <h2 className=" text-5xl font-bold text-primary font-['Spartan'] text-left  ">
          Aims & Objectives
        </h2>
        <div className="flex p-6 rounded-2xl flex-col bg-primary ">
          <div className="flex flex-row items-start gap-2 justify-start ">
            <div className=" w-8 h-8 bg-white rounded flex items-center justify-center ">
              <FaCheck className="w-6 h-6" />
            </div>
            <p className=" text-white font-semibold text-xl ">
              To uphold the tenets of the Institute in the District
            </p>
          </div>
          <p className=" text-white font-normal text-base ">
            To uphold the tenets of the Institute in the DistrictTo uphold the
            tenets of the Institute in the DistrictTo uphold the tenets of the
            Institute in the District
          </p>
        </div>
        <div className="flex p-6 rounded-2xl flex-col bg-primary ">
          <div className="flex flex-row items-start gap-2 justify-start ">
            <div className=" w-8 h-8 bg-white rounded flex items-center justify-center">
              <FaCheck className="w-6 h-6" />
            </div>
            <p className=" text-white font-semibold text-xl ">
              To uphold the tenets of the Institute in the District
            </p>
          </div>
          <p className=" text-white font-normal text-base ">
            To uphold the tenets of the Institute in the DistrictTo uphold the
            tenets of the Institute in the DistrictTo uphold the tenets of the
            Institute in the District
          </p>
        </div>{" "}
        <div className="flex p-6 rounded-2xl flex-col bg-primary ">
          <div className="flex flex-row items-start gap-2 justify-start ">
            <div className=" w-8 h-8 bg-white rounded flex items-center justify-center">
              <FaCheck className="w-6 h-6" />
            </div>
            <p className=" text-white font-semibold text-xl ">
              To uphold the tenets of the Institute in the District
            </p>
          </div>
          <p className=" text-white font-normal text-base ">
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
