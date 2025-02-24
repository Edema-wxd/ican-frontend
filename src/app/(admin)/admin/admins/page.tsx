"use client";

import React, { useState, useEffect } from "react";
import Admins from "./tabs/Admins";

function AdminManagementPage() {
  useEffect(() => {
    // Any code that accesses the document object should be placed here
  }, []);
  return (
    <div className="rounded-3xl p-6">
      <div className="flex flex-row mb-6 w-full items-center justify-between">
        <div className="flex flex-col gap-3">
          <h2 className="font-semibol text-2xl text-black">
            All Administrators
          </h2>
          <p>View and manage all admins details here</p>
        </div>
        <div className="flex flex-row items-center gap-4 justify-end">
          <button className="rounded-full py-2 px-3 bg-transparent text-primary border-primary text-base w-fit">
            Manage Roles
          </button>
          <button className=" py-2 px-3 text-white bg-primary  text-base rounded-full w-fit">
            Add Administrator
          </button>
        </div>
      </div>

      <Admins />
    </div>
  );
}

export default AdminManagementPage;
