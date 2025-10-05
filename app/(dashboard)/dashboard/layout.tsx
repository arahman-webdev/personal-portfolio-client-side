

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
  const token = cookieStore.get("refreshToken")?.value;

  console.log("from dashboard layout", token)

  if (!token) {
    redirect("/"); // ✅ Secure server-side redirect
  }

  return (
    <>

      <html lang="en">
        <body
          cz-shortcut-listen="true"

        >
          <div className="flex h-screen bg-[#F5F7F9] overflow-hidden">

              <Sidebar />

            {/* Main Content (scrollable) */}
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
