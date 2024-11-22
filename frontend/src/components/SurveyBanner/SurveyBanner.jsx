import React from "react";
import assets from "../../assets/assets";

function SurveyBanner() {
  return (
    <div className="px-12 xl:px-60 py-6 gap-10 mb-20 flex flex-col xl:items-center xl:flex-row">
      <div className="basis-1/2">
        <h2 className="md:text-3xl text-2xl mb-4">Take our survey to identify potential disease</h2>
        <p className="text-sm md:text-base mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, at
          corporis explicabo qui sint id voluptatibus nulla reprehenderit
          ducimus rerum! Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Sint, praesentium.
        </p>
        <button className="bg-primary text-white rounded-2xl px-5 py-3 text-base font-medium hover:scale-110 transition-all duration-500">Take survey now</button>
      </div>
      
      <div className="basis-1/2">
        <img src={assets.survey} alt="Survey" className="rounded-xl"/>
      </div>
    </div>
  );
}

export default SurveyBanner;
