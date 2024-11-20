import React from "react";
import {
  FaPeopleGroup,
  FaHandHoldingHeart,
  FaClock,
  FaPeopleLine,
} from "react-icons/fa6";

function Metrics() {
  return (
    <div className="flex flex-row justify-center my-16 gap-10 items-center">
      <div className="flex  items-center flex-col gap-4 w-fit ">
        <FaPeopleGroup className="fill-[#919191] w-12 h-12" />
        <h5 className=" text-3xl text-primary font-['Spartan'] ">1,300+</h5>
        <p className="text-xl text-black font-I">Membership</p>
      </div>
      <div className="flex items-center  flex-col gap-4 w-fit ">
        <FaHandHoldingHeart className="fill-[#919191] w-12 h-12" />
        <h5 className=" text-3xl text-primary font-['Spartan'] ">20+</h5>
        <p className="text-xl text-black font-I">Community Impact</p>
      </div>
      <div className="flex items-center  flex-col gap-4 w-fit ">
        <FaClock className="fill-[#919191] w-12 h-12" />
        <h5 className="text-3xl text-primary font-['Spartan'] ">3 Years</h5>
        <p className="text-xl text-black font-I">Dedicated Service</p>
      </div>
      <div className="flex  items-center flex-col gap-4 w-fit ">
        <FaPeopleLine className="fill-[#919191] w-12 h-12" />
        <h5 className=" text-3xl text-primary font-['Spartan'] ">30%</h5>
        <p className="text-xl text-black font-I">Yearly Growth</p>
      </div>
    </div>
  );
}

export default Metrics;
