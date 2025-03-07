import Image from "next/image";
import React from "react";
import { MdDownload, MdOutlineModeEditOutline } from "react-icons/md";

async function EventDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const eventId = (await params).id;
  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex flex-row w-full  justify-between items-center">
        <div className="flex flex-col gap-2  w-full  h-fit">
          <h1 className=" text-2xl font-medium text-black ">Event Details</h1>
          <p className=" text-sm font-medium text-gray-500 ">
            Showing Event details
          </p>
        </div>
        <div className="flex flex-row w-fit items-center gap-3">
          <button className="w-fit whitespace-nowrap rounded px-3 text-black fill-black border-gray-400 border py-2 flex flex-row items-center gap-2 bg-white">
            <MdDownload className="w-5 h-5" /> Export Event
          </button>
        </div>
      </div>
      <div className="rounded-xl border bg-white w-full border-gray-200 flex p-4 flex-col">
        <div className="flex flex-row items-center justify-between w-full">
          <h1 className=" text-2xl font-medium text-black ">Event Name</h1>
          <MdOutlineModeEditOutline className="w-5 h-5" />
        </div>
        <hr />
        <div className="w-full flex flex-row ">
          <div className="flex py-3 flex-col justify-between gap-4">
            <p className="flex flex-col gap-1 text-left text-base font-medium text-gray-800  ">
              <span className="text-sm text-gray-600 font-medium ">Event Description </span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
              cum voluptate hic optio quaerat, voluptas dolor ducimus non ipsa
              autem velit iure ratione quasi tenetur quia atque modi explicabo
              ea?
            </p>
            <p className="flex flex-col gap-1 text-left text-base font-medium text-gray-800  ">
              <span className="text-sm text-gray-600 font-medium ">Event Date </span>
              20-02-2021
            </p>
            <p className="flex flex-col gap-1 text-left text-base font-medium text-gray-800  ">
              <span className="text-sm text-gray-600 font-medium ">Event Time </span>
              10:00 am{" "}
            </p>
            <p className="flex flex-col gap-1 text-left text-base font-medium text-gray-800  ">
              <span className="text-sm text-gray-600 font-medium ">Event Fee </span>
              N4000
            </p>
            <p className="flex flex-col gap-1 text-left text-base font-medium text-gray-800  ">
              <span className="text-sm text-gray-600 font-medium ">Event Venue</span>
              122, Random street Lagos
            </p>
          </div>
          <div className="w-full">
            <Image
              src="/Event1.jpg"
              width={400}
              height={400}
              alt="Event image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetailsPage;
