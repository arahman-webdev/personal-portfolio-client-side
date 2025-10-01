import ProjectCard from "@/components/homeComponents/ProjectCard";
import React from "react";


const projects = [
  {
    title: "Ecommerce Store",
    description: "A full-featured eCommerce web app with cart, checkout, and admin dashboard.",
    image: "https://i.ibb.co.com/wNB1jMHW/project-2.png",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Prisma"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project1",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio to showcase skills, projects, and blogs with ISR support.",
    image: "https://i.ibb.co.com/CsMykSyV/project-3.png",
    tech: ["React", "Next.js", "Framer Motion"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project2",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio to showcase skills, projects, and blogs with ISR support.",
    image: "https://i.ibb.co.com/bgx9vdxk/project-1.png",
    tech: ["React", "Next.js", "Framer Motion"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project2",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 sm:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-[#8236fb] to-[#076ef4] bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            A selection of projects that highlight my skills in building modern, scalable, and user-friendly web applications.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
