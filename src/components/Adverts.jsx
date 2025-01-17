import React from "react";
import Image from "next/image";

function Adverts() {
  return (
    <div className="bg-white p-4 sm:p-20 lg:p-40  flex gap-6 justify-between items-center w-full h-fit">
      <div className="bg-primary rounded-2xl flex flex-col w-full gap-10 p-6 sm:p-10  lg:px-28">
        <h2 className=" text-center text-white text-3xl font-bold">
          Place Your Advert Here
        </h2>
        <div className="flex flex-col sm:flex-row  justify-between items-center">
          <div className="p-6 flex flex-col gap-4 max-w-96">
            <h5 className="text-white text-center sm:text-left text-xl font-semibold font-sans">
              Streamline Your Work with Cutting-Edge Tools!
            </h5>
            <p className="text-neutral-50 hidden sm:block text-base font-normal font-sans">
              As a certified professional, take your accounting practice to the
              next level with Sage Accounting Software. <br /> Special Offer for
              SDS Members:Enjoy 20% off your first year subscription! 🔗 Learn
              More and Sign Up Today
            </p>
          </div>
          <Image
            src={"/advert.png"}
            width={422}
            height={283}
            alt="placeholder Img"
          />
        </div>
      </div>
    </div>
  );
}

export default Adverts;
