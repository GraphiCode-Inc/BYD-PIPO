"use client";
// This component is a header for a landing page, which includes a title and a subtitle.
import React, { useState } from "react";
import Video from "next-video";
import VideoLa from "/videos/video.mp4";
import MediaThemeNotflix from "player.style/notflix/react";

import Image from "next/image";
import { MdHeadsetMic } from "react-icons/md";
import { AiFillCaretRight } from "react-icons/ai";

export function Header() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="w-full lg:h-[2114px] h-[2295px] flex flex-col items-center justify-start relative pt-[140px] z-30">
      <div className="lg:w-[967px] lg:h-[429px] w-[351.3px] h-[800px] flex flex-col items-center gap-[67px]">
        <div
          className={`w-full h-full flex flex-col items-center lg:gap-[20.76px] gap-[20px]`}
        >
          <div className="w-full flex flex-col gap-[5px] items-center">
            <p className="text-[51.31px] font-bold font-secondary text-[#333333] lg:w-full   text-center">
              Drive the future of mobility
            </p>
            <p className="lg:text-[27.55px]/20 text-[27.31px] font-normal text-[#333333CC] font-primary w-full  text-center">
              Seamless maintenance booking designed to keep your BYD running at
              its best.
            </p>
          </div>
        </div>
      </div>

      {/* Support button fixed at bottom right */}
      <div className="fixed top-[60%] right-[6%] z-50 flex flex-col items-center gap-2">
        {/* Message bubbles above support icon */}
        <div className="flex flex-col gap-2 mb-2 items-end text-white font-secondary">
          <div className="bg-[#00000033] mr-[40px] ml-[-20px] backdrop-blur-[42.55722427368164px] rounded-[69.7px] px-4 py-2 text-[18.07px] font-medium shadow-lg">
            Need Help?
          </div>
          <div className="bg-[#00000033] mr-[20px] ml-[-20px] backdrop-blur-[42.55722427368164px] rounded-[40.7px] px-4 py-2 text-[18.07px] font-medium shadow-lg">
            Say Hi 👋
          </div>
        </div>
        {/* Support icon */}
        <button
          className="bg-black text-white rounded-full p-[30px] w-[93px] h-[93px] cursor-pointer shadow-lg border border-white/20 hover:bg-gray-900 transition-all flex flex-col items-center"
          aria-label="Support"
        >
          <MdHeadsetMic size={34} />
        </button>
      </div>

      {/* Video button at the bottom of header section */}

      <div className="w-[542.9292602539062px] flex justify-start gap-[22px] h-[58]  mt-[12%] mr-[66%]">
         <div className="w-[80px]">
           <button
          className="w-[56.45px] h-[56.45px] rounded-[1127.96px] opacity-100 backdrop-blur-[4.52px] text-white p-0 shadow-lg border border-white/20 flex flex-col items-center justify-center"
          style={{ transform: "rotate(0deg)" }}
          onClick={() => setShowVideo(true)}
          aria-label="Play Video"
        >
          <AiFillCaretRight size={32} color="#fff" />
        </button>
       </div>

        <p className="font-normal  font-secondary text-[#BAC2CD] lg:text-[18px]">Discover the future of electric driving with BYD Atto 1.Watch the full launch video now.</p>
      </div>

      {/* Video modal overlay in center */}
      {showVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-lg">
          <div className="relative  rounded-2xl  flex flex-col items-center p-8 max-w-4xl w-full">
            {/* Close button */}
            <button
              className="absolute top-4 right-4 bg-black/40 text-white rounded-full p-2 hover:bg-black/70 z-10"
              onClick={() => setShowVideo(false)}
              aria-label="Close video"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 6l12 12M6 18L18 6"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            {/* <Video
              src={VideoLa}
              className="rounded-xl shadow-lg w-full max-w-3xl max-h-[70vh]"
            /> */}
            <MediaThemeNotflix
              style={{
                "--media-primary-color": "#19bc8a",
                "--media-secondary-color": "#23342c",
                "--media-accent-color": "#209774",
                width: "100%",
              }}
              
            >
              <video
                slot="media"
                src="https://stream.mux.com/fXNzVtmtWuyz00xnSrJg4OJH6PyNo6D02UzmgeKGkP5YQ/low.mp4"
                playsInline
                crossOrigin="anonymous"
              ></video>
            </MediaThemeNotflix>
          </div>
        </div>
      )}
    </div>
  );
}
