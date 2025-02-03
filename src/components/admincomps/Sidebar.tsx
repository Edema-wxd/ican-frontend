"use client";
import React from "react";
import { Settings, LogOut } from "lucide-react";
import {
  MdOutlinePeopleAlt,
  MdCollectionsBookmark,
  MdAttachMoney,
  MdOutlinePerson,
} from "react-icons/md";
import { IoMdCalendar } from "react-icons/io";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const topMenuItems = [
  { icon: MdOutlinePeopleAlt, label: "User Management", href: "/admin/users" },
  {
    icon: MdCollectionsBookmark,
    label: "Content Management",
    href: "/admin/content",
  },
  { icon: IoMdCalendar, label: "Event Management", href: "/admin/events" },
  { icon: MdAttachMoney, label: "Payment", href: "/admin/payment" },
];

const bottomMenuItems = [
  { icon: MdOutlinePerson, label: "Profile", href: "/admin/profile" },
  { icon: Settings, label: "Settings", href: "/admin/settings" },
];

function Sidebar() {
  const pathname = usePathname();
  const findMenuItem = (pathname: string) => {
    return (
      topMenuItems.find((item) => item.href === pathname) ||
      bottomMenuItems.find((item) => item.href === pathname)
    );
  };
  const item = findMenuItem(pathname);
  const activePage = item?.label;

  return (
    <aside className="sticky top-0 flex-shrink-0 w-fit bg-white text-black border-r flex flex-col p-4">
      {/* Logo */}
      <div className="h-16 flex items-center px-6 py-12 border-b border-gray-200">
        <Image alt="Logo" width={200} height={80} src="/Logo_big.png" />
      </div>

      {/* Navigation Menu */}
      <nav className="flex flex-col">
        {/* Top Menu Group */}
        <div className="flex-grow py-12">
          <div className="space-y-8">
            {topMenuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`py-3 px-4 flex flex-row gap-4 ${
                  activePage === item.label &&
                  "bg-primary text-white fill-white"
                } hover:bg-blue-500 hover:text-white hover:fill-white justify-start items-center rounded-lg text-neutral-900`}
              >
                <item.icon className="w-6 h-6" />
                <p className="whitespace-nowrap test-xs">{item.label}</p>
              </Link>
            ))}
          </div>
          {/* 
          <div className="my-6" /> */}

          {/* Bottom Menu Group */}
          <div className="mt-32 space-y-8">
            {bottomMenuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={
                  "py-3 px-4 flex flex-row gap-4 hover:bg-blue-500 hover:text-white hover:fill-white  justify-start items-center rounded-lg text-neutral-900"
                }
              >
                <item.icon className="w-6 h-6" />
                <p className="whitespace-nowrap test-xs">{item.label}</p>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <Link
            href="/logout"
            className="flex hover:text-red-500 hover:fill-red-500 items-center space-x-3 px-6 py-2 rounded-lg mt-32 mb-20"
          >
            <LogOut className="w-5 h-5 transform scale-x-[-1]" />
            <span className=" test-xs">Logout</span>
          </Link>
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;
export { topMenuItems, bottomMenuItems };
