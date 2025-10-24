"use client";
// Maintenance.tsx
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Maintenance() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 px-6">
      {/* Animated Logo or Icon */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12h6m2 0a2 2 0 100-4 2 2 0 000 4zM7 12a2 2 0 100-4 2 2 0 000 4zm2 6h6m2 0a2 2 0 100-4 2 2 0 000 4zM7 18a2 2 0 100-4 2 2 0 000 4z"
            />
          </svg>
        </div>
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-center text-green-700"
      >
        We’re Under Maintenance
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-4 max-w-lg text-center text-gray-500"
      >
        Our team is performing some scheduled updates to keep your experience
        smooth and reliable. We’ll be back shortly — thank you for your
        patience.
      </motion.p>

      {/* Illustration or Placeholder Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-10"
      >
        <Image
          src="/assets/main/undraw_maintenance_4unj.png"
          alt="Maintenance Illustration"
          width={300}
          height={200}
          className="opacity-90"
        />
      </motion.div>

      {/* Contact Info or Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-8"
      >
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors"
        >
          Go Back Home
        </Link>
      </motion.div>

      {/* Footer */}
      <p className="mt-12 text-xs text-gray-400">
        © 2025 GraphiCode · All rights reserved.
      </p>
    </main>
  );
}
