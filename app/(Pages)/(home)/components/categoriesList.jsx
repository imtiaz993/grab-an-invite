const CategoriesList = () => {
  const categories = [
    { image: "/images/categoryCinema.png", name: "Cinemas" },
    { image: "/images/goalkeeper.png", name: "Sports" },
    { image: "/images/man-playing-guitar.png", name: "Music" },
    { image: "/images/holi-festival.png", name: "Festival" },
    { image: "/images/large-crowd.png", name: "Theatres" },
  ];

  return (
    <div className="text-dark flex justify-between">
      {categories.map((category, index) => (
        <div key={index} className="w-2/12 cursor-pointer">
          <img
            src={category.image}
            alt=""
            className="h-40 max-h-40 w-full object-cover rounded-[10px]"
          />
          <h2 className="font-semibold text-[22px] text-center pt-5">
            {category.name}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default CategoriesList;
