import React from "react";
import PropTypes from "prop-types";

const Heroimg = ({
  toggle = false,
  maintxt = "",
  subtxt = "",
  children = <></>,
  imageUrl = "",
}) => {
  return (
    <div
      className={`
        relative flex flex-col sm:flex-row
        p-4 sm:py-20 lg:px-40 mt-32
        gap-6 justify-center sm:justify-between items-center
        w-full h-fit min-h-80 sm:min-h-[500px]
        rounded-b-3xl sm:rounded-none
        ${toggle ? "text-black sm:text-white" : "text-white"}
        ${!toggle && !imageUrl ? "bg-primary" : ""}
      `}
    >
      {/* Background Image Layer */}
      {imageUrl && !toggle && (
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        >
          {/* Optional overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30" />
        </div>
      )}

      {/* Mobile Gradient Background */}
      <div className={`
        absolute inset-0 z-0
        sm:hidden
        ${toggle ? "bg-gradient-to-b from-[#ffffff] to-[#c8d1fa]" : ""}
        rounded-b-3xl
      `} />

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col max-w-lg gap-6">
        <h1 className="text-left max-w-3xl text-4xl sm:text-6xl font-bold font-mono leading-20">
          {maintxt}
        </h1>
        <p className="text-left text-base font-medium leading-6">
          {subtxt}
        </p>
        <div>{children}</div>
      </div>
    </div>
  );
};

Heroimg.propTypes = {
  toggle: PropTypes.bool.isRequired,
  maintxt: PropTypes.string.isRequired,
  subtxt: PropTypes.string,
  children: PropTypes.node,
  imageUrl: PropTypes.string,
};

export default Heroimg;