import React from "react";
import Ellipse from "../images/ellipse.png";
import Flight from "../images/flight.png";
import Button from "../images/button.png";
import Earth from "../images/earth.png";
import { motion } from "framer-motion";
import ScrollSignal from "../components/ScrollSignal";
const Story = () => {
  return (
    <div className="section min-h-screen relative overflow-hidden -z-[2]">
      {/* Mobile */}
      <div className="w-full h-full  min-h-screen kalam text-white  flex justify-center flex-col items-center lg:hidden">
        <h1 className="indie text-5xl uppercase  pl-4 z-10 absolute top-10">
          Htut's Origin...
        </h1>
        <div className="glassbox mt-6 mx-6 p-4 z-10 ">
          <p className="text-2xl font-normal underline leading-8">
            After deciding to drop out of college, I determined myself to become
            a software developer and shifted my career to web-developement
            completely. So, I decided to search how to build a website on
            google. The top results were fansicinating to me. For next serveral
            months, I was drowning in the world of web-devlopment.
          </p>
        </div>

        {/* Moon z-6*/}
        <div className="absolute moon w-96 h-96 rounded-full bg-[#d4d4d4] -z-[1] -bottom-44 -left-1/2 ">
          <div className="w-full h-full relative  ">
            <div className="h-3 w-12 rounded-full bg-white z-[7] absolute right-0"></div>

            <div className="h-3 w-12 rounded-full bg-white z-[7] absolute top-10 -right-10"></div>

            <div className="h-3 w-6 rounded-full bg-white z-[7] absolute top-40 -right-16"></div>

            <img
              src={Ellipse}
              className="w-10 absolute right-32 top-20"
              alt="eclipse"
            />
            <img
              src={Ellipse}
              className="w-16 absolute right-20 top-20"
              alt="eclipse"
            />
          </div>
        </div>

        {/* Hello world z-7 */}
        <h2 className="absolute text-black -z-[1] text-2xl left-2  bottom-8">
          {"<Hello World />"}
        </h2>

        <img
          src={Flight}
          alt="flight"
          className="absolute text-black -z-[1] w-20 text-2xl right-2  bottom-4"
        />

        {/* Moon */}
      </div>

      {/* Desktop */}
      <div className="w-full h-full min-h-screen kalam bg-[#06012C] hidden lg:block relative overflow-hidden text-white pt-10">
        <div className="w-full h-full absolute  z-10  flex flex-col gap-5 items-center ">
          <h1 className="indie text-5xl uppercase  pl-4 z-10  ">
            Htut's Origin...
          </h1>
          <div className="max-w-[600px] glassbox2 px-6 pt-2 shadow-2xl shadow-black relative">
            <p className="text-xl">
              After deciding to drop out of college, I determined myself to
              become a software developer and shifted my career to{" "}
              <span className="font-bold underline underline-offset-4 text-slate-200 text-2xl">
                web developement
              </span>{" "}
              completely. So, I decided to search how to build a website on{" "}
              <span className="font-bold underline underline-offset-4 text-slate-200 text-2xl">
                google
              </span>
              . The top results were fansicinating to me. For next serveral
              months, I was drowning in the world of web-devlopment.
            </p>

            <img
              src={Button}
              alt="button"
              className="w-8 ml-auto cursor-pointer block"
            />
          </div>

          <div className="max-w-[500px] glassbox2 ml-44 px-6 pt-2 shadow-2xl shadow-black ">
            <p className="text-xl">
              As a{" "}
              <span className="font-bold underline underline-offset-4 text-slate-200 text-2xl">
                self-thaught devloper
              </span>{" "}
              , I have faced many problems and obstabcles along my way. I almost
              decided to quit{" "}
              <span className="font-bold underline underline-offset-4 text-slate-200 text-2xl">
                twice
              </span>
              . However, I persisted till this day achieved my goal of being a
              web developer.
            </p>
            <img
              src={Button}
              alt="button"
              className="w-8 ml-auto cursor-pointer block"
            />
          </div>
        </div>

        {/* Background Paintings */}
        <div className="w-[120vw] h-[100vw] bg-[#201056] rounded-full absolute -top-0 -left-2/3 blur-lg z-[1]"></div>
        {/* Background Paintings End */}

        {/* Hello World */}
        <img
          src={Earth}
          alt="Hello WOrld"
          className="absolute z-[5] w-96 -bottom-1/3 -left-44"
        />
        <div className="h-3 w-3 rounded-full bg-white z-[5] absolute bottom-2/3  left-6 "></div>
        <div className="h-3 w-6 rounded-full bg-white z-[5] absolute bottom-1/3 left-48 "></div>

        <div className="h-3 w-12 rounded-full bg-white z-[5] absolute bottom-1/4 left-60 "></div>
        {/* Hello World End*/}

        {/* Flight */}
        <motion.img
          initial={{ y: 0, x: 0 }}
          animate={{ y: 150, x: 75 }}
          exit={{ y: 100, x: -50 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 3,
          }}
          src={Flight}
          alt="spaceship"
          className="absolute z-[5] w-24 top-1/3 right-20  translate-x-11 translate-y-8"
        />

        {/* Flight End */}

        {/* Scroll Signal */}
        <ScrollSignal />
        {/* Scroll Signal ENd */}
      </div>
    </div>
  );
};

export default Story;
