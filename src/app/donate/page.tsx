import React from "react";
import Heroimg from "@/components/Heroimg";
import Infocard from "@/components/genui/Infocard";
import Dontoday from "@/components/Dontoday";

function Donate() {
  return (
    <div>
      <Heroimg subtxt={""} toggle={false} maintxt="Support Our Mission"  imageUrl="/donatehero.png"/>
      <Infocard
        subtitle={"SUPPORT US"}
        title="Support Our Mission"
        addtxt={
          "Lorem ipsum dolor sit amet, consectetur adipiscing eLorem ipsum dolor sit amet, dolor sit amet, consectetur adipiscing elitlitLorem ipsum dolor sit amet, consectetur adipiscing elit"
        }
      />
      <Dontoday />
    </div>
  );
}

export default Donate;
