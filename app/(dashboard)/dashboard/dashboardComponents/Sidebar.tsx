/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Link from "next/link";
import { FileText, Home, LayoutDashboard, LogOut, Plus, Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Sidebar() {
  const router = useRouter();
  const [user, setUser] = useState<{ name: string } | null>(null);
  const [isOpen, setIsOpen] = useState(false); // For mobile toggle

  const handleLogout = async () => {
    try {
      const res = await fetch("https://abdurrahman-dev-portfolio-backend.vercel.app/api/v1/auth/logout", {
        method: "POST",
        credentials: "include",
      });

      if (res.ok) {
        setUser(null);
        router.push("/login");
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const links = [
    { href: "/", label: "Home", icon: <Home size={20} /> },
    { href: "/dashboard", label: "Dashboard", icon: <LayoutDashboard size={20} /> },
    { href: "/dashboard/create-blog", label: "Create Blog", icon: <Plus size={20} /> },
    { href: "/dashboard/manage-blog", label: "Manage Blog", icon: <FileText size={20} /> },
    
  ];

  return (
    <>
      {/* Mobile toggle button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-[#140F37] text-white rounded-md shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-full bg-[#140F37] text-white p-6 shadow-lg
          transform ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          transition-transform duration-300 ease-in-out
          w-64 z-40 md:translate-x-0 md:static md:flex md:flex-col md:w-64
        `}
      >
        <div className="flex flex-col justify-between h-full">
          <div>
            <h2 className="text-2xl font-bold mb-10 bg-gradient-to-r from-[#8236fb] to-[#076ef4] text-transparent bg-clip-text">
              Abdur Rahman
            </h2>

            <nav className="space-y-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-3 hover:text-gray-300 transition"
                  onClick={() => setIsOpen(false)} // Close sidebar on mobile link click
                >
                  {link.icon} {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-3 text-red-400 hover:text-red-300 transition font-medium mt-6"
          >
            <LogOut size={20} /> Logout
          </button>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/45  z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}
