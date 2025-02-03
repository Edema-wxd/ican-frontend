"use client";
import React from "react";
import { Search, BellIcon, ChevronDown } from "lucide-react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";

import { topMenuItems, bottomMenuItems } from "./Sidebar";
import { constants } from "node:buffer";

function Header() {
  const pathname = usePathname();
  const findMenuItem = (pathname: string) => {
    return (
      topMenuItems.find((item) => item.href === pathname) ||
      bottomMenuItems.find((item) => item.href === pathname)
    );
  };

  const item = findMenuItem(pathname);
  return (
    <header className="h-24 w-full py-6 bg-white  border border-gray-400 shadow-sm px-8 flex items-center justify-between">
      <div className="flex flex-row items-center gap-4">
        {item && <item.icon className="w-6 h-6 fill-primary" />}
        <p className=" text-black  whitespace-nowrap">{item?.label}</p>
      </div>

      {/* Profile Section */}
      <div className="flex items-center space-x-8">
        <div className="relative">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <BellIcon className="w-6 h-6 " />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
              5
            </span>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center space-x-2 outline-none">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image
                width={40}
                height={40}
                src="/Ellipse 1732.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <ChevronDown className="w-4 h-4 text-gray-600" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem className="text-red-600">Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
export default Header;
