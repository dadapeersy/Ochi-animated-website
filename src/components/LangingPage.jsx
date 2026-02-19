import React from "react";
import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";
import favicon from "../assets/Favicon.png";

const LangingPage = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3"className="w-full min-h-screen bg-[#F1F1F1] pt-1 font-light">
      {/* Hero Section */}
      <div className="textstructure mt-32 px-20 mb-30">
        {["We Create", "EYE-OPENING", "Presentations"].map((item, index) => {
          return (
            <div key={index}>
              <div className="flex items-center gap-[1vw] ">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "8vw", opacity: 1 }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="w-[8vw] h-[6vw] rounded-xl mt-[0.9vw] overflow-hidden"
                    // className="w-[8vw] h-[6vw] rounded-md mt-[0.9vw] bg-green-400"
                  >
                    <motion.img
                      src={favicon}
                      alt=""
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                )}

                <h1 className="uppercase text-[7vw] leading-[0.85] tracking-tight font-bold">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Section */}
      <div className="flex justify-between items-center capitalize border-t border-zinc-300 mt-24 px-20 py-6">
        {[
          "Presentation and storytelling agency",
          "For innovation teams and global brands",
        ].map((item, index) => (
          <p key={index} className="text-md tracking-tight font-medium">
            {item}
          </p>
        ))}

        <div className="flex items-center gap-5 cursor-pointer">
          <div
            className="h-10 flex items-center px-6 border border-zinc-700 
                          text-zinc-800 font-bold rounded-full capitalize
                          hover:bg-black hover:text-white 
                          transition-all duration-500 ease-in-out"
          >
            START THE PROJECT
          </div>

          <div
            className="w-10 h-10 border border-zinc-700 rounded-full 
                          flex items-center justify-center
                          hover:bg-black hover:text-white 
                          transition-all duration-500 ease-in-out"
          >
            <MdArrowOutward size={22} />
          </div>
        </div>
      </div>

      <div className="items-center justify-center  px-220 mt-20">
        Scroll down
      </div>
    </div>
  );
};

export default LangingPage;
