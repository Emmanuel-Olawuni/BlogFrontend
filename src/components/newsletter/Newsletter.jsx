import React from "react";

import Base from '../../assets/Base.png'
import './Newsletter.css'
const Newsletter = () => {
  return (
    <>
    
      <div className="flex bg-darkBlue-500 justify-around p-[14px] pt-[2em] md:pt-[3em]  md:p-[3em] gap-[10px] flex-col-reverse md:flex-row mt-0 md:mt-[2em]" >
        <div className="flex flex-col gap-[20px]">
          <h2 className="text-white-100 text-[18px] md:text-[22px] font-semibold text-center md:text-left">Get our stories delivered From us to your inbox weekly </h2>
          <div className="input-wrapper flex gap-[10px] flex-col md:flex-row">
            <input
              placeholder="Your Email"
              type="email"
              className="rounded-[4px] h-[50px] w-[100%] md:h-[40px]  focus:outline-none md:w-[20em]"
            />
            <button
              type="submit"
              className="text-white-100  h-[50px] md:h-[40px]  bg-primary-500 p-2 rounded-[4px]  hover:bg-white-100 hover:text-primary-500 hover:border hover:border-primary-500 hover:transition-all hover:duration-75 font-semibold"
            >
              Get Started
            </button>
          </div>
          <p className="text-white-100 opacity-20 input-mute">
          Get a response tomorrow if you submit by 9pm today. If we received after 9pm will get a reponse the following day.
          </p>
        </div>
        <div>
            <img src={Base} alt="" />
        </div>
      </div>
    </>
  );
};

export default Newsletter;
