import { ReviewsIcon } from "@/icons";

const Reviews = () => {
  return (
    <div className="mt-24 mb-36 text-dark">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold w-1/2 text-center">
          Citywide Fans Reviews
        </h1>
        <h6 className="mt-16 opacity-60 w-1/2 text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </h6>
      </div>

      <div className="flex mt-12 justify-center gap-8">
        <div className="pl-5 relative rounded-[20px] bg-review h-48 w-1/4">
          <p className="text-xl font-bold mt-14">Roberto Kavali</p>
          <p className="mt-2 font-medium opacity-60">
            Working with this marketing studio was a game-changer for our
            business.
          </p>
          <div className="absolute top-10 right-10">
            <ReviewsIcon />
          </div>
        </div>
        <div className="pl-5 relative rounded-[20px] bg-review h-48 w-1/4">
          <p className="text-xl font-bold mt-14">Roberto Kavali</p>
          <p className="mt-2 font-medium opacity-60">
            Working with this marketing studio was a game-changer for our
            business.
          </p>
          <div className="absolute top-10 right-10">
            <ReviewsIcon />
          </div>
        </div>
        <div className="pl-5 relative rounded-[20px] bg-review h-48 w-1/4">
          <p className="text-xl font-bold mt-14">Roberto Kavali</p>
          <p className="mt-2 font-medium opacity-60">
            Working with this marketing studio was a game-changer for our
            business.
          </p>
          <div className="absolute top-10 right-10">
            <ReviewsIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
