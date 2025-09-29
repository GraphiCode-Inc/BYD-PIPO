"use client";
// This component is a responsive navigation bar for a landing page, featuring a logo, navigation links, and a button.
import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import Image from "next/image";
import NavbarItems from "../../../constants/Navbar";
import { usePathname } from "next/navigation";

function Navbar(props: any) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full  fixed  z-40">
      <nav className="flex justify-between py-[37px]  flex-row items-center   lg:w-[80%]  w-[100%] lg:mx-[10%] mx-auto max-w-7xl lg:max-w-[80%] lg:px-0 px-6  flex-wrap transition-all">
        {/* Navbar Brand */}
        <a className="flex flex-row items-center " href="/">
          <Image
            src={Logo}
            alt="logo"
            className="lg:w-[38px] lg:h-[33px] w-[42.013126373291016px] h-[42.013126373291016px]"
          />
          <h1 className="lg:text-[30.55px] text-[14.94px] font-bold lg:block hidden">
            CornetX
          </h1>
        </a>
        {/* Navbar URLS */}
        <div
          className="lg:flex flex-row items-center gap-[37px] hidden   p-[5px_30px] bg-[#7D7D7D0D] backdrop-blur-[6.9005889892578125px] shadow-[0px_2.37px_21.24px_0px_rgba(0,0,0,0.25)] w-[827px] h-[58px]  rounded-[20px] "
          style={{
            boxShadow:
              "0.2px 0.1px 0.45px 0px #8F8F8F inset, -0.2px 0px 0.45px 0px #86868600 inset, -0.2px 0.5px 0.45px 0px #B3B3B3 inset , -0.2px 0.5px 0.45px 0px #BFBFBF00 inset",
          }}
        >
          {NavbarItems.map((item, idx) => {
            const isCurrent =
              item.href !== "#" &&
              (item.href === pathname ||
                (item.href.startsWith("/") && pathname.startsWith(item.href)));
            return (
              <React.Fragment key={item.href}>
                <a
                  href={item.href}
                  className={`text-[18.06px] font-medium font-montserrat transition-all  text-white relative`}
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
          <button className="border-[1px] border-primary rounded-[49.57px] lg:px-[39px] lg:py-[13.5px] cursor-pointer text-center flex flex-row items-center gap-[9.25px] font-medium ">
            {" "}
            <p> Hire Us </p>{" "}
            <span>
              {" "}
              <Image
                src={StarsIcon}
                alt="stars"
                width={16.84}
                height={8.584152221679695}
              />{" "}
            </span>
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
            <div className="flex flex-col w-full pt-[95px] gap-[12px] font-montserrat px-8 text-white">
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
