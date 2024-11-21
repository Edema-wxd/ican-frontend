import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

function Cta(props) {
  return (
    <div className="flex flex-col gap-8 w-full items-center py-20 bg-blue-100 bg-[url('/ctatexture.svg')] bg-no-repeat bg-right">
      <h5 className="text-black font-bold font text-xl items-center text-center">
        {props.toggle ? (
          <>
            Would you like to maximize your potentials by <br /> joining other
            district society?
          </>
        ) : (
          <>
            Check your membership status anytime with your <br /> membership
            number or credentials
          </>
        )}
      </h5>
      <Link href="/membership">
        <button className="rounded-full bg-primary py-3 px-8 w-fit text-base text-white">
          Become a Member
        </button>
      </Link>
    </div>
  );
  Cta.propTypes = {
    toggle: PropTypes.bool,
  };
  Cta.defaultProp = {
    toggle: false,
  };
}

export default Cta;
