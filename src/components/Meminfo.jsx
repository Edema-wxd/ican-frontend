import React from "react";
import { FaPerson } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import Itemcard from "./genui/Itemcard";
// import { FaPeopleRoof } from "react-icons/fa6";

function Meminfo() {
  return (
    <div className=" flex flex-row py-20 px-40  gap-8 w-auto items-center justify-between ">
      <div className="flex flex-col gap-12 max-w-[470px] text-left">
        <div>
          <p className="text-base font-,edium text-black">
            Ican Surulere District
          </p>
          <h1 className="text-primary text-3xl font-bold w-fit">
            How to Become a <br/>Member
          </h1>
        </div>
        <div className="flex flex-col gap-6 justify-center items-start h-fit w-fit">
          {/* <Itemcard
            name={"Pay for Registration"}
            info={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            }
            icon={<FaPerson className="w-9 h-9 fill-primary" />}
            type="row"
          /> */}
          {/* fill according to BA & copy writers design */}
          <div className="p-6 rounded-2xl h-fit outline-1 outline  flex flex-col gap-6 max-w-md ">
            <div className=" h-fit flex flex-row justify-start gap-2 items-center ">
              <FaPerson className="bg-yellow-200 h-8 w-8 p-1"/>
              <h5>Pay for Registration </h5>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum
              dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
          <div className="p-6 rounded-2xl h-fit outline-1 outline  flex flex-col gap-6 max-w-md ">
            <div className=" h-fit flex flex-row justify-start gap-2 items-center ">
              <FaPerson className="bg-yellow-200 h-8 w-8 p-1"/>
              <h5>Pay for Registration </h5>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum
              dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
          <div className="p-6 rounded-2xl h-fit outline-1 outline  flex flex-col gap-6 max-w-md ">
            <div className=" h-fit flex flex-row justify-start gap-2 items-center ">
              <FaPerson className="bg-yellow-200 h-8 w-8"/>
              <h5>Pay for Registration </h5>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum
              dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
        </div>
        <Link href="/membership"> 
        {/* Link to membership signup page */}
          <button className="bg-primary rounded-full py-3 px-8 w-fit hover:bg-blue-900 text-white">
            Become a Member
          </button>
        </Link>
      </div>
      <div>
        <Image alt="members" width={582} height={695} src={"/mem_how.png"} />
      </div>
    </div>
  );
}

export default Meminfo;
