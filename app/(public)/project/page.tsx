
import ProjectSection from "@/components/homeComponents/ProjectSection";
import PageSection from "@/sharedComponents/PageSection";
import React from "react";


export const metadata = {
  title: "Projects | Abdur Rahman Portfolio",
  description: "Explore all projects built by Abdur Rahman showcasing skills in web and software development.",
  keywords: ["projects", "portfolio", "web development", "software", "Abdur Rahman"],
  robots: "index, follow",
};

const Projects = () => {
  return (
    <div>
      <div>
        <PageSection activeLink="Projects" />
      </div>
      <ProjectSection />
    </div>
  );
};

export default Projects;
