import React from "react";
import Image from "next/image";

function Speech() {
  // The Speech component for the landing page
  return (
    <div className=" p-4 sm:py-20 sm:px-40 bg-white flex flex-col sm:flex-row gap-40 justify-between items-center w-full h-fit ">
      <div className="flex flex-col sm:w-[550px] gap-12 items-start text-left">
        <div className="gap-4 w-fit text-left">
          <h6 className="text-black w-fit font-semibold text-sm sm:text-lg font-sans">
            CHAIRMAN SPEECH
          </h6>
          <h2 className="text-primary w-fit font-semibold text-4xl sm:text-5xl font-mono">
            Welcome to ICAN Surulere & District Society
          </h2>
        </div>
        <p className="text-sans font-normal text-base text-gray-600">
          We are on a mission to develop intellectually, ethically, and
          technically competent global accountants. <br /> I am delighted to
          welcome you to another significant year in the history of our National
          Organization. A year of great possibilities and I am very optimistic
          that it will bring you prosperity in all ramifications of your lives.
        </p>
        {/* The Chairmans speach */}
        <h5 className="text-black text-xl sm:text-2xl font-mono font-semibold">
          Mr. Olabode Williams FCA
        </h5>
        <button className="bg-primary sm:w-fit w-full rounded-full text-white py-2 px-4">
          Read more
        </button>
      </div>
      <Image height={530} width={400} alt="Chairman" src="/chairspeech.png" />{" "}
      {/* // The Image of the chairman for the landing page */}
    </div>
  );
}

export default Speech;
