"use client"

import Link from "next/link";
import { motion } from "framer-motion";

import { PlusCircle, Settings, LayoutDashboard } from "lucide-react";



const DashboardPage = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f6f8ff] to-[#e8ecff] px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-2xl rounded-2xl p-10 max-w-3xl w-full text-center relative overflow-hidden"
      >
        {/* Decorative gradient circle */}
        <div className="absolute -top-16 -right-16 w-56 h-56 bg-gradient-to-r from-[#8236fb] to-[#076ef4] rounded-full blur-3xl opacity-20" />
        <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-gradient-to-r from-[#076ef4] to-[#8236fb] rounded-full blur-3xl opacity-20" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="flex flex-col items-center gap-3"
        >
          <div className="p-4 bg-gradient-to-r from-[#8236fb] to-[#076ef4] rounded-full text-white shadow-lg">
            <LayoutDashboard className="w-8 h-8" />
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-[#8236fb] to-[#076ef4] text-transparent bg-clip-text">
            Welcome to Your Dashboard
          </h1>
          <p className="text-gray-600 text-lg mt-3 max-w-xl">
            Manage your posts, create new blogs, or update existing ones — all
            in one place.
          </p>
        </motion.div>

        {/* Buttons Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-6"
        >
          <Link
            href="/dashboard/create-blog"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl text-white text-base font-medium bg-gradient-to-r from-[#8236fb] to-[#076ef4] hover:from-[#6d2ce2] hover:to-[#0657c4] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <PlusCircle className="w-5 h-5" />
            Create New Post
          </Link>

          <Link
            href="/dashboard/manage-blog"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border border-[#8236fb]/40 text-[#8236fb] hover:text-white hover:bg-gradient-to-r hover:from-[#8236fb] hover:to-[#076ef4] font-medium transition-all duration-300 shadow-md hover:shadow-xl"
          >
            <Settings className="w-5 h-5" />
            Manage Posts
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default DashboardPage;
