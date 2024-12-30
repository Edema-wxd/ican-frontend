import React from "react";
import Heroimg from "@/components/Heroimg";
import Meminfo from "@/components/Meminfo";
import Infocard from "@/components/genui/Infocard";
import Aims from "../../components/Aims";

function Aboutus() {
  return (
    <div>
      <Heroimg
        subtxt={""}
        toggle={false}
        maintxt="About SDS"
        imageUrl="/aboutushero.png"
      >
        <></>
      </Heroimg>
      <div className="bg-white flex flex-col items-center gap-12 w-full p-4 md:p-20 lg:px-40">
        <h3 className="text-primary font-bold text-center text-4xl font-mono w-full">
          Shaping the Future of <br /> Accounting
        </h3>
        <div className="flex w-fit flex-col sm:flex-row  gap-12 justify-between">
          <div className="flex flex-col rounded-xl gap-6 bg-primary max-w-sm p-8 lg:px-8 lg:py-12 text-white">
            <h6 className=" text-xl font-medium   ">
              OUR MISSION
              <hr className="  border opacity-50 w-full border-gray-100   " />
            </h6>
            <p className="text-base">
              To produce world-class chartered accountants, regulate and
              continually enhance their ethical standards and technical
              competence in the public interest.
            </p>
          </div>
          <div className="flex flex-col rounded-xl gap-6 max-w-sm bg-green-200 text-black p-8">
            <h6 className=" text-xl font-medium  ">
              OUR VISION
              <hr className="  border opacity-50 w-full border-gray-100   " />
            </h6>
            <p className="text-base">
              To produce world-class chartered accountants, regulate and
              continually enhance their ethical standards and technical
              competence in the public interest.
            </p>
          </div>
        </div>
      </div>
      <Infocard subtitle={""} title="Our Values" />
      <Aims />
      <Meminfo />
    </div>
  );
}

export default Aboutus;
