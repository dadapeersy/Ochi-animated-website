import React from "react";

const Featured = () => {
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-2 pb-20 border-zinc-400">
        <h1 className="font-semibold text-8xl tracking-tight">
          Featured Projects
        </h1>
      </div>

      <div className="px-20">

        <div className="flex gap-10 mt-4">
            
          {/* LEFT CARD */}
          <div className="group relative w-1/2 h-[75vh] overflow-hidden rounded-3xl">
            <img
              className="w-full h-full object-cover"
              src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png"
              alt=""
            />

            {/* Hover Text */}
            <h1
              className="absolute top-1/2 left-full 
                     -translate-y-1/2 
                     text-[#CDEA68] 
                     leading-none tracking-tight 
                     font-extrabold text-8xl
                     opacity-0
                     transition-all duration-500
                     group-hover:left-1/2
                     group-hover:-translate-x-1/2
                     group-hover:opacity-100"
            >
              SALIENCE LABS
            </h1>
          </div>

          {/* RIGHT CARD */}
          <div className="group relative w-1/2 h-[75vh] overflow-hidden rounded-3xl">
            <img
              className="w-full h-full object-cover"
              src="https://ochi.design/wp-content/uploads/2025/08/Med_Website_0.png"
              alt=""
            />

            {/* Hover Text */}
            <h1
              className="absolute top-1/2 right-full 
                     -translate-y-1/2 
                     text-[#CDEA68] 
                     leading-none tracking-tight 
                     font-extrabold text-8xl
                     opacity-0
                     transition-all duration-500
                     group-hover:right-1/2
                     group-hover:translate-x-1/2
                     group-hover:opacity-100"
            >
              MEDALLIA EXPERIENCE
            </h1>
          </div>
        </div>
      </div>

      {/* cars part 2 */}

      <div className="px-20">
        
        <div className="flex gap-10 mt-4">
            
          {/* LEFT CARD */}
          <div className="group relative w-1/2 h-[75vh] overflow-hidden rounded-3xl">
            <img
              className="w-full h-full object-cover"
              src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png"
              alt=""
            />

            {/* Hover Text */}
            <h1
              className="absolute top-1/2 left-full 
                     -translate-y-1/2 
                     text-[#CDEA68] 
                     leading-none tracking-tight 
                     font-extrabold text-8xl
                     opacity-0
                     transition-all duration-500
                     group-hover:left-1/2
                     group-hover:-translate-x-1/2
                     group-hover:opacity-100"
            >
              AH2 & MATT HORN
            </h1>
          </div>

          {/* RIGHT CARD */}
          <div className="group relative w-1/2 h-[75vh] overflow-hidden rounded-3xl">
            <img
              className="w-full h-full object-cover"
              src="https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-663x551.png"
              alt=""
            />

            {/* Hover Text */}
            <h1
              className="absolute top-1/2 right-full 
                     -translate-y-1/2 
                     text-[#CDEA68] 
                     leading-none tracking-tight 
                     font-extrabold text-8xl
                     opacity-0
                     transition-all duration-500
                     group-hover:right-1/2
                     group-hover:translate-x-1/2
                     group-hover:opacity-100"
            >
                VISE
            </h1>
          </div>
        </div>
      </div>

      {/* CARDS 3 */}

      <div className="px-20">
        
        <div className="flex gap-10 mt-4">
            
          {/* LEFT CARD */}
          <div className="group relative w-1/2 h-[75vh] overflow-hidden rounded-3xl">
            <img
              className="w-full h-full object-cover"
              src="https://ochi.design/wp-content/uploads/2022/06/Frame-3898-1-663x551.jpg"
              alt=""
            />

            {/* Hover Text */}
            <h1
              className="absolute top-1/2 left-full 
                     -translate-y-1/2 
                     text-[#CDEA68] 
                     leading-none tracking-tight 
                     font-extrabold text-8xl
                     opacity-0
                     transition-all duration-500
                     group-hover:left-1/2
                     group-hover:-translate-x-1/2
                     group-hover:opacity-100"
            >
              SOFTSTART
            </h1>
          </div>

          {/* RIGHT CARD */}
          <div className="group relative w-1/2 h-[75vh] overflow-hidden rounded-3xl">
            <img
              className="w-full h-full object-cover"
              src="https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-663x551.png"
              alt=""
            />

            {/* Hover Text */}
            <h1
              className="absolute top-1/2 right-full 
                     -translate-y-1/2 
                     text-[#CDEA68] 
                     leading-none tracking-tight 
                     font-extrabold text-8xl
                     opacity-0
                     transition-all duration-500
                     group-hover:right-1/2
                     group-hover:translate-x-1/2
                     group-hover:opacity-100"
            >
                FYDE
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
