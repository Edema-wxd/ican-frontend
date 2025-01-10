"use client";
import React from "react";
import { BiodataFormData } from "../Biodata";

interface ReferenceProps {
  formData: BiodataFormData;
  updateFormData: (data: Partial<BiodataFormData>) => void;
}

function Reference({ formData, updateFormData }: ReferenceProps) {
  return (
    <div className="pt-4 flex flex-col justify-between gap-4 ">
      <h3 className="font-bold font-mono text-2xl text-black ">
        REFERENCE <hr />
      </h3>
      <div className=" w-full h-fit flex flex-col gap-3">
        <label
          className=" text-base font-sans font-semibold  "
          htmlFor="refereeName"
        >
          Referee Name <span className="text-red-600">*</span>
        </label>
        <input
          className=" p-3 rounded border border-gray-400  "
          placeholder="Enter your Referee Name"
          name="refereeName"
          id="refereeName"
          required
          type="text"
        />
        <p></p>
      </div>

      <div className="grid grid-cols-2  gap-10 ">
        <div className=" w-full h-fit flex flex-col gap-3">
          <label
            className=" text-base font-sans font-semibold  "
            htmlFor="refereeIcanNo"
          >
            Referee&apos;s ICAN Membership Number{" "}
            <span className="text-red-600">*</span>
          </label>
          <input
            className=" p-3 rounded border border-gray-400  "
            placeholder="Enter your middle name"
            name="refereeIcanNo"
            id="refereeIcanNo"
            required
            type="text"
          />
          <p></p>
        </div>
        <div className=" w-full h-fit flex flex-col gap-3">
          <label
            className=" text-base font-sans font-semibold  "
            htmlFor="refereePhone"
          >
            Referee&apos;s Phone Number <span className="text-red-600">*</span>
          </label>
          <input
            className=" p-3 rounded border bg-white border-gray-400  "
            name="refereePhone"
            id="refereePhone"
            required
            type="text"
          />

          <p></p>
        </div>
        <div className=" w-full h-fit flex flex-col gap-3">
          <label
            className=" text-base font-sans font-semibold  "
            htmlFor="refereeEmail"
          >
            Referee&apos;s Email Address <span className="text-red-600">*</span>
          </label>
          <input
            className=" p-3 rounded border border-gray-400  "
            name="refereeEmail"
            id="refereeEmail"
            required
            type="email"
          />
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Reference;
