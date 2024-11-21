import React from "react";
import Heroimg from "@/components/Heroimg";
import Cta from "@/components/Cta";

function Ourteam() {
  return (
    <>
      <Heroimg subtxt={""} toggle={false} maintxt="Our Team">
        <></>
      </Heroimg>
      <div className="flex flex-col items-start text-left gap-12 justify-start ">
        <div className=" flex flex-col gap-4 items-start justify-between ">
          <h2 className="text-primary font-semibold font-mono text-5xl  ">
            Our Executive Team
          </h2>
          <p className="text-base text-sans font-normal text-black">
            Meet the leaders behind our district. Dedicated professionals
            working to serve our community.
          </p>
        </div>
      </div>

      <Cta  />
    </>
  );
}

export default Ourteam;
