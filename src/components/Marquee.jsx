import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className="w-full bg-[#004D43] rounded-t-2xl py-40 ">
      <div className="text flex items-center border-y border-white/30 overflow-hidden whitespace-nowrap -mt-18">
        <motion.h1 
          initial={{x:'0'}}
          animate={{x:'-100%'}}
          transition={{repeat:Infinity, ease: "linear", duration:10}}
          className="text-[16vw] leading-none font-semibold uppercase  text-[#F1F1F1]">
          WE ARE OCHI
        </motion.h1>
        <motion.h1 
          initial={{x:'0'}}
          animate={{x:'-100%'}}
          transition={{repeat:Infinity, ease: "linear", duration:10}}
          className="text-[16vw] leading-none font-semibold uppercase  text-[#F1F1F1]">
          WE ARE OCHI
        </motion.h1>
        <motion.h1 
          initial={{x:'0'}}
          animate={{x:'-100%'}}
          transition={{repeat:Infinity, ease: "linear", duration:10}}
          className="text-[16vw] leading-none font-semibold uppercase  text-[#F1F1F1]">
          WE ARE OCHI
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
