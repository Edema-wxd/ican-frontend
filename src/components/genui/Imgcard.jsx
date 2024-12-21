import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

function Imgcard({
  imgurl = "/galleryfiller.jpg",
  title = "ICAN Award & Dinner",
}) {
  return (
    <div className="relative rounded-3xl overflow-hidden drop-shadow-lg">
      <img
        src={imgurl}
        alt={title}
        className="w-full h-[350px] object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
        <h4 className="text-white text-xl font-semibold drop-shadow-xl">
          {title}
        </h4>
      </div>
    </div>
  );

}
Imgcard.propTypes = {
  imgurl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Imgcard;
