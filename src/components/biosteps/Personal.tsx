"use client";

import React from "react";
import { BiodataFormData } from "../Biodata";

interface PersonalProps {
  formData: BiodataFormData;
  updateFormData: (data: Partial<BiodataFormData>) => void;
}

function Personal({ formData, updateFormData }: PersonalProps) {
  return (
    <div>
      <h3>BIODATA</h3>
      <hr />

      <div className="grid grid-cols-2  gap-4 ">
        <div className="  w-full h-fit flex flex-col">
          <label
            className=" text-base font-sans font-semibold  "
            htmlFor="surname"
          >
            Surname <span className="text-red-600">*</span>
          </label>
          <input
            className=" p-3 rounded border border-gray-400  "
            placeholder="Enter your username"
            name="surname"
            id="surname"
            required
            type="text"
          />
          <p></p>
        </div>
        <div className="  w-full h-fit flex flex-col">
          <label
            className=" text-base font-sans font-semibold  "
            htmlFor="firstName"
          >
            First Name <span className="text-red-600">*</span>
          </label>
          <input
            className=" p-3 rounded border border-gray-400  "
            placeholder="Enter your username"
            name="firstName"
            id="firstName"
            required
            type="text"
          />
          <p></p>
        </div>
        <div className="  w-full h-fit flex flex-col">
          <label
            className=" text-base font-sans font-semibold  "
            htmlFor="username"
          >
            Surname <span className="text-red-600">*</span>
          </label>
          <input
            className=" p-3 rounded border border-gray-400  "
            placeholder="Enter your username"
            name="surname"
            id="surname"
            required
            type="text"
          />
          <p></p>
        </div>
        <div className="  w-full h-fit flex flex-col">
          <label
            className=" text-base font-sans font-semibold  "
            htmlFor="username"
          >
            Surname <span className="text-red-600">*</span>
          </label>
          <input
            className=" p-3 rounded border border-gray-400  "
            placeholder="Enter your username"
            name="surname"
            id="surname"
            required
            type="text"
          />
          <p></p>
        </div>
        <div className="  w-full h-fit flex flex-col">
          <label
            className=" text-base font-sans font-semibold  "
            htmlFor="username"
          >
            Surname <span className="text-red-600">*</span>
          </label>
          <input
            className=" p-3 rounded border border-gray-400  "
            placeholder="Enter your username"
            name="surname"
            id="surname"
            required
            type="text"
          />
          <p></p>
        </div>
        <div className="  w-full h-fit flex flex-col">
          <label
            className=" text-base font-sans font-semibold  "
            htmlFor="username"
          >
            Surname <span className="text-red-600">*</span>
          </label>
          <input
            className=" p-3 rounded border border-gray-400  "
            placeholder="Enter your username"
            name="surname"
            id="surname"
            required
            type="text"
          />
          <p></p>
        </div>
        <div className="  w-full h-fit flex flex-col">
          <label
            className=" text-base font-sans font-semibold  "
            htmlFor="username"
          >
            Surname <span className="text-red-600">*</span>
          </label>
          <input
            className=" p-3 rounded border border-gray-400  "
            placeholder="Enter your username"
            name="surname"
            id="surname"
            required
            type="text"
          />
          <p></p>
        </div>
        <div className="  w-full h-fit flex flex-col">
          <label
            className=" text-base font-sans font-semibold  "
            htmlFor="username"
          >
            Surname <span className="text-red-600">*</span>
          </label>
          <input
            className=" p-3 rounded border border-gray-400  "
            placeholder="Enter your username"
            name="surname"
            id="surname"
            required
            type="text"
          />
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Personal;
