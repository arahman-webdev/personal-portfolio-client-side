
import Link from 'next/link';


const PageSection = ({ activeLink}:{activeLink:string}) => {
    return (
        <div>
            <div className="relative bg-[url(../images/aboutbgimg.png)] bg-no-repeat bg-top bg-cover">
                <div className='absolute inset-0 bg-[#28216e]/50 z-0'></div>
                <div className='py-32 md:py-56 relative flex justify-center items-center text-white'>
                    <nav className='text-sm md:text-base font-medium '><Link className='hover:text-gray-200 transition' href={'/'}>Home</Link>
                    <span className='opacity-70'> / </span>
                    <span className='text-blue-400 underline'>{activeLink}</span>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default PageSection;