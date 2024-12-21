// import Image from "next/image";
import Heroimg from "../components/Heroimg";
import Cta from "../components/Cta";
// import Metrics from "../components/Metrics";
import Infocard from "@/components/genui/Infocard";
import Gallery from "../components/Gallery";
import Adverts from "../components/Adverts";
import Speech from "../components/Speech";
import StatsSection from "../components/StatsSection";
// import Infocard from "@/components/genui/Infocard";
import BlogList from "@/components/BlogListSection";

export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col items-center">
        <Heroimg
          toggle={true}
          maintxt={"Empowering Professionals, Building Futures"}
          subtxt={
            "Join the Surulere ICAN District Society and unlock the benefits of a thriving professional community."
          }
        >
          <div className="flex flex-row items-center mt-4 gap-10">
            <button className=" h-fit sm:text-white rounded-full bg-secondary sm:py-3 sm:px-12 sm:text-sm w-fit whitespace-nowrap hover:bg-green-400 ">
              Become a Member
            </button>
            <button className=" h-fit  sm:border  sm:border-white text-black sm:text-white rounded-full bg-transparent hover:bg-blue-100 hover:text-black pl-6 sm:py-3 sm:px-8  w-fit">
              Learn more
            </button>
          </div>
        </Heroimg>
        <Speech />
        <StatsSection/>
        <Infocard subtitle={"ICAN SURULERE DISTRICT"} title="Our District Activity" />
        <Gallery />
        {/* <BlogList />
        <Adverts /> */}

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
