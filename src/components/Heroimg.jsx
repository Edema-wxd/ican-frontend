import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";

function Heroimg({ toggle, maintxt, subtxt, children }) {
  return (
    <div className="flex flex-col gap-6 justify-center items-center w-full h-lvh bg-[url('/heroimg.png')] bg-cover relative bg-no-repeat">
      <h1 className="text-center max-w-3xl text-white text-6xl font-bold font-['Spartan'] leading-20 ">
        {maintxt}
      </h1>
      <p className="text-center text-white text-base font-medium font-['Inter'] leading-6">
        {subtxt}
      </p>
      <div>{children}</div>
      {toggle ? (
        <Image
          fill={true}
          src="/heroshape.svg"
          alt="shapes"
          className="w-full object-cover "
        />
      ) : (
        ""
      )}
    </div>
  );

  Heroimg.propTypes = {
    toggle: PropTypes.bool.isRequired,
    maintxt: PropTypes.string.isRequired,
    subtxt: PropTypes.string,
    children: PropTypes.node,
  };
  Heroimg.defaultProps = {
    toggle: false,
    maintxt: "",
    subtxt: "",
    children: <></>,
  };
}

export default Heroimg;
