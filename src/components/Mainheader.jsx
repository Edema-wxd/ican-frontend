"use client";

import React from "react";
import {
  HiLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Mainheader() {
  const pathname = usePathname();

  return (
    <div className="w-full h-32 relative bg-white flex-col justify-start items-start flex">
      <div className="h-12 px-40 py-2 bg-primary flex-row justify-between items-center w-50 gap-4 flex">
        <div className="justify-start items-center gap-1  w-fit  flex">
          <HiOutlineMail className=" stroke-white " />
          <p className="text-white text-sm font-semibold   leading-none">
            info@suruleredistrictsociety.org.ng
          </p>
        </div>
        <div className="w-fit justify-start items-center gap-1 flex">
          <HiOutlinePhone className=" stroke-white  " />
          <p className="text-white text-sm font-semibold   leading-none">
            +234 808 816 8895
          </p>
        </div>
        <div className="w-fit justify-start items-center gap-1 flex">
          <HiLocationMarker className=" stroke-white fill-white" />
          <p className="text-white text-sm font-normal leading-none">
            Surulere, Lagos, Nigeria
          </p>
        </div>
      </div>

      <div className="w-full mt-4 justify-around items-center gap-10 inline-flex">
        <Link href="/">
          <Image alt="Logo" width={143} height={60} src="/Logo_big.png" />
        </Link>
        <div className="justify-start items-center gap-4 flex">
          <div className="px-0 py-2 flex-col justify-start items-start gap-2 inline-flex">
            <DropdownMenu>
              <DropdownMenuTrigger
                className={` ${
                  pathname === "/about-us" ? "text-primary" : ""
                } text-sm font-semibold w-fit leading-none`}
              >
                About Us
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white">
                <DropdownMenuItem>
                  <Link href="/about-us">Who we are</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/about-us/our-team">Executive Team</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="py-2 px-0 justify-start items-center flex">
            <DropdownMenu>
              <DropdownMenuTrigger
                className={`${
                  pathname === "/membership" ? "text-primary" : ""
                } text-sm font-semibold   leading-none`}
              >
                Membership
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white">
                <DropdownMenuItem>
                  <Link href="/membership">Become a Member</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>Login as Member</DropdownMenuItem>
                <DropdownMenuItem>ICAN Website</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="px-0 py-2 rounded-2xl flex-col justify-start items-start gap-2 inline-flex">
            <Link
              href="/donate"
              className={`${
                pathname === "/donate" ? "text-primary" : ""
              } text-sm font-semibold`}
            >
              Donation
            </Link>
          </div>
          <div className="px-0 py-2 flex-col justify-start items-start gap-2 inline-flex">
            <DropdownMenu>
              <DropdownMenuTrigger className="text-[#3c3c3c] text-sm font-semibold   leading-none">
                Media & Resources
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white">
                <DropdownMenuItem>Blog</DropdownMenuItem>
                <DropdownMenuItem>Gallery</DropdownMenuItem>
                <DropdownMenuItem>Publication and Resources</DropdownMenuItem>
                <DropdownMenuItem>Jobs</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="px-4 py-2 rounded-2xl flex-col justify-start items-start gap-2 inline-flex">
            <Link
              href="/"
              className={`${
                pathname === "/contact-us" ? "text-primary" : ""
              } text-sm font-semibold`}
            >
              Contact Us
            </Link>
          </div>
        </div>
        <Link href="/membership">
          <button className="px-3 py-2 bg-primary rounded-2xl justify-center items-center gap-2 flex text-white text-sm font-semibold   leading-none">
            Become a Member
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Mainheader;
