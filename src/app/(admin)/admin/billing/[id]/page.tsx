"use client";

import React, { useEffect, useState } from "react";

function BillingDetailsPage() {
  return (
    <div className="rounded-3xl p-6">
      <div className="flex flex-row mb-6 w-full items-center justify-between">
        <div className="flex flex-col gap-3">
          <h2 className="font-semibold text-2xl text-black">Billing Details</h2>
          <p>View and Manage all user billings here</p>
        </div>
        {/* <div className="flex flex-row items-center gap-4 justify-end">
          <button
            className="py-2 px-3 text-white bg-primary text-base rounded-full w-fit"
            onClick={() => setShowNewEvent(true)}
          >
            Create New Event
          </button>
          {showNewEvent && (
            <NewEvent
              showNewEvent={showNewEvent}
              setShowNewEvent={setShowNewEvent}
            />
          )}
        </div> */}
      </div>
      {/* Tab sections */}
      <div className="rounded-3xl px-8 py-6 flex flex-col gap-4 border border-neutral-200 bg-white">
        <h2 className="text-xl font-semibold text-left">Billing Details</h2>
        <hr />
        <div>ppp</div>
      </div>
      <div className="rounded-3xl px-8 py-6 flex flex-col gap-4 border border-neutral-200 bg-white">
        <h2 className="text-xl font-semibold text-left">Payment Details</h2>
        <hr />
        <div>ppp</div>
      </div>
    </div>
  );
}

export default BillingDetailsPage;
