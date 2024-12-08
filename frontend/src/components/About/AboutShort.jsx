import React from "react";
import assets from "../../assets/assets";
import { useNavigate } from "react-router-dom";

function About() {

  const navigate = useNavigate()

  return (
    <div className="px-12 xl:px-60 py-6 mb-24 flex flex-col md:flex-row gap-6">
      <div className="basis-1/2">
        <h4 className="text-sm md:text-xl text-primary mb-1">About Us</h4>
        <h2 className="text-2xl md:text-4xl font-medium mb-3">
          A Legacy of Compassionate Care!
        </h2>
        <p className="font-light mb-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
          voluptate optio autem facere eligendi at ex dolor qui ad aliquid!
          Lorem ipsum dolor sit amet, consectetur adipisici
        </p>

        <div className=" mb-6 flex flex-col md:flex-row md:gap-8 gap-6">
          <div className="basis-1/2 border-2 border-slate-100 shadow-xl rounded-xl p-4">
            <h3 className="text-xl font-medium mb-2">Our Vission</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur. Vestibulum elit eu
              vulputate tristique enim.
            </p>
          </div>

          <div className="basis-1/2 border-2 border-slate-100 shadow-xl rounded-xl p-4">
            <h3 className="text-xl font-medium mb-2">Our Mission</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur. Vestibulum elit eu
              vulputate tristique enim.
            </p>
          </div>
        </div>

          <button onClick={() => navigate("/about")} className="bg-primary text-white px-3 py-2 md:px-4 md:py-3 md:font-medium md:text-lg hover:scale-105 transition-all duration-500 rounded-lg">
            View more
          </button>
      </div>

      <div className="basis-1/2">
        <img
          src={assets.about_photo}
          alt="About Us"
          className="rounded-xl sm:rounded-2xl"
        />
      </div>
    </div>
  );
}

export default About;
