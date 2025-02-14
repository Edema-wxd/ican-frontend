import React, { useState } from "react";
import InputEle from "@/components/genui/InputEle";

interface BlogEditProps {}

function BlogEdit({}: BlogEditProps) {
  return (
    <div>
      <div>
        <InputEle label="Title" type="text" id="title" onChange={() => {}} />
        <InputEle
          label="Author Name"
          type="text"
          id="author"
          onChange={() => {}}
        />
      </div>
      <div className="flex flex-col gap-2">
        <button className="rounded-full bg-primary text-white text-base w-full">
          Publish Blog{" "}
        </button>
        <button className="text-primary border border-primary text-base rounded-full w-full">
          Save as Draft{" "}
        </button>
        <button className="text-primary text-base rounded-full w-full">
          Preview
        </button>
      </div>
    </div>
  );
}

export default BlogEdit;
