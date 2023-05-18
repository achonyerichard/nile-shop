import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../contexts/products-context";
import Navigation from "../../components/Navigation";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";

const Profile = () => {
  const [filteredData, setFilteredData] = useState([]);
  const { productData } = useContext(ProductsContext);
  console.log(productData);
  useEffect(() => {
    const filteredProducts = productData.filter(
      (product) => product?.seller === "Richard"
    );
    console.log("prods", filteredProducts);
    setFilteredData(filteredProducts);
  }, [productData]);

  return (
    <>
      {" "}
      <Navigation />
      <main className="mb-20">
        <section className="p-6 md:p-8 lg:px-40 w-full lg:mt-20 mt-10">
          <div className="container mx-auto mt-10">
            <div className="md:flex  my-10 md:gap-x-4 gap-y-6 md:gap-y-0 h-full items-stretch ">
              <div className="md:w-2/3 bg-white md:px-10  md:py-10 py-3 px-4">
                <div className="md:flex justify-between items-center">
                  <div className="block p-2   rounded-lg  w-auto   md:shadow-md hover:bg-gray-100">
                    <div className="flex cursor-pointer flex-col items-center md:justify-center ">
                      <button className="flex cursor-pointer  items-center md:justify-center w-10 h-10  text-pink-100 transition-colors border-solid  shadow-2xl duration-150 bg-[#A16161] rounded-full focus:shadow-outline hover:bg-pink-full">
                        <svg
                          className="h-16 w-12 fill-white"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z" />
                        </svg>
                      </button>
                      <p className="pt-2 text-lg text-[#908D7E] font-semibold ">
                        Add Product
                      </p>
                    </div>
                  </div>

                  <h2 className="font-semibold text-sm text-[#908D7E] text-center md:text-right ">
                   Edit and delete your products
                  </h2>
                </div>
                <div className="flex items-center bg-[#F7F7F7] md:mt-10 mt-3 mb-5 p-3">
                  <h3 className="font-semibold text-gray-600 text-sm capitalize w-1/2">
                    Product
                  </h3>
                  <h3 className="font-semibold text-center text-gray-600 text-sm capitalize w-1/4 text-center">
                    Edit
                  </h3>
                  <h3 className="font-semibold text-center text-gray-600 text-sm capitalize w-1/4 text-center">
                    Delete
                  </h3>
                </div>
                {filteredData.map((item) => (
                  <div
                    className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
                    key={item.id}
                  >
                    <div className="flex w-1/2">
                      <div className="w-20">
                        <img
                          className="md:h-24 object-cover"
                          src={item.image}
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col  ml-4 md:flex-grow w-1/2">
                        <span className="font-bold text-black text-sm ">
                          {item.product}
                        </span>
                        <span className="text-red-500 text-xs ">
                          {item.category}
                        </span>
                        <span className="text-gray-500 text-xs ">
                          {item.id}
                        </span>
                      </div>
                    </div>

                    <span className="text-center w-1/4 font-semibold text-sm flex justify-center">
                      <BiEditAlt className="text-[#A16161] text-2xl" />
                    </span>
                    <span className="text-center w-1/4 font-semibold text-sm flex justify-center">
                      <RiDeleteBinLine className="text-[#A16161] text-2xl" />
                    </span>
                  </div>
                ))}

                <Link
                  to="/supermarket"
                  className="flex font-semibold text-[#FF8B1F] font-semibold hover:text-[#FCD733]   text-sm mt-10"
                >
                  <svg
                    className="fill-current mr-2 text-black w-4"
                    viewBox="0 0 448 512"
                  >
                    <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                  </svg>
                  Continue Shopping
                </Link>
              </div>

              <div className="md:w-1/3 bg-white mt-5 md:mt-0">
                <div className="p-4 ">
                  <header className="flex justify-center py-2">
                    <h3 className="font-bold text-2xl text-black">
                      Edit Profile
                    </h3>
                  </header>
                  <form className="flex flex-col" method="POST" action="#">
                    <div className="mb-6 pt-3 rounded bg-gray-200">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                        htmlFor="email"
                      >
                        Full email
                      </label>
                      <input
                        type="text"
                        id="email"
                        className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-[#A16161] transition duration-500 px-3 "
                      />
                    </div>
                    <div className="mb-6 pt-3 rounded bg-gray-200">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                        htmlFor="email"
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        id="email"
                        className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-[#A16161] transition duration-500 px-3 "
                      />
                    </div>
                    <div className="mb-6 pt-3 rounded bg-gray-200">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-[#A16161] transition duration-500 px-3 pb-3"
                      />
                    </div>

                    <button
                      className="bg-[#A16161] hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
                      type="submit"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Profile;
