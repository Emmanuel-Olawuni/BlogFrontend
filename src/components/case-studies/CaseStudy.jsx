import React from "react";
import Button from "../../unit-components/button/button";
import Slides from "../../unit-components/carouselCard/Slides";

const details = {
  link: "",
  text: "View all",
};

const SliderInfo = [
  {
    id: 1,
    image:
      "https://www.bellanaijaweddings.com/wp-content/uploads/2021/01/Wathoni-Editorial-BellaNaija-Weddings.13-1080x1350.jpg",
    tag: "featured",
    title: "Yoruba women rocks my world",
    description:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione nostrum, distinctio doloribus magni ab esse quis aperiam adipisci, impedit sint soluta sequi minus cumque reprehenderit fugiat suscipit omnis? Repellat, exercitationem.",
    author: "Emmanuel Olawuni",
    date: "30 Aug",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1473862170180-84427c485aca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFpcnBsYW5lJTIwYWlycG90fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    tag: "featured",
    title: "How can I save 1m in two days",
    description:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione nostrum, distinctio doloribus magni ab esse quis aperiam adipisci, impedit sint soluta sequi minus cumque reprehenderit fugiat suscipit omnis? Repellat, exercitationem.",
    author: "Alani Pamolekun",
    date: "20 Aug",
  },
];
const CaseStudy = () => {
  return (
    <>
      <div className="section-head flex  justify-around gap-[4em] p-4">
        <div className="flex flex-col">
          <h2 className="text-blue-500 font-semibold text-[35px]">
            Case Study
          </h2>
          <p className="text-blue-500 font-[500px] text-[16px]">
            Here's what we've been up to recently
          </p>
        </div>
        <div>
          <Button details={details} />
        </div>
      </div>
      <Slides slides={SliderInfo}/>
    </>
  );
};

export default CaseStudy;
