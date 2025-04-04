import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import '../styles/home.css';

const Home = () => {
  return (
    <div
      name="home"
      id="home"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Web Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          Fully committed to lifelong learning, I'm a Full-Stack Web Developer with a deep passion for JavaScript, React, and all things web development. 
          The perfect blend of creativity, logic, and technology keeps me excited about building seamless digital experiences. 
          There’s always something new to learn, and that’s what drives my passion. When I’m not coding, you’ll find me baking, keeping fit, or exploring new places.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto pl-2 md:w-full heroImage"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
