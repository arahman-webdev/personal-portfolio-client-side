"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Server,
  ShieldCheck,
  Database,
  ShoppingCart,
  Layout
} from "lucide-react";
import SectionHeading from "@/app/sharedComponents/SectionHeading";

const skills = [
  {
    icon: <Layout className="w-6 h-6 text-indigo-600" />,
    title: "Frontend Development",
    description:
      "Building modern, responsive, and user-friendly interfaces using Next.js, React, TypeScript, and Tailwind CSS.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"]
  },
  {
    icon: <Server className="w-6 h-6 text-indigo-600" />,
    title: "Backend Development",
    description:
      "Developing secure and scalable backend systems with REST APIs, role-based access control, and authentication.",
    tech: ["Node.js", "Express", "JWT", "REST API"]
  },
  {
    icon: <Database className="w-6 h-6 text-indigo-600" />,
    title: "Database & ORM",
    description:
      "Designing efficient database schemas and managing data with Prisma ORM and relational databases.",
    tech: ["Prisma", "PostgreSQL", "MongoDB"]
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />,
    title: "Authentication & Security",
    description:
      "Implementing secure authentication systems with JWT, refresh tokens, protected routes, and admin roles.",
    tech: ["JWT", "Cookies", "RBAC"]
  },
  {
    icon: <ShoppingCart className="w-6 h-6 text-indigo-600" />,
    title: "Ecommerce Solutions",
    description:
      "End-to-end ecommerce features including product management, cart, wishlist, checkout, and order flow.",
    tech: ["Ecommerce", "Cart", "Wishlist", "Orders"]
  },
  {
    icon: <Code2 className="w-6 h-6 text-indigo-600" />,
    title: "Clean Code & Deployment",
    description:
      "Writing maintainable, scalable code and deploying production-ready applications.",
    tech: ["Git", "GitHub", "Vercel", "Netlify"]
  }
];

const SkillsSection = () => {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeading
          title="Skills & Expertise"
          subTitle="Technologies and skills I use to build secure, scalable, and high-quality web applications for clients."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg transition"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-indigo-100">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {skill.title}
                </h3>
              </div>

              <p className="text-gray-600 text-sm mb-4">
                {skill.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {skill.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
