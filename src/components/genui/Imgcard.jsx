import React from "react";
import PropTypes from "prop-types";
// import Image from "next/image";

function Imgcard({
  imgurl = "/galleryfiller.jpg",
  title = "ICAN Award & Dinner",
}) {
  return (
    <div className=" relative w-fit max-w-md ">
      <h6 className=" absolute p-4 sm:p-12 bottom-0 z-20 text-left font-bold drop-shadow-2xl text-2xl font-mono text-white ">
        {title}
      </h6>
      <Image
        // Dynamic image url
        src={imgurl}
        width={0}
        height={0}
        sizes="100vw"
        alt="image"
        className="h-auto w-60 sm:w-full z-10 rounded-3xl  relative"
      />
    </div>
  );
}
Imgcard.propTypes = {
  imgurl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Imgcard;
