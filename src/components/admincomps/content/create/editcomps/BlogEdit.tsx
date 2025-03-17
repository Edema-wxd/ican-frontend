import React, { useState } from "react";
import InputEle from "@/components/genui/InputEle";
import { RichTextEditor } from "@/registry/new-york/rich-text-editor/rich-text-editor";

interface BlogEditProps {}

function BlogEdit({}: BlogEditProps) {
  const [blog, setBlog] = useState("");

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
        <div>
          <h5>Content Body</h5>

          <RichTextEditor value={blog} onChange={setBlog} />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <button className="rounded-full py-2 bg-primary text-white text-base w-full">
          Publish Blog
        </button>
        <button
          onClick={() => console.log(blog)}
          className=" py-2 text-primary border border-primary text-base rounded-full w-full"
        >
          Save as Draft
        </button>
        <button className=" py-1 text-primary text-base rounded-full w-full">
          Preview
        </button>
      </div>
    </div>
  );
}

export default BlogEdit;
