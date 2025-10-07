
import Link from 'next/link';


const PageSection = ({ activeLink }: { activeLink: string }) => {
    return (
        <div className="relative bg-[url('https://i.ibb.co.com/LzBr7cyt/h3-slider3.jpg')]">
            <div className="absolute inset-0 bg-[#28216e]/50 z-0"></div>
            <div className="relative py-32 md:py-56 flex justify-center items-center text-white z-10">
                <nav aria-label="breadcrumb" className="text-sm md:text-base font-medium">
                    <Link href="/" className="hover:text-gray-200 transition">Home</Link>
                    <span className="opacity-70"> / </span>
                    <span className="text-blue-400 underline">{activeLink}</span>
                </nav>
            </div>
        </div>
    );
};

export default PageSection;