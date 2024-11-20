import React from "react";

function Cta() {
  return (
    <div className="flex flex-col gap-8 w-full items-center py-20 bg-blue-100 bg-[url('/ctatexture.svg')] bg-no-repeat bg-right">
      <h5 className="text-black font-bold font text-xl items-center text-center">
        Would you like to maximize your potentials by <br /> joining other
        district society?
      </h5>
      <button className="rounded-full bg-primary py-3 px-8 w-fit text-base text-white">
        Become a Member
      </button>

      {/* <img src="/ctatexture.svg" alt="" /> */}
    </div>
  );
}

export default Cta;
