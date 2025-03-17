"use client";

import React from "react";
import { BiodataFormData } from "../homecomps/Biodata";
import InputEle from "@/components/genui/InputEle";

interface PersonalProps {
  isShown: boolean;

  formData: BiodataFormData;
  updateFormData: (data: Partial<BiodataFormData>) => void;
}

function Personal({ isShown, formData, updateFormData }: PersonalProps) {
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
      personalData: {
        ...formData.personalData,
        [id]: value,
      },
    });
    console.log(e);
    console.log(formData);
  };

  return (
    <div className={`${bucket} pt-4 flex flex-col justify-between gap-4 `}>
      <h3 className="font-bold font-mono text-2xl text-black ">
        BIODATA
        <hr />
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2  gap-10 ">
        <InputEle
          value={formData.personalData.surname}
          onChange={handleChange}
          id="surname"
          placeholder="Enter your surname"
          type="text"
          label="Surname"
        />
        <InputEle
          value={formData.personalData.firstName}
          onChange={handleChange}
          id="firstName"
          placeholder="Enter your first name"
          type="text"
          label="First Name"
        />
        <InputEle
          value={formData.personalData?.middleName}
          onChange={handleChange}
          id="middleName"
          placeholder="Enter your middle name"
          type="text"
          label="Middle Name"
        />
        <InputEle
          value={formData.personalData?.gender}
          onChange={handleChange}
          id="gender"
          type="gender"
          label="Gender"
        />
        <InputEle
          value={formData.personalData?.dob}
          onChange={handleChange}
          id="dob"
          type="date"
          label="Date of birth"
        />
        <InputEle
          value={formData.personalData?.maritalStatus}
          onChange={handleChange}
          id="maritalStatus"
          type="marriage"
          label="Marital Status"
        />
        <InputEle
          value={formData.personalData?.nationality}
          onChange={handleChange}
          id="nationality"
          type="country"
          label="Nationality"
        />
        <InputEle
          value={formData.personalData?.state}
          onChange={handleChange}
          id="state"
          type="text"
          label="State of origin"
          placeholder="Enter your state of origin"
        />
        <InputEle
          value={formData.personalData?.lga}
          onChange={handleChange}
          id="lga"
          type="text"
          label="LGA of origin"
          placeholder="Enter your LGA of origin"
        />
      </div>
    </div>
  );
}

export default Personal;
