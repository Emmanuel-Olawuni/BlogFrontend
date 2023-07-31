import React from "react";
import "./Card.css";
import Image from "../../assets/bgimage.jpg";
import { MdOutlineVerified } from "react-icons/md";


const Card = () => {
  return (
    <>
      <div className="card-container flex flex-col md:flex-row shadow-2xl relative  md:absolute md:bottom-[-50%] md:w-[50%] md:left-[50%]  md:transform md:translate-x-[-50%] md:translate-y-[-50%] p-[20px] md:p-[0]">
       <img src={Image} className="md:w-[40%] imag-container" />
        <div className="text-container flex flex-col ">
          <button className="tags text-blue-500 font-bold bg-primary-100  rounded-[10px] ">
            featured
          </button>
          <h2 className="card-title text-blue-500">
            Cheap airline Ticket Great Way to Save
          </h2>
          <p className="card-description text-blue-300 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
            nostrum, distinctio doloribus magni ab esse quis aperiam adipisci,
            impedit sint soluta sequi minus cumque reprehenderit fugiat suscipit
            omnis? Repellat, exercitationem.
          </p>
          <div className="author-details flex justify-between">
            <div className="author">
              <div className="flex gap-[10px]">
                <div className="author-image">
                  <img src={Image} alt="" />
                </div>
                <div>
                  <span className="font-[600] ">Viola Manisa </span>
                  <div className="flex items-center gap-[5px] ">
                    <MdOutlineVerified color="#36B37E" />{" "}
                    <span className="text-[12px] italic opacity-75">
                      verified writer
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="date font-semibold text-gray-700">02 May</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
