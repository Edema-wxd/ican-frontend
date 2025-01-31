"use client";

import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import InputEle from "@/components/genui/InputEle";

function AdminSignup() {
  const [loading, setLoading] = useState(false);
  const [complete, setComplete] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    status: false,
    address: "",
    email: "",
    phone: "",
  });
  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    status: "",
    address: "",
    email: "",
    phone: "",
  });
  const [popupMessage, setPopupMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [popError, setPopError] = useState(false);

  const [fname, setFname] = useState(false);
  const [sname, setSname] = useState(false);
  const [address, setAddress] = useState(false);
  const [evalid, setEvalid] = useState(false);

  const [pvalid, setPvalid] = useState(false);
  const [plength, setPlength] = useState(false);
  const [pupper, setPupper] = useState(false);
  const [pnumber, setPnumber] = useState(false);
  const [plower, setPlower] = useState(false);

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
  const validateFirstName = (firstName: string): string => {
    const nameRegex = /^[a-zA-Z0-9]+$/;
    if (firstName.length < 3) {
      return "First name must be at least 3 characters long.";
    }
    if (!nameRegex.test(firstName)) {
      return "First name must contain only alphanumeric characters.";
    }
    return "";
  };

  const validateSurname = (surname: string): string => {
    const nameRegex = /^[a-zA-Z0-9]+$/;
    if (surname.length < 3) {
      return "Surname must be at least 3 characters long.";
    }
    if (!nameRegex.test(surname)) {
      return "Surname must contain only alphanumeric characters.";
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
    if (!/\d/.test(password)) {
      setPnumber(false);
    } else {
      setPnumber(true);
    }
    if (!/[@$!%*?&]/.test(password)) {
      setPnumber(false);
    } else {
      setPvalid(true);
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
    console.log(formData);
    let error = "";
    if (name === "firstName") {
      error = validateFirstName(value);
      setFname(!error);
    }
    if (name === "surname") {
      error = validateSurname(value);
      setSname(!error);
    }
    if (name === "address") {
      error = validateFirstName(value);
      setAddress(!error);
    }
    if (name === "email") {
      error = validateEmail(value);
      setEvalid(!error);
    }
    if (name === "password") {
      error = validatePassword(value);
    }

    setFormErrors({
      ...formErrors,
      [name]: error,
    });

    if (pvalid && evalid && fname && sname) {
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
    const firstName = (
      document.getElementById("firstName") as HTMLInputElement
    ).value.trim();
    const lastName = (
      document.getElementById("lastName") as HTMLInputElement
    ).value.trim();
    const status = (
      document.getElementById("status") as HTMLInputElement
    ).value.trim();
    const address = (
      document.getElementById("address") as HTMLInputElement
    ).value.trim();
    const phone = (
      document.getElementById("phone") as HTMLInputElement
    ).value.trim();

    const errors = {
      firstName: firstName,
      lastName: lastName,
      status: status,
      phone: phone,
      address: address,
      email: validateEmail(email),
    };

    setFormErrors(errors);

    const data = JSON.stringify({
      firstName: firstName,
      lastName: lastName,
      status: false,
      address: address,
      email: email,
      phone: phone,
    });
    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "", // Change to admin login
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
            Let's get you started
          </h4>
          <p className=" text-base text-center font-normal font-sans  ">
            Enter your details carefully
          </p>
        </div>
        <form className="w-full flex flex-col gap-4 " action="">
          {/* <InputEle /> */}
          <InputEle
            id="firstName"
            type="text"
            placeholder="Enter your First Name"
            label="First Name"
            onChange={handleChange}
            errorMsg={formErrors.firstName}
          />
          <InputEle
            id="lastName"
            type="text"
            placeholder="Enter your Last Name"
            label="Last Name"
            onChange={handleChange}
            errorMsg={formErrors.lastName}
          />
          <InputEle
            id="status"
            type="text"
            placeholder="Enter your status"
            label="Status"
            onChange={handleChange}
            errorMsg={formErrors.status}
          />
          <InputEle
            id="address"
            type="text"
            placeholder="Enter your home address"
            label="Home address"
            onChange={handleChange}
            errorMsg={formErrors.address}
          />
          <InputEle
            id="email"
            type="email"
            placeholder="Enter your email"
            label="Email address"
            onChange={handleChange}
            errorMsg={formErrors.email}
          />
          <InputEle
            id="phone"
            type="phone"
            placeholder="Enter phone number"
            label="Phone"
            onChange={handleChange}
            errorMsg={formErrors.phone}
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

export default AdminSignup;
