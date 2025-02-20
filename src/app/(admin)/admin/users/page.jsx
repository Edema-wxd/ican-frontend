"use client";

import React, { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import All from "./tabs/All";
import Members from "./tabs/Members";
import Admins from "./tabs/Admins";

// import NewContent from "@/components/admincomps/createcontent/NewContent";

function UsersPage() {
  useEffect(() => {
    // Any code that accesses the document object should be placed here
  }, []);

  return (
    <div className="rounded-3xl p-6">
      <div className="flex flex-row mb-6 w-full items-center justify-between">
        <h2 className="font-semibol text-2xl text-black">
          ICAN SDS User Management System
        </h2>
      </div>
      {/* Tab sections */}
      <Tabs defaultValue="all" className="flex flex-col gap-4">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="members">Members</TabsTrigger>
          <TabsTrigger value="admins">Admins</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <All />
        </TabsContent>
        <TabsContent value="members">
          <Members />
        </TabsContent>
        <TabsContent value="admins">
          <Admins />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default UsersPage;
