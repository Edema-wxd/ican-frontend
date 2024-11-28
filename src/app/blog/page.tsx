import React from "react";
import Heroimg from "@/components/Heroimg";

function Blog() {
  return (
    <div>
      <Heroimg
        toggle={false}
        maintxt={"Blog"}
        subtxt={
          "Stay informed with insightful articles and get the latest updates on district activities and ICAN news, all in one place."
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
    </div>
  );
}

export default Blog;
