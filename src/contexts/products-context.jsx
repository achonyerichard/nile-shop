/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import { createContext } from "react";
import getProducts from "../data/products";




export const ProductsContext = createContext({
  productData: {},
  setProductData:()=>{}
 
});

export const ProductsProvider = ({ children }) => {
  const [productData, setProductData] = useState([]);
  

  useEffect(()=>{
    const copyData = getProducts()
   
    setProductData(copyData)
  
  
    },[])
    
  
  
  const value = { productData,setProductData };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
