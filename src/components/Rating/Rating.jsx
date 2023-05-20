/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import axios from "axios";
import { useAuthContext } from "../../hooks/useAuthContext";

const Rating = ({ reviews, amount, id }) => {
  const [rating, setRating] = useState(0);
  const { user } = useAuthContext();
  const token = user?.token;

  async function handleRate(rate) {
    setRating(rate.rating);
    await axios
      .put(
        `https://caroapp-2sc7.onrender.com/api/product/review/${id}`,
        {
          review: rating,
        },
        {
          headers: {
            "x-auth-token": token,
          },
        }
      )
      .then((result) => {
        console.log("Post request, results", result);
      })
      .catch((error) => {
        console.log("Errors", error);
      });
  }
  useEffect(() => {
    console.log(rating)
    console.log("revv",reviews);
  }, [rating,reviews,amount]);
  return <Rater total={5} rating={reviews/amount} onRate={handleRate} />;
};
export default Rating;
