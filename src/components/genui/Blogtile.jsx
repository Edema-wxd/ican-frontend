import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

function Blogtile({
  imgurl = "/image.png",
  type = "article",
  title = "5 Essential needs to consider for developing a web App",
  date = "22, October 2024",
}) {
  var bucket;
  if (type === "article") {
    bucket = (
      <button className="px-3 py-1 bg-[#b3fb4f] rounded-sm text-[#121212] text-sm font-medium  leading-none">
        Articles
      </button>
    );
  } else if (type === "news") {
    bucket = (
      <button className="px-3 py-1 bg-primary rounded-sm text-white text-sm font-medium  leading-none">
        News
      </button>
    );
  } else if (type === "video") {
    bucket = (
      <button className="px-3 py-1 bg-[#2e8e4a] rounded-sm text-white text-sm font-medium  leading-none">
        Video
      </button>
    );
  }
  return (
    <div className="max-w-[500px] w-fit h-64 pr-4 rounded-lg border border-gray-300 justify-start items-center gap-8 flex flex-row">
      <img
        className="w-64 h-64 relative rounded-tl-2xl rounded-bl-2xl"
        src={imgurl}
      />
      <div className="grow shrink basis-0 py-8 flex-col justify-start items-start gap-4 inline-flex">
        {bucket}
        <h4 className="text-gray-950 text-xl font-semibold">{title}</h4>
        <p className="text-gray-600 text-sm font-medium">{date}</p>
        <Link href={"/"}>
          <p className="self-stretch text-primary text-base font-semibold  ">
            Read more &gt;&gt;
          </p>
        </Link>
      </div>
    </div>
  );
}
Blogtile.propTypes = {
  imgurl: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["article", "news", "video"]).isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Blogtile;
