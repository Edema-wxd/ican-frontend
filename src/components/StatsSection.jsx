import React from 'react';
import { Users, Globe, Clock, TrendingUp } from 'lucide-react';

function StatsSection() {
  const stats = [
    {
      icon: <Users size={24} className="text-grey-200" />,
      value: "1,300+",
      label: "Membership"
    },
    {
      icon: <Globe size={24} className="text-grey-200" />,
      value: "20+",
      label: "Community Impact"
    },
    {
      icon: <Clock size={24} className="text-grey-200" />,
      value: "3 Years",
      label: "Dedicated Service"
    },
    {
      icon: <TrendingUp size={24} className="text-grey-200" />,
      value: "30%",
      label: "Yearly Growth"
    }
  ];

  return (
    <div className="w-full py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-blue-700 mb-2">
                {stat.value}
              </div>
              <div className="text-black font-meduim">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;