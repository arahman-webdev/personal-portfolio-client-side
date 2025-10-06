import About from "@/components/homeComponents/About";
import Feature from "@/components/homeComponents/Feature";
import Hero from "@/components/homeComponents/Hero";

import BlogPost from "@/components/homeComponents/BlogPost";
import ServiceSection from "@/components/homeComponents/ServiceSection";
import ProjectSection from "@/components/homeComponents/ProjectSection";

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
