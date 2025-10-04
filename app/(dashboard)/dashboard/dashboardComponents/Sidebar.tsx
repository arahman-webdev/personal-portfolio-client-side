"use client";

import Link from "next/link";
import { FileText, Home, LayoutDashboard, LogOut, Plus } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/logout`, {
      method: "POST",
      credentials: "include",
    });
    router.push("/login");
  };

  return (
    <div className="w-64 bg-[#140F37] text-white flex flex-col justify-between p-6 shadow-lg">
      <div>
        <h2 className="text-2xl font-bold mb-10 bg-gradient-to-r from-[#8236fb] to-[#076ef4] text-transparent bg-clip-text">
          Abdur Rahman
        </h2>

        <nav className="space-y-4">
          <Link href="/" className="flex items-center gap-3 hover:text-gray-300 transition">
            <Home size={20} /> Home
          </Link>

          <Link href="/dashboard" className="flex items-center gap-3 hover:text-gray-300 transition">
            <LayoutDashboard size={20} /> Dashboard
          </Link>
          <Link
            href="/project/create"
            className="flex items-center gap-3 hover:text-gray-300 transition"
          >
            <Plus size={20} /> Create Blog
          </Link>
          <Link
            href="/blog/manage"
            className="flex items-center gap-3 hover:text-gray-300 transition"
          >
            <FileText size={20} /> Manage Blog
          </Link>
          <Link
            href="/project/create"
            className="flex items-center gap-3 hover:text-gray-300 transition"
          >
            <Plus size={20} /> Create Project
          </Link>
        </nav>
      </div>

      <button
        onClick={handleLogout}
        className="flex items-center gap-3 text-red-400 hover:text-red-300 transition font-medium"
      >
        <LogOut size={20} /> Logout
      </button>
    </div>
  );
}
