import PageSection from "@/sharedComponents/PageSection";
import About from '@/components/homeComponents/About';

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