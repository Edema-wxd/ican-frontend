"use client";

import React, { useState, useEffect } from "react";

import Members from "./tabs/Members";

// import NewContent from "@/components/admincomps/createcontent/NewContent";

function UsersPage() {
  useEffect(() => {
    // Any code that accesses the document object should be placed here
  }, []);

  return (
    <div className="rounded-3xl p-6">
      <div className="flex flex-row mb-6 w-full items-center justify-between">
        <div className="flex flex-col gap-3">
          <h2 className="font-semibol text-2xl text-black">
            Member&apos;s Account
          </h2>
          <p>Manage user details here</p>
        </div>
      </div>

      <Members />
    </div>
  );
}

export default UsersPage;
