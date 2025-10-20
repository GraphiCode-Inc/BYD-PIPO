"use client"
import Loading from "@/components/Loading/loading";
import dynamic from "next/dynamic";
const Header = dynamic(() => import('@/components/layout/landing/Header/Header'), { ssr: false, loading: Loading });
const HowItWorks = dynamic(() => import('@/components/layout/landing/HowItWork/section'), { ssr: false, loading: Loading });
const Navbar = dynamic(() => import('@/components/layout/landing/Navbar'), { ssr: false, loading: Loading });
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