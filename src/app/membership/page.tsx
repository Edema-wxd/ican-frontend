import React from "react";
import Heroimg from "@/components/Heroimg";
import Cta from "@/components/Cta";
import Meminfo from "@/components/Meminfo";
import Infocard from "@/components/genui/Infocard";
import Dues from "@/components/Dues";

function Membership() {
  return (
    <>
      <Heroimg
        subtxt={""}
        toggle={false}
        maintxt="Membership"
        imageUrl="/membershiphero.png"
      >
        <div className="flex gap-12 flex-row justify-center mt-4">
          <button className="  text-white rounded-full bg-secondary py-3 px-8 w-fit hover:bg-green-900 ">
            Become a Member
          </button>
          <button className=" outline-1 outline-white text-primary rounded-full bg-blue-100 hover:bg-blue-500 hover:text-white py-3 px-8  w-fit">
            Login as Member
          </button>
        </div>
      </Heroimg>
      <Meminfo />
      <Infocard
        subtitle={"ICAN SURULERE DISTRICT"}
        title="Benefits of Being a Member"
        addtxt={
          "Lorem ipsum dolor sit amet, consectetur adipiscing eLorem ipsum dolor sit amet, dolor sit amet, consectetur adipiscing elitlitLorem ipsum dolor sit amet, consectetur adipiscing elit"
        }
      />
      <Dues />

      <Cta toggle={false} />
    </>
  );
}

export default Membership;
