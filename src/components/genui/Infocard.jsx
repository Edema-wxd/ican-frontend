import React from "react";
import { FaPeopleRoof } from "react-icons/fa6";
import PropTypes from "prop-types";
import Itemcard from "@/components/genui/Itemcard";

function Infocard({
  subtitle = "ICAN SURULERE DISTRICT",
  title,
  data,
  addtxt,
}) {
  console.log(data);
  return (
    <div className=" w-full p-4 sm:py-16 sm:px-30 lg:py:16 lg:px-30 bg-green-200 flex flex-col items-center justify-center gap-16 ">
      <div className="flex flex-col w-fit items-center gap-2">
        <h5 className="font-bold font-sans text-black text-lg sm:text-xl mb-1 text-center">
          {subtitle}
        </h5>
        <h4 className="text-primary font-mono text-1xl sm:text-4xl font-bold text-center">
          {title}
        </h4>
        <p>{addtxt}</p>
      </div>
      <div className="flex flex-row gap-12 items-center justify-center">
        <Itemcard
          name={"Monthly Meeting"}
          info={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          }
          icon={<FaPeopleRoof className="w-9 h-9 fill-primary" />}
          type="col"
        />
        <Itemcard
          name={"Monthly Meeting"}
          info={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          }
          icon={<FaPeopleRoof className="w-9 h-9 fill-primary" />}
          type="col"
        />
        <Itemcard
          name={"Monthly Meeting"}
          info={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          }
          icon={<FaPeopleRoof className="w-9 h-9 fill-primary" />}
          type="col"
        />
      </div>
    </div>
  );
}
Infocard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  addtxt: PropTypes.string,
  data: PropTypes.array,
};

export default Infocard;
