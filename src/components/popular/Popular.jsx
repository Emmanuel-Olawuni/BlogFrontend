import "./popular.css";
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
    title: "Do you know Dolani needs a Girlfriend?",
    author: "Dolani J.",
    date: "31 Aug",
    tag: "Important",
    image: 'http://localhost:3000/static/media/bgimage.dc3ddadff62e47dd246a.jpg',
    bgImage: 'https://images.unsplash.com/photo-1643818657367-491080baeece?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFtaWx5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 2,
    title: "Motherhood is the hardest and the best job ever",
    author: "Emmanuel Olawuni",
    date: "02 May",
    tag: "Trending",
    image: 'https://techpad.com.ng/public/profileimages/1665763556.jpg',
    bgImage: 'https://images.unsplash.com/photo-1667132713689-dfe53c325445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW90aGVyaG9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
];

const Popular = () => {
  return (
    <>
      <div className="popular-section  md:mt-[18em] mt-[4em] p-[2em]">
        <div className="section-head flex flex-col md:flex-row justify-around gap-[4em] p-4">
          <div className="flex flex-col">
            <h2 className="text-blue-500 font-semibold text-[35px]">
              Popular Articles
            </h2>
            <p className="text-blue-500 font-[500px] text-[16px]">
              We share common trends, strategies ideas,opinions, short & long{" "}
              <br /> stories from the team behind company
            </p>
          </div>
          <div>
            <Button details={details} />
          </div>
        </div>
        <div className="flex  flex-col gap-[2em] justify-center md:flex-row">
          {Articles.map((Article) => (
            <ArticleCard Articles={Article} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Popular;
