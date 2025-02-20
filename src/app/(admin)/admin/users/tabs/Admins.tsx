"use client";

import React, { useEffect, useState } from "react";
import { UserTable } from "@/components/admincomps/user/datatable/UserTable";
import { allcolumns } from "@/components/admincomps/user/datatable/columns";
import { User, users } from "@/components/admincomps/user/datatable/colsdata";

export async function getData(): Promise<User[]> {
  return users;
}

function Admins() {
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getData();
      const filteredData = result.filter(
        (user) => user.role === "admin" || user.role === "super admin"
      );
      setData(filteredData);
    }
    fetchData();
  }, []);

  return (
    <div className="rounded-3xl px-8 py-6 flex flex-col gap-4 border border-neutral-200 bg-white">
      <h2 className="text-xl font-semibold text-left">All Admins</h2>
      <div>
        <UserTable columns={allcolumns} data={data} />
      </div>
    </div>
  );
}

export default Admins;
