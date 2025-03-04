"use client";

import React from "react";
import { useState } from "react";
// import Biodata from "@/components/Biodata";
import Image from "next/image";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import InputEle from "@/components/genui/InputEle";

function Login() {
  const { toast } = useToast();

  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault(); // Prevent default form submission
   
    if (email && password) {
      toast({
        title: "Login Successful",
        description: "Redirecting to Overview...",
        variant: "default",
        duration: 2000,
      });

      setTimeout(() => {
        router.push("/Overview");
      }, 2000); // Match the toast duration
    } else {
      toast({
        title: "Login Failed",
        description: "Please enter both email and password",
        variant: "destructive",
        duration: 2000,
      });
    }
  };

  return (
    <div className=" m-auto ">
      <div className="flex flex-col w-96 sm:w-[440px] items-center rounded-2xl  bg-white p-8 gap-6 ">
        <Image src="/Logo_big.png" alt="Logo" width={143} height={60} />
        <div className=" w-fit">
          <h4 className=" text-primary text-center text-3xl font-bold font-mono   ">
            Member Login
          </h4>
          <p className=" text-base font-normal font-sans  ">
            Please, enter your details below
          </p>
        </div>
        <form className="w-full flex flex-col gap-4 " action="" onSubmit={handleSubmit}>
          {/* <InputEle /> */}
          <div className="  w-full flex flex-col">
            <label
              className=" text-base font-sans font-semibold  "
              htmlFor="email"
            >
              Email Address <span className="text-red-600">*</span>
            </label>
            <input
              className=" p-3 rounded border border-gray-400  "
              placeholder="Enter your email address"
              name="email"
              value={email}
              required
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <p></p>
          </div>
          <div className="  w-full flex flex-col">
            <label
              className=" text-base font-sans font-semibold  "
              htmlFor="password"
            >
              Password <span className="text-red-600">*</span>
            </label>
            <input
              className=" p-3 rounded border border-gray-400  "
              placeholder="Enter password"
              name="password"
              value={password}
              required
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <p></p>
          </div>
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
            onClick={() => {
              toast({
                title: "Login Successful",
                description: "Redirecting to Overview...",
                variant: "default",
                duration: 3000,
              });
              setTimeout(() => {
                router.push("/Overview"); 
              }, 100); 
            }}
          >
            Log In
          </button>
        </form>
        <p className=" text-base font-medium   ">
          Don&apos;t have an account? {"       "}
          <Link className=" text-primary " href={"/sign-up"}>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
