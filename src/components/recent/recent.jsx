import React from "react";
import Button from "../../unit-components/button/button";
import ArticleCard from "../../unit-components/articleCard/ArticleCard";
const details = {
  link: "",
  text: "View all",
};
const Articles = [
  {
    id: 1,
    title: "Mbappe is better than Halaand",
    author: "Viola Manisa",
    date: "02 May",
    tag: "Recent",
    bgImage:
      "https://i2-prod.liverpoolecho.co.uk/incoming/article27419282.ece/ALTERNATES/s615/0_GettyImages-1254687348.jpg",
  },
  {
    id: 2,
    title: "Chelsea just won the USA PL Summer Series",
    author: "Emmanuel Olawuni",
    date: "30 July",
    tag: "Recent",
    image: "https://techpad.com.ng/public/profileimages/1665763556.jpg",
    bgImage:
      "https://images.unsplash.com/photo-1628813640706-ca88bcdfb228?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlbHNlYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    title: "Do you know I love You?",
    author: "Emmanuel Olawuni",
    date: "20 July",
    tag: "Recent",
    image: "https://techpad.com.ng/public/profileimages/1665763556.jpg",
    bgImage:
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bG92ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
];
const Recent = () => {
  return (
    <>
      <div className="popular-section mt-[3em]">
        <div className="section-head flex flex-col md:flex-row justify-around gap-[4em] p-4">
          <div className="flex flex-col">
            <h2 className="text-blue-500 font-semibold text-[35px]">
              Recent Articles
            </h2>
            <p className="text-blue-500 font-[500px] text-[16px]">
              Here's what we've been up to recently
            </p>
          </div>
          <div>
            <Button details={details} />
          </div>
        </div>
        <div className="flex  flex-col md:flex-row gap-[2em] justify-center p-10 sm:flex-col">
          {Articles.map((Article) => (
            <ArticleCard Articles={Article} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Recent;
