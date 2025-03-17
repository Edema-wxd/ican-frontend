import React from "react";
import { Clock,Info } from "lucide-react";

function Dashboard() {
  return (
    <div>
    <div className="flex flex-col p-6 bg-blue-900 rounded-lg ">
      {/* Greeting Section */}
      <div className="text-left ">
        <h2 className="text-3xl font-semibold text-white">Welcome Oloruntomi</h2>
        <p className="flex flex-row text-white mt-6 text-sm">
        Thursday, February 6 
        <span className="flex bg-gray-100 text-black ml-2 text-xs rounded-md p-1">
          <Clock className="w-4 h-4 mr-1"/>
          Under review</span>
        </p>
        
      </div>
      
     
    </div>
    <div className="flex flex-row gap-5 mt-8 w-[480px]">
        <Info className="w-8 h-8 text-yellow-600"/>
        <p className="text-gray-500 text-sm">
        Your account is being reviewed. We will send an email to you once review is complete. Please keep an eye on your email.

        </p>
      </div>
</div>
  );
}

export default Dashboard;
