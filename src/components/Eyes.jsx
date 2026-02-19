import React, { useEffect, useState } from "react";

const eyes = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle);
    });
  });

  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div data-scroll data-scroll-speed="-.7" className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]">
        <div className="flex gap-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">
          <div className="flex items-center justify-center w-[13vw] h-[13vw] rounded-full bg-zinc-100">
              <div className="flex items-center justify-center w-[13vw] h-[13vw] rounded-full bg-zinc-100">
            <div className="relative flex items-center justify-center w-2/3 h-2/3 rounded-full bg-zinc-900 overflow-hidden">
            <div className="text-white text-3xl">PLAY</div>
              <div
                style={{ transform: `rotate(${rotate}deg)` }}
                className="absolute top-1/2 left-1/2 
                 -translate-x-1/2 -translate-y-1/2 
                 w-full flex items-center"
              >
                {/* Thin rotating bar */}
                <div className="w-full h-2  relative">
                  {/* White dot at end */}
                  <div
                    className="absolute right-0 top-1/2 
                        -translate-y-1/2 
                        w-8 h-8 rounded-full bg-white"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          </div>

          <div className="flex items-center justify-center w-[13vw] h-[13vw] rounded-full bg-zinc-100">
            <div className="relative flex items-center justify-center w-2/3 h-2/3 rounded-full bg-zinc-900 overflow-hidden">
            <div className="text-white text-3xl">PLAY</div>
              <div
                style={{ transform: `rotate(${rotate}deg)` }}
                className="absolute top-1/2 left-1/2 
                 -translate-x-1/2 -translate-y-1/2 
                 w-full flex items-center"
              >
                {/* Thin rotating bar */}
                <div className="w-full h-2  relative">
                  {/* White dot at end */}
                  <div
                    className="absolute right-0 top-1/2 
                        -translate-y-1/2 
                        w-8 h-8 rounded-full bg-white"
                  ></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default eyes;
