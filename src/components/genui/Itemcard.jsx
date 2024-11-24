import React from "react";
import PropTypes from "prop-types";
import { FaPeopleRoof } from "react-icons/fa6";

function Itemcard(props) {
  return (
    <div className="max-w-80 font-sans rounded-xl h-fit bg-white p-6 flex flex-col justify-between items-start gap-4 ">
      <div className="rounded-xl p-2 bg-slate-300 ">{props.icon}</div>
      <h6 className="font-semibold text-xl text-left text-gray-900 ">
        {props.name}
      </h6>
      <p className="text-base font-medium text-gray-600 text-balance ">
        {props.info}
      </p>
    </div>
  );
}
Itemcard.propTypes = {
  name: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  icon: PropTypes.node,
};
Itemcard.defaultProps = {
  name: "Monthly Meeting",
  info: "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit",
  icon: <FaPeopleRoof className="w-9 h-9 fill-primary" />,
};

export default Itemcard;
