import React from "react";
import { FaPerson } from "react-icons/fa6";
import Link from "next/link";

function Meminfo() {
  return (
    <div className=" flex flex-row py-20 px-40 w-full items-center justify-between">
      <div>
        <div className="text-left">
          <p className="text-base font-semibold text-black">
            Ican Surulere District
          </p>
          <h1 className="text-primary text-5xl w-fit">
            How to Become a Member
          </h1>
          <div>
            <div>
              <div className="p-6 rounded-2xl h-fit outline-1 outline  flex flex-col gap-6 max-w-md ">
                <div className=" h-fit flex flex-row justify-start gap-2 items-center ">
                  <FaPerson />
                  <h5>Pay for Registration </h5>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem
                  ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>
            </div>
            <Link href="/membership">
              <button className="bg-primary rounded-full py-3 px-8 w-fit hover:bg-blue-900 text-white">
                Become a Member
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Meminfo;
