"use client";

import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import InputEle from "@/components/genui/InputEle";

function AdminLogin() {
  const [loading, setLoading] = useState(false);
  const [complete, setComplete] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });
  // const [showToast, setShowToast] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [popError, setPopError] = useState(false);

  const [pvalid, setPvalid] = useState(false);
  const [evalid, setEvalid] = useState(false);

  const [remember, setRemember] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateEmail = (email: string): string => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Invalid email address.";
    }
    return "";
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    let error = "";

    if (name === "email") {
      error = validateEmail(value);
      setEvalid(!error);
    }

    if (name === "remember") {
      setRemember(checked);
    }

    setFormErrors({
      ...formErrors,
      [name]: error,
    });

    if (pvalid && evalid) {
      setComplete(true);
    } else {
      setComplete(false);
    }
  };

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const email = (
      document.getElementById("email") as HTMLInputElement
    ).value.trim();
    const password = (
      document.getElementById("password") as HTMLInputElement
    ).value.trim();

    const errors = {
      email: validateEmail(email),
      password: password,
    };

    setFormErrors(errors);

    const data = JSON.stringify({
      email: email,
      password: password,
      remember: remember,
    });
    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://ican-sds-api.onrender.com/api/v1/auth/register", // Change to admin login
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    if (Object.values(errors).every((error) => error === "")) {
      // Submit form
      try {
        const response = await axios.request(config);
        setPopupMessage(response.data.message);
        setShowPopup(true);
        setPopError(false);
      } catch (error) {
        setPopupMessage("An error occurred during login.");
        setPopError(true);
        setShowPopup(true);
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };

  return (
    <div className=" m-auto ">
      <div className="flex flex-col w-96 sm:w-[550px] items-center rounded-2xl  bg-white p-8 gap-6 ">
        <div className=" w-fit">
          <h4 className=" text-primary text-center text-3xl font-bold font-mono   ">
            Login to your account
          </h4>
          <p className=" text-base text-center font-normal font-sans  ">
            Please, enter your details below
          </p>
        </div>
        <form className="w-full flex flex-col gap-4 " action="">
          {/* <InputEle /> */}
          <InputEle
            id="email"
            type="text"
            placeholder="Enter your email address or username"
            label="Email Address / Username"
            onChange={handleChange}
            errorMsg={formErrors.email}
          />
          <InputEle
            id="password"
            type="password"
            placeholder="Enter password"
            label="Password"
            onChange={handleChange}
            errorMsg={formErrors.password}
          />

          <div className=" flex flex-row justify-between  ">
            <div className=" flex flex-row gap-2 ">
              <input type="checkbox" name="remember" id="remember" />
              <p className=" text-base font-medium   ">Remember me</p>
            </div>
            <Link
              className=" text-primary text-base font-medium  "
              href={"/forgot-password"}
            >
              Forgot Password
            </Link>
          </div>
          <button
            className=" px-8 py-4 bg-primary rounded-full text-white text-base font-semibold "
            type="submit"
          >
            Log In
          </button>
        </form>
        <p className=" text-base font-medium   ">
          Don&apos;t have an account? {"       "}
          <Link className=" text-primary " href={"/admin-signup"}>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default AdminLogin;
