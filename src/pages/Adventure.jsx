import React from "react";
import ScrollSignal from "../components/ScrollSignal";
import Moon from "../images/moon.png";
import Planet from "../images/planet.png";
import Buzz from "../images/buzz.png";
import { motion } from "framer-motion";
const Adventure = () => {
  return (
    <div className="section bg-[#22067e] min-h-screen relative overflow-hidden">
      {/* Mobile */}
      <div className=" w-full min-h-screen absolute overflow-hidden z-10 lg:hidden top-0">
        <h1 className="indie text-4xl uppercase  pl-4 z-10 text-white absolute top-10 left-1/2 -translate-x-1/2 w-full">
          Htut's Adventure...
        </h1>

        <div className="w-full h-full  min-h-screen kalam text-white flex justify-center items-center flex-col z-10 -mt-5">
          {/* Stacks */}
          <div
            className="h-full w-full  flex justify-center items-center flex-col
        kalam  uppercase text-lg  mt-8"
          >
            <h1 className="text-xl underline font-semibold pb-4 underline-offset-4">
              Stacks
            </h1>
            <p>React .JS</p>
            <p>Redux .JS</p>
            <p>Node .JS</p>
            <p>Express .JS</p>
            <p>Mongo DB</p>
            <p>Graphql</p>
            <p>Tailwind CSS</p>
            <p>MUI</p>
          </div>

          {/* Projects */}
          <div
            className="h-full w-full flex justify-center items-center flex-col
        kalam uppercase mt-8 text-lg "
          >
            <h1 className="text-xl underline font-semibold pb-4 underline-offset-4">
              Projects
            </h1>
            <a className="underline">**Channel Burma Plus</a>
            <a className="underline">**Food Delivery App</a>
            <a className="underline">**Puzzle App</a>
            <a className="underline">**Channel Burma Plus</a>
          </div>
        </div>

        <img
          src={Moon}
          alt="moon"
          className="absolute w-48 bottom-1/2 translate-y-1/2 -right-20"
        />

        <img
          src={Planet}
          alt="moon"
          className="absolute w-40 top-1/2 -left-20 -z-3"
        />

        <div className="h-3 w-6 rounded-full bg-white z-[7] absolute top-64 left-10"></div>
        <div className="h-3 w-4 rounded-full bg-white z-[7] absolute top-44 left-6"></div>

        <p className="text-white indie absolute bottom-6 font-light text-base left-1/2 -translate-x-1/2">
          "TO INFINITY AND BEYOND!"
          <br />~ BUZZ LIGHT YEAR
        </p>
      </div>

      {/* Desktop */}

      <div className="hidden lg:block min-h-screen w-full bg-[#06012C] -z-[9] ">
        {/* Main */}
        <div className=" w-full min-h-screen uppercase text-white kalam overflow-hidden flex flex-col items-center pt-10  relative ">
          <h1 className="text-5xl indie z-[5]">Htut's Adventure...</h1>
          <div className=" -ml-5 flex justify-center mt-10 text-3xl  ">
            <div className="flex flex-col min-w-[400px] border-r-2 border-white items-center gap-2">
              <h1 className="text-3xl font-semibold underline mb-5">Stacks</h1>
              <a
                href="https://reactjs.org/"
                target="_blank"
                className="hover:text-red-300"
              >
                React .JS
              </a>
              <a
                href="https://redux.js.org/"
                target="_blank"
                className="hover:text-red-300"
              >
                Redux .JS
              </a>
              <a
                href="https://nodejs.org/en/"
                target="_blank"
                className="hover:text-red-300"
              >
                Node .JS
              </a>

              <a
                href="https://expressjs.com/"
                target="_blank"
                className="hover:text-red-300"
              >
                Express .JS
              </a>
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                className="hover:text-red-300"
              >
                Tailwind CSS
              </a>
              <a
                href="https://mui.com/"
                target="_blank"
                className="hover:text-red-300"
              >
                MUI CSS
              </a>
              <a
                href="https://www.figma.com"
                target="_blank"
                className="hover:text-red-300"
              >
                Figma
              </a>
            </div>

            <div className="flex flex-col min-w-[400px] border-l-2 border-white items-center gap-2">
              <h1 className="text-3xl font-semibold underline mb-5">
                Projects
              </h1>
              <a className="underline hover:text-red-300">
                {" "}
                Channel Burma Plus
              </a>
              <a className="underline hover:text-red-300"> Food Delivery App</a>
              <a className="underline hover:text-red-300"> Puzzle App</a>
              <a className="underline hover:text-red-300"> Tesla Clone</a>
            </div>
          </div>
          {/* Accessories */}

          <img
            src={Moon}
            alt="moon"
            className="absolute z-10 w-24 top-10 right-10"
          />

          <img
            src={Planet}
            alt="moon"
            className="absolute z-1 w-44 top-1/2 left-0"
          />

          <motion.img
            initial={{ y: 0, x: 0 }}
            animate={{ y: 150, x: 75 }}
            exit={{ y: 100, x: -50 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 3,
            }}
            src={Buzz}
            alt="Buzz Lightyaer"
            className="absolute z-10 w-12 bottom-20 right-10"
          />

          <div className="absolute bottom-2 right-2 text-md z-10">
            <p>" TO INFINITY AND BEYOND! "</p>
            <p>~BUZZ LIGHTYEAR</p>
          </div>

          <div className="absolute -bottom-32 -right-16 w-96 h-96 bg-[#201056] z-1 rounded-full blur-lg"></div>
          {/* Accessories End*/}
        </div>
        {/* Main  Ends*/}

        {/* Scroll Signal */}
        <ScrollSignal />
      </div>
    </div>
  );
};

export default Adventure;
