"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { MdArrowBack, MdDelete } from "react-icons/md";
import { BellIcon } from "lucide-react";

function CreateBillingPage() {
  const router = useRouter();

  return (
    <div className="rounded-3xl p-6">
      <div className="flex flex-col mb-6 w-full items-start justify-start">
        <button
          className="text-gray-500 text-base flex flex-row gap-2  font-semibold w-fit my-2 h-fit"
          onClick={() => router.back()}
        >
          <MdArrowBack className="w-6 h-6 " />
          Back
        </button>
        <h2 className="font-semibol text-2xl text-black">Create New Billing</h2>
      </div>
      {/* Tab sections */}
      <div className="rounded-3xl px-8 py-6 flex flex-col gap-4 border border-neutral-200 bg-white">
        <h2 className="text-xl w-full font-semibold text-left border-b border-gray-500 ">
          Invoice Summary
        </h2>
        <div></div>
      </div>
    </div>
  );
}

export default CreateBillingPage;
