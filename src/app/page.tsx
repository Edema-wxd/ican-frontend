// import Image from "next/image";
import Heroimg from "../components/Heroimg";
import Cta from "../components/Cta";
// import Metrics from "../components/Metrics";

import Gallery from "../components/Gallery";
import Adverts from "../components/Adverts";
import Speech from "../components/Speech";
// import Infocard from "@/components/genui/Infocard";
import BlogList from "@/components/BlogListSection";

export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col items-center ">
        <Heroimg
          toggle={true}
          maintxt={"Empowering Professionals, Building Futures"}
          subtxt={
            "Join the Surulere ICAN District Society and unlock the benefits of a thriving professional community."
          }
        >
          <div className="flex gap-12 flex-row justify-center mt-4">
            <button className="  sm:text-white rounded-full bg-secondary py-3 px-8 w-fit hover:bg-green-900 ">
              Become a Member
            </button>
            <button className=" outline-1 outline-white sm:text-primary rounded-full bg-blue-100 hover:bg-blue-500 hover:text-white py-3 px-8  w-fit">
              Learn more
            </button>
          </div>
        </Heroimg>
        <Speech />
        <Gallery />
        <BlogList />
        <Adverts />

        {/* 
        <Metrics />
        <Infocard
          title={"Our District Activity"}
          subtitle={"ICAN SURULERE DISTRICT"}
        /> */}

        <Cta />
      </main>
    </div>
  );
}
