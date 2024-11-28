import React from "react";
import { FaPhone, FaMapLocation } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

function Cinfo() {
  return (
    <div className="flex flex-row gap-8 w-full justify-between items-start py-20 px-40 bg-blue-100">
      <div className="flex flex-row  items-start gap-4">
        <FaPhone className=" fill-primary h-8 w-8" />
        <div className="flex flex-col gap-4 text-left">
          <h4 className=" text-2xl font-bold font-mono text-black ">
            Phone Number
          </h4>
          <p>+234 808 816 8895</p>
          <p>+234 803 256 4245</p>
        </div>
      </div>
      <div className="flex flex-row  items-start gap-4">
        <FaMapLocation className=" fill-primary h-8 w-8" />
        <div className="flex flex-col gap-4 text-left">
          <h4 className=" text-2xl font-bold font-mono text-black ">Address</h4>
          <p>
            30B, Oke-Onijo Street, Off Ogunlana Street, <br />
            Ijeshatedo, Surulere, Lagos
          </p>
        </div>
      </div>
      <div className="flex flex-row  items-start gap-4">
        <IoMail className=" fill-primary h-8 w-8" />
        <div className="flex flex-col gap-4 text-left">
          <h4 className=" text-2xl font-bold font-mono text-black ">Mail Us</h4>
          <p>icansuruleredistrictsociety@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Cinfo;
