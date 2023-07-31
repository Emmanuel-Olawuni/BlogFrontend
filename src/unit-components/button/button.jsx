import React from "react";
import "./button.css";
import { BsArrowRightShort } from "react-icons/bs";


const Button = ({details}) => {
    const {link , text} = details
  return (
    <>
      <button className=" rounded-[10px] font-bold text-[16px] text-primary-500 border-primary-500 p-[10px] w-[7em] h-[3em] border-[2px]">
        <a href={link} className="flex gap-[10px] items-center">
          {text} <BsArrowRightShort />
        </a>
      </button>
    </>
  );
};

export default Button;
