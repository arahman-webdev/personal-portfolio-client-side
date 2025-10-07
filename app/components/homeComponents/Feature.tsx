"use client";

import React from "react";
import { Cloud, Server, Shield, Database } from "lucide-react";
import bgImage from "../../../images/feature-1.jpg";

const featureData = [
    {
        id: 1,
        title: "Cloud Solutions",
        description:
            "Expertise in cloud solutions for various companies in different sectors.",
        icon: <Cloud size={40} />,
    },
    {
        id: 2,
        title: "IT Security",
        description:
            "Providing robust IT security solutions to protect your digital assets.",
        icon: <Shield size={40} />,
    },
    {
        id: 3,
        title: "Server Management",
        description:
            "Reliable server management and optimization for your infrastructure.",
        icon: <Server size={40} />,
    },
    {
        id: 4,
        title: "Database Solutions",
        description:
            "Efficient and scalable database solutions tailored to your business needs.",
        icon: <Database size={40} />,
    },
];

const Feature = () => {
    return (
        <div className="pb-12 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-0 gap-6 border-b-[1px] border-gray-50">
                {featureData.map((feature) => (
                    <div
                        key={feature.id}
                        className="relative group bg-white border border-gray-100 overflow-hidden transition-all duration-500 py-7 "
                    >
                 
                        <div
                            className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-all duration-700"
                            style={{ backgroundImage: `url(${bgImage.src})` }}
                        />

                 
                        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                 
                        <div className="absolute -top-16 -left-4 w-28 h-48 bg-gradient-to-r from-purple-600 to-blue-500 rotate-45 opacity-0 -translate-x-36 -translate-y-20 rounded-[10px] group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-700 ease-out" />
                        <div className="absolute -bottom-16 -right-4 w-28 h-48 bg-gradient-to-r from-blue-500 to-purple-600 rotate-45 opacity-0 translate-x-20 translate-y-20 rounded-xl group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-700 ease-out" />

       
                        <div className="relative z-10 flex flex-col justify-center items-start p-6 h-full space-y-4 transition-all duration-700 text-black group-hover:text-white">
                            {/* Icon */}
                            <div className="transition-all duration-700 text-blue-600 group-hover:text-white">
                                {feature.icon}
                            </div>

                            {/* Text */}
                            <div className="space-y-2 mt-6 sm:mt-12">
                                <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#9153fc] via-[#ff0cc2] to-[#00d4ff] inline-block text-transparent bg-clip-text">
                                    {feature.title}
                                </h2>
                                <p className="text-sm sm:text-base leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Feature;
