import { useEffect, useState } from "react";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";


const Rating = () => {
    const [rating, setRating] = useState(null);

  const handleRate = (rate) => {
    setRating(rate.rating);
   
  };
  useEffect(()=>console.log(rating),[rating])
  return <Rater total={5} rating={rating} onRate={handleRate} />;
};
export default Rating;
