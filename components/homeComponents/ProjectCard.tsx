"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="group relative bg-white  shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition"
    >
      {/* Project Image */}
      <div className="relative w-full lg:h-96 h-full overflow-hidden">
        <Image
          src={project.image}

          alt={project.title}
          fill
          className="object-cover transform group-hover:scale-110 transition duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition"></div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
        <p className="text-gray-600 text-base">{project.description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-[#8236fb]/10 to-[#076ef4]/10 text-indigo-700 border border-indigo-200"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4 pt-4">
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 rounded-lg bg-gradient-to-r from-[#8236fb] to-[#076ef4] text-white font-medium shadow-md hover:shadow-lg hover:opacity-90 transition"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </Link>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 rounded-lg bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition"
          >
            <Github className="w-4 h-4" />
            Source Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
