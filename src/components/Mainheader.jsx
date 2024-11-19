import React from "react";
import {
  HiLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";
import Image from "next/image";

function Mainheader() {
  return (
    <div className="w-full h-32 relative bg-white flex-col justify-start items-start flex">
      <div className="h-12 px-40 py-2 bg-[#1a379a] flex-row justify-between items-center w-50 gap-4 flex">
        <div className="justify-start items-center gap-1  w-fit  flex">
          <HiOutlineMail />
          <p className="text-white text-sm font-semibold   leading-none">
            info@suruleredistrictsociety.org.ng
          </p>
        </div>
        <div className="w-fit justify-start items-center gap-1 flex">
          <HiOutlinePhone />
          <p className="text-white text-sm font-semibold   leading-none">
            +234 808 816 8895
          </p>
        </div>
        <div className="w-fit justify-start items-center gap-1 flex">
          <HiLocationMarker />
          <p className="text-white text-sm font-normal leading-none">
            Surulere, Lagos, Nigeria
          </p>
        </div>
      </div>

      <div className="w-full mt-4 justify-around items-center gap-10 inline-flex">
        <Image alt="Logo" width={143} height={60} src="/Logo_big.png" />
        <div className="justify-start items-center gap-2 flex">
          <div className="px-4 py-2 flex-col justify-start items-start gap-2 inline-flex">
            <div className="self-stretch justify-start items-center gap-1 inline-flex">
              <div className="text-[#3c3c3c] text-sm font-semibold   leading-none">
                About Us
              </div>
              <div className="w-5 h-5 relative origin-top-left rotate-90" />
            </div>
          </div>
          <div className="px-4 py-2 flex-col justify-start items-start gap-2 inline-flex">
            <div className="self-stretch justify-start items-center gap-1 inline-flex">
              <div className="text-[#3c3c3c] text-sm font-semibold   leading-none">
                Membership
              </div>
              <div className="w-5 h-5 relative origin-top-left rotate-90" />
            </div>
          </div>
          <div className="px-4 py-2 rounded-2xl flex-col justify-start items-start gap-2 inline-flex">
            <div className="self-stretch justify-start items-center gap-1 inline-flex">
              <div className="text-[#3c3c3c] text-sm font-semibold   leading-none">
                Donation
              </div>
            </div>
          </div>
          <div className="px-4 py-2 flex-col justify-start items-start gap-2 inline-flex">
            <div className="self-stretch justify-start items-center gap-1 inline-flex">
              <div className="text-[#3c3c3c] text-sm font-semibold   leading-none">
                Media & Resources
              </div>
              <div className="w-5 h-5 relative origin-top-left rotate-90" />
            </div>
          </div>
          <div className="px-4 py-2 rounded-2xl flex-col justify-start items-start gap-2 inline-flex">
            <div className="self-stretch justify-start items-center gap-1 inline-flex">
              <div className="text-[#3c3c3c] text-sm font-semibold   leading-none">
                Contact Us
              </div>
            </div>
          </div>
        </div>
          <button className="px-3 py-2 bg-[#1a379a] rounded-2xl justify-center items-center gap-2 flex text-white text-sm font-semibold   leading-none">
            Become a Member
          </button>
        
      </div>
    </div>
  );
}

export default Mainheader;
