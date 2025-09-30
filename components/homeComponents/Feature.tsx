
import bgImage from "../../images/feature-1.jpg"


const Feature = () => {
    return (
        <div className="pb-12">

            <div className="border-b border-b-gray-200 grid grid-cols-5">
                <div className="relative group bg-white border border-gray-200  overflow-hidden  transition-all duration-500 py-7">
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
                            <h2 className="text-xl font-bold bg-gradient-to-r from-[#9153fc] via-[#ff0cc2] inline-block text-transparent bg-clip-text">Cloud solutions & IT security</h2>
                            <p className="text-sm leading-relaxed">
                                Expertise in cloud solutions and IT security for various companies in
                                different sectors.
                            </p>
                        </div>
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