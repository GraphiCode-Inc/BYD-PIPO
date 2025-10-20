"use client"
import { Header } from "@/components/layout/landing/Header/Header";
import HowItWorks from "@/components/layout/landing/HowItWork/section";
import Navbar from "@/components/layout/landing/Navbar";
import Image from "next/image"
export default function HomePage() {
  return (
  <div className='h-[100vh]   bg-no-repeat  bg-center bg-cover relative ' style={{ backgroundImage: "url('/assets/main/banner.png')" }}>
   

        <Navbar />
        <Header />
        <HowItWorks />


    </div>
  );
}