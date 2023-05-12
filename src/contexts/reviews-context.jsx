/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import { createContext } from "react";
import getReviews from "../data/reviews";




export const ReviewsContext = createContext({
  reviewsData: {},
  setReviewsData:()=>{}
 
});

export const ReviewsProvider = ({ children }) => {
  const [reviewsData, setReviewsData] = useState([]);
  

  useEffect(()=>{
    const copyData = getReviews()
   
    setReviewsData(copyData)
  
  
    },[])
    
  
  
  const value = { reviewsData,setReviewsData };
  return (
    <ReviewsContext.Provider value={value}>
      {children}
    </ReviewsContext.Provider>
  );
};
