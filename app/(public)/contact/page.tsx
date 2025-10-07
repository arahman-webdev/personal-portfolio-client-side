import PageSection from "@/app/sharedComponents/PageSection";

export const metadata = {
  title: "Contact | Abdur Rahman Portfolio",
  description: "Get in touch with Abdur Rahman for projects, collaboration, or inquiries via email or phone.",
  keywords: ["contact", "portfolio", "get in touch", "Abdur Rahman"],
  robots: "index, follow",
};

const ContactPage = () => {
    return (
        <div>
            <PageSection activeLink="Contact" />
            <div className="min-h-screen flex items-center justify-center py-12 px-4 bg-[#F5F8FC]">
                
                <div>
                    
                    <div className="container mx-auto flex flex-col lg:flex-row shadow-2xl rounded-lg overflow-hidden bg-white">

                        {/* Left: Contact Form */}
                        <div className="flex-1 p-8 lg:p-12">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-[#15182C] mb-2 text-center lg:text-left">
                                GET A QUOTE
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-[#8236fb] to-[#076ef4] mb-10 mx-auto lg:mx-0" />
                            <form className="space-y-5">
                                <div className="flex flex-col md:flex-row gap-5">
                                    <div className="flex-1">
                                        <div className="flex items-center bg-[#f2f3f5] rounded-md px-4 py-3">
                                            <span className="mr-3 text-[#7c8493]">
                                                {/* User Icon */}
                                                <svg width={20} height={20} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                    <circle cx="12" cy="8" r="4" />
                                                    <path d="M4 20c0-4 4-7 8-7s8 3 8 7" />
                                                </svg>
                                            </span>
                                            <input
                                                type="text"
                                                placeholder="Your name"
                                                className="bg-transparent outline-none w-full text-[#15182C]"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center bg-[#f2f3f5] rounded-md px-4 py-3">
                                            <span className="mr-3 text-[#7c8493]">
                                                {/* Email Icon */}
                                                <svg width={20} height={20} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                    <rect x="3" y="5" width="18" height="14" rx="2" />
                                                    <path d="M3 7l9 6 9-6" />
                                                </svg>
                                            </span>
                                            <input
                                                type="email"
                                                placeholder="Your email"
                                                className="bg-transparent outline-none w-full text-[#15182C]"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row gap-5">
                                    <div className="flex-1">
                                        <div className="flex items-center bg-[#f2f3f5] rounded-md px-4 py-3">
                                            <span className="mr-3 text-[#7c8493]">
                                                {/* Phone Icon */}
                                                <svg width={20} height={20} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                    <rect x="5" y="2" width="14" height="20" rx="3" />
                                                    <path d="M12 18h.01" />
                                                </svg>
                                            </span>
                                            <input
                                                type="text"
                                                placeholder="Phone number"
                                                className="bg-transparent outline-none w-full text-[#15182C]"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center bg-[#f2f3f5] rounded-md px-4 py-3">
                                            <span className="mr-3 text-[#7c8493]">
                                                {/* Subject Icon */}
                                                <svg width={20} height={20} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                    <rect x="4" y="4" width="16" height="16" rx="2" />
                                                    <path d="M8 8h8v8H8z" />
                                                </svg>
                                            </span>
                                            <input
                                                type="text"
                                                placeholder="Subject"
                                                className="bg-transparent outline-none w-full text-[#15182C]"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-start bg-[#f2f3f5] rounded-md px-4 py-3">
                                        <span className="mr-3 text-[#7c8493] mt-1">
                                            {/* Message Icon */}
                                            <svg width={20} height={20} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path d="M12 20h9" />
                                                <path d="M12 20V4m0 0a8 8 0 018 8H4a8 8 0 018-8z" />
                                            </svg>
                                        </span>
                                        <textarea
                                            rows={4}
                                            placeholder="Write message"
                                            className="bg-transparent outline-none w-full text-[#15182C] resize-none"
                                        />
                                    </div>
                                </div>
                                <div className="pt-2 flex justify-center lg:justify-start">
                                    <button
                                        className=" gap-2 px-5 py-2 rounded-lg bg-gradient-to-r from-[#8236fb] to-[#076ef4] text-white font-medium shadow-md hover:shadow-lg hover:opacity-90 transition"
                                    >

                                        SEND MESSAGE
                                    </button>
                                </div>
                            </form>
                        </div>
                        {/* Right: Contact Info */}
                        <div className="bg-gradient-to-r from-[#803beef5] to-[#076ef4bb] w-full lg:w-[670px] flex-shrink-0 flex flex-col justify-center p-8 lg:p-10">
                            <h2 className="text-2xl font-extrabold text-white mb-2">
                                CONTACT INFORMATION
                            </h2>
                            <div className="w-20 h-1 bg-white mb-7" />
                            {/* Contact Number */}
                            <div className="bg-white rounded-lg shadow mb-6 p-6 flex items-start">
                                <div className="bg-gradient-to-r from-[#8236fb] to-[#076ef4]  rounded-md p-3 mr-4">
                                    {/* Phone Icon */}
                                    <svg width={28} height={28} fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24">
                                        <path d="M22 16.92V21a1 1 0 01-1.09 1A19.91 19.91 0 013 4.09 1 1 0 014 3h4.09a1 1 0 011 .75l1.21 4.21a1 1 0 01-.29 1L8.37 10.91a16 16 0 006.72 6.72l1.95-1.95a1 1 0 011-.29l4.21 1.21a1 1 0 01.75 1V21z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="font-bold text-[#15182C] text-lg mb-1">Contact Number:</div>
                                    <div className="text-[#7c8493] text-base leading-tight">+8801719- 617907<br />+8801794- 313039</div>
                                </div>
                            </div>
                            {/* Mail Address */}
                            <div className="bg-white rounded-lg shadow mb-6 p-6 flex items-start">
                                <div className="bg-[#15182C] rounded-md p-3 mr-4">
                                    {/* Email Icon */}
                                    <svg width={28} height={28} fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24">
                                        <rect x="3" y="5" width="18" height="14" rx="2" />
                                        <path d="M3 7l9 6 9-6" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="font-bold text-[#15182C] text-lg mb-1">Mail Address:</div>
                                    <div className="text-[#7c8493] text-base leading-tight">
                                        mdarahman5645@gmail.com
                                    </div>
                                </div>
                            </div>
                            {/* Office Location */}
                            <div className="bg-white rounded-lg shadow p-6 flex items-start">
                                <div className="bg-[#7c8493] rounded-md p-3 mr-4">
                                    {/* Location Icon */}
                                    <svg width={28} height={28} fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24">
                                        <circle cx="12" cy="10" r="3.5" />
                                        <path d="M12 21s7-7.5 7-12A7 7 0 0 0 5 9c0 4.5 7 12 7 12z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="font-bold text-[#15182C] text-lg mb-1">My Location:</div>
                                    <div className="text-[#7c8493] text-base leading-tight">
                                        5840 Sherpur, Bogra,<br />
                                        45206, Bangladesh
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;