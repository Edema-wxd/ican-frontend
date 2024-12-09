import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";

function Heroimg({
  toggle = false,
  maintxt = "",
  subtxt = "",
  children = <></>,
  imageUrl = "",
}) {
  return (
    <div
      className="flex sm:text-white text-black rounded-b-3xl sm:rounded-none flex-col sm:flex-row  p-4 sm:py-20 lg:px-40 mt-32  gap-6 justify-between items-center w-full h-fit min-h-[500px] bg-gradient-to-b from-[#4cc9f0] to-[#4361ee] sm:bg-primary"
      style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: "cover", }}
      // image for hero section for each page, use per page
    >
      <div className="flex flex-col max-w-lg gap-6">
        <h1 className="text-left max-w-3xl  text-6xl font-bold font-['Spartan'] leading-20 ">
          {maintxt}
        </h1>
        <p className="text-left  text-base font-medium  leading-6">{subtxt}</p>
        <div>{children}</div>
      </div>
      {toggle ? (
        <Image width={464} height={431} src="/landhero.png" alt="Main image" />
      ) : (
        ""
      )}
      {/* switch for use on the home page alone */}
    </div>
  );
}

Heroimg.propTypes = {
  toggle: PropTypes.bool.isRequired,
  maintxt: PropTypes.string.isRequired,
  subtxt: PropTypes.string,
  children: PropTypes.node,
  imageUrl: PropTypes.string,
};

export default Heroimg;
