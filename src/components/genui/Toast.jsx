import React from "react";
import PropTypes from "prop-types";
import { FaX, FaCircleCheck } from "react-icons/fa6";

function Toast({ mess, message }) {
  switch (mess) {
    case mess === "saved":
      return <></>;
  }
  return (
    <div className="max-w-[400px] border flex flex-row ">
      <div></div>
      <div className="flex flex-row items-start justify-center gap-5 w-fit ">
        <div>
          <div className="w-14 h-14  bg-white flex items-center justify-center">
            <FaCircleCheck className=" w-8 h-8 stroke-success  " />
          </div>
          <div>
            <h5 className="text-black text-lg font-bold"></h5>
            <p className="text-gray-800 text-base font-normal">{message}</p>
          </div>
        </div>
        <FaX />
      </div>
    </div>
  );
}
Toast.propTypes = {
  mess: PropTypes.oneOf(["saved", "error", "warn", "update"]).isRequired,
  message: PropTypes.string.isRequired,
};

export default Toast;
