"use client";

import React, { useState } from "react";
import InputEle from "@/components/genui/InputEle";

function NewEvent() {
  const [formData, setFormData] = useState({
    eventName: "",
    venue: "",
    eventDescription: "",
    eventDate: "",
    eventTime: "",
    eventFee: "",
    mcpdCredit: "",
    eventPhoto: null,
  });
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleCancel = () => {
    // Handle cancel action
  };

  const handleSaveDraft = () => {
    // Handle save as draft action
  };

  const handlePublish = () => {
    // Handle publish event action
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg w-1/2">
        <h2 className="text-2xl font-bold mb-4">Create New Event</h2>
        <div className="flex flex-row items-center gap-4 justify-between">
          <InputEle
            type="text"
            id="eventName"
            label="Event Name"
            required
            value={formData.eventName}
            onChange={handleChange}
          />
          <InputEle
            type="text"
            id="venue"
            label="Venue"
            required
            value={formData.venue}
            onChange={handleChange}
          />
        </div>
        <InputEle
          type="text"
          id="eventDescription"
          label="Event Description"
          value={formData.eventDescription}
          onChange={handleChange}
        />
        <div className="flex flex-row items-center gap-4 justify-between">
          <InputEle
            type="date"
            id="eventDate"
            label="Event Date"
            required
            value={formData.eventDate}
            onChange={handleChange}
          />
          <InputEle
            type="time"
            id="eventTime"
            label="Event Time"
            required
            value={formData.eventTime}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-row items-center gap-4 justify-between">
          <InputEle
            type="text"
            id="eventFee"
            label="Event Fee in Naira (Optional)"
            value={formData.eventFee}
            onChange={handleChange}
          />
          <InputEle
            type="text"
            id="mcpdCredit"
            label="MCPD Credit (Optional)"
            value={formData.mcpdCredit}
            onChange={handleChange}
          />
        </div>
        <InputEle
          type="file"
          id="eventPhoto"
          label="Upload Event Photo/Flyer"
          onChange={handleChange}
        />
        <div className="flex justify-end mt-4">
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
            onClick={handleSaveDraft}
          >
            Save as Draft
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handlePublish}
          >
            Publish Event
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewEvent;
