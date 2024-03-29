"use client";
import React, { useRef, useState } from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "@/icons";
import CustomButton from "@/components/common/customButton";

const HeroSection = () => {
  const swiperRef = useRef();
  const [swiperIndex, setSwiperIndex] = useState(0);

  return (
    <div className="w-full relative">
      <Swiper
        ref={swiperRef}
        slidesPerView={1}
        modules={[Pagination]}
        pagination={{ clickable: true }}
      >
        <div className="w-full absolute mt-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 mb-10 flex justify-between px-[6.5%]">
          <div
            onClick={() => {
              swiperRef.current.swiper.slidePrev();
              setSwiperIndex(swiperRef.current.swiper.activeIndex);
            }}
            className={`cursor-pointer h-12 w-12 rounded-full flex items-center justify-center pr-1 ${
              swiperIndex > 0 ? " bg-button-primary" : "bg-white bg-opacity-20"
            }`}
          >
            <ChevronLeft />
          </div>
          <div
            onClick={() => {
              swiperRef.current.swiper.slideNext();
              setSwiperIndex(swiperRef.current.swiper.activeIndex);
            }}
            className={`cursor-pointer h-12 w-12 rounded-full flex items-center justify-center pl-1 ${
              swiperIndex < 2 - 1
                ? " bg-button-primary"
                : "bg-white bg-opacity-20"
            }`}
          >
            <ChevronRight />
          </div>
        </div>
        <SwiperSlide>
          <div className="h-full select-none">
            <div className="absolute bottom-8 w-full">
              <div className=" w-4/5 mx-auto flex justify-between items-end">
                <h1 className="text-[#fff] text-5xl font-black text-left w-4/6">
                  Grab Your Free Invite To The Best Exclusive Events!
                </h1>
                <CustomButton
                    width='w-56'
                    text="Tickets On Sale Now"
                  onClick={() => {}}
                  style={"ml-5 mb-3"}
                />
              </div>
            </div>
            <img
              className="w-full max-h-[70vh] object-cover "
              src="/images/goalkeeper.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full select-none">
            <div className="absolute bottom-8 w-full">
              <div className=" w-4/5 mx-auto flex justify-between items-end">
                <h1 className="text-[#fff] text-5xl font-black text-left w-4/6">
                  Grab Your Free Invite To The Best Exclusive Events!
                </h1>
                <CustomButton
                    width='w-56'
                    text="Tickets On Sale Now"
                  onClick={() => {}}
                  style={"ml-5 mb-3"}
                />
              </div>
            </div>
            <img
              className="w-full max-h-[70vh] object-cover "
              src="/images/goalkeeper.png"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSection;
