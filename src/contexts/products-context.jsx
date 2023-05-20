/* eslint-disable react/prop-types */

import { useState, useEffect, } from "react";
import { createContext } from "react";
import getProducts from "../data/products";






export const ProductsContext = createContext({
  productData: {},
  setProductData:()=>{},
  filteredProducts: {},
  setFilteredProducts:()=>{},
  filterProductsByCategory:()=>{}
 
});

export const ProductsProvider = ({ children }) => {
  const [productData, setProductData] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);



  const filterProductsByCategory = (category) => {
    const filtered = productData.filter((product) => product.category.toLowerCase() === category.name.toLowerCase());
    setFilteredProducts(filtered);
    console.log(category);
  };
  useEffect(()=>{
    console.log("filter",filteredProducts);
  
  
    },[filteredProducts])

  useEffect(()=>{
    const copyData = getProducts()
   
    setProductData(copyData)
    console.log(copyData);
  
  
    },[])
    
  
  
  const value = { productData,setProductData,filteredProducts, setFilteredProducts,filterProductsByCategory, };
  return (

    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
