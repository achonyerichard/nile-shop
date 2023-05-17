/* eslint-disable react/prop-types */

import { createContext, useState,useEffect } from "react";


const addwishlistItem = (wishlistItem, productToAdd) => {

  const existingwishlistItem = wishlistItem.find(
    (wishlistItem) => wishlistItem.id === productToAdd.id
  );

  if (existingwishlistItem) {
    return wishlistItem.map((wishlistItem) =>
      wishlistItem.id === productToAdd.id
        ? ({ ...wishlistItem, quantity: wishlistItem.quantity + 1 })
        : wishlistItem
    );
  }

  return [...wishlistItem, { ...productToAdd, quantity: 1 }];
};

const removewishlistItem = (wishlistItem, wishlistItemToRemove) => {
  const existingwishlistItem = wishlistItem.find(
    (wishlistItem) => wishlistItem.id === wishlistItemToRemove.id
  );

  if (existingwishlistItem.quantity === 1) {
    return wishlistItem.filter((wishlistItem) => wishlistItem.id !== wishlistItemToRemove.id);
  }

  return wishlistItem.map((wishlistItem) =>
      wishlistItem.id === wishlistItemToRemove.id
        ? { ...wishlistItem, quantity: wishlistItem.quantity - 1 }
        : wishlistItem
  )
}
const clearWishlistItem =(wishlistItem,wishlistItemToClear) =>{
  return wishlistItem.filter((wishlistItem) => wishlistItem.id !== wishlistItemToClear.id);
}


export const WishListContext = createContext({

  setIsCartOpen: () => {},
  wishlistItem: [],
  addItemToWishLlist: () => {},
  wishlistCount:0,
  removeItemToWishLlist:() =>{},
  clearItemFromWishList:()=>{},
  wishListTotal:0,
});



export const WishListProvider = ({ children }) => {


  const [wishlistItem, setWishlistItem] = useState(() => {
    const storedState = localStorage.getItem('wishlistItems');
    return storedState ? JSON.parse(storedState) :  [] ;
  });
  const [wishlistCount,setwishlistCount] = useState(0);
  const [wishListTotal,setWishlistTotal] = useState(0)


  useEffect(() => {
   const newwishlistCount = wishlistItem.reduce((total,wishlistItem)=> total + wishlistItem.quantity,0)
   setwishlistCount((newwishlistCount));
   
  }  
  , [wishlistItem])

  const addItemToWishLlist = (productToAdd) => {
   
    setWishlistItem(addwishlistItem(wishlistItem, productToAdd));
   
  };
  useEffect(() => {
    localStorage.setItem('wishlistItems', JSON.stringify(wishlistItem));
    console.log("ct",wishlistItem);
  }, [wishlistItem]);

  
   useEffect(() => {
     const newWishListTotal = wishlistItem.reduce(
       (total, wishlistItem) => total + wishlistItem.quantity * wishlistItem.price,
       0
     );
     setWishlistTotal(newWishListTotal.toFixed(2));
    
   }, [wishlistItem]);


    const removeItemToWishLlist = (wishlistItemToRemove) => {
      setWishlistItem(removewishlistItem(wishlistItem, wishlistItemToRemove));
    };
     const clearItemFromWishList = (wishlistItemToRemove) => {
       setWishlistItem(clearWishlistItem(wishlistItem, wishlistItemToRemove));
     };

  const value = {
    addItemToWishLlist,
    wishlistItem,
    wishlistCount,
    removeItemToWishLlist,
    clearItemFromWishList,
    wishListTotal
  };
  return <WishListContext.Provider value={value}>{children}</WishListContext.Provider>;
};