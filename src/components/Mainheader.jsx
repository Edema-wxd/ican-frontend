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
  NavigationMenuViewport,
  NavigationMenuIndicator,
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
    <header className="w-full h-fit sm:h-30 fixed top-0 z-50 bg-white flex-col justify-start items-start flex">
      <div className=" hidden px-32 h-10 py-2 bg-primary flex-row justify-center items-center max-w-[3000px]  gap-6 sm:flex">
      
        <div className="justify-start items-center gap-1 px-4 w-fit flex">
          <HiOutlineMail className=" stroke-white" />
          <p className="text-white text-sm font-medium leading-none px-2">
            info@suruleredistrictsociety.org.ng
          </p>
        </div>
        <div className="w-fit justify-start items-center gap-1 px-4 w-fit flex">
          <HiOutlinePhone className=" stroke-white" />
          <p className="text-white text-sm font-semibold leading-none px-2">
            +234 808 816 8895
          </p>
        </div>
        <div className="w-fit justify-start items-center gap-1 px-4 w-fit flex">
          <HiLocationMarker className=" stroke-white fill-white gap-2" />
          <p className="text-white text-sm leading-none px-2">
            Surulere, Lagos, Nigeria
          </p>
        
        </div>
      </div>

      <div className=" w-full sm:w-full m-2 px-28  justify-between sm:justify-around items-center sm:gap-2 flex flex-row">
        <Link href="/">
          <Image alt="Logo" width={143} height={60} src="/Logo_big.png"/>
        </Link>
        <div className="hidden justify-start items-center gap-1 sm:flex">
          <NavigationMenu className="relative">
            <NavigationMenuList className=" gap-2">
              {/* <NavigationMenuItem>
                <Link
                  className={`${
                    pathname === "/" ? "text-primary" : ""
                  } text-sm font-semibold   leading-none`}
                  href="/"
                >
                  <NavigationMenuLink>Home</NavigationMenuLink>
                </Link>
              </NavigationMenuItem> */}<NavigationMenuItem>
                <NavigationMenuTrigger
                  className={` ${
                    pathname === "/about-us" ? "text-primary" : ""
                  } text-sm font-medium w-fit leading-none`}
                >
                  About Us
                </NavigationMenuTrigger>
                <NavigationMenuContent className="relative">
                  <div className="flex flex-col mx-auto gap-5 p-2 md:w-[200px] lg:w-[190px] py-4 px-1 font-normal">
                    {/* <Link href="/about-us" legacyBehavior passHref>
                      <NavigationMenuLink>How it works</NavigationMenuLink>
                    </Link> */}
                    <Link href="/about-us" legacyBehavior passHref>
                      <NavigationMenuLink>Who we are</NavigationMenuLink>
                    </Link>
                    <Link href="/about-us/our-team" legacyBehavior passHref>
                      <NavigationMenuLink>Executive Team</NavigationMenuLink>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={`${
                    pathname === "/membership" ? "text-primary" : ""
                  } text-sm font-medium   leading-none`}
                >
                  Membership
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="flex flex-col gap-5 p-4 md:w-[400px] lg:w-[200px] py-4 px-2">
                    <Link href="/membership" legacyBehavior passHref>
                      <NavigationMenuLink>
                        Become a Member
                      </NavigationMenuLink>
                    </Link>
                    <Link href="/membership" legacyBehavior passHref>
                      <NavigationMenuLink>Login as Member</NavigationMenuLink>
                    </Link>
                    <Link href="/membership" legacyBehavior passHref>
                      <NavigationMenuLink>ICAN Website</NavigationMenuLink>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="/donate"
                  className={`${
                    pathname === "/donate" ? "text-primary" : ""
                  } text-sm font-medium`}
                >
                  Donation
                </Link>
              </NavigationMenuItem><NavigationMenuItem>
                <NavigationMenuTrigger
                  className={`${
                    pathname === "/Media" ? "text-primary" : ""
                  } text-sm font-medium   leading-none`}
                >
                  Media & Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="flex flex-col gap-5 p-4 md:w-[200px] lg:w-[250px] py-4 px-2  ">
                    <Link href="/Media" legacyBehavior passHref>
                      <NavigationMenuLink>
                        Blog
                      </NavigationMenuLink>
                    </Link>
                    <Link href="/Media" legacyBehavior passHref>
                      <NavigationMenuLink>Gallery</NavigationMenuLink>
                    </Link>
                    <Link href="/Media" legacyBehavior passHref>
                      <NavigationMenuLink>Publication and Resources</NavigationMenuLink>
                    </Link>
                    <Link href="/Media" legacyBehavior passHref>
                      <NavigationMenuLink>Job</NavigationMenuLink>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="/contact-us"
                  className={`${
                    pathname === "/contact-us" ? "text-primary" : ""
                  } text-sm font-medium`}
                >
                  Contact Us
                </Link>
              </NavigationMenuItem>
              
              
              <NavigationMenuIndicator />
            </NavigationMenuList>
            <NavigationMenuViewport className=" justify-self-center  " />
          </NavigationMenu>
        </div>
        <Link className="hidden sm:flex" href="/membership">
          <button className="px-3 py-2 bg-primary rounded-2xl justify-center items-center gap-2 flex text-white text-sm font-semibold   leading-none">
            Become a Member
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
