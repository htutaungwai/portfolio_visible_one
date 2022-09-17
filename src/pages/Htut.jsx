import React from "react";
import Bracelet from "../images/design.png";
import Triangle from "../images/triangle.png";
import Ellipse from "../images/ellipse.png";
import Cube from "../images/cube.png";
import { motion } from "framer-motion";
import ScrollSignal from "../components/ScrollSignal";
const HTUT = () => {
  return (
    <div className="section bg-[#22067e] min-h-screen ">
      {/* Mobile and Tablet */}
      <div className="relative min-h-screen overflow-hidden md:hidden">
        <div className="w-full h-full  absolute z-10 poppins text-white pt-40 pl-5">
          <h2 className="text-2xl">Hello There 👋 </h2>
          <h1 className="text-4xl  mt-20">I'M HTUT AUNG WAI</h1>
          <h2 className="text-4xl underline underline-offset-2 mt-10">
            A PROFESSIONAL WEB DESIGNER AND FULL-STACK DEVELOPER
          </h2>
          {/* Button Group */}
          <div className="flex gap-5 mt-10 text-lg">
            <button className="bg-[#70DFC5] text-black px-2 py-1 rounded-sm drop-shadow-2xl shadow-[#70DFC5] shadow-md">
              Hire Me
            </button>
            <button className="bg-[#FF8484] px-2 py-1 rounded-sm drop-shadow-2xl shadow-[#FF8484] shadow-md">
              Download CV
            </button>
          </div>
          {/* Button Group */}
        </div>

        <div className="w-full h-[90vh] rounded-full bg-[#190C41] absolute top-1/2 -translate-y-1/2 z-[2] blur-sm"></div>

        <div className="w-full h-[130vh] rounded-full bg-[#090425] absolute top-1/2 -translate-y-1/2 z-[1] blur-xl"></div>

        <div className="absolute z-[11] top-10 right-5 opacity-40">
          <img src={Bracelet} alt="design" className="color-white w-32 " />
        </div>

        <div className="absolute z-[2] bottom-5 -left-5 opacity-40">
          <img src={Triangle} alt="triangle" className="color-white w-32 " />
        </div>
      </div>
      {/* Mobile and Tablet */}

      {/* DESKTOP */}

      <div className="min-h-screen  hidden md:block poppins text-white relative overflow-hidden z-0">
        <div className="absolute w-full h-full z-10">
          {/* Header */}
          <div className="w-full h-16  flex justify-end gap-8 pr-5 p-5 z-10 transition-all ease-in-out duration-700	">
            <a
              href="mailto: htutaungway@gmail.com"
              target="_blank"
              className="hover:underline underline-offset-4"
            >
              About
            </a>
            <a
              href="mailto: htutaungway@gmail.com"
              target="_blank"
              className="hover:underline underline-offset-4"
            >
              Email
            </a>

            <a
              href="https://github.com/htutaungwai"
              target="_blank"
              className="hover:underline underline-offset-4"
            >
              Github
            </a>
          </div>
          {/* Header Ends */}

          {/* Hero  */}
          <div className=" w-full h-full flex flex-col items-center pt-20">
            <div className=" -ml-5">
              <h2 className="text-md">Hello There 👋 </h2>
              <h1 className="text-4xl">I'M HTUT AUNG WAI</h1>
            </div>
            <h2 className="text-xl underline underline-offset-2 mt-10">
              A PROFESSIONAL WEB DESIGNER AND
              <br />
              FULL-STACK DEVELOPER
            </h2>
            {/* Button Group */}
            <div className="flex gap-5 mt-10 text-lg">
              <motion.button
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.5 },
                }}
                whileTap={{ scale: 0.9 }}
                className="bg-[#70DFC5] text-black px-2 py-1 rounded-sm drop-shadow-2xl shadow-[#70DFC5] shadow-md"
              >
                Hire Me
              </motion.button>
              <a
                className="bg-[#FF8484] px-2 py-1 rounded-sm drop-shadow-2xl shadow-[#FF8484] shadow-md"
                href="https://drive.google.com/uc?id=1ikTBJbA-mVzVYP8Qm8KAdeD7bLMjcrJP&export=download"
                target="_blank"
              >
                Download CV
              </a>
            </div>
            {/* Button Group */}
          </div>
          {/* Hero  Ends*/}
        </div>

        {/* background painting */}
        <div className="w-full h-[140vh] bg-[#06012C] rounded-full absolute -top-10 blur-lg z-[1]"></div>

        {/* Accessories */}
        <img
          src={Bracelet}
          className="z-[5] absolute w-24 animate-pulse top-20 left-40 opacity-70 "
        />

        <div className="w-24 h-24 absolute z-[5] bg-white right-20 bottom-1/2 rounded-full opacity-50  "></div>

        <img
          src={Triangle}
          className="z-[5] absolute w-24  bottom-20 left-10 animate-pulse opacity-70 "
        />

        <img
          src={Cube}
          className="z-[5] absolute w-28  bottom-6 -right-5 animate-pulse"
        />

        {/* Accessories End*/}

        {/* Scroll Signal */}
        <ScrollSignal />
        {/* Scroll Signal ENd */}
      </div>
    </div>
  );
};

export default HTUT;
