import React from "react";

// import Biodata from "@/components/Biodata";
import Image from "next/image";
import Link from "next/link";

function Login() {
  return (
    <div className=" m-auto ">
      <div className="flex flex-col w-[440px] items-center rounded-2xl  bg-white p-8 gap-6 ">
        <Image src="/Logo_big.png" alt="Logo" width={143} height={60} />
        <div className=" w-fit">
          <h4 className=" text-primary text-center text-3xl font-bold font-mono   ">
            Member Login
          </h4>
          <p className=" text-base font-normal font-sans  ">
            Please, enter your details below
          </p>
        </div>
        <form className="w-full flex flex-col gap-4 " action="">
          <div className="  w-full flex flex-col">
            <label
              className=" text-base font-sans font-semibold  "
              htmlFor="username"
            >
              Username <span className="text-red-600">*</span>
            </label>
            <input
              className=" p-3 rounded border border-gray-400  "
              placeholder="Enter your username"
              name="username"
              required
              type="text"
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
              required
              type="password"
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
