// import Image from "next/image";
import Heroimg from "../components/Heroimg";
import Cta from "../components/Cta";
import Metrics from "../components/Metrics";
import Dact from "../components/Dact";
import Gallery from "../components/Gallery";
import Speech from "../components/Speech";

export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col items-center ">
        <Heroimg
          toggle={false}
          maintxt={"Empowering Professionals, Building Futures"}
          subtxt={
            "Join the Surulere ICAN District Society and unlock the benefits of a thriving professional community."
          }
        >
          <div className="flex gap-12 flex-row justify-center mt-4">
            <button className="  text-white rounded-full bg-primary py-3 px-8 w-fit hover:bg-blue-900 ">
              Become a Member
            </button>
            <button className=" outline-1 outline-white text-primary rounded-full bg-blue-100 hover:bg-blue-500 hover:text-white py-3 px-8  w-fit">
              Learn more
            </button>
          </div>
        </Heroimg>
        <Speech />
        <Metrics />
        <Dact />
        <Gallery />

        <Cta />
      </main>
    </div>
  );
}
