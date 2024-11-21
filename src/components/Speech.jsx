import React from "react";
import Image from "next/image";

function Speech() {
  return (
    <div className="py-20 px-40 bg-white flex flex-row gap-40 justify-between items-center w-full h-fit ">
      <div className="flex flex-col w-[550px] gap-12 items-start text-left">
        <div className="gap-4 w-fit text-left">
          <h6 className="text-black w-fit font-semibold text-lg font-sans">
            CHAIRMAN SPEECH
          </h6>
          <h2 className="text-primary w-fit font-semibold text-5xl font-mono">
            Welcome to ICAN Surulere & District Society
          </h2>
        </div>
        <p className="text-sans font-normal text-base text-gray-600">
          OBA District Society, the Institute of Chartered Accountants of
          Nigeria (Established by Act of Parliament No. 15 of 1965) is one of
          the District Societies that make up the 64 District Societies of ICAN.
          We are on a mission to develop intellectually, ethically, and
          technically competent global accountants. I am delighted to welcome
          you to another significant year in the history of our National
          Organization. A year of great possibilities and I am very optimistic
          that it will bring you prosperity in all ramifications of your lives.
        </p>
        <h5 className="text-black text-2xl font-mono font-semibold">
          Mr. Olabode Williams FCA
        </h5>
        <button className="bg-primary rounded-full text-white py-2 px-4">
          Read more
        </button>
      </div>
      <Image height={530} width={400} alt="Chairman" src="/chairspeech.png" />
    </div>
  );
}

export default Speech;
