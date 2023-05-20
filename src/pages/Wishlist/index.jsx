import { useContext, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { FaEye } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { WishListContext } from "../../contexts/wishlist-context";
import useApi from "../../hooks/useApi";
import axios from "axios"

import { useAuthContext } from "../../hooks/useAuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Wishlist = () => {
  const {  clearItemFromWishList, } = useContext(WishListContext);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  const user = useAuthContext();
  const token = user?.user?.token;
  async function handleSubmit(product) {
    setLoading(true);

  
    await axios
      .delete(
        `https://caroapp-2sc7.onrender.com/api/favourite/delete/${product?.id}`,
        
        {
          headers: {
            "x-auth-token": token,
          },
        }
      )
      .then((result) => {
        console.log("Post request, results", result);
  
        setLoading(false);
        setSuccess("Deleted Succesfully");
     
      })
      .catch((error) => {
        console.log("Errors", error);
        setError(error.message);
        setLoading(false);
      });
  }



 useEffect(() => {
  if (error) {
    toast.error(error, {
      position: toast.POSITION.TOP_RIGHT,
    });
  } else if (success) {
    toast.success(success, {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
}, [error, success]);

  const [data] = useApi(
    `https://caroapp-2sc7.onrender.com/api/favourite/mywishlist`
  );
  console.log(data);
  const removeItem = (product) => {
    clearItemFromWishList(product);
    handleSubmit(product)
  };

  
  return (
    <>
      <Navigation />
      <ToastContainer
              position="center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          
      <section className="md:mt-28 mt-28 w-full px-4 md:px-20  ">
     
      <header className="pb-2">
          <h2 className="text-2xl md:text-4xl font-medium text-center text-black ">
            Wishlist Items
          </h2>
        </header>
        <main  className="md:mt-28 mt-28 w-full px-4 md:px-20  grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2  justify-center gap-y-4 md:gap-y-10 gap-x-4   mb-5">

      

        {data?.length > 0 ? (
          <>
            {data?.map((item) => (
              <div
                key={item.id}
                className="md:w-full bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl mb-5"
              >
                <div className="flex items-center">
                  <div className="w-1/2">
                    <img
                      src={item.image}
                      alt="Product"
                      className="w-full h-60 md:h-60 md:w-full object-cover rounded-t-xl"
                    />
                  </div>

                  <div className="px-4 py-3 2">
                    <span className="text-gray-400 mr-3 uppercase text-xs">
                      {item?.categoryName}
                    </span>
                    <p className="text-lg font-bold text-black truncate block capitalize">
                      {item?.name}
                    </p>
                    <div className="md:flex flex-col space-y-2 md:space-y-0 items-center justify-between  md:justify-center">
                      <div className="">
                        <p className="text-lg font-semibold text-black cursor-auto md:my-3">
                          <span>&#8358;</span>
                          {`${item?.price}`}
                        </p>
                      </div>

                      <div className="flex md:justify-center ">
                        <Link to={`/product/${item?.Productid}`}>
                          <button className="rounded px-2 py-1 text-md flex items-center gap-2 bg-[#DD8888] text-white hover:bg-[#bd5a5a] duration-300">
                            <p>View</p>
                            <FaEye />
                          </button>
                        </Link>
                      </div>
                      <div className="pt-2 ">
                        <button
                          onClick={() => removeItem(item)}
                          disabled={loading}
                          className="rounded px-2 py-1 text-md flex items-center gap-2 bg-[#DD8888] text-white hover:bg-[#bd5a5a] duration-300"
                        >
                          <p>Remove</p>
                          <RiDeleteBinLine />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className="h-screen flex justify-center ">
          <h1 className="text-center text-black  text-2xl">
            No items added to WishList
          </h1>
          </div>
        )}
        </main>
      </section>
      <Footer />
    </>
  );
};

export default Wishlist;
