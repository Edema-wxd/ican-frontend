import React from "react";
import Image from "next/image";

function Dontoday() {
  return (
    <div>
      return (
      <div className="px-40 py-20 flex flex-col w-full gap-16">
        <div>
          <h2 className="w-fit font-bold text-4xl text-primary  font-mono ">
            Donate securely today and support our mission
          </h2>
          <p className="  ">
            Your donations support the growth and development of accounting
            professionals, as well as community outreach programs.
          </p>
        </div>
        <div className="flex flex-row justify-between gap-20">
          <form
            className="flex w-full flex-col gap-8 justify-start items-end"
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
          <Image height={480} width={480} src="/chess.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Dontoday;
