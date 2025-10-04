"use client";

import React from "react";

import "../../globals.css";
import { motion } from "framer-motion";
import Sidebar from "./dashboardComponents/Sidebar";
import Topbar from "./dashboardComponents/Topbar";
import { Toaster } from "@/components/ui/sonner";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>

      <html lang="en">
        <body
         cz-shortcut-listen="true"
          
        >
          <div className="flex h-screen bg-[#F5F7F9]">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
              <Topbar />
              <motion.main
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex-1 overflow-y-auto p-6 md:p-10"
              >
                {children}
                <Toaster />
              </motion.main>
            </div>
          </div>
        </body>
      </html>
    </>

  );
}
