"use client";
import { BiodataFormData } from "../Biodata";
import InputEle from "../genui/InputEle";
import React from "react";

interface QualificationsProps {
  isShown: boolean;

  formData: BiodataFormData;
  updateFormData: (data: Partial<BiodataFormData>) => void;
}

function Qualifications({
  isShown,
  formData,
  updateFormData,
}: QualificationsProps) {
  var bucket = "";
  if (isShown) {
    bucket = "flex";
  } else {
    bucket = "hidden";
  }
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { id, value } = e.target;
    updateFormData({
      education: {
        ...formData.education,
        [id]: value,
      },
    });
    console.log(e);
    console.log(formData);
  };
  return (
    <div className={`${bucket}  pt-4 flex flex-col justify-between gap-4 `}>
      <h3 className="font-bold font-mono text-2xl text-black ">
        EDUCATION AND PROFESSIONAL QUALIFICATION
        <hr />
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2  gap-10 ">
        <InputEle
          id="insitution"
          placeholder="Enter your Insitution"
          type="text"
          label="Insitution"
          onChange={handleChange}
          required={false}
        />
        <InputEle
          id="discipline"
          placeholder="Enter your Discipline"
          type="text"
          label="Discipline"
          onChange={handleChange}
          required={false}
        />
        <InputEle
          id="qualification"
          placeholder="Enter your qualification"
          type="text"
          label="Qualification"
          onChange={handleChange}
          required={false}
        />
        <InputEle
          id="graduation"
          type="number"
          label="Year of Graduation"
          onChange={handleChange}
          required={false}
        />
        <InputEle
          onChange={handleChange}
          required={false}
          id="firstQualName"
          type="text"
          label="First professional Qualification"
        />
        <InputEle
          onChange={handleChange}
          required={false}
          id="firstQualDate"
          type="number"
          label="Year of First Qualification"
        />
        <InputEle
          onChange={handleChange}
          required={false}
          id="secQualName"
          type="text"
          label="Second professional Qualification"
        />
        <InputEle
          onChange={handleChange}
          required={false}
          id="secQualDate"
          type="number"
          label="Year of Second Qualification"
        />
      </div>
    </div>
  );
}

export default Qualifications;
