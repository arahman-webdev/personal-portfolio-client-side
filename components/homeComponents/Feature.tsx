import Image from "next/image";
import bgImage from "../../images/feature-1.jpg"


const Feature = () => {
    return (
        <div className="pb-12">

            <div className="border-b border-b-gray-200 grid grid-cols-5">
                <div className='relative group space-y-10 text-black p-7 overflow-hidden border-r border-r-gray-200'>
                    <div>
                        <svg width="45" height="45" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 11H20" stroke="url(#gradient1)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M4 7H20" stroke="url(#gradient1)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M4 3H20" stroke="url(#gradient1)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M4 15H20" stroke="url(#gradient1)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M4 19H20" stroke="url(#gradient1)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M2 3H22V21H2V3Z" stroke="url(#gradient1)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12 21V23" stroke="url(#gradient1)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9 23H15" stroke="url(#gradient1)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <defs>
                                <linearGradient id="gradient1" x1="4" y1="3" x2="20" y2="21" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#8A2BE2" />
                                    <stop offset="1" stop-color="#4169E1" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className='space-y-2 pb-4'>
                        <h2 className='text-xl font-bold'>Cloud solutions & IT security</h2>
                        <p>Expertise in a IT consultancy for the many companies, for their different working areas.</p>
                    </div>
                </div>

                <div className='relative group space-y-10 text-black p-7 overflow-hidden  border-r border-r-gray-200'>
                    <div>
                        <svg width="45" height="45" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 11H20" stroke="url(#gradient2)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M4 7H20" stroke="url(#gradient2)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M4 3H20" stroke="url(#gradient2)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M2 3H22V13H2V3Z" stroke="url(#gradient2)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10 17H14" stroke="url(#gradient2)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M8 21H16" stroke="url(#gradient2)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12 13V21" stroke="url(#gradient2)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M14 17C14 18.1046 13.1046 19 12 19C10.8954 19 10 18.1046 10 17C10 15.8954 10.8954 15 12 15C13.1046 15 14 15.8954 14 17Z" fill="url(#gradient2)" stroke="url(#gradient2)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <defs>
                                <linearGradient id="gradient2" x1="2" y1="3" x2="22" y2="21" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#8A2BE2" />
                                    <stop offset="1" stop-color="#4169E1" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className='space-y-2 pb-4'>
                        <h2 className='text-xl font-bold'>Cloud solutions & IT security</h2>
                        <p>Expertise in a IT consultancy for the many companies, for their different working areas.</p>
                    </div>
                </div>


                <div className='relative group  text-black p-7 overflow-hidden space-y-10 border-r border-r-gray-200'>
                    <div>
                        <svg width="45" height="45" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 6V16C4 16.5523 4.44772 17 5 17H19C19.5523 17 20 16.5523 20 16V6M4 6H20M4 6L5 3H19L20 6" stroke="url(#gradient4)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12 17V21" stroke="url(#gradient4)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9 21H15" stroke="url(#gradient4)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7 9H17" stroke="url(#gradient4)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7 13H11" stroke="url(#gradient4)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M13 13H17" stroke="url(#gradient4)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <defs>
                                <linearGradient id="gradient4" x1="4" y1="3" x2="20" y2="21" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#8A2BE2" />
                                    <stop offset="1" stop-color="#4169E1" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className='space-y-2 pb-4'>
                        <h2 className='text-xl font-bold'>Cloud solutions & IT security</h2>
                        <p>Expertise in a IT consultancy for the many companies, for their different working areas.</p>
                    </div>

                </div>
                <div className='relative group  text-black p-7 overflow-hidden space-y-10 border-r border-r-gray-200'>
                    <div>
                        <svg width="45" height="45" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 6V16C4 16.5523 4.44772 17 5 17H19C19.5523 17 20 16.5523 20 16V6M4 6H20M4 6L5 3H19L20 6" stroke="url(#gradient4)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12 17V21" stroke="url(#gradient4)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9 21H15" stroke="url(#gradient4)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7 9H17" stroke="url(#gradient4)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7 13H11" stroke="url(#gradient4)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M13 13H17" stroke="url(#gradient4)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <defs>
                                <linearGradient id="gradient4" x1="4" y1="3" x2="20" y2="21" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#8A2BE2" />
                                    <stop offset="1" stop-color="#4169E1" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className='space-y-2 pb-4'>
                        <h2 className='text-xl font-bold'>Cloud solutions & IT security</h2>
                        <p>Expertise in a IT consultancy for the many companies, for their different working areas.</p>
                    </div>

                </div>

    <div className="relative group bg-white border border-gray-200  overflow-hidden  transition-all duration-500">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-0 
                   group-hover:opacity-100 transition-all duration-700"
        style={{ backgroundImage: `url(${bgImage.src})` }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 opacity-0 
                     group-hover:opacity-100 transition-opacity duration-700" />

      {/* Decorative Shapes */}
      {/* Top-left diagonal (slide in) */}
      <div
        className="absolute -top-16 -left-4 w-28 h-48 bg-gradient-to-r from-purple-600 to-blue-500 rotate-45 
                   opacity-0 -translate-x-36 -translate-y-20 rounded-[10px]
                   group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0
                   transition-all duration-700 ease-out"
      />
      {/* Bottom-right diagonal (slide in) */}
      <div
        className="absolute -bottom-16 -right-4 w-28 h-48 bg-gradient-to-r from-blue-500 to-purple-600 rotate-45 
                   opacity-0 translate-x-20 translate-y-20 rounded-xl
                   group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0
                   transition-all duration-700 ease-out"
      />

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col justify-center items-start p-6 h-full space-y-4 transition-all duration-700 text-black group-hover:text-white">
        {/* Icon */}
        <div>
          <svg
            width="45"
            height="45"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-all duration-700"
          >
            <path
              d="M4 6V16C4 16.5523 4.44772 17 5 17H19C19.5523 17 20 16.5523 20 16V6M4 6H20M4 6L5 3H19L20 6"
              stroke="url(#gradientIcon)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient
                id="gradientIcon"
                x1="4"
                y1="3"
                x2="20"
                y2="21"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#8A2BE2" />
                <stop offset="1" stopColor="#4169E1" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Text */}
        <div className="space-y-2 mt-12">
          <h2 className="text-xl font-bold">Cloud solutions & IT security</h2>
          <p className="text-sm leading-relaxed">
            Expertise in cloud solutions and IT security for various companies in
            different sectors.
          </p>
        </div>
      </div>
    </div>

            </div>
        </div>
    );
};

export default Feature;

{/* <p className='text-gray-400 mt-4 opacity-0 translate-y-6 group-hover:opacity-100 max-[992px]:opacity-100 group-hover:translate-y-0 transition-all duration-700'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem vero eum repellat minima totam quo?</p> */ }