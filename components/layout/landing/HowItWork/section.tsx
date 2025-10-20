'use client';

import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { IoCarSport } from "react-icons/io5";
import { MdOutlineCheckCircle } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import { LuLogIn } from "react-icons/lu";


const steps = [
  {
    icon: LuLogIn,
    title: 'Login',
    description: 'Sign in to your account',
  },
  {
    icon: IoCarSport,
    title: 'Select Your Car',
    description: 'Choose your BYD model',
  },
  {
    icon: CiCalendar,
    title: 'Schedule a Service Time',
    description: 'Pick the preferred date and time',
  },
  {
    icon: MdOutlineCheckCircle,
    title: 'Confirm Booking',
    description: 'Review details and confirm your appointment',
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full h-[80vh] py-20 bg-white flex flex-col items-center justify-center">
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          How it Works
        </h2>
        <p className="text-gray-600 text-base md:text-lg">
          Effortless Maintenance Booking, In Four Simple Steps
        </p>
      </div>

      <div className="relative w-full flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 px-4 md:px-12 max-w-6xl">
        {/* Dotted curved connector */}
        <div className="absolute hidden z-[1] md:block w-full h-32 top-10 left-0">
          <svg
            viewBox="0 0 1000 200"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <path
              d="M50,150 C300,50 700,50 950,150"
              stroke="#d1d5db"
              strokeWidth="3"
              strokeDasharray="8 8"
              fill="none"
            />
          </svg>
        </div>

        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="w-full md:w-1/4 z-[5]"
            >
                <h1>sdfsf</h1>
              <Card className="rounded-2xl shadow-md border w-[203.49609375px] h-[266.314453125px] border-gray-100 bg-white hover:shadow-lg transition-all duration-300">
                <CardContent className="flex flex-col items-center   text-center ">
                  <div className="w-14 h-14 bg-black text-white   rounded-full mb-4">
                    <Icon size={24} />
                  </div>
                  <div className='flex flex-col gap-[10px] w-[132.71484375px] items-center '>
                  <h3 className="font-semibold text-black font-secondary w-full  text-[19.81px] mb-1">{step.title}</h3>
                  <p className="text-black font-secondary font-light w-[122px] text-[15.85px]">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
