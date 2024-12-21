import React from "react";
import Image from "next/image";

function Speech() {
  // The Speech component for the landing page
  return (
    <div className=" p-4 sm:p-20 lg:px-40 bg-white flex flex-col sm:flex-row gap-12 justify-between items-center w-full h-fit ">
      <div className="flex flex-col sm:w-[550px] gap-12 items-start text-left">
        <div className="gap-4 w-fit text-left">
        <h2 className="w-fit font-bold font-mono mb-2 text-xl">
           CHAIRMAN SPEECH
          </h2>
          <h2 className="text-primary w-fit font-semibold text-3xl sm:text-4xl font-mono leading-tight">
            Welcome to ICAN <br/>Surulere & District<br/> Society
          </h2>
        </div>
        <p className="text-sans font-sm text-gray-600">
          OBA District Society, the Institute of Chartered Accountants of Nigeria (Established by Act of Parliament No. 15 of 1965) is one of the District Societies that make up the 64 District Societies of ICAN.
          <br/>We are on a mission to develop intellectually, ethically, and technically competent global accountants.

          <br/>I am delighted to welcome you to another significant year in the history of our National Organization. A year of great possibilities and I am very optimistic that it will bring you prosperity in all ramifications of your lives.

        </p>
        {/* The Chairmans speach */}
        <h2 className="w-fit font-bold font-mono text-2xl">
           Mr. Olabode Williams FCA
          </h2>
        <button className="bg-primary sm:w-fit w-full rounded-full text-sm text-white px-8 py-4">
          Read more
        </button>
      </div>
      <Image height={530} width={400} alt="Chairman" src="/chairspeech.png" />{" "}
      {/* // The Image of the chairman for the landing page */}
    </div>
  );
}

export default Speech;
