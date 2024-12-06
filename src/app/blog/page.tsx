import React from "react";
import Heroimg from "@/components/Heroimg";
import BlogListSection from "@/components/BlogListSection";
// import Blogtile from "@/components/genui/Blogtile";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Blog() {
  return (
    <div>
      <Heroimg
        toggle={false}
        maintxt={"Blog"}
        imageUrl="/bloghero.png"
        subtxt={
          "Stay informed with insightful articles and get the latest updates on district activities and ICAN news, all in one place."
        }
      >
        <div className="flex gap-12 flex-row justify-center mt-4">
          <button className="  text-white rounded-full bg-secondary py-3 px-8 w-fit hover:bg-green-900 ">
            Become a Member
          </button>
          <button className=" outline-1 outline-white text-primary rounded-full bg-blue-100 hover:bg-blue-500 hover:text-white py-3 px-8  w-fit">
            Learn more
          </button>
        </div>
      </Heroimg>
      <BlogListSection />
    </div>
  );
}

export default Blog;
