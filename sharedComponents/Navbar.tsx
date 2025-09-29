"use client"

import React, { useState } from "react"
import { Button } from "../components/ui/button"
import Image from "next/image"
import logo from "../images/logo.png"
import Link from "next/link"
import { PhoneCall, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className=" py-5 px-3 sticky top-0 z-50">
      <div className="flex justify-between items-center container mx-auto">
        {/* Logo + Links */}
        <div className="flex items-center gap-10">
          <Image src={logo} alt="logo" width={120} height={120} />
          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 text-white font-medium uppercase tracking-wide">
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/service"}>Service</Link>
            <Link href={"/project"}>Project</Link>
            <Link href={"/contact"}>Contact</Link>
          </ul>
        </div>

        {/* Right Section */}
        <div className="hidden md:flex gap-10 items-center">
          <div className="flex items-center gap-4 text-white">
            <PhoneCall className="text-indigo-400" />
            <div className="flex flex-col leading-tight">
              <span className="text-gray-400 text-sm">Have any question?</span>
              <span className="font-bold text-white">+880 1719617907</span>
            </div>
          </div>
          <Button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-600 text-white text-sm rounded-md py-2 px-6 font-semibold uppercase shadow-lg hover:scale-105 transition-transform duration-300">
            Login
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gradient-to-b from-[#1C154A] via-[#2A1F5E] to-[#140F37] text-white px-6 py-4 space-y-4 flex flex-col rounded-b-lg"
          >
            <Link href={"/"} onClick={() => setIsOpen(false)}>Home</Link>
            <Link href={"/about"} onClick={() => setIsOpen(false)}>About</Link>
            <Link href={"/service"} onClick={() => setIsOpen(false)}>Service</Link>
            <Link href={"/project"} onClick={() => setIsOpen(false)}>Project</Link>
            <Link href={"/contact"} onClick={() => setIsOpen(false)}>Contact</Link>

            <div className="flex flex-col gap-4 mt-6">
              <div className="flex items-center gap-3">
                <PhoneCall className="text-indigo-400" />
                <span className="font-semibold">+880 1719617907</span>
              </div>
              <Button className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-600 uppercase text-white font-semibold py-2 rounded-md shadow-lg hover:scale-105 transition-transform duration-300">
                Login
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}