import { Star } from "@/icons";

export const renderRating = (rating) =>
  Array.from({ length: 5 }).map((_, index) => (
    <div key={index} className="w-6 h-6">
      <Star isFill={index < rating} />
    </div>
  ));

export const changeRating = (rating, setRating) =>
  Array.from({ length: 5 }, (_, index) => (
    <div key={index} className="w-6 h-6 cursor-pointer" onClick={() => setRating(index)}>
      <Star isFill={index < rating} />
    </div>
  ));
