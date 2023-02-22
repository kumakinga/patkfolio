import React from "react";
import patphotoN from "../assets/patphotoN.PNG";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="flex h-screen w-full bg-gradient-to-b
    from-black to-gray-900">

      <div className="flex max-w-screen-lg mx-auto flex-col items-center
      justify-center h-full px-4 md:flex-row">

        <div className="flex-col  justify-center h-full">
          <h2 className="flex text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500">
            I have 3 years of experience in software development.
            currently, I love working on web application using techonologies like
            ExpressJS, ReactJS and and Bootstrap.
            <br />
            <span className="font-bold text-white max-w-md">Français...</span><br />
            j'ai 3 ans d'experiences en developpement logiciel.
            actuellement je travaille sur les applications web en utilisant les techonologies web telleque
            ExpressJS, ReactJS et Bootstrap.
          </p>

          <div>
            <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center
            rounded-md bg-gradient-to-r from-cyan-700 to-blue-900 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-200">
              <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
              
            </Link>
          </div>
        </div>
        <div>
          <img src={patphotoN} alt="Mon profile" className="rounded-2xl mx-auto
          w-2/3 md:w-full" />
        </div>
      </div>
    </div>
  )
};

export default Home;
