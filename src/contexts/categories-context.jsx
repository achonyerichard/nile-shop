/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import { createContext } from "react";

import useApi from "../hooks/useApi";

export const CategoryContext = createContext({
  categoryData: {},
  setCategoryData: () => {},
});

export const CategoryProvider = ({ children }) => {
  const [categoryData, setCategoryData] = useState([]);

  const [data] = useApi(
    "https://caroapp-2sc7.onrender.com/api/category/allcategories"
  );
  useEffect(() => {
    setCategoryData(data);
  }, [data]);

  const value = { categoryData, setCategoryData };
  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};
