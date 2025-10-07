/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Link from "next/link";
import {
  FileText,
  Home,
  LayoutDashboard,
  LogOut,
  Plus,
  Menu,
  X,
  Loader2,
  ShieldAlert,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Sidebar() {
  const router = useRouter();
  const [user, setUser] = useState<{ name: string } | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch user info (authentication check)
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(
          "https://abdurrahman-dev-portfolio-backend.vercel.app/api/v1/user/me",
          {
            method: "GET",
            credentials: "include",
          }
        );

        const data = await res.json();

        if (data.success) {
          setUser(data.data);
        } else {
          setUser(null);
          router.push("/login");
        }
      } catch (error) {
        console.error("Failed to fetch user:", error);
        setUser(null);
        router.push("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [router]);

  // ✅ Logout
  const handleLogout = async () => {
    try {
      const res = await fetch(
        "https://abdurrahman-dev-portfolio-backend.vercel.app/api/v1/auth/logout",
        {
          method: "POST",
          credentials: "include",
        }
      );

      if (res.ok) {
        setUser(null);
        router.push("/login");
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  // ✅ Links
  const links = [
    { href: "/", label: "Home", icon: <Home size={20} /> },
    { href: "/dashboard", label: "Dashboard", icon: <LayoutDashboard size={20} /> },
    { href: "/dashboard/create-blog", label: "Create Blog", icon: <Plus size={20} /> },
    { href: "/dashboard/manage-blog", label: "Manage Blogs", icon: <FileText size={20} /> },
  ];

  // ✅ Loading screen while checking auth
  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white">
        <Loader2 className="w-10 h-10 text-[#8236fb] animate-spin" />
      </div>
    );
  }

  // ✅ If not logged in, show restricted screen
  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#f6f8ff] to-[#e8ecff] px-4 text-center">
        <ShieldAlert className="w-16 h-16 text-red-500 mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Access Denied</h2>
        <p className="text-gray-600 mb-6">
          You must be logged in to access the dashboard.
        </p>
        <button
          onClick={() => router.push("/login")}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#8236fb] to-[#076ef4] text-white font-medium hover:from-[#6d2ce2] hover:to-[#0657c4] transition-all duration-300 shadow-md"
        >
          Go to Login
        </button>
      </div>
    );
  }

  // ✅ Authenticated user sidebar
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
              {user?.name || "Abdur Rahman"}
            </h2>

            <nav className="space-y-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-3 hover:text-gray-300 transition"
                  onClick={() => setIsOpen(false)}
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
          className="fixed inset-0 bg-black/45 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}
