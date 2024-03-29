import { ArrowRight } from "../icons";

const BlogCard = ({ imageUrl, date, title, description, buttonText }) => {
  return (
    <div className="text-dark w-full rounded-[10px] shadow-blog-card">
      <div>
        <img src={imageUrl} alt="" className="w-full object-cover" />
      </div>
      <div className="p-5">
        <h6 className="text-secondary font-medium text-xs">{date}</h6>
        <h1 className="text-lg font-bold">{title}</h1>
        <h6 className="font-medium opacity-70 mt-4">{description}</h6>
        <div className="flex mt-4 text-secondary font-semibold items-center gap-2">
          <button className="">{buttonText}</button> <ArrowRight />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
