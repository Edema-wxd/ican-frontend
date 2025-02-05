"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import All from "./tabs/All";
import Adverts from "./tabs/Adverts";
import Blogs from "./tabs/Blogs";
import Publications from "./tabs/Publications";
import Galleries from "./tabs/Galleries";
import Technical from "./tabs/Technical";
import Student from "./tabs/Student";

function Content() {
  return (
    <div className="rounded-3xl p-6">
      {/* Tab sections */}{" "}
      <Tabs defaultValue="all" className="flex flex-col gap-4">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="adverts">Adverts</TabsTrigger>
          <TabsTrigger value="blogs">Blogs</TabsTrigger>
          <TabsTrigger value="publication">Publication</TabsTrigger>
          <TabsTrigger value="galleries">Galleries</TabsTrigger>
          <TabsTrigger value="technical">Technical Session</TabsTrigger>
          <TabsTrigger value="student">Student Pack</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <All />{" "}
        </TabsContent>
        <TabsContent value="adverts">
          <Adverts />{" "}
        </TabsContent>
        <TabsContent value="blogs">
          <Blogs />{" "}
        </TabsContent>
        <TabsContent value="publication">
          <Publications />{" "}
        </TabsContent>
        <TabsContent value="galleries">
          <Galleries />{" "}
        </TabsContent>
        <TabsContent value="technical">
          <Technical />{" "}
        </TabsContent>
        <TabsContent value="student">
          <Student />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Content;
