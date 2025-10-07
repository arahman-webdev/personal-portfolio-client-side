"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../../../images/profileImg.png";

const About = () => {
  return (
    <section className="relative py-20 sm:py-28" id="about">
      <div className="container mx-auto px-6 lg:px-12">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-[#8236fb] to-[#076ef4] bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            A quick look at who I am, what I do, and the skills I bring to the table.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-6 lg:pr-8"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gradient-to-r from-[#8236fb] to-[#076ef4] rounded-full"></div>
              <p className="text-sm font-semibold uppercase tracking-wider bg-gradient-to-r from-[#8236fb] to-[#076ef4] text-transparent bg-clip-text">
                My Journey & Expertise
              </p>
            </div>

            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-snug">
              Dedicated to building exceptional and scalable web solutions.
            </h3>

            <p className="text-lg text-gray-600 leading-relaxed">
              Hello! I&apos;m a passionate and results-driven software developer with expertise in modern web technologies.
              My focus is on creating
              <strong className="font-semibold text-gray-800"> clean, efficient, and user-friendly applications</strong>
              that solve real-world problems.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              I specialize in <strong className="font-semibold text-gray-800">frontend development</strong>, with a strong background in
              <strong className="font-semibold text-gray-800"> React</strong> and utility-first CSS frameworks like
              <strong className="font-semibold text-gray-800"> Tailwind CSS</strong>.
              I enjoy turning complex requirements into beautiful, performant interfaces.
            </p>

            {/* Skill Badges */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { staggerChildren: 0.15 },
                },
              }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-3 pt-4"
            >
              {["Next.js", "TypeScript", "React", "TailwindCSS", "Prisma"].map((skill) => (
                <motion.span
                  key={skill}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="px-4 py-2 text-sm font-medium text-indigo-700 bg-indigo-100 rounded-full shadow-sm hover:shadow-md transition"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="pt-8"
            >
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-3 text-base font-medium rounded-xl 
                           text-white bg-gradient-to-r from-[#8236fb] to-[#076ef4] 
                           hover:from-[#6d2ce2] hover:to-[#0657c4] 
                           transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl"
              >
                Get In Touch
              </a>
            </motion.div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-md lg:max-w-2xl relative">
              <Image
                className="w-full h-auto object-cover  "
                width={700}
                height={500}
                src={aboutImg}
                alt="Profile Picture"
              />

              {/* Decorative Blobs */}
              <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse hidden lg:block"></div>
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-indigo-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse hidden lg:block"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
