import React from "react";
import { MdArrowOutward } from "react-icons/md";

const About = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className="w-full p-20 bg-[#CDEA68] rounded-t-3xl -mt-20">
      <h1  className="text-[4vw] leading-[4.5vw] tracking-tight">
        We craft category-defining presentations, brand identities, and digital
        experiences that <span> drive funding</span>, <span>sales</span>, and{" "}
        <span>market leadership</span>.
      </h1>
      <div className="w-full border-t pt-10 mt-20 border-[#738146] flex">
        <div className="w-1/2">
          <h1 className="text-5xl p-2 pb-6">How we can help:</h1>

          <button
            className="px-8 py-4 text-xl flex gap-5 items-center 
                     rounded-full bg-zinc-800 text-white"
          >
            Read more
            <div
              className="w-4 h-4 -mr-3 ml-2 bg-zinc-100 rounded-full 
                    flex items-center justify-center
                    transition-transform duration-150 ease-in-out
                    hover:scale-250 hover:text-black"
            >
              <MdArrowOutward size={16} />
            </div>
          </button>
        </div>
        <div className="overflow-hidden w-1/2 h-[60vh] rounded-2xl">
            <img className="bg-gray-200   max-w-full entered loaded " data-component="lazyload" data-animate="data-animate" src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" width="663" height="469" data-src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" data-srcset="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg 1x, https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg 2x" alt="image description" data-ll-status="loaded" srcset="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg 1x, https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg 2x" />
           
        </div>
      </div>
    </div>
  );
};

export default About;
