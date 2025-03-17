"use client";
import React from "react";
import { BiodataFormData } from "../homecomps/Biodata";
import InputEle from "../genui/InputEle";

interface ExperienceProps {
  isShown: boolean;

  formData: BiodataFormData;
  updateFormData: (data: Partial<BiodataFormData>) => void;
}

function Experience({ isShown, formData, updateFormData }: ExperienceProps) {
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
      experience: {
        ...formData.experience,
        [id]: value,
      },
    });
    console.log(e);
    console.log(formData);
  };
  return (
    <div className={` ${bucket} pt-4 flex flex-col justify-between gap-4 `}>
      <h3 className="font-bold font-mono text-2xl text-black ">
        WORK EXPERIENCE
        <hr />
      </h3>
      <InputEle
        onChange={handleChange}
        required={false}
        id="currentJob"
        type="text"
        label="Current Job "
        value={formData?.experience?.currentJob}
      />
      <InputEle
        onChange={handleChange}
        required={false}
        id="companyName"
        type="text"
        label="Company Name"
        value={formData?.experience?.companyName}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2  gap-10 ">
        <InputEle
          onChange={handleChange}
          required={false}
          id="department"
          placeholder="Enter your department"
          type="text"
          label="Department"
          value={formData?.experience?.department}
        />
        <InputEle
          onChange={handleChange}
          required={false}
          id="currentPosition"
          placeholder="Enter your Current Position"
          type="text"
          label="Current Position"
          value={formData?.experience?.currentPosition}
        />
        <InputEle
          onChange={handleChange}
          required={false}
          id="startDate"
          type="date"
          label="Start Date"
          value={formData?.experience?.startDate}
        />
      </div>
    </div>
  );
}

export default Experience;
