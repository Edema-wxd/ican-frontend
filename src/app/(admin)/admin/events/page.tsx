"use client";

import React, { useState, useEffect } from "react";
import { EventTable } from "@/components/admincomps/event/datatable/EventTable";
import { allcolumns } from "@/components/admincomps/event/datatable/columns";
import {
  Event,
  events,
} from "@/components/admincomps/event/datatable/colsdata";

export async function getData(): Promise<Event[]> {
  return events;
}

function EventsPage() {
  const [data, setData] = useState<Event[]>([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getData();
      setData(result);
    }
    fetchData();
  }, []);

  return (
    <div className="rounded-3xl p-6">
      <div className="flex flex-row mb-6 w-full items-center justify-between">
        <h2 className="font-semibol text-2xl text-black">
          ICAN SDS Event Management
        </h2>
      </div>
      {/* Tab sections */}
      <div className="rounded-3xl px-8 py-6 flex flex-col gap-4 border border-neutral-200 bg-white">
        <h2 className="text-xl font-semibold text-left">All Events</h2>
        <div>
          <EventTable columns={allcolumns} data={data} />
        </div>
      </div>
    </div>
  );
}

export default EventsPage;
