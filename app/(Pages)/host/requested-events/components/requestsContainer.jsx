"use client";
import React from "react";
import { useRouter } from "next/navigation";

const RequestsContainer = () => {
  const router = useRouter();
  return (
    <div className="mt-10 rounded-[20px] shadow-blog-card">
      <div className="w-full text-left flex gap-6 p-9">
        <img
          src="/images/guitarBoy.png"
          alt=""
          className="w-44 h-32 object-cover rounded-lg"
        />
        <div>
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-bold">Citywide music event</h3>
            <p className="text-[#35A600]">
              <span className="mb-[2px] inline-block rounded-full border-4 h-0 w-0 border-[#35A600] mr-2"></span>
              Pending
            </p>
          </div>
          <h6 className="mt-4 font-medium opacity-60">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </h6>
        </div>
      </div>
      <div className="w-full text-left flex gap-6 p-9 border-t border-dark20">
        <img
          src="/images/guitarBoy.png"
          alt=""
          className="w-44 h-32 object-cover rounded-lg"
        />
        <div>
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-bold">Citywide music event</h3>
            <p className="text-[#35A600]">
              <span className="mb-[2px] inline-block rounded-full border-4 h-0 w-0 border-[#EF0909] mr-2"></span>
              Pending
            </p>
          </div>
          <h6 className="mt-4 font-medium opacity-60">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </h6>
        </div>
      </div>
      <div className="w-full text-left flex gap-6 p-9 border-t border-dark20">
        <img
          src="/images/guitarBoy.png"
          alt=""
          className="w-44 h-32 object-cover rounded-lg"
        />
        <div>
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-bold">Citywide music event</h3>
            <p className="text-[#35A600]">
              <span className="mb-[2px] inline-block rounded-full border-4 h-0 w-0 border-[#35A600] mr-2"></span>
              Pending
            </p>
          </div>
          <h6 className="mt-4 font-medium opacity-60">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </h6>
        </div>
      </div>
      <div className="w-full text-left flex gap-6 p-9 border-t border-dark20">
        <img
          src="/images/guitarBoy.png"
          alt=""
          className="w-44 h-32 object-cover rounded-lg"
        />
        <div>
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-bold">Citywide music event</h3>
            <p className="text-[#35A600]">
              <span className="mb-[2px] inline-block rounded-full border-4 h-0 w-0 border-[#EF0909] mr-2"></span>
              Pending
            </p>
          </div>
          <h6 className="mt-4 font-medium opacity-60">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </h6>
        </div>
      </div>
    </div>
  );
};

export default RequestsContainer;
