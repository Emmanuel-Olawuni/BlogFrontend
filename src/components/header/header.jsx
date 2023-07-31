import React, { useState } from "react";
import LOGO from "../../assets/Logo.png";
import bgImage from "../../assets/bgimage.jpg";
import "./header.css";
import { FaSistrix } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineCloseSquare } from "react-icons/ai";

const Header = () => {
  const [Open, setOpen] = useState(false);
  console.log(Open);
  const toggleOpen = () => {
    setOpen(!Open);
    console.log(Open);
  };
  return (
    <>
      <div
        className=" header-wrapper"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="flex justify-left md:justify-around header py-6 text-center">
          <img src={LOGO} alt="" className="w-[100px] h-[30px] mr-[15em]  ml-[10px]" />
          {!Open && (
            <HiOutlineMenuAlt3
              color="white"
              size="27px"
              className="flex menu float-right  md:hidden"
              onClick={toggleOpen}
            />
          )}
          {Open && (
            <div className="mobile-menu flex flex-col text-white-100 text-[22px] font-semibold text-left ">
              <AiOutlineCloseSquare
                color="black"
                size="27px"
                className="flex menu "
                onClick={toggleOpen}
              />
              <a href="#">Home</a>
              <a href="#">Landing</a>
              <a href="#">Pages</a>
              <a href="#">Docs</a>
              <a href="#">Help</a>
            </div>
          )}
          <div className="hidden md:flex nav-link font-semibold  ">
            <a href="#">Home</a>
            <a href="#">Landing</a>
            <a href="#">Pages</a>
            <a href="#">Docs</a>
            <a href="#">Help</a>
            <button className="text-white  button font-semibold hover:bg-black">
              Get It Now
            </button>
          </div>
        </div>
        <div className=" mt-[4.5em] font-semibold text-[32px]  flex justify-around text-white-100">
          Our Newsroom
        </div>

        <div className="searchbox-wrapper flex justify-around  ">
          <div className=" flex justify-center  bg-white-100 p-[15px] h-[3em] rounded-[5px] items-center gap-10 ">
            <FaSistrix color="#718096" />
            <input type="text" name="" placeholder="Search article" id="" />
            <button
              type="submit"
              className="text-sm font-semibold bg-primary-700 p-[10px] rounded-[10px] hover:bg-white-100 hover:text-primary-700 hover:border-primary-700 hover:border hover:border-solid  transition-all duration-100"
            >
              Search
            </button>
          </div>
        </div>
        <div className="tag flex flex-col md:flex-row md:justify-center gap-8 mt-3 text-white-100 font-semibold items-center">
          Popular Tags:
          <div className="flex gap-4 ">
            <button className="tag-button">Design</button>
            <button className="tag-button">User Experience</button>
            <button className="tag-button">User Interface</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
