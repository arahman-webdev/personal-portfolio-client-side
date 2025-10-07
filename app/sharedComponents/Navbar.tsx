"use client";

import React, { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import Image from "next/image";
import logo from "../../images/arlogo.png";
import Link from "next/link";
import { PhoneCall, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ProfileOpen } from "@/app/components/layout/ProfileOpen";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  const [user, setUser] = useState<{ name: string; role?: string } | null>(null);
  const [loading, setLoading] = useState(true);

  
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
        }
      } catch (error) {
        console.error("Failed to fetch user:", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  // ✅ Handle logout
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
        console.log("✅ Logged out successfully");
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-50 py-5 px-3 bg-transparent">
      <div className="flex justify-between items-center container mx-auto">
        {/* Logo + Links */}
        <div className="flex items-center gap-10">
          <Image src={logo} alt="logo" width={140} height={140} />

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-6 font-medium uppercase tracking-wide">
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Blog", href: "/blog" },
              { name: "Project", href: "/project" },
              { name: "Contact", href: "/contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors ${
                  pathName === item.href
                    ? "text-blue-400 underline"
                    : "text-white hover:text-indigo-400"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div className="hidden lg:flex gap-10 items-center">
          <div className="flex items-center gap-3 text-white">
            <PhoneCall className="text-indigo-400" />
            <div className="leading-tight">
              <p className="text-gray-300 text-sm">Have any question?</p>
              <p className="font-bold text-white">+880 1719617907</p>
            </div>
          </div>

          {!loading && (
            <>
              {user ? (
                <ProfileOpen name={user.name} role={user.role} MyDashboard='' logout={handleLogout} />
                
              ) : (
                <Link
                  href="/login"
                  className="bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-600 text-white text-sm rounded-md py-2 px-6 font-semibold uppercase shadow-lg hover:scale-105 transition-transform duration-300"
                >
                  Login
                </Link>
              )}
            </>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gradient-to-b from-[#1C154A]/95 via-[#2A1F5E]/95 to-[#140F37]/95 text-white px-6 py-4 space-y-4 flex flex-col rounded-b-lg mt-2"
          >
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Service", href: "/service" },
              { name: "Projects", href: "/project" },
              { name: "Contact", href: "/contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <div className="flex flex-col gap-4 mt-6">
              <div className="flex items-center gap-3">
                <PhoneCall className="text-indigo-400" />
                <span className="font-semibold">+880 1719617907</span>
              </div>

              {!user ? (
                <Link
                  href="/login"
                  className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-600 text-center text-white font-semibold py-2 rounded-md shadow-lg hover:scale-105 transition-transform duration-300"
                >
                  Login
                </Link>
              ) : (
                <Button
                  onClick={() => {
                    handleLogout();
                    setIsOpen(false);
                  }}
                  className="w-full bg-red-500 text-white font-semibold py-2 rounded-md shadow-lg hover:scale-105 transition-transform duration-300"
                >
                  Logout
                </Button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
