"use client"
import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"

// Images
import bgImg1 from "../../images/bg-slider-2.jpg"
import fgImg1 from "../../images/front-slider-1.png"
import bgImg2 from "../../images/bg-slider-1.jpg"
import fgImg2 from "../../images/front-slider-2.png"
import bgImg3 from "../../images/bg-slider-2.jpg"
import fgImg3 from "../../images/front-slider-3.png"

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
]

export default function Hero() {
    return (
        <div className="absolute w-full top-0 overflow-hidden">
            <Carousel
                opts={{ loop: true }}
                plugins={[
                    Autoplay({
                        delay: 4000, // change slide every 4s
                        stopOnInteraction: false, // keep autoplay even if user interacts
                    }),
                ]}
                className="w-full h-screen"
            >
                <CarouselContent className="h-full">
                    {slides.map((slide) => (
                        <CarouselItem key={slide.id} className="h-full">
                            <div className="relative w-full h-full flex items-center justify-center">
                                {/* Background with animation */}
                                <motion.div
                                    key={slide.id + "-bg"}
                                    initial={{ opacity: 0, x: -150 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -150 }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{
                                        backgroundImage: `url(${typeof slide.bgSrc === "string"
                                            ? slide.bgSrc
                                            : slide.bgSrc.src
                                            })`,
                                    }}
                                ></motion.div>

                                {/* Foreground content */}

                                <div className="relative w-full">
                                    {/* Foreground Image */}
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
                                            width={1400}
                                            height={700}
                                            className="object-cover w-full  rounded-md"
                                        />

                                        {/* Text overlay */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 50 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 1, ease: "easeOut" }}
                                            className="absolute top-1/2 left-10 md:left-60 transform -translate-y-1/2 text-white max-w-2xl space-y-6"
                                        >
                                            <p>{slide.subTitle}</p>
                                            <h1 className="text-3xl md:text-6xl font-bold">{slide.title}</h1>
                                            <p className="text-lg md:text-xl opacity-80">{slide.description}</p>
                                        </motion.div>
                                    </motion.div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}
