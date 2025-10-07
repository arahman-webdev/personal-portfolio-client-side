"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "@/app/components/ui/carousel";
import { Button } from "../ui/button";

// Images
import bgImg1 from "../../../images/HeroBgImg.png";
import fgImg1 from "../../../images/front-slider-1.png";
import fgImg2 from "../../../images/front-slider-2.png";
import bgImg3 from "../../../images/hero-bg-img-2.png";
import fgImg3 from "../../../images/front-slider-3.png";

const slides = [
  {
    id: 1,
    bgSrc: bgImg1,
    fgSrc: fgImg1,
    alt: "Slide 1 content",
    subTitle: "Premium Quality",
    title: "Modern & Comfortable Furniture",
    description:
      "Discover timeless designs that blend comfort, durability, and style. Perfect for your home or office space.",
  },
  {
    id: 2,
    bgSrc: "https://i.ibb.co/LzBr7cyt/h3-slider3.jpg",
    fgSrc: fgImg2,
    alt: "Slide 2 content",
    subTitle: "Smart Innovation",
    title: "Advanced Technology And Solutions",
    description:
      "Transform your daily life with cutting-edge technology, tailored to improve efficiency and creativity.",
  },
  {
    id: 3,
    bgSrc: bgImg3,
    fgSrc: fgImg3,
    alt: "Slide 3 content",
    subTitle: "Empower Your Business",
    title: "Excellent IT Service For Your Success",
    description:
      "Boost your growth with reliable, secure, and scalable IT solutions. We deliver services designed for your success.",
  },
];

export default function Hero() {
  return (
    <section className="relative w-full  overflow-hidden top-0">
      <Carousel
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 4000, stopOnInteraction: false })]}
        className="w-full h-full"
      >
        <CarouselContent className="h-full">
          {slides.map((slide) => (
            <CarouselItem key={slide.id} className="h-full">
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Background */}
                <motion.div
                  key={slide.id + "-bg"}
                  initial={{ opacity: 0, x: -150 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -150 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${typeof slide.bgSrc === "string" ? slide.bgSrc : slide.bgSrc.src})`,
                  }}
                />

                {/* Foreground content */}
                <div className="relative w-full">
                  <motion.div
                    key={slide.id + "-fg"}
                    initial={{ opacity: 0, x: 150 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 150 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="w-full relative"
                  >
                    <Image
                      src={slide.fgSrc}
                      alt={slide.alt}
                      width={1200}
                      height={700}
                      className="object-cover w-full h-auto rounded-md"
                    />

                    {/* Text overlay */}
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="absolute top-1/2 left-4 sm:left-10 lg:left-60 transform -translate-y-1/2 text-white max-w-2xl space-y-4 sm:space-y-6"
                    >
                      <p className="text-base sm:text-lg font-medium">{slide.subTitle}</p>
                      <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold">
                        {slide.title}
                      </h1>
                      <p className="text-sm sm:text-lg md:text-xl opacity-80">
                        {slide.description}
                      </p>
                      <Button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-600 uppercase text-white font-semibold px-4 py-3 sm:px-7 sm:py-6 rounded-md shadow-lg hover:scale-105 transition-transform duration-300">
                        Read More
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
