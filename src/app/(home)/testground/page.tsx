"use client";

import React from "react";
import RichTextEditor from "@/components/genui/RichTextEditor";
import NewEvent from "@/components/admincomps/event/create/NewEvent";

function TestingPage() {
  return (
    <div className="mt-20">
      TestingPage
      <div className="m-10">
        <RichTextEditor />
      </div>
    </div>
  );
}

export default TestingPage;
