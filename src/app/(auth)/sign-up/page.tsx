"use client";

import React, { useState } from "react";
import Biodata from "@/components/Biodata";
import Image from "next/image";
import Link from "next/link";
import {
  FaUser,
  FaEnvelope,
  FaRegCircle,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaRegCheckCircle,
} from "react-icons/fa";
import Toast from "@/components/genui/Toast";

function Signup() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [complete, setComplete] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
    consent: false,
  });
  const [showToast, setShowToast] = useState(false);

  const [fname, setFname] = useState(false);
  const [sname, setSname] = useState(false);
  const [pvalid, setPvalid] = useState(false);
  const [cvalid, setCvalid] = useState(false);
  const [evalid, setEvalid] = useState(false);
  const [plength, setPlength] = useState(false);
  const [pupper, setPupper] = useState(false);
  const [pnumber, setPnumber] = useState(false);
  const [plower, setPlower] = useState(false);
  const [consent, setConsent] = useState(false);

  const [toastProps, setToastProps] = useState<{
    type: "success" | "error" | "warning" | "info";
    message: string;
  }>({
    type: "success",
    message: "",
  });

  const toast = (
    type: "success" | "error" | "warning" | "info",
    message: string
  ) => {
    setToastProps({ type, message });
    setShowToast(true);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const validateFirstName = (firstName: string): string => {
    const nameRegex = /^[a-zA-Z]+$/;
    if (firstName.length < 3) {
      console.log("First name must be at least 3 characters long");
    }
    if (!nameRegex.test(firstName)) {
      console.log("First name must contain only letters.");
    } else {
      console.log("First name is valid", firstName);
      setFname(true);
    }
    return "";
  };

  const validateSurname = (surname: string): string => {
    const nameRegex = /^[a-zA-Z]+$/;
    if (surname.length < 3) {
      return "Surname must be at least 3 characters long.";
    }
    if (!nameRegex.test(surname)) {
      console.log("First name must contain only letters.");
    } else {
      console.log("First name is valid", surname);
      setSname(true);
    }
    return "";
  };
  const validateEmail = (email: string): string => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log("Invalid email address.", email);
    } else {
      console.log("Email is valid", email);
      setEvalid(true);
    }
    return "";
  };
  const validatePassword = (password: string): string => {
    if (password.length < 8) {
      setPlength(false);
    } else {
      setPlength(true);
    }
    if (!/[A-Z]/.test(password)) {
      setPupper(false);
    } else {
      setPupper(true);
    }
    if (!/[a-z]/.test(password)) {
      setPlower(false);
    } else {
      setPlower(true);
    }
    if (!/\d/.test(password) && !/[@$!%*?&]/.test(password)) {
      setPnumber(false);
    } else {
      setPnumber(true);
    }
    if (
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /\d/.test(password) &&
      /[@$!%*?&]/.test(password)
    ) {
      setPvalid(true);
      console.log("Password is valid");
    }

    return "";
  };
  const validateConfirmPassword = (
    password: string,
    cpassword: string
  ): string => {
    if (cpassword !== password) {
      console.log("Passwords do not match");
    } else {
      setCvalid(true);
      console.log("passwords match");
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
    if (name === "firstName") {
      console.log("First Name", value);
      validateFirstName(value);
  
    }
    if (name === "surname") {
      console.log("Surname", value);
      validateSurname(value);
    
    }
    if (name === "email") {
      console.log("Email", value);
      validateEmail(value);
     
    }
    if (name === "password") {
      console.log("Password", value);
      validatePassword(value);
     
    }
    if (name === "cpassword") {
      console.log("Confirm password", value);
      validateConfirmPassword(formData.password, value);
     
    }
    if (name === "consent") {
      console.log("Consent checked", checked);
      setConsent(!consent);
      
    }

    if (consent && pvalid && cvalid && evalid && fname && sname) {
      setComplete(true);
      console.log(complete)
    }
  };

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const firstName = (
      document.getElementById("firstName") as HTMLInputElement
    ).value.trim();
    const surname = (
      document.getElementById("surname") as HTMLInputElement
    ).value.trim();
    const email = (
      document.getElementById("email") as HTMLInputElement
    ).value.trim();
    const phone = (
      document.getElementById("phone") as HTMLInputElement
    ).value.trim();
    const password = (
      document.getElementById("password") as HTMLInputElement
    ).value.trim();
    const cpassword = (
      document.getElementById("cpassword") as HTMLInputElement
    ).value.trim();

    if (!firstName || !surname || !email || !phone || !password || !cpassword) {
      //toast("warning", "All fields are required.");
      return;
    }
    console.log("Form submitted", formData);
  };

  return (
    <div className=" mx-auto ">
      <div className="flex flex-col w-96 sm:w-[440px] items-center rounded-2xl  bg-white p-8 gap-6 ">
        <Image src="/Logo_big.png" alt="Logo" width={143} height={60} />
        <div className=" w-fit">
          <h4 className=" text-primary text-center text-3xl font-bold font-mono   ">
            Create Account
          </h4>
          <p className=" text-base font-normal font-sans  ">
            Welcome, Let&apos;s get started
          </p>
        </div>
        <form className="w-full flex flex-col gap-4 " action="">
          <div className="  w-full flex flex-col">
            <label
              className=" text-base font-sans font-semibold  "
              htmlFor="firstName"
            >
              First Name <span className="text-red-600">*</span>
            </label>
            <input
              className=" p-3 rounded border border-gray-400  "
              placeholder="Enter your first name"
              name="firstName"
              id="firstName"
              required
              type="text"
              onChange={handleChange}
            />
            <p></p>
          </div>
          <div className="  w-full flex flex-col">
            <label
              className=" text-base font-sans font-semibold  "
              htmlFor="surname"
            >
              Surname <span className="text-red-600">*</span>
            </label>
            <input
              className=" p-3 rounded border border-gray-400  "
              placeholder="Enter your first name"
              name="surname"
              id="surname"
              onChange={handleChange}
              required
              type="text"
            />
            <p></p>
          </div>
          <div className="  w-full flex flex-col">
            <label
              className=" text-base font-sans font-semibold  "
              htmlFor="email"
            >
              Email Address <span className="text-red-600">*</span>
            </label>
            <input
              className=" p-3 rounded border border-gray-400  "
              placeholder="Enter your first name"
              name="email"
              onChange={handleChange}
              id="email"
              required
              type="email"
            />
            <p></p>
          </div>
          <div className="  w-full flex flex-col ">
            <label
              className=" text-base font-sans font-semibold  "
              htmlFor="password"
            >
              Password <span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <FaLock className="absolute left-3 top-[.8rem] text-gray-400 text-md" />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Create a password"
                className="w-full pl-10 pr-10 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={handleChange}
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-3 text-gray-400 text-md focus:outline-none"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div className="pt-4 grid grid-cols-2 gap-4">
              <div
                className={`text-sm w-fit h-fit justify-start ${
                  pupper ? " text-green-500 " : "text-gray-500"
                } items-center flex flex-row gap-3`}
              >
                {" "}
                {pupper ? (
                  <FaRegCheckCircle className="w-6 h-6 m-1" />
                ) : (
                  <FaRegCircle className="w-6 h-6 m-1" />
                )}
                <p>One upper case character</p>
              </div>
              <div
                className={`text-sm w-fit h-fit justify-start ${
                  plength ? " text-green-500 " : "text-gray-500"
                } items-center flex flex-row gap-3`}
              >
                {plength ? (
                  <FaRegCheckCircle className="w-6 h-6 m-1" />
                ) : (
                  <FaRegCircle className="w-6 h-6 m-1" />
                )}
                <p className="w-fit">8 characters minimum</p>
              </div>
              <div
                className={`text-sm w-fit h-fit justify-start ${
                  plower ? " text-green-500 " : "text-gray-500"
                } items-center flex flex-row gap-3`}
              >
                {plower ? (
                  <FaRegCheckCircle className="w-6 h-6 m-1" />
                ) : (
                  <FaRegCircle className="w-6 h-6 m-1" />
                )}
                <p className="w-fit">One lower case character</p>
              </div>
              <div
                className={`text-sm w-fit h-fit justify-start ${
                  pnumber ? " text-green-500 " : "text-gray-500"
                } items-center flex flex-row gap-3`}
              >
                {pnumber ? (
                  <FaRegCheckCircle className="w-6 h-6 m-1" />
                ) : (
                  <FaRegCircle className="w-6 h-6 m-1" />
                )}
                <p className="w-fit">One number & one special character</p>
              </div>
            </div>
          </div>
          <div className="  w-full flex flex-col">
            <label
              className=" text-base font-sans font-semibold  "
              htmlFor="cpassword"
            >
              Confirm Password <span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <FaLock className="absolute left-3 top-[.8rem] text-gray-400 text-md" />
              <input
                type={showPassword ? "text" : "password"}
                id="cpassword"
                onChange={handleChange}
                name="cpassword"
                placeholder="Create a password"
                className="w-full pl-10 pr-10 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-3 text-gray-400 text-md focus:outline-none"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <p></p>
          </div>
          <div className=" flex flex-row justify-between gap-2 items-center ">
            <input
              type="checkbox"
              name="consent"
              id="consent"
              checked={formData.consent}
              onChange={handleChange}
            />
            <p className=" text-xs">
              By creating an account, I agree and consent to receive
              communications and updates about ICAN Institute products and
              services. I have reviewed and acknowledged the Privacy Policy
              along with the Terms and Conditions therein.{" "}
            </p>
          </div>
          <button
            disabled={complete}
            className=" px-8 py-4 disabled:bg-slate-500 bg-primary rounded-full text-white text-base font-semibold "
            type="submit"
          >
            Verify
          </button>
        </form>
        <p className=" text-base font-medium   ">
          Already a member?
          <Link className=" text-primary " href={"/login"}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
