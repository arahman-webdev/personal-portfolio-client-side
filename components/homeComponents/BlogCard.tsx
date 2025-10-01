import Image from "next/image";
import postImg1 from '../../images/post-1.webp'
import { Calendar, User } from "lucide-react";

const BlogCard = () => {
    return (
        <>
            <div className="group">
                <div className="border border-slate-200 group-hover:-translate-y-1.5 transition-all duration-200 ease-in hover:shadow-2xl">
                    <div className="w-full h-64 overflow-hidden">
                        <Image src={postImg1}
                            width={500}
                            height={450}
                            alt="post img"
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="p-6 space-y-4">
                        <div className="flex justify-between items-center">
                            <i className="flex gap-3.5"><Calendar />October 16, 2024</i>
                            <i className="flex gap-3.5"><User />By Admin</i>
                        </div>
                        <div className="space-y-3">
                            <h2 className="text-[#343D55] font-semibold text-2xl group-hover:text-red-500">Spotlight — Equinox Collection by Shane Griffin</h2>
                            <p className="text-[#697582]">Looking for inspiration to kick it off, I stumbled across the work of Shane Griffin, an artist and director based in New YorkLooking for inspiration to kick it off, I stumbled across the work of Shane Griffin, an artist and director based in New York</p>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="group">
  <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white hover:-translate-y-2 transition-all duration-300 ease-in-out shadow-md hover:shadow-2xl">
    
    {/* Image */}
    <div className="relative w-full h-64 overflow-hidden">
      <Image
        src={postImg1}
        alt="Post thumbnail"
        width={500}
        height={450}
        className="object-cover w-full h-full transform group-hover:scale-105 transition duration-500"
      />
      {/* Subtle overlay on hover */}
      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-40 transition duration-500"></div>
    </div>

    {/* Content */}
    <div className="p-6 space-y-5">
      {/* Meta Info */}
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span className="flex items-center gap-2">
          <Calendar className="w-4 h-4" /> October 16, 2024
        </span>
        <span className="flex items-center gap-2">
          <User className="w-4 h-4" /> Admin
        </span>
      </div>

      {/* Title & Description */}
      <div className="space-y-3">
        <h2 className="text-[#343D55] font-semibold text-xl md:text-2xl leading-snug group-hover:bg-gradient-to-r from-[#8236fb] to-[#076ef4] hover:text-transparent hover:bg-clip-text transition-colors">
          Spotlight — Equinox Collection by Shane Griffin
        </h2>
        <p className="text-[#697582] text-base leading-relaxed line-clamp-3">
          Looking for inspiration to kick it off, I stumbled across the work of Shane Griffin, an artist and director based in New York. His work blends bold visual design with storytelling, creating truly unique experiences.
        </p>
      </div>

      {/* Read More CTA */}
      <div>
        <a
          href="#"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#8236fb] to-[#076ef4] text-transparent bg-clip-text font-medium hover:underline"
        >
          Read More →
        </a>
      </div>
    </div>
  </div>
</div>

        </>
    );
};

export default BlogCard;