import React from "react";
import Heroimg from "@/components/Heroimg";
import Meminfo from "@/components/Meminfo";
import Infocard from "@/components/genui/Infocard";
import Aims from "../../components/Aims";

function Aboutus() {
  return (
    <div>
      <Heroimg subtxt={""} toggle={false} maintxt="About Us">
        <></>
      </Heroimg>
      <div className="bg-white flex flex-col items-center gap-12 w-fit py-20 px-40">
        <p className="text-primary text-center text-lg w-fit">
          Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum
          dolor sit
          <br /> amet, consectetur adipiscing elit
        </p>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col bg-primary max-w-sm p-8 text-white">
            <h6 className=" text-lg  ">OUR MISSION</h6>
            <hr />
            <p className="text-base">
              To produce world-class chartered accountants, regulate and
              continually enhance their ethical standards and technical
              competence in the public interest.
            </p>
          </div>
          <div className="flex flex-col max-w-sm bg-green-200 text-black p-8">
            <h6 className=" text-lg ">OUR VISION</h6>
            <hr />
            <p className="text-base">
              To produce world-class chartered accountants, regulate and
              continually enhance their ethical standards and technical
              competence in the public interest.
            </p>
          </div>
        </div>
      </div>
      <Infocard subtitle={""} title="Our Values" />
      <div className="py-30 px-40">
        <h3 className="bg-primary text-5xl"></h3>
        <div className="w-fit flex flex-row justify-center items-center gap-12"></div>
      </div>
      <Aims />
      <Meminfo />
    </div>
  );
}

export default Aboutus;
