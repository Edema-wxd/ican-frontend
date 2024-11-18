import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineLocationMarker } from "react-icons/hi";

function Mainfooter() {
  return (
    <footer>
      <div className="h-96 w-full px-20 py-20 bg-[#1a379a] flex-col justify-start items-center gap-20 inline-flex">
        <div className="self-stretch justify-between items-start inline-flex">
          <div className="w-96 self-stretch flex-col justify-center items-start gap-8 inline-flex">
            <div className="self-stretch h-28 flex-col justify-start items-start gap-2 flex">
              <div className="justify-start items-start gap-4 inline-flex">
                <div className="flex-col justify-center items-center gap-1 inline-flex">
                  <Image
                    alt="Logo"
                    loading="lazy"
                    width={145}
                    height={60}
                    className="w-36 h-12"
                    src="/Logo_small.png"
                  />
                </div>
              </div>
              <div className="self-stretch text-white text-base font-normal font-['Inter'] leading-tight">
                Tertiary institution as accredited by the Institute of Chartered
                Accountants of Nigeria
              </div>
            </div>
            <div className="self-stretch h-16 flex-col justify-start items-start gap-1 flex">
              <div className="justify-center items-center gap-2 inline-flex">
                <HiOutlineLocationMarker className="w-6 h-6 relative" />
                <div className="text-white text-sm font-normal font-['Inter'] leading-tight">
                  Office Address
                </div>
              </div>
              <div className="self-stretch text-white text-sm font-medium ">
                30B, Oke-Onijo Street, Off Ogunlana Street,
                <br />
                Ijeshatedo, Surulere, Lagos
              </div>
            </div>
          </div>
          <div className="justify-start items-start gap-6 flex">
            <div className="w-40 flex-col justify-start items-start gap-4 inline-flex">
              <div className="w-28 h-7 text-white text-base font-bold font-['Inter'] leading-tight">
                Page
              </div>
              <div className="flex-col justify-start items-start gap-4 flex">
                <Link href="/" className="text-[#d0d0d0] text-sm font-normal ">
                  About
                </Link>
                <Link href="/" className="text-[#d0d0d0] text-sm font-normal ">
                  Contact Us
                </Link>
                <Link href="/" className="text-[#d0d0d0] text-sm font-normal ">
                  Membership
                </Link>
                <Link href="/" className="text-[#d0d0d0] text-sm font-normal ">
                  Donations
                </Link>
                <Link href="/" className="text-[#d0d0d0] text-sm font-normal ">
                  Excos
                </Link>
                <Link href="/" className="text-[#d0d0d0] text-sm font-normal ">
                  ICAN Website
                </Link>
              </div>
            </div>
            <div className="w-40 flex-col justify-start items-start gap-4 inline-flex">
              <div className="w-28 h-7 text-white text-base font-bold font-['Inter'] leading-tight">
                Resources
              </div>
              <div className="flex-col justify-start items-start gap-4 flex">
                <Link href="/" className="text-[#d0d0d0] text-sm font-normal ">
                  News
                </Link>
                <Link href="/" className="text-[#d0d0d0] text-sm font-normal ">
                  Events
                </Link>
                <Link href="/" className="text-[#d0d0d0] text-sm font-normal ">
                  Gallery
                </Link>
                <Link href="/" className="text-[#d0d0d0] text-sm font-normal ">
                  Blog
                </Link>
                <Link href="/" className="text-[#d0d0d0] text-sm font-normal ">
                  Jobs
                </Link>
              </div>
            </div>
            <div className="w-56 flex-col justify-start items-start gap-4 inline-flex">
              <div className="w-28 h-7 text-white text-base font-bold font-['Inter'] leading-tight">
                Contact
              </div>
              <div className="self-stretch h-32 flex-col justify-start items-start gap-3 flex">
                <div className="self-stretch justify-start items-center gap-1.5 inline-flex">
                  <div className="w-6 h-6 relative" />
                  <div className="grow shrink basis-0 text-[#d0d0d0] text-sm font-normal ">
                    icansuruleredistrictsociety@gmail.com
                  </div>
                </div>
                <div className="self-stretch justify-start items-center gap-1.5 inline-flex">
                  <div className="w-6 h-6 relative" />
                  <div className="flex-col justify-center items-start gap-1.5 inline-flex">
                    <div className="text-[#d0d0d0] text-sm font-normal ">
                      +234 808 816 8895
                    </div>
                    <div className="text-[#d0d0d0] text-sm font-normal ">
                      +234 803 256 4245
                    </div>
                  </div>
                </div>
                <div className="self-stretch justify-start items-center gap-6 inline-flex">
                  <div className="w-8 h-8 relative" />
                  <div className="w-8 h-8 relative" />
                  <div className="w-8 h-8 relative" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch justify-between items-center inline-flex">
          <div className="justify-center items-center gap-4 flex">
            <div className="text-[#d0d0d0] text-sm font-normal ">
              Copyright © 2024 Surulere & District Society
            </div>
            <div className="text-[#d0d0d0] text-sm font-normal ">
              All Rights reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Mainfooter;
