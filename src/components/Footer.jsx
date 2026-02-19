import React from "react";

const Footer = () => {
  return (
    <div data-scroll data-scroll-speed=".1" className="flex gap-5 w-full h-screen p-20 ">
      <div className="w-1/2  h-full">
        <h1 className="m-10 font-semibold uppercase text-[5vw] leading-none -mb-6">Eye-</h1>
        <h1 className="m-10 font-semibold uppercase text-[5vw] leading-none -mb-10">opening</h1>
        <img className="py-100 m-10" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
      </div>
      <div className="w-1/2 ">
       <h1 className="m-10 font-semibold uppercase text-[5vw] leading-none">presentations</h1>
       <div className="dets mt-10 ">
        <a className="block text-xl font-light"  href="#">TWITTER</a>
        <a className="block text-xl font-light"  href="#">INSTAGRAM</a>
        <a className="block text-xl font-light"  href="#">FACEBOOK</a>
       </div>
      </div>
    </div>
  );
};

export default Footer;
