import React from "react";
import bannerImg from "../assets/books.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-[300px] rounded-lg">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={bannerImg} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-4xl font-semibold w-3/4 my-3">
            Books to freshen up your bookshelf
          </h1>
          <button className="btn bg-green-600 text-white">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
