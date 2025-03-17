"use client";

import React, { useEffect, useState } from "react";

import { EventTable } from "@/components/admincomps/event/datatable/EventTable";
import { registeredcolumns } from "@/components/admincomps/event/datatable/columns";
import { getData } from "@/utils/dataFetcher";
import { Event } from "@/components/admincomps/event/datatable/colsdata";

function EventAttendancePage() {
  const [data, setData] = useState<Event[]>([]);
  const [showNewEvent, setShowNewEvent] = useState(false);

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
        <div className="flex flex-col gap-3">
          <h2 className="font-semibold text-2xl text-black">
            Event Attendance
          </h2>
          <p>View and Manage all events attendees here</p>
        </div>
      </div>
      {/* Tab sections */}
      <div className="rounded-3xl px-8 py-6 flex flex-col gap-4 border border-neutral-200 bg-white">
        <h2 className="text-xl font-semibold text-left">Event Registration</h2>
        <div>
          <EventTable columns={registeredcolumns} data={data} />
        </div>
      </div>
    </div>
  );
}

export default EventAttendancePage;
