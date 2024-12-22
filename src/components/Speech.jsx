import React from "react";
import Image from "next/image";

function Speech() {
  // The Speech component for the landing page
  return (
    <div className=" p-4 sm:p-20 lg:p-40 bg-white flex flex-col sm:flex-row gap-6 justify-between items-center w-full h-fit ">
      <div className="flex flex-col sm:w-[550px] gap-12 items-start text-left">
        <div className="gap-4 w-fit text-left">
          <h2 className="text-primary w-fit font-semibold text-4xl sm:text-5xl font-mono">
            About ICAN SDS
          </h2>
        </div>
        <p className="text-sans font-normal text-base text-gray-600">
          The ICAN Surulere District Society (ICAN SDS) is a dynamic chapter of
          the Institute of Chartered Accountants of Nigeria, dedicated to
          advancing the accounting profession through professional development,
          networking, and mentorship. Our goal is to support members with
          resources, training, and events that foster ethical practices and
          career growth. With a commitment to professionalism, accountability,
          and community engagement, ICAN SDS creates a platform where
          accountants can connect, learn, and thrive, ensuring their continued
          leadership in the field and contributions to the economy.
        </p>
        {/* The Chairmans speech */}

        <button className="bg-primary sm:w-fit w-full rounded-full text-white py-2 px-4">
          Read more
        </button>
      </div>
      <Image
        height={530}
        width={400}
        className="w-full h-auto max-w-[550px]"
        alt="Chairman"
        src="/chairspeech2.png"
      />{" "}
      {/* // The Image of the chairman for the landing page */}
    </div>
  );
}

export default Speech;
