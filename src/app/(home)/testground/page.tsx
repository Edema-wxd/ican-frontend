"use client";

import React, { useState } from "react";

import { RichTextEditor } from "@/registry/new-york/rich-text-editor/rich-text-editor";

function TestingPage() {
  const [value, setValue] = useState(``);

  return (
    <div className="mt-20">
      TestingPage
      <div className="m-10 w-96">
        <RichTextEditor value={value} onChange={setValue} />
        <button onClick={() => console.log(value)}>Submit</button>
      </div>
    </div>
  );
}

export default TestingPage;
