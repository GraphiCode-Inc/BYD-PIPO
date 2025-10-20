"use client"
import dynamic from "next/dynamic";
const Header = dynamic(() => import('@/components/layout/landing/Header/Header'), { ssr: false });
const HowItWorks = dynamic(() => import('@/components/layout/landing/HowItWork/section'), { ssr: false });
const Navbar = dynamic(() => import('@/components/layout/landing/Navbar'), { ssr: false });
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