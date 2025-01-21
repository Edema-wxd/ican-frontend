"use client";
import React from "react";
import { BiodataFormData } from "../Biodata";
import InputEle from "../genui/InputEle";

interface ReferenceProps {
  formData: BiodataFormData;
  updateFormData: (data: Partial<BiodataFormData>) => void;
}

function Reference({ formData, updateFormData }: ReferenceProps) {
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { id, value } = e.target;
    updateFormData({
      reference: {
        ...formData.reference,
        [id]: value,
      },
    });
    console.log(e);
    console.log(formData);
  };
  return (
    <div className="pt-4 flex flex-col justify-between gap-4 ">
      <h3 className="font-bold font-mono text-2xl text-black ">
        REFERENCE <hr />
      </h3>
      <InputEle
        onChange={handleChange}
        id="refereeName"
        placeholder="Enter your Referee Name"
        type="text"
        label="Referee Name"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2  gap-10 ">
        <InputEle
          onChange={handleChange}
          id="refereeIcanNo"
          placeholder="Enter your Referee's ICAN Membership Number"
          type="text"
          label="Referee's ICAN Membership Number"
        />
        <InputEle
          onChange={handleChange}
          id="refereePhone"
          type="phone"
          label="Referee's Phone Number"
        />
        <InputEle
          onChange={handleChange}
          id="refereeEmail"
          type="email"
          label="Referee's Email Address"
          placeholder="example@gmail.com"
        />
      </div>
    </div>
  );
}

export default Reference;
