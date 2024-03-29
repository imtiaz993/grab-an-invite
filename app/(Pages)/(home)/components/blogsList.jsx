import BlogCard from "@/components/blogCard";

const BlogsList = () => {
  return (
    <div className="">
      <div className="text-center flex flex-col items-center">
        <h1 className="text-4xl font-bold">Our latest blog</h1>
        <h6 className="mt-4 opacity-70 font-medium w-7/12">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.{" "}
        </h6>
      </div>
      <div className="grid grid-cols-3 gap-7 mt-16">
        <BlogCard
          imageUrl="/images/football-with-soccer-players.png"
          date="66Loop June 7, 2021"
          title="Why do you need a Website?"
          description="In any industry, an online presence can be critical to the success of a business. Many businesses still fail to recognize that most of their"
          buttonText="Learn More"
        />
        <BlogCard
          imageUrl="/images/football-with-soccer-players.png"
          date="66Loop June 7, 2021"
          title="Why do you need a Website?"
          description="In any industry, an online presence can be critical to the success of a business. Many businesses still fail to recognize that most of their"
          buttonText="Learn More"
        />
        <BlogCard
          imageUrl="/images/football-with-soccer-players.png"
          date="66Loop June 7, 2021"
          title="Why do you need a Website?"
          description="In any industry, an online presence can be critical to the success of a business. Many businesses still fail to recognize that most of their"
          buttonText="Learn More"
        />
      </div>
    </div>
  );
};

export default BlogsList;
