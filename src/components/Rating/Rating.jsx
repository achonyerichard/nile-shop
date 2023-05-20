/* eslint-disable react/prop-types */
import { useState } from "react";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import axios from "axios";
import { useAuthContext } from "../../hooks/useAuthContext";

const Rating = ({data }) => {
  const [rating, setRating] = useState(0);
  const { user } = useAuthContext();
  const token = user?.token;

  const id =data?.id

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


    console.log("revvuuuu",data?.numberOfReview);

  return <Rater total={5} rating={data?.reviews/data?.numberOfReview}  onRate={handleRate} />;
};
export default Rating;
