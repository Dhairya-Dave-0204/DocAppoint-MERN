import React from "react";

function FeatureCard() {
  return (
    <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-12 mt-20 xl:mt-44 mb-20 xl:mb-36 px-12 xl:px-60 py-6">
      <div className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-white shadow-xl px-6 py-8 hover:scale-105 duration-500 transition-all hover:shadow-2xl">
        <i className="ri-stethoscope-line text-6xl text-primary"></i>

        <h3 className="text-xl md:text-2xl font-medium text-center">Find the best medical <br /> professionals online</h3>

        <p className="text-center text-sm font-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium error aut similique voluptate, necessitatibus neque</p>
      </div>
      
      <div className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-white shadow-xl px-6 py-8 hover:scale-105 duration-500 transition-all hover:shadow-2xl">
      <i className="ri-nurse-line text-6xl text-primary"></i>

        <h3 className="text-xl md:text-2xl font-medium text-center">View a <br /> doctor's profile</h3>

        <p className="text-center text-sm font-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis nihil explicabo voluptatibus reiciendis culpa nobis eos.</p>
      </div>
      
      <div className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-white shadow-xl px-6 py-8 hover:scale-105 duration-500 transition-all hover:shadow-2xl">
      <i className="ri-calendar-2-line text-6xl text-primary"></i>

        <h3 className="text-xl md:text-2xl font-medium text-center">Get instant <br /> doctor appoinment</h3>

        <p className="text-center text-sm font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptatem corporis aliquid voluptates aspernatur, officia rem accusamus!</p>
      </div>
    </div>
  );
}

export default FeatureCard;
