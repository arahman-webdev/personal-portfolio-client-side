import Image from "next/image";
import postImg1 from '../../images/post-1.webp'
import { Calendar, User } from "lucide-react";
import Link from "next/link";
import { IPost } from "@/types";

const BlogCard = ({post}:{post:IPost}) => {

  const {

  title,
  content,
  thumbnail,
  thumbnailId,
  published,
  createdAt,
  updatedAt} = post

  const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

  return (
    <>

      <div className="group">
        <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white hover:-translate-y-2 transition-all duration-300 ease-in-out shadow-md hover:shadow-2xl">

          {/* Image */}
          <div className="relative w-full h-64 overflow-hidden">
            <Image
              src={thumbnail}
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
                <Calendar className="w-4 h-4" /> {formattedDate}
              </span>
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" /> Admin
              </span>
            </div>

            {/* Title & Description */}
            <div className="space-y-3">
              <h2 className="text-[#343D55] font-semibold text-xl md:text-2xl leading-snug group-hover:text-transparent group-hover:bg-gradient-to-r from-[#8236fb] to-[#076ef4]  group-hover:bg-clip-text transition-colors">
                {title}
              </h2>
              <p className="text-[#697582] text-base leading-relaxed line-clamp-3">
                {content}
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