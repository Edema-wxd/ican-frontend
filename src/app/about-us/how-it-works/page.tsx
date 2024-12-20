import Heroimg from "@/components/Heroimg";
import Meminfo from "@/components/Meminfo";
import React from "react";

function Howiw() {
  return (
    <div className="flex flex-col items-center ">
      <Heroimg
        subtxt={""}
        toggle={false}
        maintxt="How it works"
        imageUrl="/howiwhero.png"
      />

      <Meminfo />
    </div>
  );
}

export default Howiw;
