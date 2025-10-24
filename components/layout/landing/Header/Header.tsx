"use client";
import React, { useState, useEffect } from "react";
import { MdHeadsetMic } from "react-icons/md";
import { AiFillCaretRight } from "react-icons/ai";
import VideoContainer from "./videoContainer";
import { motion } from "framer-motion";

export default function Header() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    if (showVideo) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [showVideo]);

  return (
    <div className="w-full lg:h-[1026.37109375px] h-[2295px] flex flex-col items-center justify-start relative pt-[140px] z-30">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="lg:w-[977px] lg:h-[429px] w-[351.3px] h-[800px] flex flex-col items-center gap-[67px]"
      >
        <div className="w-full h-full flex flex-col items-center">
          <div className="w-full flex flex-col justify-center items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[53.31px] font-bold font-secondary text-[#333333] text-center leading-none"
            >
              <p className="m-0 p-0">Drive the future of mobility</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[27.31px] font-normal text-[#333333CC] font-primary text-center leading-none"
            >
              <p className="m-0 p-[12px]">
                Seamless maintenance booking designed to keep your BYD running
                at its best.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Support button fixed at bottom right */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="fixed top-[60%] right-[6%] z-[100] flex flex-col items-center gap-2"
      >
        {/* Message bubbles above support icon */}
        <div className="flex flex-col gap-2 mb-2 items-end text-white font-secondary">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="bg-[#00000033] mr-[40px] ml-[-20px] backdrop-blur-[42.55722427368164px] rounded-[69.7px] px-4 py-2 text-[18.07px] font-medium shadow-lg"
          >
            Need Help?
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="bg-[#00000033] mr-[20px] ml-[-20px] backdrop-blur-[42.55722427368164px] rounded-[40.7px] px-4 py-2 text-[18.07px] font-medium shadow-lg"
          >
            Say Hi 👋
          </motion.div>
        </div>
        {/* Support icon */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-black text-white rounded-full p-[30px] w-[93px] h-[93px] cursor-pointer shadow-lg border border-white/20 hover:bg-gray-900 transition-all flex flex-col items-center"
          aria-label="Support"
        >
          <MdHeadsetMic size={34} />
        </motion.button>
      </motion.div>

      {/* Video button at the bottom of header section */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="w-[542.9292602539062px] flex justify-start gap-[22px] h-[58] mt-[12%] mr-[66%]"
      >
        <div className="w-[80px]">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-[56.45px] h-[56.45px] rounded-[1127.96px] opacity-100 backdrop-blur-xl cursor-pointer text-white p-0 shadow-lg border border-white/20 flex flex-col items-center justify-center"
            onClick={() => setShowVideo(true)}
            aria-label="Play Video"
          >
            <AiFillCaretRight size={32} color="#fff" />
          </motion.button>
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="font-normal font-secondary text-[#BAC2CD] lg:text-[18px]"
        >
          Discover the future of electric driving with BYD Atto 1.Watch the full
          launch video now.
        </motion.p>
      </motion.div>

      {/* Video modal overlay in center */}
      {showVideo && <VideoContainer onClose={() => setShowVideo(false)} />}
    </div>
  );
}
