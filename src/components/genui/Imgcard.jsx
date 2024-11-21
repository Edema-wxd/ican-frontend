import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

function Imgcard(props) {
  return (
    <div className=" relative max-w-md ">
      <h6 className=" absolute p-12 bottom-0 z-20 text-left font-bold drop-shadow-2xl text-2xl font-mono text-white ">
        {props.title}
      </h6>
      <Image
        src={props.imgurl}
        width={0}
        height={0}
        sizes="100vw"
        alt="image"
        className="h-auto w-full z-10 rounded-3xl  relative"
      />
    </div>
  );
  Imgcard.propTypes = {
    imgurl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };
  Imgcard.defaultProp = {
    imgurl: "/galleryfiller.jpg",
    title: "ICAN Award & Dinner",
  };
}

export default Imgcard;
