"use client";
import React from "react";
import { BiodataFormData } from "../Biodata";

interface QualificationsProps {
  formData: BiodataFormData;
  updateFormData: (data: Partial<BiodataFormData>) => void;
}

function Qualifications({ formData, updateFormData }: QualificationsProps) {
  return (
    <div className="pt-4 flex flex-col justify-between gap-4 ">
      <h3 className="font-bold font-mono text-2xl text-black ">
        EDUCATION AND PROFESSIONAL QUALIFICATION
        <hr />
      </h3>

      <div className="grid grid-cols-2  gap-10 ">
        <div className=" w-full h-fit flex flex-col gap-3">
          <label
            className=" text-base font-sans font-semibold  "
            htmlFor="insitution"
          >
            Insitution <span className="text-red-600">*</span>
          </label>
          <input
            className=" p-3 rounded border border-gray-400  "
            placeholder="Enter your Insitution"
            name="insitution"
            id="insitution"
            required
            type="text"
          />
          <p></p>
        </div>
        <div className=" w-full h-fit flex flex-col gap-3">
          <label
            className=" text-base font-sans font-semibold  "
            htmlFor="discipline"
          >
            Discipline <span className="text-red-600">*</span>
          </label>
          <input
            className=" p-3 rounded border border-gray-400  "
            placeholder="Enter your discipline"
            name="discipline"
            id="discipline"
            required
            type="text"
          />
          <p></p>
        </div>
        <div className=" w-full h-fit flex flex-col gap-3">
          <label
            className=" text-base font-sans font-semibold  "
            htmlFor="qualification"
          >
            Qualification <span className="text-red-600">*</span>
          </label>
          <input
            className=" p-3 rounded border border-gray-400  "
            placeholder="Enter your middle name"
            name="qualification"
            id="qualification"
            required
            type="text"
          />
          <p></p>
        </div>
        <div className=" w-full h-fit flex flex-col gap-3">
          <label
            className=" text-base font-sans font-semibold  "
            htmlFor="graduation"
          >
            Graduation <span className="text-red-600">*</span>
          </label>
          <input
            className=" p-3 rounded border bg-white border-gray-400  "
            name="graduation"
            id="graduation"
            required
            type="number"
            min={1900}
            max={2099}
            step={1}
            placeholder="2024"
          />

          <p></p>
        </div>

        <div className=" w-full h-fit flex flex-col gap-3">
          <label
            className=" text-base font-sans font-semibold  "
            htmlFor="firstQualName"
          >
            First professional Qualification
            <span className="text-red-600">*</span>
          </label>
          <input
            className=" p-3 rounded border bg-white border-gray-400  "
            name="firstQualName"
            id="firstQualName"
            required
            type="text"
          />

          <p></p>
        </div>
        <div className=" w-full h-fit flex flex-col gap-3">
          <label
            className=" text-base font-sans font-semibold  "
            htmlFor="firstQualDate"
          >
            Date of First Qualification <span className="text-red-600">*</span>
          </label>
          <input
            className=" p-3 rounded border border-gray-400  "
            name="firstQualDate"
            id="firstQualDate"
            required
            type="date"
          />
          <p></p>
        </div>

        <div className=" w-full h-fit flex flex-col gap-3">
          <label
            className=" text-base font-sans font-semibold  "
            htmlFor="secQualName"
          >
            Second professional Qualification
            <span className="text-red-600">*</span>
          </label>
          <input
            className=" p-3 rounded border bg-white border-gray-400  "
            name="secQualName"
            id="secQualName"
            required
            type="text"
          />

          <p></p>
        </div>
        <div className=" w-full h-fit flex flex-col gap-3">
          <label
            className=" text-base font-sans font-semibold  "
            htmlFor="secQualDate"
          >
            Date of Second Qualification <span className="text-red-600">*</span>
          </label>
          <input
            className=" p-3 rounded border border-gray-400  "
            name="secQualDate"
            id="secQualDate"
            required
            type="date"
          />
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Qualifications;
