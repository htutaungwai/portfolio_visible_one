import React from "react";
import Astronaut from "../images/astronaut.png";
import Me from "../images/me.jpg";
import VisibleOne from "../images/visibleone.jpg";
import { motion } from "framer-motion";
import { FaGithubAlt, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
const Request = () => {
  return (
    <div className="section min-h-screen w-full  overflow-hidden">
      {/* Mobile */}
      <div className="lg:hidden min-h-screen flex justify-center flex-col items-center px-4  gap-6 relative overflow-hidden">
        <h1 className="indie text-2xl uppercase text white font-semibold text-white absolute top-10">
          Just hire Me?
        </h1>
        <img src={Me} alt="htut" className="block w-28 rounded-full" />
        <h2 className="poppins text-4xl text-white text-center px-4">
          Htut Wants To Join Your Team?
        </h2>

        {/* Button Group */}
        <div className="flex gap-5  text-lg">
          <button className="bg-[#70DFC5] text-black px-4 py-1 rounded-sm drop-shadow-2xl shadow-[#70DFC5] shadow-md text-4xl font-semibold">
            YES
          </button>
          <button className="bg-[#FF8484] px-4 py-1 rounded-sm drop-shadow-2xl shadow-[#FF8484] shadow-md text-4xl font-semibold text-white">
            NO
          </button>

          <img
            src={Astronaut}
            alt="astronaut"
            className="w-40 absolute -z-1 top-20 -right-10"
          />
        </div>
        {/* Buttons Group Ends*/}

        {/* Social Icons */}
        <div className="flex text-white mt-8 gap-4">
          <a href="https://github.com/htutaungwai" target="_blank">
            <FaGithubAlt className="text-[#c4c4c4] text-3xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/htut-aung-wai-70397320a/"
            target="_blank"
          >
            <FaLinkedin className="text-[#5e8df5] text-3xl" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100052245163424"
            target="_blank"
          >
            <FaFacebook className="text-[#2d60ce] text-3xl" />
          </a>
          <a href="https://twitter.com/HtutAun83096571" target="_blank">
            <FaTwitter className="text-[#9fb9f1] text-3xl" />
          </a>
        </div>
        {/* Social Icons End*/}

        <div className="text-white text-base w-full absolute bottom-20 text-center poppins">
          <p>
            2022© Crafted by{" "}
            <span className="font-bold underline">
              <a href="#">@Htut Aung Wai.</a>
            </span>
          </p>
          <p>All rights reserved.</p>
        </div>
      </div>

      {/* Desktop */}
      <div className="min-h-screen w-full  hidden lg:block relative overflow-hidden">
        <div className="w-full h-full absolute z-20 flex flex-col items-center indie uppercase pt-10">
          <h2 className="text-white text-lg">Just Hire Me?</h2>
          {/* Images */}
          <div className="flex  items-center justify-center ">
            <img src={Me} alt="htut" className="w-20 rounded-full mr-2" />
            <div className="w-24 h-1 bg-white rounded-lg"></div>
            <motion.img
              initial={{ y: -25 }}
              animate={{ y: 25 }}
              exit={{ y: 25 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 3,
              }}
              src={Astronaut}
              alt="astronaut"
              className="w-44 rounded-full"
            />
            <div className="w-24 h-1 bg-white rounded-lg"></div>
            <img
              src={VisibleOne}
              alt="Visible One"
              className="w-20 rounded-full ml-2"
            />
          </div>
          <h2 className="text-white poppins text-4xl">
            recruit me as a developer?
          </h2>
          {/* YES/NO Button Groups */}
          <div className="flex gap-5 mt-10 text-lg">
            <motion.button
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
              whileTap={{ scale: 0.9 }}
              className="bg-[#70DFC5] text-black px-8 py-1 rounded-sm drop-shadow-2xl shadow-[#70DFC5] shadow-md text-2xl font-semibold poppins"
            >
              YES
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
              whileTap={{ scale: 0.9 }}
              className="bg-[#FF8484] px-8 py-1 rounded-sm drop-shadow-2xl shadow-[#FF8484] shadow-md text-2xl font-semibold text-white poppins"
            >
              NO
            </motion.button>
          </div>
          {/* YES/NO Button Groups */}

          {/* Social Icons */}
          <div className="flex text-white mt-8 gap-4">
            <a href="https://github.com/htutaungwai" target="_blank">
              <FaGithubAlt className="text-[#c4c4c4] text-3xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/htut-aung-wai-70397320a/"
              target="_blank"
            >
              <FaLinkedin className="text-[#5e8df5] text-3xl" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100052245163424"
              target="_blank"
            >
              <FaFacebook className="text-[#2d60ce] text-3xl" />
            </a>
            <a href="https://twitter.com/HtutAun83096571" target="_blank">
              <FaTwitter className="text-[#9fb9f1] text-3xl" />
            </a>
          </div>
          {/* Social Icons End*/}
        </div>
        {/* Background Paintings */}
        <div className="w-[80vw] h-[80vw] absolute bg-[#201056] rounded-full blur-2xl -right-1/3 -top-1/2 z-1"></div>

        {/* Background Paintings End*/}

        {/*  Fotter */}
        <div className="absolute bottom-14 left-1/2 -translate-x-1/2 z-30">
          <h4 className="text-white">
            2022© all rights reserved. Crafted with love by{" "}
            <span className="underline font-bold">
              <a href="https://github.com/htutaungwai" target={"_blank"}>
                @HTUT
              </a>
            </span>
          </h4>
        </div>

        {/*  Fotter ENds*/}
      </div>
    </div>
  );
};

export default Request;
