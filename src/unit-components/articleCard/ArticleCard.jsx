import React from "react";
import { MdOutlineVerified } from "react-icons/md";
import Image from "../../assets/bgimage.jpg";
import "./ArticleCard.css";

const ArticleCard = ({ Articles }) => {
  const { title, author, date, tag , bgImage } = Articles;
  return (
    <>
      <div
        className="article-card-container shadow-2xl flex flex-col p-5 justify-between w-[100%] md:w-[30em]"
        style={{
          backgroundImage: `linear-gradient(
          180deg,
          rgba(24, 59, 86, 0) 0%,
          rgba(22, 49, 70, 0.45) 45.38%,
          #152532 100%
        ), url(${bgImage})`,
        }}
      >
        <div
          className="article-tag bg-white-100 font-semibold text-[18px] rounded-[5px] p-[4px] w-[110px] text-center select-none"
          style={{ color: "#36B37E" }}
        >
          {tag}
        </div>
        <div className="lowerpart">
          <div className="article-title text-white-100 text-[28px] font-semibold flex-wrap p-3 ">
            {title}
          </div>
          <div className="article-author-details flex gap-[12px] justify-between">
            <div className="author">
              <div className="flex gap-[10px] justify-between">
                <div className="author-image">
                  <img src={Image} alt="" />
                </div>
                <div>
                  <span className="font-[600] text-white-100">
                    {author}
                  </span>
                  <div className="flex items-center gap-[5px] ">
                    <MdOutlineVerified color="#36B37E" />{" "}
                    <span className="text-[12px] italic opacity-75 text-gray-400">
                      verified writer
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-white-100 font-semibold text-[16px]">
              {date}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleCard;
