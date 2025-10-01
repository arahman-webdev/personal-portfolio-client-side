"use client";

import SectionHeading from "@/sharedComponents/SectionHeading";
import { motion } from "framer-motion";
import { Code2, Database, Layout, Lock } from "lucide-react";

const services = [
  {
    id: 1,
    icon: 
  <Code2 className="w-8 h-8 text-white" />

,
    title: "Frontend Development",
    description:
      "Building responsive, interactive, and visually appealing web applications using Next.js, React, and Tailwind CSS.",
  },
  {
    id: 2,
    icon: <Database className="w-8 h-8 text-white" />,
    title: "Backend Development",
    description:
      "Creating scalable and secure backend systems with Node.js, Express, and databases like PostgreSQL or MongoDB.",
  },
  {
    id: 3,
    icon: <Layout className="w-8 h-8 text-white" />,
    title: "Full-Stack Solutions",
    description:
      "Delivering complete web solutions from design to deployment, ensuring seamless user experiences and performance.",
  },
  {
    id: 4,
    icon: <Lock className="w-8 h-8 text-white" />,
    title: "Authentication & Security",
    description:
      "Implementing secure authentication, authorization, and data protection with JWT, bcrypt, and role-based access control.",
  },
];

const ServiceSection = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-[#F4F7FB] to-gray-50">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className=" mb-12"
        >
         
          <SectionHeading title="My Services" subTitle="subtied" />
        </motion.h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl shadow-md p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#8236fb] to-[#076ef4be] rounded-full mx-auto mb-6 group-hover:scale-110 transition">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-[#8236fb] to-[#076ef4be] text-transparent bg-clip-text mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
