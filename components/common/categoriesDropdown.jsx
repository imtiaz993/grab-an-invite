import { useEffect, useRef, useState } from "react";

const CategoriesDropdown = () => {
  const categoriesDropdownRef = useRef(null);
  const [categoriesMenu, setCategoriesMenu] = useState(false);
  
  const handleClickOutside = (event) => {
    if (
      categoriesDropdownRef.current &&
      !categoriesDropdownRef.current.contains(event.target)
    ) {
      setCategoriesMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
  return (
    <div className="inline relative" ref={categoriesDropdownRef}>
      <button
        className="w-[88px] h-5 mr-10"
        onClick={() => setCategoriesMenu((prev) => !prev)}
      >
        Categories
      </button>
      {categoriesMenu && (
        <div className="absolute top-9 -left-32">
          <div className="p-6 bg-white text-dark flex justify-between w-[816px] rounded-lg">
            <div>
              <h1 className="font-bold">Cinemas</h1>
              <ul>
                <li className="opacity-60 font-medium mt-4">Cinema</li>
                <li className="opacity-60 font-medium mt-2">Cinema</li>
                <li className="opacity-60 font-medium mt-2">Cinema</li>
                <li className="opacity-60 font-medium mt-2">Cinema</li>
                <li className="opacity-60 font-medium mt-2">Cinema</li>
              </ul>
            </div>

            <div>
              <h1 className="font-bold">Sports</h1>
              <ul>
                <li className="opacity-60 font-medium mt-4">Cinema</li>
                <li className="opacity-60 font-medium mt-2">Cinema</li>
                <li className="opacity-60 font-medium mt-2">Cinema</li>
                <li className="opacity-60 font-medium mt-2">Cinema</li>
                <li className="opacity-60 font-medium mt-2">Cinema</li>
              </ul>
            </div>

            <div>
              <h1 className="font-bold">Music</h1>
              <ul>
                <li className="opacity-60 font-medium mt-4">Music</li>
                <li className="opacity-60 font-medium mt-2">Music</li>
                <li className="opacity-60 font-medium mt-2">Music</li>
                <li className="opacity-60 font-medium mt-2">Music</li>
                <li className="opacity-60 font-medium mt-2">Music</li>
              </ul>
            </div>

            <div>
              <h1 className="font-bold">Festival</h1>
              <ul>
                <li className="opacity-60 font-medium mt-4">Festival</li>
                <li className="opacity-60 font-medium mt-2">Festival</li>
                <li className="opacity-60 font-medium mt-2">Festival</li>
                <li className="opacity-60 font-medium mt-2">Festival</li>
                <li className="opacity-60 font-medium mt-2">Festival</li>
              </ul>
            </div>

            <div>
              <h1 className="font-bold mr-16">Theatres</h1>
              <ul>
                <li className="opacity-60 font-medium mt-4">Theatres</li>
                <li className="opacity-60 font-medium mt-2">Theatres</li>
                <li className="opacity-60 font-medium mt-2">Theatres</li>
                <li className="opacity-60 font-medium mt-2">Theatres</li>
                <li className="opacity-60 font-medium mt-2">Theatres</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoriesDropdown;
