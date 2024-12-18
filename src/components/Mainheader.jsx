"use client";

import React, { useState } from "react";
import {
  HiLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
  HiMenu,
  HiX,
} from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Mainheader() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="w-full h-fit sm:h-32 fixed top-0 z-50 bg-white flex-col justify-start items-start flex">
      <div className=" hidden  h-12 py-2 bg-primary flex-row justify-center items-center w-full gap-4 sm:flex">
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

      <div className=" w-full sm:w-full mt-4 p-2  justify-between sm:justify-around items-center sm:gap-10 flex flex-row">
        <Link href="/">
          <Image alt="Logo" width={143} height={60} src="/Logo_big.png" />
        </Link>
        <div className="hidden justify-start items-center gap-4 sm:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link
                  className={`${
                    pathname === "/" ? "text-primary" : ""
                  } text-sm font-semibold   leading-none`}
                  href="/"
                >
                  <NavigationMenuLink>Home</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={`${
                    pathname === "/membership" ? "text-primary" : ""
                  } text-sm font-semibold   leading-none`}
                >
                  Membership
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="flex flex-col gap-3 p-4 w-[320px]   ">
                    <Link href="/membership">Membership registration </Link>
                    <Link href="/membership">Member Login</Link>
                    <Link href="/membership">Student</Link>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={` ${
                    pathname === "/about-us" ? "text-primary" : ""
                  } text-sm font-semibold w-fit leading-none`}
                >
                  About Us
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="flex flex-col gap-3 p-4 w-[320px] ">
                    <Link href="/about-us">How it works</Link>
                    <Link href="/about-us">About SDS</Link>
                    <Link href="/about-us/our-team">Our Excos</Link>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="/donate"
                  className={`${
                    pathname === "/donate" ? "text-primary" : ""
                  } text-sm font-semibold`}
                >
                  <NavigationMenuLink>Donations</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* <div className="px-0 py-2 flex-col justify-start items-start gap-2 inline-flex">
            <DropdownMenu>
              <DropdownMenuTrigger className="text-[#3c3c3c] text-sm font-semibold   leading-none">
                Media & Resources
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white">
                <DropdownMenuItem>
                  <Link href="/blog">Blog</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>Gallery</DropdownMenuItem>
                <DropdownMenuItem>Publication and Resources</DropdownMenuItem>
                <DropdownMenuItem>Jobs</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div> */}
        </div>
        <Link className="hidden sm:flex" href="/membership">
          <button className="px-3 py-2 bg-primary rounded-2xl justify-center items-center gap-2 flex text-white text-sm font-semibold   leading-none">
            Member Login
          </button>
        </Link>

        {/* Nav bar links and menus */}
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="flex sm:hidden  "
        >
          {openMenu ? (
            <HiX className="stroke-black fill-black w-8 h-8 relative" />
          ) : (
            <HiMenu className="stroke-black fill-black w-8 h-8 relative" />
          )}
        </button>
      </div>
      <hr />
      <div
        className={` ${
          openMenu ? "flex flex-col w-full bg-white p-4 gap-4" : "hidden"
        } `}
      >
        <div className="p-4 flex flex-col gap-2">
          <Link
            className={`${
              pathname === "/membership" ? "text-primary" : ""
            } text-sm font-semibold   leading-none`}
            href="/"
          >
            Home
          </Link>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Membership</AccordionTrigger>
              <AccordionContent className=" flex flex-col gap-2">
                <Link href="/membership">Membership registration </Link>
                <Link href="/membership">Member Login</Link>
                <Link href="/membership">Student</Link>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>About us</AccordionTrigger>
              <AccordionContent className=" flex flex-col gap-2">
                <Link href="/about-us">How it works</Link>
                <Link href="/about-us">About ICAN SDS</Link>
                <Link href="/about-us/our-team">Our Excos</Link>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Link
            className={`${
              pathname === "/contact-us" ? "text-primary" : ""
            } text-sm font-semibold  py-4 leading-none`}
            href="/contact-us"
          >
            Contact Us
          </Link>
          <br />
          <Link
            className={`${
              pathname === "/donate" ? "text-primary" : ""
            } text-sm font-semibold py-4  leading-none`}
            href="/donate"
          >
            Donations
          </Link>
        </div>
        <Link className=" w-full " href="/membership">
          <button className="px-8 py-4 bg-primary rounded-2xl justify-center items-center gap-2 flex text-white w-full text-sm font-semibold ">
            Member Login
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Mainheader;
