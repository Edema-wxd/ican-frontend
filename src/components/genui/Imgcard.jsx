import React from "react";

function Imgcard() {
  return (
    <div className="items-start h-[512px] w-[480px] rounded-3xl flex flex-col p-12  to-transparent from-gray-700 justify-end max-w-md bg-[url('/galleryfiller.jpg')] bg-no-repeat bg-cover">
      <h6 className="text-left font-bold drop-shadow-2xl text-2xl font-mono text-white ">
        ICAN Award & Dinner
      </h6>
    </div>
  );
}

export default Imgcard;
