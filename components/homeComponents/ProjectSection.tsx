import SectionHeading from "@/sharedComponents/SectionHeading";
import ProjectCard from "./ProjectCard";

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

const ProjectSection = () => {
    return (
        <div>
                  <section className="py-20 sm:py-28 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Section Title */}
          <SectionHeading title={'Projects'} subTitle="A selection of projects that highlight my skills in building modern, scalable, and user-friendly web applications." />
          {/* Project Grid */}
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <ProjectCard key={i} project={p} />
            ))}
          </div>
        </div>
      </section>
        </div>
    );
};

export default ProjectSection;