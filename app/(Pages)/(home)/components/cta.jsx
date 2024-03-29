'use client'
import { useRouter } from "next/navigation";
import CustomButton from "@/components/common/customButton";

const CTA = () => {
  const router = useRouter();
  return (
    <div className="pt-14 text-white bg-primary">
      <div className="text-center flex flex-col items-center ">
        <h1 className="text-4xl font-bold w-3/5">
          Create your event with the best online ticketing system
        </h1>
        <h6 className="w-7/12 mt-4 font-medium opacity-70">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.{" "}
        </h6>
      </div>
      <div className="mt-10 pl-[9.3%] pr-[5%] flex justify-between">
        <div className="mb-16">
          <h6 className="w-full font-medium mt-4 opacity-70">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </h6>
          <div className="flex items-center mt-5">
            <img src="/images/mountain-sun.png" alt="" className="" />
            <h2>Event creation and ticketing</h2>
          </div>
          <div className="flex items-center">
            <img src="/images/customize-event-icon.png" alt="" />
            <h2>Customizable event pages</h2>
          </div>
          <div className="flex items-center">
            <img src="/images/thumbsup.png" alt="" />
            <h2>Flexible event payouts</h2>
          </div>
          <CustomButton
              width="w-56"
              text="Create an Account"
              onClick={() => router.push("/signup")}
              style='mt-11'
            type="submit"
            />
        </div>
        <img
          src="/images/girl-using-laptop.png"
          alt=""
          className="mb-12 w-2/3 object-scale-down"
        />
      </div>
    </div>
  );
};

export default CTA;
