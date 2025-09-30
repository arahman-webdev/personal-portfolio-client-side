import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "../images/logo.png"
import footerBgImg from '../images/bgImg.jpg'
import { ArrowRight, DribbbleIcon, Facebook, GithubIcon, LinkedinIcon, TwitchIcon, Twitter, TwitterIcon, Youtube } from "lucide-react";
import Link from "next/link";
const Footer = () => {

    const footerSections = [
  {
    title: "USEFULL LINKS",
    links: [
      {
        title: "About Company",
        href: "#",
      },
      {
        title: "For Customers",
        href: "#",
      },
      {
        title: "Solutions ",
        href: "#",
      },
      {
        title: "Careers & Reviews",
        href: "#",
      },
      {
        title: "Pricing",
        href: "#",
      },
      {
        title: "Releases",
        href: "#",
      },
    ],
  },
  {
    title: "OUR SERVICES",
    links: [
      {
        title: "Blog",
        href: "#",
      },
      {
        title: "Newsletter",
        href: "#",
      },
      {
        title: "Events",
        href: "#",
      },
      {
        title: "Help centre",
        href: "#",
      },
      {
        title: "Tutorials",
        href: "#",
      },
      {
        title: "Support",
        href: "#",
      },
    ],
  },
];
    return (
        <div>
            <div className="bg-[url(../images/bgImg.jpg)] bg-no-repeat bg-cover bg-center relative" >
                <div className="absolute inset-0 bg-[#28216e]/65 z-0"></div>
                <div className="relative z-10 container mx-auto">
                    <div className="py-20 text-center space-y-5 text-white">
                        <h3 className="text-4xl font-bold">Ready to gain competitive advantage by harnessing <br /> data and modernising your technology?</h3>
                        <Button>Get Started</Button>
                    </div>
                    <div>
                        <div className="flex flex-col">
                           
                            <footer>
                                <div className="container mx-auto text-white">
                                    {/* Top grid */}
                                    <div className="py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-10 px-6 xl:px-0">

                                        {/* Company info */}
                                        <div className="col-span-full lg:col-span-2">
                                            <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold">ABOUT COMPANY</h4>
                                            <div className="bg-linear-to-r from-[#e2064f]  w-32 md:w-64 h-[2px]"></div>
                                            <p className="mt-4 text-white text-sm md:text-base">
                                                Quickly supply alternative strategic theme areas vis-a-vis B2C mindshare. Objectively repurpose stand-alone synergy via user-centric architectures.
                                            </p>

                                            {/* Social icons */}
                                            <div className="pt-10 md:pt-20 flex gap-3 md:gap-4 flex-wrap">
                                                {[Facebook, Twitter, LinkedinIcon, Youtube].map((Icon, i) => (
                                                    <Icon
                                                        key={i}
                                                        className="bg-primary text-white p-2 rounded-full shrink-0 hover:bg-transparent hover:border border-gray-300 hover:text-primary transition-all ease-in-out"
                                                        size={40}
                                                    />
                                                ))}
                                            </div>
                                        </div>

                                        {/* Dynamic links */}
                                        {footerSections.map(({ title, links }) => (
                                            <div key={title} className="col-span-1">
                                                <h6 className="font-semibold">{title}</h6>
                                                <div className="bg-linear-to-r from-[#e2064f]  w-32 h-[2px]"></div>
                                                <ul className="mt-6 space-y-3 text-sm md:text-base">
                                                    {links.map(({ title }) => (
                                                        <li key={title} className="group transition">
                                                            <Link
                                                                href={'/'}
                                                                className="text-white flex items-center gap-2 group-hover:translate-x-2 duration-300 ease-in-out"
                                                            >
                                                                <ArrowRight size={14} className="group-hover:text-white group-hover:bg-gradient-to-r from-[#ff00bf] via-[#f035c1] " />
                                                                {title}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}

                                        {/* Newsletter */}
                                        <div>
                                            <h6>Contact</h6>
                                            <p>2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
                                            <span>Need help? Call us</span>
                                            <span>+(084) 456-0789</span>
                                            <span>support@example.com</span>
                                        </div>
                                    </div>

                                    

                                    {/* Bottom bar */}
                                    <div className="py-6 flex flex-col  items-center  gap-4 px-6 xl:px-0">
                                        <span className="text-xs md:text-sm text-muted-foreground text-center sm:text-left">
                                            &copy; {new Date().getFullYear()}{" "}
                                            <Link href={'/'} className="hover:underline">
                                                Arahmandev
                                            </Link>
                                            . All rights reserved.
                                        </span>
                                    </div>
                                </div>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;