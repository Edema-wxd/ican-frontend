import React from "react";
import Heroimg from "@/components/Heroimg";
import Cta from "@/components/Cta";
import Exco from "@/components/genui/Exco";

function Ourteam() {
  return (
    <>
      <Heroimg
        subtxt={""}
        toggle={false}
        maintxt="Our Team"
        imageUrl="/ourteamhero.png"
      >
        <></>
      </Heroimg>
      <div className="flex flex-col items-start text-left gap-12 px-32 py-20 justify-start ">
        <div className=" flex flex-col gap-4 items-start justify-between ">
          <h2 className="text-primary font-semibold font-mono text-2xl  ">
            Our Executive Team
          </h2>
          <p className="text-base text-sans font-normal text-black">
            Meet the leaders behind our district. Dedicated professionals
            working to serve our community.
          </p>
        </div>
        <div className="w-full flex flex-row gap-10 flex-wrap">
          <Exco name="Dr Aderopo Oladapo, FCA" role="Chairman" />{" "}
          <Exco name="Tosin D. Akinwummi, FCA" role="Vice Chairman" />{" "}
          <Exco name="Dr Bode Oguntoke, FCA" role="General Secretary " />{" "}
          <Exco name="Dcns. Abosede Ogunjobi, FCA" role="Trasurer " />{" "}
          <Exco name="Dr Anthonia Alebiosu, FCA" role="Technical Secretary " />{" "}
          <Exco name="Durowoju A. Olatunde, FCA" role="Financial Secretary " />{" "}
          <Exco name="Idiat Omotola Steven, ACA" role="Membership Secretary " />{" "}
          <Exco name="Temitope Oyeyipo, ACA" role="Social and publicity Secretary " />{" "}
          <Exco name="Ajayi-Owoeye Auooluwa, ACA" role="General Secretary " />{" "}
          <Exco name="Aliu Kamiyo, ACA" role="Chairman, Community Relations Committee " />{" "}
          <Exco name="Goodnedd Opaleye, ACA" role="Chairman, Publications Commitee" />{" "}
          <Exco name="Sunkanmi Sesan Ogungbaiye, ACA" role="General Secretary " />
        </div>
      </div>

      <Cta toggle />
    </>
  );
}

export default Ourteam;
