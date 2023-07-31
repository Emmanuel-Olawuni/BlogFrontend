import React, { useState } from "react";
import Image from "../../assets/bgimage.jpg";
import { MdOutlineVerified } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";
import { BsArrowLeftShort } from "react-icons/bs";
import "./Slides.css";


const Slides = ({slides}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const gotoPrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length -1 :  currentIndex-1;
    setCurrentIndex(newIndex);
  }
  const gotoNext = ()=> {
    const isLastSlide = currentIndex === slides.length -1;
    const newIndex = isLastSlide ? 0 :  currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  return (
    <>
      <div className="slidesContainer px-[20px] md:px-[80px] py-[20px] rounded-[25px]">
        <div className=" flex flex-col  shadow-2xl  bg-white-100 rounded-[25px] md:flex-row">
          <div className="slides-Image">
            <img src={slides[currentIndex].image} alt=""  />
          </div>
          <div className="text-container flex flex-col ">
            <button className="tags text-blue-500 font-bold bg-primary-100  rounded-[10px] ">
              featured
            </button>
            <h2 className="card-title text-blue-500 ">
             {slides[currentIndex].title}
            </h2>
            <p className="card-description text-blue-300 ">
            {slides[currentIndex].description}
            </p>
            <div className="author-details flex justify-between flex-col md:flex-row">
              <div className="author">
                <div className="flex gap-[10px]">
                  <div className="author-image">
                    <img src={Image} alt="" />
                  </div>
                  <div>
                    <span className="font-[600] ">{slides[currentIndex].author} </span>
                    <div className="flex items-center gap-[5px] ">
                      <MdOutlineVerified color="#36B37E" />{" "}
                      <span className="text-[12px] italic opacity-75">
                        verified writer
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="date font-semibold text-gray-700">{slides[currentIndex].date}</div>
            </div>
          </div>
        </div>
        <div className="arrows flex justify-between">
          <BsArrowLeftShort size="28px" className="left-arrow" onClick={ gotoPrev} />
          <BsArrowRightShort size="28px" className="right-arrow" onClick={ gotoNext} />
        </div>
      </div>
    </>
  );
};

export default Slides;
