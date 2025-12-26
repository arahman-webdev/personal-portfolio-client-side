import SectionHeading from "@/app/sharedComponents/SectionHeading";
import ProjectCard from "./ProjectCard";

const projects = [



  {
    "title": "Next.js Ecommerce Platform",
    "description": "A full-featured ecommerce web application built with Next.js and TypeScript. It supports authentication using JWT, role-based access control, product management, cart and wishlist functionality, and secure order processing using Prisma ORM.",
    "image": "https://i.ibb.co.com/Gq0n7KX/ecommerce-1.png",
    "tech": ["Next.js", "TypeScript", "Prisma", "JWT", "PostgreSQL"],
    "liveUrl": "https://nextjs-ecommerce-frontend-zeta.vercel.app/",
    "githubUrl": "https://github.com/arahman-webdev/nextjs-ecommerce-frontend"
  },
  {
    "title": "Tour Management System",
    "description": "A tour and travel management platform that allows users to explore tours, book packages, and manage reservations. Admins can manage tours, users, and bookings efficiently with secure authentication and modern UI.",
    "image": "https://i.ibb.co.com/yFFbfrfh/tour-project.png",
    "tech": ["Next.js", "TypeScript", "Prisma", "JWT", "Tailwind CSS"],
    "liveUrl": "https://local-guide-frontend-red.vercel.app/",
    "githubUrl": "https://github.com/arahman-webdev/local-guide-frontend"
  },
  {
    "title": "Courier Service Website (SwiftParcel)",
    "description": "SwiftParcel is a role-based courier and parcel management system. Users can create parcel requests, track delivery status, and manage shipments, while admins control parcel assignments, status updates, and overall operations.",
    "image": "https://i.ibb.co.com/bgx9vdxk/project-1.png",
    "tech": ["React", "Next.js", "TypeScript", "Prisma", "JWT"],
    "liveUrl": "https://swiftparcelbd.netlify.app/",
    "githubUrl": "https://github.com/arahman-webdev/courier-management-frontend"
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