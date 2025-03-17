"use client";

import React from "react";

import InputEle from "@/components/genui/InputEle";
function General() {
  const handleCancel = () => {
    console.log("Cancel button clicked");
  };

  const handleSaveChanges = () => {
    console.log("Save Changes button clicked");
  };
  return (
    <div className="rounded-3xl px-8 py-6 flex flex-col gap-4 border border-neutral-200 bg-white">
      <div className="flex flex-col gap-4 mt-4">
        <h5 className="text-base w-full border-b border-gray-600 text-neutral-900">
          Notification Settings{" "}
        </h5>
      </div>
      <div className="flex flex-col gap-4 flex-wrap">
        <label className="inline-flex gap-4 items-center cursor-pointer">
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            In-app Notification
          </span>
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
        </label>
        <label className="inline-flex gap-4  items-center cursor-pointer">
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            Email Notification
          </span>
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
        </label>
        <h5 className="text-base w-full border-b border-gray-600 text-neutral-900">
          Password
        </h5>
        <div className="flex flex-row gap-4 flex-wrap">
          <InputEle
            id="old_password"
            label="Old Password"
            type="password"
            placeholder="*********"
            onChange={() => {}}
          />
          <InputEle
            id="new_password"
            label="New Password"
            type="password"
            placeholder="*********"
            onChange={() => {}}
          />
          <InputEle
            id="c_password"
            label="Confirm Password"
            type="password"
            placeholder="*********"
            onChange={() => {}}
          />
        </div>

        <div className="flex w-full justify-center items-center flex-row gap-4">
          <button
            className="px-4 py-2 bg-white border border-gray-600 text-black rounded-md"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-primary text-white rounded-md"
            onClick={handleSaveChanges}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default General;
