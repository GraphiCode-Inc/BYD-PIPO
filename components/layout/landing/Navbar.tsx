"use client";
// This component is a responsive navigation bar for a landing page, featuring a logo, navigation links, and a button.
import React, { useState } from "react";
import Image from "next/image";
import NavbarItems from "../../../constants/Navbar";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

function Navbar(props: any) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full  fixed bg-[#0000001A] font-primary z-40">
      <nav className="flex justify-between lg:py-[30px] py-[37px]    flex-row items-center   lg:w-[80%]  w-[100%] lg:mx-[10%] mx-auto max-w-7xl lg:max-w-[80%] lg:px-0 px-6  flex-wrap transition-all">
        {/* Navbar Brand */}
        <a className="flex flex-col items-center " href="/">
          <Image
            src="/assets/logo.png"
            alt="logo"
            width={120}
            height={120}
            className=""
          />
          <h1 className="text-[13.55px] font-bold text-white lg:block hidden">
            BIPO JATINEGARA
          </h1>
        </a>
        {/* Navbar URLS */}
        <div className="lg:flex flex-row items-center gap-[30px] hidden justify-center">
          {NavbarItems.map((item, idx) => {
            const isCurrent =
              item.href !== "#" &&
              (item.href === pathname ||
                (item.href.startsWith("/") && pathname.startsWith(item.href)));
            return (
              <React.Fragment key={item.href}>
                <a
                  href={item.href}
                  className={`text-[18.06px] font-medium transition-all  text-white relative`}
                >
                  {item.label}
                  {isCurrent && item.href !== "#" && (
                    <div
                      className="absolute left-5 -bottom-3 h-[5px] w-[32px]"
                      style={{
                        background: "#ffffff",
                        boxShadow:
                          "0 0 10px -2px #ffffff, 0 0 13px 0px #ffffff",
                        borderRadius: "6px",
                      }}
                    />
                  )}
                </a>
                {idx !== NavbarItems.length - 1 && (
                  <span
                    className="mx-4 inline-block align-middle"
                    style={{
                      height: "18px",
                      border: "0.94px solid",
                      borderImage:
                        "linear-gradient(90deg, rgba(255,255,255,0) 0%, #CECECE 48%, rgba(153,153,153,0) 50%) 1",
                      borderImageSlice: 0.5,
                    }}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>
        {/* Navbar Button */}
        <div className="lg:block hidden">
          <button className="border-[1px] border-primary rounded-[100px] text-white bg-black lg:px-[10px] lg:py-[10.5px] cursor-pointer text-center flex flex-row items-center gap-[9.25px] font-medium ">
            {" "}
            <span>
              {" "}
              <Image
                src={"/assets/booknow.png"}
                alt="bydbook"
                width={16.84}
                height={8.584152221679695}
              />{" "}
            </span>
            <p> Book Now </p>{" "}
          </button>
        </div>

        {/* Hamburger Menu */}

        {!isOpen && (
          <div className="lg:hidden flex flex-col items-end transition-all z-[1000]">
            <button onClick={() => toggleMenu()}>
              <GiHamburgerMenu size={38} color="#FFFFFF" />
            </button>
          </div>
        )}

        {/* Close Icon */}
        {isOpen && (
          <div className="lg:hidden flex flex-col items-end transition-all  z-[1000]">
            <button onClick={() => toggleMenu()}>
              <IoCloseSharp size={38} color="#FFFFFF" />
            </button>
          </div>
        )}

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className="
                            absolute top-0 right-0 left-0  w-[100%] h-screen flex flex-col items-center justify-start gap-0 z-[999]
                            bg-black/70
                            backdrop-blur-[24.87px]
                            "
          >
            <div className="flex flex-col w-full pt-[95px] gap-[12px]  px-8 text-white">
              {NavbarItems.map((item, idx) => (
                <React.Fragment key={item.href}>
                  {idx !== 0 && (
                    <div
                      className="w-full h-[0.2px] opacity-50"
                      style={{
                        border: "0.2px solid",
                        borderImage:
                          "linear-gradient(90deg, rgba(255,255,255,0) 0%, #D1D1D1 50.48%, rgba(153,153,153,0) 100%) 1",
                        borderImageSlice: 0.5,
                      }}
                    />
                  )}
                  <a
                    href={item.href}
                    className="text-[17.78px] font-normal   py-4 text-center w-full"
                  >
                    {item.label}
                  </a>
                </React.Fragment>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
