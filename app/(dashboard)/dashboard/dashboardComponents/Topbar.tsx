"use client";

import { Bell, User } from "lucide-react";

export default function Topbar() {
  return (
    <header className="flex justify-between items-center bg-white border-b px-6 py-4 shadow-sm">
      <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>

      <div className="flex items-center gap-5">
        <Bell className="w-5 h-5 text-gray-500 cursor-pointer hover:text-[#373DD2]" />
        <div className="flex items-center gap-2 cursor-pointer">
          <User className="w-5 h-5 text-gray-600" />
          <span className="text-sm font-medium text-gray-700">Admin</span>
        </div>
      </div>
    </header>
  );
}
