import PageSection from "@/app/sharedComponents/PageSection";
import About from '@/app/components/homeComponents/About';


export const metadata = {
  title: "About Me | Abdur Rahman Portfolio",
  description: "Learn more about Abdur Rahman, a full stack developer and IT expert.",
  keywords: ["about me", "developer", "portfolio", "Abdur Rahman"],
  robots: "index, follow",
};


const AboutPage = () => {
    return (
        <div>
            <div>
                <PageSection activeLink="Abou Me"/>
                <div>
                    <About />
                </div>
            </div>
        </div>
    );
};

export default AboutPage;