"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";


export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [remember, setRemember] = useState<boolean>(true);

  // typed variants for framer-motion
  const formVariant: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }, // use cubic-bezier array to satisfy TS typing
    },
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* LEFT: Form */}
      <motion.main
        initial="hidden"
        animate="visible"
        variants={formVariant}
        className="flex flex-col justify-center px-8 md:px-20 bg-white"
      >
        <div className="max-w-md w-full mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold mb-6">Nice to see you again</h1>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <Label htmlFor="email" className="mb-2 block text-sm font-medium">
                Email or phone number
              </Label>
              <Input
                id="email"
                type="text"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                placeholder="you@example.com or +2010xxxxxxx"
                className="rounded-lg shadow-sm"
                aria-label="Email or phone number"
              />
            </div>

            <div>
              <Label htmlFor="password" className="mb-2 block text-sm font-medium">
                Enter password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                  placeholder="Your secure password"
                  className="rounded-lg pr-10 shadow-sm"
                  aria-label="Enter password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute inset-y-0 right-2 flex items-center px-2"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {/* using Switch by default; fallback to Checkbox if you prefer */}
                <Switch
                  checked={remember}
                  onCheckedChange={(val: boolean) => setRemember(Boolean(val))}
                  aria-label="Remember me"
                />
                <span className="text-sm">Remember me</span>
              </div>

              <a href="#" className="text-sm text-[#007AFF] hover:underline">
                Forgot password?
              </a>
            </div>

            <motion.div whileTap={{ scale: 0.98 }} whileHover={{ scale: 1.01 }}>
              <Button className="w-full rounded-lg bg-[#007AFF] hover:brightness-95">Sign in</Button>
            </motion.div>

            <div className="flex items-center gap-3 my-2">
              <hr className="flex-1 border-t" />
              <span className="text-sm text-gray-400">or</span>
              <hr className="flex-1 border-t" />
            </div>

            <motion.button
              whileTap={{ scale: 0.98 }}
              whileHover={{ scale: 1.01 }}
              type="button"
              className="w-full rounded-lg py-2 flex items-center justify-center gap-3 bg-[#111] text-white"
            >
              <FcGoogle size={20} />
              <span>Or sign in with Google</span>
            </motion.button>

            <p className="text-center text-sm mt-2">
              Don’t have an account?{' '}
              <a href="#" className="text-[#007AFF] font-medium hover:underline">
                Sign up now
              </a>
            </p>
          </form>
        </div>
      </motion.main>

      {/* RIGHT: Image & Logo */}
      <aside className="relative hidden md:block">
        <div className="absolute inset-0">
          <Image
            src="/images/byd-car.jpg"
            alt="BYD car background"
            fill
            sizes="(min-width: 768px) 50vw"
            style={{ objectFit: 'cover' }}
            className="object-cover"
          />
          {/* subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
        </div>

        <div className="absolute top-6 right-6 flex flex-col items-end gap-2">
          <div className="w-20 h-10 relative">
            <Image src="/images/byd-logo.png" alt="BYD Logo" fill style={{ objectFit: 'contain' }} />
          </div>
          <span className="text-white font-bold uppercase tracking-wide">BIPO JATINEGARA</span>
        </div>
      </aside>
    </div>
  );
}

