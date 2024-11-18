import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import Image from "next/image";

function Mainheader() {
  return (
    <div>
      <div className="w-full h-32 justify-center items-center inline-flex">
        <div className="w-full h-32 relative bg-white flex-col justify-start items-start flex">
          <div className="h-12 px-40 py-2 bg-[#1a379a] flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="self-stretch h-8 justify-start items-center gap-4 inline-flex">
              <div className="justify-start items-center gap-1 flex">
                <div className="w-6 h-6 relative" />
                <div className="p-2 rounded-2xl flex-col justify-start items-start gap-2 inline-flex">
                  <div className="self-stretch justify-start items-center gap-1 inline-flex">
                    <HiLocationMarker />
                    <div className="text-white text-sm font-semibold font-['Inter'] leading-none">
                      info@suruleredistrictsociety.org.ng
                    </div>
                  </div>
                </div>
              </div>
              <div className="justify-start items-center gap-1 flex">
                <div className="w-6 h-6 relative" />
                <div className="p-2 rounded-2xl flex-col justify-start items-start gap-2 inline-flex">
                  <div className="self-stretch justify-start items-center gap-1 inline-flex">
                    <div className="text-white text-sm font-semibold font-['Inter'] leading-none">
                      +234 808 816 8895
                    </div>
                  </div>
                </div>
              </div>
              <div className="justify-start items-center gap-1 flex">
                <div className="w-6 h-6 relative" />
                <div className="p-2 rounded-2xl flex-col justify-start items-start gap-2 inline-flex">
                  <div className="self-stretch justify-start items-center gap-1 inline-flex">
                    <div className="text-white text-sm font-normal font-['Inter'] leading-none">
                      Surulere, Lagos, Nigeria
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full  mt-4 justify-center items-center gap-10 inline-flex">
            <Image
              alt="Logo"
              width={143}
              height={60}
              className="w-36 h-12"
              src="/Logo_big.png"
            />
            <div className="justify-start items-center gap-2 flex">
              <div className="px-4 py-2 flex-col justify-start items-start gap-2 inline-flex">
                <div className="self-stretch justify-start items-center gap-1 inline-flex">
                  <div className="text-[#3c3c3c] text-sm font-semibold font-['Inter'] leading-none">
                    About Us
                  </div>
                  <div className="w-5 h-5 relative origin-top-left rotate-90" />
                </div>
              </div>
              <div className="px-4 py-2 flex-col justify-start items-start gap-2 inline-flex">
                <div className="self-stretch justify-start items-center gap-1 inline-flex">
                  <div className="text-[#3c3c3c] text-sm font-semibold font-['Inter'] leading-none">
                    Membership
                  </div>
                  <div className="w-5 h-5 relative origin-top-left rotate-90" />
                </div>
              </div>
              <div className="px-4 py-2 rounded-2xl flex-col justify-start items-start gap-2 inline-flex">
                <div className="self-stretch justify-start items-center gap-1 inline-flex">
                  <div className="text-[#3c3c3c] text-sm font-semibold font-['Inter'] leading-none">
                    Donation
                  </div>
                </div>
              </div>
              <div className="px-4 py-2 flex-col justify-start items-start gap-2 inline-flex">
                <div className="self-stretch justify-start items-center gap-1 inline-flex">
                  <div className="text-[#3c3c3c] text-sm font-semibold font-['Inter'] leading-none">
                    Media & Resources
                  </div>
                  <div className="w-5 h-5 relative origin-top-left rotate-90" />
                </div>
              </div>
              <div className="px-4 py-2 rounded-2xl flex-col justify-start items-start gap-2 inline-flex">
                <div className="self-stretch justify-start items-center gap-1 inline-flex">
                  <div className="text-[#3c3c3c] text-sm font-semibold font-['Inter'] leading-none">
                    Contact Us
                  </div>
                </div>
              </div>
            </div>
            <div className="justify-center items-center  flex">
              <button className="px-3 py-2 bg-[#1a379a] rounded-2xl justify-center items-center gap-2 flex text-white text-sm font-semibold font-['Inter'] leading-none">
                Become a Member
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainheader;
