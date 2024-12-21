import React from "react";
import { FaCheck } from "react-icons/fa6";
import Image from "next/image";

function Dues() {
  return (
    <div className="py-20 px-40 flex flex-row justify-between items-center w-full ">
      
      <Image width={270} height={635} src="/chess.png" alt="Dues img" />
      
      <div className=" flex flex-col justify-start gap-6 items-start ">
        <h2 className=" font-bold text-3xl text-primary  font-mono  ">
          Membership Dues
        </h2>
        <div className=" flex rounded-2xl flex-col bg-primary p-4 h-fit w-fit gap-6 ">
          <p className="flex flex-row gap-2 items-center justify-start text-white  pr-8 ">
            <FaCheck className="fill-primary w-6 h-6 p-1 bg-white rounded-md " />
            To uphold the tenets of the Institute in the District
          </p>
          <p className="flex flex-row gap-2 items-center justify-start text-white   ">
            <FaCheck className="fill-primary w-6 h-6 p-1 bg-white rounded-md " />
            To uphold the tenets of the Institute in the District
          </p>
          <p className="flex flex-row gap-2 items-center justify-start text-white   ">
            <FaCheck className="fill-primary w-6 h-6 p-1 bg-white rounded-md " />
            To uphold the tenets of the Institute in the District
          </p>
          <p className="flex flex-row gap-2 items-center justify-start text-white   ">
            <FaCheck className="fill-primary w-6 h-6 p-1 bg-white rounded-md " />
            To uphold the tenets of the Institute in the District
          </p>
          <p className="flex flex-row gap-2 items-center justify-start text-white   ">
            <FaCheck className="fill-primary w-6 h-6 p-1 bg-white rounded-md " />
            To uphold the tenets of the Institute in the District
          </p>
          <p className="flex flex-row gap-2 items-center justify-start text-white   ">
            <FaCheck className="fill-primary w-6 h-6 p-1 bg-white rounded-md " />
            To uphold the tenets of the Institute in the District
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dues;
