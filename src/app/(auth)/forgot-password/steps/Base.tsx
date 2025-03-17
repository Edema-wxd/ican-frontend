"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import InputEle from "@/components/genui/InputEle";
import axios from "axios";
interface Propsval {
  onNext: () => void;
}

function Base({ onNext }: Propsval) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setEmail((e.target as HTMLInputElement).value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = JSON.stringify({
      email: email,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://ican-api-6000e8d06d3a.herokuapp.com/api/auth/forgot-password",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    try {
      const response = await axios.request(config);
      setMessage(response.data.message);
      setError("");
      onNext(); // Call onNext if the request is successful
    } catch (error) {
      setMessage("");
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex flex-col w-full  items-center  gap-6 ">
      <Image src="/Logo_big.png" alt="Logo" width={143} height={60} />
      <div className=" w-fit">
        <h4 className=" text-primary text-center  text-3xl font-bold font-mono   ">
          Forgot Password
        </h4>
        <p className=" text-base font-normal font-sans  ">
          Enter your email address to reset your password.{" "}
        </p>
      </div>
      <form className="w-full flex flex-col gap-4 " onSubmit={handleSubmit}>
        <InputEle
          label="Email Address"
          id="email"
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={handleChange}
          required
        />

        <button
          className=" px-8 py-4 bg-primary rounded-full text-white text-base font-semibold "
          type="submit"
        >
          Send reset link
        </button>
      </form>
      <p className=" text-base font-medium   ">
        Remember Password? {"       "}
        <Link className=" text-primary " href={"/login"}>
          Login Here
        </Link>
      </p>
    </div>
  );
}

export default Base;
