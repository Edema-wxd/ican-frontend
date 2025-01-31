import React from "react";
import Image from "next/image";
import Link from "next/link";
import InputEle from "@/components/genui/InputEle";

interface Propsval {
  onNext: () => void;
}

function New({ onNext }: Propsval) {
  return (
    <div className="flex flex-col w-full items-center  gap-6 ">
      <Image src="/Logo_big.png" alt="Logo" width={143} height={60} />
      <div className=" w-fit">
        <h4 className=" text-primary text-center text-3xl font-bold font-mono   ">
          New Password
        </h4>
        <p className=" text-base text-center font-normal font-sans  ">
          Enter your new password to get back to your account{" "}
        </p>
      </div>
      <form className="w-full flex flex-col gap-4 " action="">
        <InputEle
          label="New Password"
          id="password"
          type="password"
          placeholder="Enter your new password"
          required
          onChange={() => {}}
        />
        <InputEle
          label="Confirm Password"
          id="cpassword"
          type="password"
          placeholder="Confirm your new password"
          required
          onChange={() => {}}
        />

        <button
          onClick={() => {
            onNext();
          }}
          className=" px-8 py-4 bg-primary rounded-full text-white text-base font-semibold "
          type="submit"
        >
          Reset Password
        </button>
      </form>
      <p className=" text-base font-medium   ">
        Remember Password? {"       "}
        <Link className=" text-primary " href={"/admin-login"}>
          Login Here
        </Link>
      </p>
    </div>
  );
}

export default New;
