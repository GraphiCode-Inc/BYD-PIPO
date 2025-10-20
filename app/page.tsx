"use client";
import CarMaintenanceBenefits from "@/components/layout/landing/Benefits/section";
import Loading from "@/components/Loading/loading";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/layout/landing/Navbar"), {
  ssr: false,
  loading: Loading,
});
const Header = dynamic(
  () => import("@/components/layout/landing/Header/Header"),
  { ssr: false, loading: Loading }
);
const HowItWorks = dynamic(
  () => import("@/components/layout/landing/HowItWork/section"),
  { ssr: false, loading: Loading }
);
const TeamPage = dynamic(
  () => import("@/components/layout/landing/Team/section"),
  { ssr: false, loading: Loading }
);

const FoundUs = dynamic(
  () => import("@/components/layout/landing/FoundUs/section"),
  { ssr: false, loading: Loading }
);
export default function HomePage() {
  return (
    <div
      className="h-[100vh]   bg-no-repeat  bg-center bg-cover relative "
      style={{ backgroundImage: "url('/assets/main/banner.png')" }}
    >
      <Navbar />
      <Header />
      <HowItWorks />
      <CarMaintenanceBenefits />
      <TeamPage />
      <FoundUs />
    </div>
  );
}
