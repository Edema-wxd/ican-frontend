"use client";

import React, { useState } from "react";
import InputEle from "@/components/genui/InputEle";
import Link from "next/link";

function AdminPasswordRequest() {
  const [evalid, setEvalid] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
  });

  const validateEmail = (email: string): string => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Invalid email address.";
    }
    setEvalid(true);
    return "";
  };
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    
    if (name === "email") {
      validateEmail(value);
    }
  };

  return (
    <div className=" m-auto ">
      <div className="flex flex-col w-96 sm:w-[550px] items-center rounded-2xl  bg-white p-8 gap-6 ">
        <h4 className=" text-black w-full text-left text-3xl font-semibold font-mono   ">
          Request password reset
        </h4>
        <InputEle
          id="email"
          type="text"
          placeholder="Enter email address"
          label="Email Address"
          onChange={handleChange}
        />{" "}
        <button
          className=" w-full px-8 py-4 bg-primary  rounded-full text-white text-base font-semibold "
          type="submit"
          disabled={!evalid}
        >
          Request reset
        </button>
        <br />
        <p className=" text-base font-medium   ">
          Remember your password? {"       "}
          <Link className=" text-primary " href={"/admin-login"}>
            Log in{" "}
          </Link>
        </p>
      </div>
    </div>
  );
}

export default AdminPasswordRequest;
