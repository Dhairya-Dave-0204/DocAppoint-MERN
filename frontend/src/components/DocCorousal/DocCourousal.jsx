import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import data from "./data";

function DocCourousal() {
  return (
    <div className="px-12 xl:px-60 py-6 mb-20">
      <h2 className="mb-12 text-center text-3xl md:text-6xl font-semibold text-primary">
        Discover the best doctors
      </h2>

      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          520: {
            slidesPerView: 2,
          },
          950: {
            slidesPerView: 3,
          },
        }}
        loop={true}
        spaceBetween={20}
        freeMode={true}
        centeredSlides={true}
        fadeEffect={true}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative items-center text-center flex flex-col gap-6 mb-12 transition-all duration-500 hover:shadow-lg rounded-3xl px-6 py-8 border-2 border-slate-100 hover:border-slate-200">
              <div className="h-[150px] w-[150px] border-[3px] border-primary rounded-[50%]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="rounded-[50%] w-36 h-36 border-4"
                />
              </div>

              <h3 className="text-2xl text-primary font-medium">{item.name}</h3>

              <p className="font-light">{item.description}</p>

              <button className="px-4 py-2 bg-primary text-white font-medium rounded-xl transition-all duration-500 hover:scale-105">
                View More
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default DocCourousal;
