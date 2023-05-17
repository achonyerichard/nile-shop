import { useContext } from "react";

import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { FaEye } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { WishListContext } from "../../contexts/wishlist-context";

const Wishlist = () => {
  const { wishlistItem, clearItemFromWishList } = useContext(WishListContext);

  const removeItem = (product) => {
    clearItemFromWishList(product);
  };
  return (
    <>
      <Navigation />

      <section className="md:mt-28 mt-28 w-full px-4 md:px-40 mx-auto grid grid-cols-1 lg:grid-cols-1 md:grid-cols-1  justify-center gap-y-4 md:gap-y-10 gap-x-4   mb-5">
       <div className="h-screen">
        <header className="pb-2">
          <h2 className="text-2xl md:text-4xl font-medium text-center text-black ">
            Wishlist Items
          </h2>
        </header>
        {wishlistItem.length > 0 ? (
          <>
            {wishlistItem.map((item) => (
              <div
                key={item.id}
                className="md:w-full bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl "
              >
                <div className="flex items-center">
                  <div className="w-1/2">
                    <img
                      src={item.image}
                      alt="Product"
                      className="w-full h-60 md:h-60 md:w-full object-cover rounded-t-xl"
                    />
                  </div>

                  <div className="px-4 py-3 w-1/2">
                    <span className="text-gray-400 mr-3 uppercase text-xs">
                      {item.category}
                    </span>
                    <p className="text-lg font-bold text-black truncate block capitalize">
                      {item.product}
                    </p>
                    <div className="md:flex space-y-2 md:space-y-0 items-center justify-between  md:justify-center">
                      <div className="md:w-1/3">
                        <p className="text-lg font-semibold text-black cursor-auto md:my-3">
                          <span>&#8358;</span>
                          {`${item.price}`}
                        </p>
                      </div>

                      <div className="flex md:justify-center md:w-1/3">
                        <Link to={`/product/${item.id}`}>
                          <button className="rounded px-2 py-1 text-md flex items-center gap-2 bg-[#DD8888] text-white hover:bg-[#bd5a5a] duration-300">
                            <p>View</p>
                            <FaEye />
                          </button>
                        </Link>
                      </div>
                      <div className="md:ml-auto md:w-1/3">
                        <button
                          onClick={() => removeItem(item)}
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
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Wishlist;
