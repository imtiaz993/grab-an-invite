import React from "react";

const BestSelling = () => {
  return (
    <div className="w-2/3 shadow-blog-card rounded-[20px] p-6 pb-10 flex flex-col justify-between">
      <div>
        <h1 className="font-bold text-2xl">Best Selling</h1>
        <p className="mt-4 text-secondary font-medium text-lg">This week</p>
        <p className="mt-5 opacity-70">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className="w-full h-80 bg-review">
        <p className="text-center pt-36 font-bold text-3xl">Graph Here</p>
      </div>
      <div className="p-4 rounded-lg shadow-blog-card flex justify-between">
        <p className="font-medium">Tickets Sales ( 72 )</p>
        <p className="font-bold">$1,254</p>
      </div>
    </div>
  );
};

export default BestSelling;
