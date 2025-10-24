// Footer.tsx
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  FaInstagram,
  FaXTwitter,
  FaFacebookF,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa6";
import Link from "next/link";

const navGroup1 = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Location", href: "/location" },
  { label: "Team", href: "/team" },
];

const navGroup2 = [
  { label: "Book a test drive", href: "/book-test-drive" },
  { label: "Schedule a service time", href: "/schedule-service" },
];

const navGroup3 = [
  { label: "Terms", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

const SocialIconButton: React.FC<{
  href: string;
  ariaLabel: string;
  children: React.ReactNode;
}> = ({ href, ariaLabel, children }) => (
  <Button
    asChild
    className="w-10 h-10 rounded-full border  border-white/40 p-0 flex items-center justify-center bg-transparent hover:bg-white/10 hover:scale-105 transition-all"
  >
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="w-full h-full flex items-center justify-center text-white"
    >
      {children}
    </Link>
  </Button>
);

export default function Footer() {
  return (
    <footer className="bg-[#333333] text-[#f1f1f1] overflow-hidden mt-[230px]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 py-16"
      >
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
          {/* Left Column */}
          <div className="lg:w-5/12">
            <Image
              src="/assets/Blogo.png"
              alt="BYD Logo"
              width={210.79290771484375}
              height={40.64385223388672}
              className="object-contain"
            />
            <div className="mt-6 text-sm leading-relaxed text-gray-200">
              <p className="font-bold font-secondary text-[28px]  tracking-widest">BIPO JATINEGARA</p>
              <p className="mt-3 font-extralight font-primary text-[18px] text-[#FFFFFFCC] leading-relaxed">
                Your trusted BYD service partner, offering simple online
                booking, certified maintenance, and genuine parts to keep your
                car performing at its best.
              </p>
            </div>

            <div className="flex flex-row flex-wrap gap-6 items-start  pt-[60px] w-full links-link">

                <Link
                href=""
                className="flex items-center justify-center lg:w-[62px] lg:h-[62px] w-[52px] h-[52px] rounded-full border border-white transition-all duration-300 bg-transparent hover:bg-white group"
              >
                <FaFacebook className="text-white text-2xl transition-colors duration-300 group-hover:text-black" />
              </Link>


              <Link
                href=""
                className="flex items-center justify-center lg:w-[62px] lg:h-[62px] w-[52px] h-[52px]   rounded-full border border-white transition-all duration-300 bg-transparent hover:bg-white group"
              >
                <FaXTwitter className="text-white text-2xl  transition-colors duration-300 group-hover:text-black" />
              </Link>
              <Link
                href=""
                className="flex items-center justify-center lg:w-[62px] lg:h-[62px] w-[52px] h-[52px] rounded-full border border-white transition-all duration-300 bg-transparent hover:bg-white group"
              >
                <FaInstagram className="text-white text-2xl transition-colors duration-300 group-hover:text-black" />
              </Link>

              <Link
                href=""
                className="flex items-center justify-center lg:w-[62px] lg:h-[62px] w-[52px] h-[52px] rounded-full border border-white transition-all duration-300 bg-transparent hover:bg-white group"
              >
                <FaYoutube className="text-white text-2xl transition-colors duration-300 group-hover:text-black" />
              </Link>
            </div>
          </div>

          {/* Right Columns */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <ul className="space-y-3 text-sm">
                  {navGroup1.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="hover:text-white text-gray-300 transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <ul className="space-y-3 text-sm">
                  {navGroup2.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="hover:text-white text-gray-300 transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <ul className="space-y-3 text-sm">
                  {navGroup3.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="hover:text-white text-gray-300 transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* JATINEGARA Image Section */}
      <div className="relative w-full h-60 md:h-80 lg:h-96">
        <Image
          src="/assets/JATINEGARA.png"
          alt="Jatinegara Visual"
          fill
          className="object-cover object-center opacity-80"
          priority={false}
        />
      </div>

      {/* Footer Bottom Line */}
      <div className="  pt-[67PX]">
        <p className="text-center text-[18.71px] text-[#FFFFFFCC] font-normal font-primary">
          © 2025 Made by GraphiCode Team · Partnered with BYD BIPO Jatinegara.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}
