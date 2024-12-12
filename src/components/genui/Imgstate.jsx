import React from "react";

function Imgstate() {
  return (
    <div className="w-96 h-96 relative rounded-3xl">
      <div className="w-96 h-96 left-0 top-0 absolute bg-gradient-to-b from-black to-[#272727] rounded-lg" />
      <div className="h-7 left-[45px] top-[440px] absolute flex-col justify-start items-start gap-2 inline-flex">
        <div className="self-stretch h-7 flex-col justify-start items-start gap-4 flex">
          <h4 className="text-white text-2xl font-bold font-['Spartan'] leading-loose">
            ICAN Award & Dinner
          </h4>
        </div>
      </div>
    </div>
  );
}



export default Imgstate;
