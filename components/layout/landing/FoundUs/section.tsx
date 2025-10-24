"use client";

import { motion } from "framer-motion";
import { FiMapPin, FiArrowRight } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const fadeUp = {
  hidden: { opacity: 0, y: 8 },
  visible: (i: number = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.45 } }),
};
function section() {
  return (
    <section className="w-full mx-auto mt-20  h-[563px] border border-red-50 bg-[#F4F4F4]">
        <div className="grid grid-cols-1 h-full md:grid-cols-2 gap-[80px] items-start">
          {/* Left column - Text */}
          <motion.div
            className="space-y-6 w-[540.509765625px] pl-[171px]  "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={0}
          >
            <h3 className="text-[50px] font-bold font-primary pt-[50px]">How to find us?</h3>
            <p className="text-[#333333CC] text-[19px] font-normal font-primary leading-relaxed ">
              Our BYD service center is easy to reach and ready to welcome you. With convenient
              access, clear directions, and a professional team on site, visiting us is as simple and
              hassle-free as booking your service online.
            </p>

            <div>
            <Link
                href="https://www.google.com/maps/place/BYD+BIPO+Jatinegara/@-6.2209072,106.8652762,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipPTtH0qK4vQ3rx3EpgG9_-LP0bILX6tDu1jvtr-!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fp%2FAF1QipPTtH0qK4vQ3rx3EpgG9_-LP0bILX6tDu1jvtr-%3Dw86-h86-k-no!7i2992!8i2992!4m7!3m6!1s0x2e69f328cf575333:0xc39e5f1a59545540!8m2!3d-6.220841!4d106.8654048!10e5!16s%2Fg%2F11yh0yq39v?entry=ttu&g_ep=EgoyMDI1MDkwNy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open BYD BIPO Jatinegara in Google Maps"
                className="inline-block"
            >
                <Button className="inline-flex items-center gap-2 py-[35px] cursor-pointer w-[230px] ">
                    <FiMapPin className="w-6 h-6" />
                    <p className="font-secondary font-semibold text-[20px] ">Route</p>
                    <FiArrowRight className="w-6 h-6 ml-1" />
                </Button>
            </Link>
            </div>
          </motion.div>

          {/* Right column - Iframe Map */}
          <motion.div
            className="w-full h-full  overflow-hidden shadow-sm"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={1}
          >
            <div className="w-full h-full  overflow-hidden filter grayscale" style={{ filter: "grayscale(60%)" }}>
              <iframe
                title="BYD PIPO Service Location"
                width="100%"
                height="100%"
                className="block"
                loading="lazy"
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6274.849734754225!2d106.86282987667316!3d-6.220835660931351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f328cf575333%3A0xc39e5f1a59545540!2sBYD%20BIPO%20Jatinegara!5e1!3m2!1sen!2seg!4v1760969735628!5m2!1sen!2seg `}
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
  )
}

export default section