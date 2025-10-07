import React from "react";

import "../../globals.css";
import Sidebar from "./dashboardComponents/Sidebar";
import Topbar from "./dashboardComponents/Topbar";
import { Toaster } from "@/app/components/ui/sonner";


import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Abdur Rahman",
  description:
    "Welcome to your dashboard. Manage your blog posts, create new ones, and customize your portfolio.",
};


export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {



  return (
    <>
      <html lang="en">
        <body cz-shortcut-listen="true">
          <div className="flex h-screen bg-[#F5F7F9] overflow-hidden">

            <Sidebar />


            <div className="flex-1 flex flex-col">

              <Topbar />
              <main className="flex-1 overflow-y-auto p-4">

                  {children}


                <Toaster richColors position="top-center" />
              </main>
            </div>
          </div>
        </body>
      </html>
    </>
  );
}