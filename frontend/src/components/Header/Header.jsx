import React from "react";
import { useNavigate } from "react-router-dom";
import assets from "../../assets/assets";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between gap-8 mt-10 xl:mt-32 flex-col-reverse xl:flex-row px-12 xl:px-60 py-6 mb-20">
      <div className="basis-1/2">
        <h2 className="text-3xl md:text-5xl font-semibold text-primary mb-5">
          <span className="text-secondary">Doc</span>Appoint
        </h2>

        <p className="md:text-lg text-sm font-light mb-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
          consectetur maiores tenetur doloribus repellat officiis, commodi
          numquam et quidem quam! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Temporibus, maxime!
        </p>

        <p className="text-sm md:text-lg font-light mb-3">
            Go and register now for completly free!
        </p>

        <button onClick={() => navigate("/join")}
            className="bg-primary px-3 py-2 text-sm md:px-5 md:py-3 text-white border md:text-lg font-medium rounded-2xl transition-all duration-500 hover:scale-110 hover:text-primary hover:border-primary hover:bg-white"
        >
            Join Now
        </button>
      </div>

      <div>
        <img src={assets.hero_banner} alt="Hero Banner" />
      </div>
    </div>
  );
}

export default Header;
