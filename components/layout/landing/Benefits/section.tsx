"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { MdSupport } from "react-icons/md";
import { RiVerifiedBadgeLine } from "react-icons/ri";
import { GiMechanicGarage } from "react-icons/gi";

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
  return (
    <section className="w-full  py-16">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col justify-center items-center gap-[60px]">
          <div className="font-secondary lg:text-[30px] font-semibold align-middle text-black lg:w-[569.3941040039062px]">
            <h1>Get The Best Experience From Our Maintenance Services</h1>
          </div>

          <div className="relative w-full ">
            <div>
              <Image
                src="/assets/main/benefits.png"
                alt="Car Maintenance"
                width={676.790283203125}
                height={343.32220458984375}
                priority
                quality={85}
                className="object-cover mix-blend-darken "
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col  space-y-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="rounded-[15.87px]  w-[547.5254516601562px] h-[165.4864501953125px]  border-none bg-[#0000000D]"
              >
                
                <CardContent className="flex items-start gap-[15px] ">
                  <div className="p-3  rounded-full">
                    <Icon className="text-[#00000073] text-[17.855562210083008px]" />
                  </div>
                  <div>
                    <h3 className="text-[24px] font-primary font-semibold text-black ">
                      {service.title}
                    </h3>
                    <p className="font-primary font-medium text-[18px] align-middle text-[#0000008C]">
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
