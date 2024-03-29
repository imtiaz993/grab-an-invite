"use client";
import React from "react";
import { useRouter } from "next/navigation";
import CustomButton from "@/components/common/customButton";

const RequestsContainer = () => {
  const router = useRouter();
  return (
    <div className="my-10 rounded-[20px] shadow-blog-card">
      <div className="w-full text-left flex gap-6 p-9 pb-8">
        <img
          src="/images/guitarBoy.png"
          alt=""
          className="w-44 h-32 object-cover rounded-lg"
        />
        <div>
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-bold">Citywide music event</h3>
            <p className="text-[#FA4C20]">Attended 2 months ago</p>
          </div>
          <div className="mt-4 flex gap-2 items-center">
            <img
              src="/images/guitarBoy.png"
              alt=""
              className="h-6 w-6 object-cover rounded-full"
            />
            <p>David Roy</p>
          </div>
          <h6 className="mt-4 font-medium opacity-60">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </h6>
          <div className="mt-5 ">
            <CustomButton
              width="w-52"
              text="Accept This Request"
              onClick={() => {}}
              style="mr-6"
            />
            <CustomButton
              width="w-52"
              text="Reject This Request"
              onClick={() => {}}
              outlined
            />
          </div>
        </div>
      </div>
      <div className="w-full text-left flex gap-6 p-9 border-t border-dark20 pb-8">
        <img
          src="/images/guitarBoy.png"
          alt=""
          className="w-44 h-32 object-cover rounded-lg"
        />
        <div>
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-bold">Citywide music event</h3>
            <p className="text-[#FA4C20]">Attended 2 months ago</p>
          </div>
          <div className="mt-4 flex gap-2 items-center">
            <img
              src="/images/guitarBoy.png"
              alt=""
              className="h-6 w-6 object-cover rounded-full"
            />
            <p>David Roy</p>
          </div>
          <h6 className="mt-4 font-medium opacity-60">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </h6>
          <div className="mt-5 ">
            <CustomButton
              width="w-52"
              text="Accept This Request"
              onClick={() => {}}
              style="mr-6"
            />
            <CustomButton
              width="w-52"
              text="Reject This Request"
              onClick={() => {}}
              outlined
            />
          </div>
        </div>
      </div>
      <div className="w-full text-left flex gap-6 p-9 border-t border-dark20 pb-8">
        <img
          src="/images/guitarBoy.png"
          alt=""
          className="w-44 h-32 object-cover rounded-lg"
        />
        <div>
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-bold">Citywide music event</h3>
            <p className="text-[#FA4C20]">Attended 2 months ago</p>
          </div>
          <div className="mt-4 flex gap-2 items-center">
            <img
              src="/images/guitarBoy.png"
              alt=""
              className="h-6 w-6 object-cover rounded-full"
            />
            <p>David Roy</p>
          </div>
          <h6 className="mt-4 font-medium opacity-60">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </h6><div className="mt-5 ">
            <CustomButton
              width="w-52"
              text="Accept This Request"
              onClick={() => {}}
              style="mr-6"
            />
            <CustomButton
              width="w-52"
              text="Reject This Request"
              onClick={() => {}}
              outlined
            />
          </div>
        </div>
      </div>
      <div className="w-full text-left flex gap-6 p-9 border-t border-dark20 pb-8">
        <img
          src="/images/guitarBoy.png"
          alt=""
          className="w-44 h-32 object-cover rounded-lg"
        />
        <div>
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-bold">Citywide music event</h3>
            <p className="text-[#FA4C20]">Attended 2 months ago</p>
          </div>
          <div className="mt-4 flex gap-2 items-center">
            <img
              src="/images/guitarBoy.png"
              alt=""
              className="h-6 w-6 object-cover rounded-full"
            />
            <p>David Roy</p>
          </div>
          <h6 className="mt-4 font-medium opacity-60">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </h6>
          <div className="mt-5 ">
            <CustomButton
              width="w-52"
              text="Accept This Request"
              onClick={() => {}}
              style="mr-6"
            />
            <CustomButton
              width="w-52"
              text="Reject This Request"
              onClick={() => {}}
              outlined
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestsContainer;
