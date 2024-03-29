import { Close } from "@/icons";

const Ad = () => {
  return (
    <div className="mx-36 py-32">
      <div className="relative w-full">
        <img src="/images/ad.png" alt="" className="w-full" />
        <div className="h-9 w-9 flex items-center justify-center rounded-full border absolute top-4 right-4 select-none">
          <Close />
        </div>
      </div>
    </div>
  );
};

export default Ad;
