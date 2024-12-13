import React from "react";
import Image from "next/image";
import { MousePointerClick } from "lucide-react";
import { Cuboid } from "lucide-react";
import { Rss } from "lucide-react";
const HeroSection = () => {
  return (
    <div>
      <header
        className="flex justify-between items-center px-20 py-12"
        style={{
          background: `
            radial-gradient(circle at top right, rgba(211, 194, 250, 0.6) 10%, rgba(244, 240, 253, 0.4) 70%, rgba(255, 255, 255, 0) 100%),
            linear-gradient(to bottom, rgb(232, 230, 252), rgb(232, 230, 252))
          `,
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#5148f5] to-[rgb(2,1,15)] text-lg font-bold">
          FlowLink
        </h1>
        <nav>
          <ul className="flex gap-8">
            <li>
              <a
                href="#"
                className="text-[#464444]  text-xs py-2 hover:text-gray-600 transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#464444] text-xs py-2 hover:text-gray-600 transition-colors duration-300"
              >
                Why Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#464444] text-xs py-2 hover:text-gray-600 transition-colors duration-300"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#464444]  text-xs py-2 hover:text-gray-600 transition-colors duration-300"
              >
                Industry
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#464444]  text-xs py-2 hover:text-gray-600 transition-colors duration-300"
              >
                Google Workspace
              </a>
            </li>
          </ul>
        </nav>
        <div>
          <button className="bg-[#6727ba] text-white py-2 px-5 rounded-full text-xs mr-3  transition-colors duration-300">
            Start Trial
          </button>
          <button className="bg-white text-[#0b0b0c] font-bold py-2 px-5 rounded-full text-xs hover:bg-[#f4f0fd] transition-colors duration-300">
            Register
          </button>
        </div>
      </header>

      <main
        className="flex justify-evenly items-center py-5"
        style={{
          background: `
            radial-gradient(circle at top right, rgba(211, 194, 250, 0.6) 10%, rgba(244, 240, 253, 0.4) 70%, rgba(255, 255, 255, 0) 100%),
            linear-gradient(to bottom, rgb(232, 230, 252), rgb(232, 230, 252))
          `,
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <section className="max-w-[45%] mx-2.5">
          <h6 className="text-md mb-5">Get Started Today and Save 20%!</h6>
          <h1 className="text-6xl font-bold leading-tight">
            Clients?<span className="text-[#6a5acd]"> Managed</span>
          </h1>
          <div className="flex items-center gap-4">
            <button className="bg-[#170c5d] text-white py-2 px-3 rounded-full mr-4 text-[15px] transition-colors duration-300 hover:bg-[#563ebf] text-center flex items-center gap-2">
              Get Started
            </button>
            <button className="bg-white text-[#0d0d0e] py-2 px-3 rounded-full mr-4 text-[15px] transition-colors duration-300 hover:bg-[#f4f0fd] text-center flex items-center gap-2 font-bold">
              <MousePointerClick />
              See Demo
            </button>
          </div>
        </section>

        <section className="relative">
          <img
            src="/images/image.png"
            alt="Image"
            className="w-[500px] rounded-xl"
          />
          <button
            className="absolute bottom-[-20px] left-[-20px] w-16 h-20 bg-[#b389eb] font-bold text-xl cursor-pointer transform rotate-[-37deg] z-10"
            style={{
              clipPath:
                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)", // Hexagonal shape
            }}
          >
            20% OFF
          </button>
        </section>
      </main>

      <footer className="flex flex-col items-center py-10 px-20 bg-[#f3f4f6]">
        <div className="flex justify-center items-center gap-12 mb-6">
          <div className="flex items-center gap-4">
            <img
              src="images/dribbble-icon-1.png"
              alt="Dribbble Icon"
              className="w-12"
            />
            <p className="text-[#6b7280] text-lg">
              Dribbble <br /> Recommended
            </p>
          </div>
          <div className="flex items-center gap-4">
            <img
              src="images/Google_Icons-09-512.webp"
              alt="Google Icon"
              className="w-12"
            />
            <p className="text-[#6b7280] text-lg">
              Google Workspace <br />
              Recommended
            </p>
          </div>
          <div className="flex items-center gap-4">
            <img
              src="images/Trello-512.webp"
              alt="Trello Icon"
              className="w-12"
            />
            <p className="text-[#6b7280] text-lg">
              Trello
              <br /> Recommended
            </p>
          </div>
        </div>

        <div className="flex justify-center w-full">
          <ul className="flex flex-wrap justify-center gap-8">
            <li className="text-[#1f2937] text-lg capitalize p-2 m-2">
              Pentagram
            </li>
            <li className="font-extrabold text-lg p-2 m-2">H00K</li>
            <li className="font-bold text-[#3b3b3d] text-sm p-2 m-2">
              Silicon
              <br /> Foundry
            </li>
            <li className="font-bold text-lg p-2 m-2 flex items-center gap-2">
              8PTS <Cuboid />
            </li>
            <li className="text-[#1f2937] text-lg capitalize p-2 m-2 flex items-center gap-3">
              
              Cake
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default HeroSection;


