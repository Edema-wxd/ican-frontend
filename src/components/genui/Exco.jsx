import React from "react";
import {} from "icons";

function Exco({ name, role }) {
  return (
    <div className="w-80 h-96 rounded-3xl flex-col justify-center items-center inline-flex">
      <div className="w-80 h-96 relative rounded-lg flex-col justify-start items-start flex">
        <div className="w-96 h-96 bg-gradient-to-b from-black to-[#121212] rounded-lg" />
        <div className="justify-start items-center gap-14 inline-flex">
          <div className="w-44 flex-col justify-start items-start gap-2 inline-flex">
            <div className="self-stretch text-white text-xl font-bold  leading-normal">
              {name}
            </div>
            <div className="text-white text-base font-normal  leading-normal">
              {role}
            </div>
          </div>
          <div className="justify-start items-center gap-8 flex">
            <div className="w-8 h-8 p-1 bg-[#1a379a] rounded justify-center items-center flex">
              <div className="grow shrink basis-0 self-stretch px-0.5 py-0.5 justify-center items-center inline-flex" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exco;
