"use client";

import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


import General from './tabs/General'
import Intergrations from './tabs/Intergrations'

function Settings() {
  return (
    <div className="rounded-3xl p-6">
      <div className="flex flex-row mb-6 w-full items-center justify-between">
        <h2 className="font-semibold text-2xl text-black">
          Settings
        </h2>
        <p>Manage your settings and intergrations here</p>

      </div>
      {/* Tab sections */}
      <Tabs defaultValue="general" className="flex flex-col gap-4">
        <TabsList>
          <TabsTrigger value="general">General Settings</TabsTrigger>
          <TabsTrigger value="intergration">Intergrations</TabsTrigger>

        </TabsList>
        <TabsContent value="general">
          <General />
        </TabsContent>
        <TabsContent value="intergration">
          <Intergrations />
        </TabsContent>
      </Tabs>

    </div>
  )
}

export default Settings