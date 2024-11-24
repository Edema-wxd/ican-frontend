import React from "react";
import { FaPeopleRoof } from "react-icons/fa6";
import PropTypes from "prop-types";
import Itemcard from "@/components/genui/Itemcard";

function Infocard(props) {
  return (
    <div className=" w-full py-20 bg-blue-200 flex flex-col items-center justify-center gap-16 ">
      <div className="flex flex-col w-fit items-center gap-2">
        <h5 className="font-bold font-sans text-black text-xl text-center">
          {props.subtitle}
        </h5>
        <h4 className="text-primary font-mono text-5xl font-bold text-center">
          {props.title}
        </h4>
      </div>
      <div className="flex flex-row gap-12 items-center justify-center">
        <Itemcard />
      </div>
    </div>
  );
}
Infocard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};
Infocard.defaultProp = {
  subtitle: "ICAN SURULERE DISTRICT",
};

export default Infocard;
