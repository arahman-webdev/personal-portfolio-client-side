import About from "@/components/homeComponents/About";
import Feature from "@/components/homeComponents/Feature";
import Hero from "@/components/homeComponents/Hero";
import Projects from "./projects/page";
import BlogPost from "@/components/homeComponents/BlogPost";


export default function Home() {
  return (
    <div>
      <Hero />
      <Feature />
      <About />
      <Projects />
      <BlogPost />
    </div>
  );
}
