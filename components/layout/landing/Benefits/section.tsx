"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { MdSupport } from "react-icons/md";
import { RiVerifiedBadgeLine } from "react-icons/ri";
import { GiMechanicGarage } from "react-icons/gi";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: MdSupport,
    title: "Support",
    description:
      "Our support team is available 24/7 to help with BYD service bookings, from scheduling and service details to vehicle status updates.",
  },
  {
    icon: RiVerifiedBadgeLine,
    title: "Genuine Parts Guarantee",
    description:
      "We use 100% genuine BYD parts, factory-approved and installed by certified technicians, ensuring top performance, safety, and reliability.",
  },
  {
    icon: GiMechanicGarage,
    title: "Certified Technicians",
    description:
      "Our certified BYD technicians provide expert care, from routine maintenance to complex repairs, ensuring your vehicle is always in safe hands.",
  },
];

export default function CarMaintenanceBenefits() {
  // ref + in-view
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });

  // Variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { when: "beforeChildren", staggerChildren: 0.08 } },
  } as const;

  const leftVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.06 } },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  } as const;

  const cardVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.35 } },
  } as const;

  return (
    <motion.section
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="w-full bg-[#BBBBBB] py-16"
    >
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div variants={leftVariants} className="flex flex-col justify-center items-center gap-[60px]">
          <motion.div variants={itemVariants} className="font-secondary lg:text-[30px] font-semibold align-middle text-black lg:w-[569.3941040039062px]">
            <h1>Get The Best Experience From Our Maintenance Services</h1>
          </motion.div>

          <motion.div variants={itemVariants} className="relative w-full">
            <motion.div variants={itemVariants} className="w-full">
              <Image
                src="/assets/main/benefits.png"
                alt="Car Maintenance"
                width={676.790283203125}
                height={343.32220458984375}
                priority
                quality={85}
                className="object-cover mix-blend-darken"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }} className="flex flex-col space-y-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div key={index} variants={cardVariants} className="w-full">
                <Card className="rounded-[15.87px] w-[547.5254516601562px] h-[165.4864501953125px] border-none bg-[#0000000D]">
                  <CardContent className="flex items-start gap-[15px]">
                    <motion.div variants={itemVariants} whileHover={{ scale: 1.06 }} className="p-3 rounded-full">
                      <Icon className="text-[#00000073] text-[17.855562210083008px]" />
                    </motion.div>
                    <div>
                      <motion.h3 variants={itemVariants} className="text-[24px] font-primary font-semibold text-black">
                        {service.title}
                      </motion.h3>
                      <motion.p variants={itemVariants} className="font-primary font-medium text-[18px] align-middle text-[#0000008C]">
                        {service.description}
                      </motion.p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
