"use client";

import React, { useEffect, useState } from "react";
// import { Pagination } from "@/components/ui/pagination";
import { ContentTable } from "@/components/genui/ContentTable";
import { blogscolumns } from "@/components/genui/columns";
import { Content, contents } from "@/components/genui/colsdata";

async function getData(): Promise<Content[]> {
  return contents;
}

function Blogs() {
  const [data, setData] = useState<Content[]>([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getData();
      setData(result);
    }
    fetchData();
  }, []);

  return (
    <div className="rounded-3xl px-8 py-6 flex flex-col gap-4 border border-neutral-200 bg-white">
      <h2 className="text-xl font-semibold text-left">All Content</h2>
      <div>
        <ContentTable columns={blogscolumns} data={data} />
      </div>
    </div>
  );
}

export default Blogs;
