import React from "react";

function Imgstate() {
  return (
    <div className="w-96 h-96 relative rounded-3xl">
      <div className="w-96 h-96 left-0 top-0 absolute bg-gradient-to-b from-black to-[#272727] rounded-lg" />
      <div className="h-7 left-[45px] top-[440px] absolute flex-col justify-start items-start gap-2 inline-flex">
        <div className="self-stretch h-7 flex-col justify-start items-start gap-4 flex">
          <h4 className="text-white text-2xl font-bold font-mono leading-loose">
            ICAN Award & Dinner
          </h4>
        </div>
      </div>
    </div>
  );
}

// function Apple() {
//   return (
//     <div className="w-96 h-96 relative rounded-3xl">
//       <div className="w-96 h-96 left-0 top-0 absolute bg-gradient-to-b from-black to-[#1e1e1e] rounded-lg" />
//       <div className="h-48 left-[85px] top-[166px] absolute flex-col justify-start items-center gap-4 inline-flex">
//         <h4 className="text-white text-2xl font-bold font-mono ">
//           ICAN Award & Dinner
//         </h4>
//         <p className="self-stretch text-center text-white text-base font-normal font-['Inter'] leading-normal">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum
//           dolor sit amet, consectetur adipiscing elit
//         </p>
//         <button className="px-8 py-4 bg-[#1a379a] rounded-3xl text-white text-base font-semibold ">
//           View Album
//         </button>
//       </div>
//     </div>
//   );
// }

export default Imgstate;
