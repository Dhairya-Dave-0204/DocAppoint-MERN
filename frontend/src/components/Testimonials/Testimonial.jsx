import React from "react";
import assets from "../../assets/assets";

function Testimonial() {
  return (
    <div className="mt-10 mb-24 px-12 xl:px-60 py-6">
      <h2 className="mb-2 text-center text-4xl md:text-6xl font-semibold text-primary">
        Testimonials
      </h2>

      <p className="text-center text-base md:text-2xl mb-12 font-light">
        See what our users say about us
      </p>

      <div className="flex flex-col gap-8 xl:grid xl:grid-cols-10 xl:grid-rows-3">
        <div className="xl:col-span-4 xl:row-span-2 rounded-2xl p-[1.3px] bg-slate-200 hover:scale-105 transition-all duration-500 hover:bg-gradient-to-br hover:from-blue-300 hover:via-purple-300 hover:to-sky-300">
          <div className="bg-white rounded-2xl w-full h-full">
            <div className="flex items-center md:justify-around p-3 sm:p-6 gap-3 xl:gap-10">
              <img
                src={assets.img_1}
                alt=""
                className="sm:w-20 sm:h-20 w-16 h-16 rounded-[50%] border-primary border-[3px]"
              />
              
              <h3 className="sm:text-2xl md:text-3xl xl:font-normal font-medium">Abby Campbell</h3>

              <div className="hidden md:flex items-center gap-1 text-primary">
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-half-fill"></i>
              </div>
            </div>
            <p className="p-4 text-sm xl:text-lg xl:font-light">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
              nobis a molestiae, officiis sint delectus illum, dolorum ratione
              minus ut neque animi alias ullam ex voluptate quidem magnam?
              Fugit! <br /> <br /><span className="hidden xl:block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ab dicta consectetur unde voluptate accusantium suscipit, cupiditate veniam nesciunt nam accusamus illum vero impedit facilis at cumque possimus in ut! <br /> <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, porro? Dolore, soluta impedit voluptatum doloribus cupiditate qui delectus ad? Velit.</span>
            </p>
          </div>
        </div>  
        
        <div className="xl:col-span-4 xl:row-span-1 rounded-2xl p-[1.3px] bg-slate-200 hover:scale-105 transition-all duration-500 hover:bg-gradient-to-br hover:from-blue-300 hover:via-purple-300 hover:to-sky-300">
          <div className="bg-white rounded-2xl w-full h-full">
            <div className="flex items-center p-3 md:justify-around sm:p-6 gap-3 xl:gap-14">
              <img
                src={assets.img_2}
                alt=""
                className="sm:w-20 sm:h-20 w-16 h-16 rounded-[50%] border-primary border-[3px]"
              />
              <h3 className="sm:text-2xl xl:text-3xl xl:font-normal font-medium">Les Mckay</h3>

              <div className="hidden md:flex items-center gap-1 text-primary">
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-half-fill"></i>
              <i className="ri-star-half-fill"></i>
              </div>
            </div>
            <p className="p-4 text-sm xl:text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
              nobis a molestiae, officiis sint delectus illum, dolorum ratione
              minus ut neque animi alias ullam ex voluptate quidem magnam?
              Fugit!
            </p>
          </div>
        </div>
        
        <div className="xl:col-span-2 xl:row-span-1 rounded-2xl p-[1.3px] bg-slate-200 hover:bg-gradient-to-br hover:from-blue-300 hover:via-purple-300 hover:to-sky-300 hover:scale-105 transition-all duration-500">
          <div className="bg-white rounded-2xl w-full h-full">
            <div className="flex items-center md:justify-around p-3 sm:p-6 gap-3">
              <img
                src={assets.img_3}
                alt=""
                className="sm:w-20 sm:h-20 w-16 h-16 rounded-[50%] border-primary border-[3px]"
              />
              <h3 className="sm:text-2xl font-medium">Emily Weeks</h3>

              <div className="hidden md:flex xl:hidden items-center gap-1 text-primary">
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-half-fill"></i>
              <i className="ri-star-half-fill"></i>
              </div>
            </div>
            <p className="p-4 text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
              nobis a molestiae, officiis sint delectus illum, dolorum ratione
              minus ut neque animi alias ullam ex voluptate quidem magnam?
              Fugit!
            </p>
          </div>
        </div>
        
        <div className="xl:col-span-3 xl:row-span-2 rounded-2xl p-[1.3px] bg-slate-200 hover:scale-105 transition-all duration-500 hover:bg-gradient-to-br hover:from-blue-300 hover:via-purple-300 hover:to-sky-300">
          <div className="bg-white rounded-2xl w-full h-full">
            <div className="flex items-center p-3 md:justify-around sm:p-6 gap-3 xl:gap-8">
              <img
                src={assets.img_4}
                alt=""
                className="sm:w-20 sm:h-20 w-16 h-16 rounded-[50%] border-primary border-[3px]"
              />
              <h3 className="sm:text-2xl xl:text-3xl xl:font-normal font-medium">Johnny Horn</h3>

              <div className="hidden md:flex xl:hidden items-center gap-1 text-primary">
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-half-fill"></i>
              <i className="ri-star-half-fill"></i>
              </div>
            </div>
            <p className="p-4 text-sm xl:text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
              nobis a molestiae, officiis sint delectus illum, dolorum ratione
              minus ut neque animi alias ullam ex voluptate quidem magnam?
              Fugit! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, aspernatur? <br /> <br /> <span className="hidden xl:block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, totam! Blanditiis, quidem consectetur enim amet cumque nulla rem. Sint, sit doloribus ab consequatur laborum in delectus maxime totam? Qui, debitis?</span>
            </p>
          </div>
        </div>
        
        <div className="xl:col-span-3 xl:row-span-2 rounded-2xl p-[1.3px] bg-slate-200 hover:scale-105 transition-all duration-500 hover:bg-gradient-to-br hover:from-blue-300 hover:via-purple-300 hover:to-sky-300">
          <div className="bg-white rounded-2xl w-full h-full">
            <div className="flex items-center p-3 md:justify-around sm:p-6 gap-3 xl:gap-8">
              <img
                src={assets.img_5}
                alt=""
                className="sm:w-20 sm:h-20 w-16 h-16 rounded-[50%] border-primary border-[3px]"
              />
              <h3 className="sm:text-2xl xl:text-3xl xl:font-normal font-medium">Carly Frederick</h3>

              <div className="hidden md:flex xl:hidden items-center gap-1 text-primary">
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-half-fill"></i>
              <i className="ri-star-half-fill"></i>
              </div>
            </div>
            <p className="p-4 text-sm xl:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, totam! Blanditiis, quidem consectetur enim amet cumque nulla rem. Sint, sit doloribus ab consequatur laborum in delectus maxime totam? Qui, debitis?<br /> <br /> <span className="hidden xl:block">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
              nobis a molestiae, officiis sint delectus illum, dolorum ratione
              minus ut neque animi alias ullam ex voluptate quidem magnam?
              Fugit! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, aspernatur?</span>
            </p>
          </div>
        </div>

        <div className="xl:col-span-4 xl:row-span-1 rounded-2xl p-[1.3px] bg-slate-200 hover:scale-105 transition-all duration-500 hover:bg-gradient-to-br hover:from-blue-300 hover:via-purple-300 hover:to-sky-300">
          <div className="bg-white rounded-2xl w-full h-full">
            <div className="flex items-center p-3 md:justify-around sm:p-6 gap-3 xl:gap-8">
              <img
                src={assets.img_6}
                alt=""
                className="sm:w-20 sm:h-20 w-16 h-16 rounded-[50%] border-primary border-[3px]"
              />
              <h3 className="sm:text-2xl font-medium">Cameron Mccann</h3>

              <div className="hidden md:flex items-center gap-1 text-primary">
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-half-fill"></i>
              <i className="ri-star-half-fill"></i>
              </div>
            </div>
            <p className="p-4 text-sm xl:text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
              nobis a molestiae, officiis sint delectus illum, dolorum ratione
              minus ut neque animi alias ullam ex voluptate quidem magnam?
              Fugit!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;