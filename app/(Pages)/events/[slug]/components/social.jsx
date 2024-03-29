import {
  FacbookSimple,
  InstagramSimple,
  LinkedinSimple,
  TwitterSimple,
} from "@/icons";

const Social = () => {
  return (
    <div className="mt-36 py-20 bg-primary text-white">
      <div className="w-3/5 m-auto text-center font-bold">
        <h1 className="text-4xl">Follow citywide music event</h1>
        <h6 className="mt-4">
          You can find out all the latest news and information about Citywide
          Music Event by following them on social media, or browsing their
          official website.
        </h6>
        <div className="mt-6 flex justify-center gap-6">
          <div className="w-11 h-11 flex items-center justify-center bg-white rounded-full">
            <InstagramSimple />
          </div>
          <div className="w-11 h-11 flex items-center justify-center bg-white rounded-full">
            <FacbookSimple />
          </div>
          <div className="w-11 h-11 flex items-center justify-center bg-white rounded-full">
            <TwitterSimple />
          </div>
          <div className="w-11 h-11 flex items-center justify-center bg-white rounded-full">
            <LinkedinSimple />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
