import React from "react";
import Image from "next/image";

function Dontoday() {
  // Donation form to collect donaters details for admins to reachout
  return (
    <div className=" p-4 sm:p-20 lg:py-40 flex flex-col w-full gap-16">
      <div className="text-center flex flex-col gap-4  ">
        <h2 className="w-fit max-w-[700px] font-bold text-4xl text-primary  font-mono ">
          Donate securely today and support our mission
        </h2>
        <p className=" text-gray-800 text-base font-normal font-sans ">
          Your donations support the growth and development of accounting
          professionals, as well as community outreach programs.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-between gap-20">
        <form
          className="flex w-full flex-col gap-2 sm:gap-8 justify-start items-end"
          action=""
        >
          <div className="flex flex-col w-full gap-3">
            <label className=" text-base text-black  " htmlFor="name">
              Name*
            </label>
            <input
              className=" p-3 border rounded-xl border-gray-400 "
              type="text"
              name="name"
              placeholder="Enter your first and last name"
            />
            <p></p>
          </div>
          <div className="flex flex-col w-full gap-3 ">
            <label className=" text-base text-black " htmlFor="email">
              Email address*
            </label>
            <input
              className=" p-3 border rounded-xl border-gray-400 "
              type="email"
              name="email"
              placeholder="Enter your email address"
            />
            <p></p>
          </div>
          <div className="flex flex-col w-full gap-3 ">
            <label className=" text-base text-black  " htmlFor="phone">
              Phone number*
            </label>
            <input
              className=" p-3 border rounded-xl border-gray-400 "
              type="text"
              name="phone"
              placeholder="Enter your phone number"
            />
            <p></p>
          </div>
          <div className="flex flex-col w-full gap-3 ">
            <label className=" text-base text-black  " htmlFor="donate">
              Amount to Donate*
            </label>
            <input
              className=" p-3 border rounded-xl border-gray-400 "
              type="text"
              name="donate"
              placeholder="How much would you like to donate?"
              id=""
            />
            <p></p>
          </div>
          <button
            type="submit"
            className=" rounded-full text-white bg-primary py-4 px-8 "
          >
            Donate
          </button>
        </form>
        <Image
          height={480}
          width={480}
          src="/donateheart.png"
          alt=""
          className="sm:w-72 sm:h-fit lg:w-96"
        />
      </div>
    </div>
  );
}

export default Dontoday;
