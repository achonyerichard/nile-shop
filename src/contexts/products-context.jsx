/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import { createContext } from "react";
import useApi from "../hooks/useApi";

export const ProductsContext = createContext({
  productData: {},
  setProductData: () => {},
  filteredProducts: {},
  setFilteredProducts: () => {},
  filterProductsByCategory: () => {},
  filterProductsBySearch: () => {},
});

export const ProductsProvider = ({ children }) => {
  const [productData, setProductData] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const filterProductsByCategory = (category) => {
    const filtered = productData.filter(
      (product) => product?.categoryName === category?.name
    );
    setFilteredProducts(filtered);
  };

  const filterProductsBySearch = (item) => {
    console.log("ITEM", item);
    const filtered = productData.filter((product) => product?.categoryName.toLowerCase().includes(item.toLowerCase()) || product?.name.toLowerCase().includes(item.toLowerCase()));
    console.log("filtetres", filtered);
    setFilteredProducts(filtered);
  };
  

  const [data] = useApi(
    "https://caroapp-2sc7.onrender.com/api/product/products"
  );
  useEffect(() => {
    setProductData(data);
  }, [data]);

  const value = {
    productData,
    setProductData,
    filteredProducts,
    setFilteredProducts,
    filterProductsByCategory,
    filterProductsBySearch,
  };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
