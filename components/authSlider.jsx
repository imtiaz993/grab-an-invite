"use client";

import React, { useRef } from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const AuthSlider = () => {
  const swiperRef = useRef();
  return (
    <div className="w-1/2">
      <Swiper
        ref={swiperRef}
        slidesPerView={1}
        modules={[Pagination]}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="h-full">
            <div className="absolute bottom-8 w-full">
              <div className=" w-11/12 mx-auto">
                <h1 className="text-[#fff] text-xl font-bold text-center">
                  Buy Tickets
                </h1>
                <h2 className="text-[#fff] font-medium mt-3 text-center">
                  Lorem Ipsum is simply dummy text of the printing and <br />
                  typesetting industry.
                </h2>
              </div>
            </div>
            <img
              className="w-full h-full object-cover"
              src="/images/auth-slider.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full">
            <div className="absolute bottom-8 w-full">
              <div className=" w-11/12 mx-auto">
                <h1 className="text-[#fff] text-xl font-bold text-center">
                  Buy Tickets
                </h1>
                <h2 className="text-[#fff] font-medium mt-3 text-center">
                  Lorem Ipsum is simply dummy text of the printing and <br />
                  typesetting industry.
                </h2>
              </div>
            </div>
            <img
              className="w-full h-full object-cover"
              src="/images/auth-slider.png"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AuthSlider;
