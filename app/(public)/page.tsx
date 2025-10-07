import About from "@/app/components/homeComponents/About";
import Feature from "@/app/components/homeComponents/Feature";
import Hero from "@/app/components/homeComponents/Hero";

import BlogPost from "@/app/components/homeComponents/BlogPost";
import ServiceSection from "@/app/components/homeComponents/ServiceSection";
import ProjectSection from "@/app/components/homeComponents/ProjectSection";

export const metadata = {
  title: "Abdur Rahman Portfolio | Full Stack Developer",
  description: "Showcasing projects, blogs, services, and features by Abdur Rahman.",
  keywords: ["portfolio", "developer", "projects", "blogs", "services", "Abdur Rahman"],
  robots: "index, follow",
};

export default function Home() {
  return (
    <div>
      <Hero />
      <Feature />
      <About />
      <ServiceSection />
      <BlogPost />
      <ProjectSection />
    </div>
  );
}
