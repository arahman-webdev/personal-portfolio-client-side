import SectionHeading from "@/app/sharedComponents/SectionHeading";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Static Website",
    description: "WOiQO Academy is your direct path to cloud mastery. Whether you’re pivoting your career or seeking professional elevation, our programs provide the personalized guidance and hands-on expertise you need.",
    image: "https://i.ibb.co.com/wNB1jMHW/project-2.png",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Prisma"],
    liveUrl: "https://woiqo.com/",
    githubUrl: "https://github.com/desyed/woiqo",
  },

  {
    title: "Hotel Booking Website",
    description: "The Hotel Booking Website allows users to search and book hotels, view available rooms, and manage their bookings with ease. The platform features a responsive design and an intuitive user interface for an optimal booking experience.",
    image: "https://i.ibb.co.com/CsMykSyV/project-3.png",
    tech: ["React", "React Router", "MongoDB"],
    liveUrl: "aptease-app.netlify.app",
    githubUrl: "https://github.com/arahman-webdev/assingment-test-12-client",
  },
  {
    title: "Courier Service Website",
    description: "SwiftParcel is a secure, role-based parcel delivery system designed to streamline the shipping process for both senders and receivers. Admins have comprehensive control, managing parcels, updating statuses, and ensuring smooth operations.",
    image: "https://i.ibb.co.com/bgx9vdxk/project-1.png",
    tech: ["React", "Next.js", "Typescript", "Prisma", "JWT"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/arahman-webdev/courier-management-frontend",
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
          <div className="grid gap-10 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
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