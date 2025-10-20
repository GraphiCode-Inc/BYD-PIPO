import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiMapPin, FiArrowRight } from "react-icons/fi";
import { Button } from "@/components/ui/button";


const fadeUp = {
  hidden: { opacity: 0, y: 8 },
  visible: (i: number = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.45 } }),
};

export default function TeamPage() {
  const mapCenter = { lat: -6.21462, lng: 106.84513 };
  const mapZoom = 15;

  return (
    <main className=" bg-white text-gray-800">
      {/* Section 1 - Meet Our Team */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center border-b border-gray-200">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={0}
        >
          Meet Our Team
        </motion.h2>
        <motion.p
          className="mt-3 text-gray-600 max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={1}
        >
          <em>The Professionals Behind Your Car Care</em>
        </motion.p>

        <motion.div
          className="mt-8 max-w-4xl mx-auto rounded-xl shadow-md overflow-hidden"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="relative w-full h-64 md:h-80 bg-gray-100 flex items-center justify-center">
            <Image
              src="/assets/main/team.png"
              alt="Team photo"
              width={1239.806884765625}
              height={554.0386352539062}
              style={{ objectFit: "cover" }}
              className="rounded-xl"
              priority
              quality={85}
            />
          </div>
        </motion.div>
      </section>

      {/* Section 2 - How to find us? */}
      
    </main>
  );
}

