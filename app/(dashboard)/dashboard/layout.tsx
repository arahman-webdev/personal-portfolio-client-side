import React from "react";

import "../../globals.css";
import Sidebar from "./dashboardComponents/Sidebar";
import Topbar from "./dashboardComponents/Topbar";
import { Toaster } from "@/components/ui/sonner";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  console.log("Access Token:", accessToken);


   if (!accessToken) {
    redirect(`/login?from=/dashboard`);
  }

  return (
    <>
      <html lang="en">
        <body cz-shortcut-listen="true">
          <div className="flex h-screen bg-[#F5F7F9] overflow-hidden">
            {/* Pass userData as a prop */}
            <Sidebar  /> 

            {/* Main Content (scrollable) */}
            <div className="flex-1 flex flex-col">
              {/* Pass userData as a prop */}
              <Topbar  /> 
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