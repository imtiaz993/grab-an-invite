"use client";
import React, { useState } from "react";

const Filter = () => {
  const [categoriesMenu, setCategoriesMenu] = useState(false);
  const [locationMenu, setLocationMenu] = useState(false);

  return (
    <div className="flex items-center justify-start gap-5 py-[19px] text-white bg-header-background object-cover bg-no-repeat bg-cover px-[12%] w-full">
      <button className="w-40 h-12 border border-[white] rounded-full font-medium">
        On Sale Today
      </button>
      <button className="w-40 h-12 border border-[white] rounded-full font-medium">
        Coming Soon
      </button>
      <div
        className="inline relative"
        onClick={() => setCategoriesMenu((prev) => !prev)}
      >
        <button className="w-52 h-12 border border-[white] rounded-full font-medium">
          Brows by Categories
        </button>
        {categoriesMenu && (
          <div className="absolute top-14">
            <div className="p-4 bg-white text-dark flex justify-between w-52 rounded-lg shadow-blog-card">
              <ul>
                <li className="font-medium ">Cinema</li>
                <li className="font-medium mt-2">Sports</li>
                <li className="font-medium mt-2">Music</li>
                <li className="font-medium mt-2">Festival</li>
                <li className="font-medium mt-2">Theatres</li>
              </ul>
            </div>
          </div>
        )}
      </div>
      <div
        className="inline relative"
        onClick={() => setLocationMenu((prev) => !prev)}
      >
        <button className="w-40 h-12 border border-[white] rounded-full font-medium">
          Brows by Location
        </button>
        {locationMenu && (
          <div className="absolute top-14">
            <div className="p-4 bg-white text-dark flex justify-between w-52 rounded-lg shadow-blog-card">
              <ul>
                <li className="font-medium ">California, USA</li>
                <li className="font-medium mt-2">New Your, USA </li>
                <li className="font-medium mt-2">Georgia, USA </li>
                <li className="font-medium mt-2">Texas, USA </li>
                <li className="font-medium mt-2">Florida, USA </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
