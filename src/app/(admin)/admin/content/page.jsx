"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Content() {
  return (
    <div>
      {/* Tab sections */}{" "}
      <Tabs  defaultValue="all">
        <TabsList className="">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="adverts">Adverts</TabsTrigger>
          <TabsTrigger value="blogs">Blogs</TabsTrigger>
          <TabsTrigger value="publication">Publication</TabsTrigger>
          <TabsTrigger value="galleries">Galleries</TabsTrigger>
          <TabsTrigger value="technical">Technical Session</TabsTrigger>
          <TabsTrigger value="student">Student Pack</TabsTrigger>
        </TabsList>
        <TabsContent value="all">All </TabsContent>
        <TabsContent value="adverts">Advert </TabsContent>
        <TabsContent value="blogs">Blogs </TabsContent>
        <TabsContent value="publication">Publication </TabsContent>
        <TabsContent value="galleries">Galleries </TabsContent>
        <TabsContent value="technical">Technical Session </TabsContent>
        <TabsContent value="student">Student Pack</TabsContent>
      </Tabs>
    </div>
  );
}

export default Content;
