import React, { useState } from "react";
import InputEle from "@/components/genui/InputEle";

function FaqEdit() {
  const [faq, setFaq] = useState("");
  return (
    <div>
      <div>
        <InputEle
          label="Question"
          type="text"
          id="title"
          placeholder="Enter Question"
          onChange={() => {}}
        />
        <InputEle
          label="Answer"
          type="text"
          id="answer"
          placeholder="Enter Answer"
          onChange={() => {}}
        />
      </div>
      <div className="flex flex-col gap-2">
        <button className="rounded-full py-2 bg-primary text-white text-base w-full">
          Publish FAQ
        </button>
        <button className=" py-2 text-primary border border-primary text-base rounded-full w-full">
          Save as Draft
        </button>
        <button className=" py-1 text-primary text-base rounded-full w-full">
          Preview
        </button>
      </div>
    </div>
  );
}

export default FaqEdit;
