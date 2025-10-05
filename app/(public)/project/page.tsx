
import ProjectSection from "@/components/homeComponents/ProjectSection";
import PageSection from "@/sharedComponents/PageSection";
import React from "react";




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
