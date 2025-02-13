import React from "react";
import {
  MdCheckCircleOutline,
  MdAccessTime,
  MdOutlineCancel,
} from "react-icons/md";

function Statbtn({ status }) {
  //   "published" | "draft" | "hidden" | "expired" | "pending";
  if (status === "published") {
    return (
      <button className="flex flex-row items-center gap-2 bg-green-100 text-green-600 fill-green-600 py-1 px-2 rounded">
        <MdCheckCircleOutline className="w-4 h-4" /> Published
      </button>
    );
  } else if (status === "draft") {
    return (
      <button className="flex flex-row items-center gap-2 bg-neutral-200 text-neutral-950 fill-neutral-900 py-1 px-2 rounded">
        <MdAccessTime className="w-4 h-4" /> Draft
      </button>
    );
  } else if (status === "pending") {
    return (
      <button className="flex flex-row items-center gap-2 bg-neutral-200 text-neutral-950 fill-neutral-900 py-1 px-2 rounded">
        <MdAccessTime className="w-4 h-4" /> Pending
      </button>
    );
  } else if (status === "hidden") {
    return (
      <button className="flex flex-row items-center gap-2 bg-red-200 text-red-500 fill-red-500 py-1 px-2 rounded">
        <MdOutlineCancel className="w-4 h-4" /> Hidden
      </button>
    );
  } else if (status === "expired") {
    return (
      <button className="flex flex-row items-center gap-2 bg-red-200 text-red-500 fill-red-500 py-1 px-2 rounded">
        <MdOutlineCancel className="w-4 h-4" /> Expired
      </button>
    );
  }
}

export default Statbtn;
