import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

function Blogtile({ imgurl, type, title, date }) {
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
    <div className="max-w-96 w-fit h-64 pr-4 rounded-lg border border-gray-300 justify-start items-center gap-8 flex flex-row">
      <img
        className="w-64 h-64 relative rounded-tl-2xl rounded-bl-2xl"
        src={imgurl}
      />
      <div className="grow shrink basis-0 py-8 flex-col justify-start items-start gap-4 inline-flex">
        {bucket}
        <div className="self-stretch text-gray-950 text-xl font-semibold  leading-normal">
          {title}
        </div>
        <div className="text-gray-600 text-sm font-medium  leading-tight">
          {date}
        </div>
        <Link href={"/"}>
          <div className="self-stretch text-primary text-base font-semibold  leading-normal">
            Read more &gt;&gt;
          </div>
        </Link>
      </div>
    </div>
  );
}
Blogtile.propTypes = {
  imgurl: PropTypes.string,
  type: PropTypes.oneOf(["article", "news", "video"]),
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
Blogtile.defaultProps = {
  imgurl: "/image.png",
  type: "article",
  title: "5 Essential needs to consider for developing a web App",
  date: "22, October 2024",
};

export default Blogtile;
