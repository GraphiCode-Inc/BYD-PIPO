'use client';

import { motion } from "framer-motion";
import { IoCarSport } from "react-icons/io5";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/70 backdrop-blur-lg">
      <div className="relative flex items-center justify-center w-24 h-24">
        {/* Spinner Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 rounded-full border-[5px] border-[#009884]/30 border-t-[#009884]"
        />
        
        {/* Static Car Icon */}
        <IoCarSport className="text-[#009884] text-4xl z-10" />
      </div>
    </div>
  );
}
