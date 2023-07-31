import React from "react";
import LOGO from "../../assets/Logo.png";
import "./footer.css";
import { BsLinkedin, BsPinterest, BsTwitter, BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="text-white-100 bg-darkBlue-500 p-[14px] md:p-[2em] flex justify-between gap-[3em]  flex-col md:flex-row ">
        <div className="flex flex-col footer-sec  gap-[20px]">
          <img src={LOGO} alt="" className="w-[100px] h-[30px]" />
          <p>Build a modern and creative website with crealand</p>
          <div className="social-links">
            <BsTwitter />
            <BsFacebook />
            <BsLinkedin />
            <BsPinterest />
          </div>
        </div>
        <div className="flex flex-col footer-navlinks">
          <p>Product</p>
          <a href="">Landing Page</a>
          <a href="">Features</a>
          <a href="">Documentation</a>
          <a href="">Referral Program</a>
          <a href="">Pricing</a>
        </div>
        <div className="flex flex-col footer-navlinks">
          <p>Service</p>

          <a href="">Design</a>
          <a href="">Themes</a>
          <a href="">Illustration</a>
          <a href="">UI Kit</a>
        </div>
        <div className="flex flex-col footer-navlinks">
          <p>Company</p>

          <a href="">About</a>
          <a href="">Terms</a>
          <a href="">Privacy Policy</a>
          <a href="">Careers</a>
        </div>
        <div className="flex flex-col footer-navlinks">
          <p>More</p>

          <a href="">Documentation</a>
          <a href="">License</a>
          <a href="">Changelog</a>
        </div>
      </div>
    </>
  );
};

export default Footer;
