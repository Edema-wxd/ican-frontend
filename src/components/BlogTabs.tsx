import * as React from 'react';
import { BlogTabsProps, TabProps, BlogPost } from '@/types';
import { TABS } from '@/lib/data';


const Tab: React.FC<TabProps> = ({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`self-stretch px-7 py-1 my-auto rounded-md w-[108px] transition-colors
      ${isActive ? 'text-white bg-blue-900 shadow' : 'text-neutral-500 hover:bg-neutral-300'}
      focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2`}
    role="tab"
    aria-selected={isActive}
    aria-controls={`${label.toLowerCase()}-panel`}
  >
    {label}
  </button>
);



export const BlogTabs: React.FC<BlogTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <nav
      className="flex items-center self-start p-0.5 text-sm leading-snug text-center whitespace-nowrap rounded-lg bg-neutral-200"
      role="tablist"
      aria-label="Blog categories"
    >
      {TABS.map((tab) => (
        <Tab
          key={tab}
          label={tab}
          isActive={activeTab === tab}
          onClick={() => onTabChange(tab)}
        />
      ))}
    </nav>
  );
};