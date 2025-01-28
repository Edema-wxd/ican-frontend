import React from "react";

function Dashboard() {
  return (
    <div className="flex flex-col min-h-[606px] p-6 bg-white rounded-lg border-2 border-gray-200">
      {/* Greeting Section */}
      <div className="text-left">
        <h2 className="text-3xl font-semibold text-gray-800">Hello, Chinazom!</h2>
        <p className="text-gray-600 mt-6">
          Find the resources you need and the latest events related to ICAN and Surulere district here.
        </p>
        <hr className="mt-4 border-gray-300" />
      </div>

      {/* Centered Welcome Box */}
      <div className="flex flex-grow items-center justify-center mt-10">
        <div className="bg-white shadow-xl rounded-xl p-10 max-w-xl h-full text-center">
          <h2 className="text-3xl font-bold text-gray-800 ">Welcome!</h2>
          <p className="text-gray-600 mt-10 text-base p-4">
            Your account is being reviewed. We will send an email to you once the review is complete.
            Please keep an eye on your email.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
