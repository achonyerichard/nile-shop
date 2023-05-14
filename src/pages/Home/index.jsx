import CategoryList from "../../components/categoryList";
import Pagination from "../../components/pagination/Pagination";
import Products from "../../components/products/Products";

import { useContext, useState } from "react";
import { ProductsContext } from "../../contexts/products-context";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";

const Home = () => {
  const { productData } = useContext(ProductsContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);
  console.log(productData);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productData.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const options = [
    { name: "All", id: 1 },
    { name: "Electronics", id: 2 },
    { name: "Phones", id: 3 },
    { name: "Accessories", id: 4 },
    { name: "Games", id: 5 },
    { name: "Clothes", id: 6 },
    { name: "Skin Care", id: 7 },
    { name: "Laptops", id: 8 },
  ];
  return (
    <>
    <Navigation/>
      {" "}
      <div className="hero-bg flex items-center justify-center text-center md:mt-24 mt-20">
        <div className="bg-[#975720] bg-opacity-50 w-50 text-white rounded-md w-100 m-5 p-5 sm:m-10 sm:p-10 md:max-w-xl lg:rounded-lg">
          <h1 className="font-bold text-xl mb-2 md:mb-4 md:text-3xl">
            Welcome
          </h1>
          <p>
            Advertise and purchase products from relaible sellers and get
            acquainted to our variety of products
          </p>
          <div className="relative">
            <svg
              className="w-6 h-6 text-white absolute top-3 left-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <input
              type="search"
              placeholder="Search"
              className="border-b-2 w-full border-gray-200 py-3 px-7"
            />
          </div>
        </div>
      </div>
      <section className="mb-20">
        <div className="md:px-20 px-4">
          <div className="w-full max-w-[1920px]  mx-auto ">
            <div className=" md:flex flex-row justify-center  h-full items-stretch lg:gap-4 lg:pt-5 pt-5">
              <div
                className="
                    flex 
                    md:hidden  
                    lg:justify-center lg:items-center 
                    lg:pb-[50px] lg:border-b-[1px]
                    lg:border-appGreen lg:mb-4"
              >
                <div
                  className={`flex max-w-[1920px] mx-auto overflow-x-auto  lg:flex`}
                >
                  {options.map((option) => (
                    <div
                      key={option.id}
                      className={`
                  whitespace-nowrap
                  lg:w-fit lg:max-h-[50px] 
                  lg:h-[50px] border-[1px] 
                  bg-[#A16161]
                  text-white
                  lg:grid lg:place-items-center lg:px-[3rem] px-3 text-xl
                  rounded-full  mx-[8px] hover:bg-[#DD8888] cursor-pointer hover:text-appWhite focus:bg-[#DD8888]
                 }`}
                    >
                      {option.name}
                    </div>
                  ))}
                </div>
              </div>

              <div className="   md:w-1/5 bg-white hidden md:block  shadow-xl  ">
                <div className="  h-screen  top-20 sticky">
                  <header className="py-2">
                    <h2 className="text-2xl font-semibold text-center text-black ">
                      Categories
                    </h2>
                  </header>
                  <div className="flex justify-center h-72">
                    <CategoryList options={options} />
                  </div>
                </div>
              </div>
              <div className=" block  md:w-4/5 pt-5 md:pt-0">
                <div className=" lg:h-auto  ">
                  <div className="flex flex-col justify-center">
                    <header className="pb-2">
                      <h2 className="text-3xl font-medium text-center text-black ">
                        Top Categories
                      </h2>
                    </header>
                    <div className="grid grid-cols-4  md:grid-cols-4  gap-2 pt-5 md:pt-0 ">
                      <div className="rounded border-2 border-purple-400 flex flex-col items-center relative h-20 w-20 md:h-28 md:w-28">
                        <span className="block bg-purple-400 rounded-b absolute sm:h-2 top-0 sm:-top-0.5"></span>
                        <svg
                          className="w-10 h-10 text-gray-600 mt-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                          ></path>
                        </svg>
                        <p className="text-black font-medium mt-1">All</p>
                      </div>

                      <div className="rounded border-2 border-blue-400 flex flex-col items-center relative h-20 w-20 md:h-28 md:w-28">
                        <span className="block bg-blue-400 rounded-b absolute sm:h-2 top-0 sm:-top-0.5"></span>

                        <svg
                          className="w-10 h-10 fill-gray-600 mt-5"
                          fill="none"
                          stroke="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                        >
                          <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" />
                        </svg>
                        <p className="text-black font-medium mt-1">Phones</p>
                      </div>

                      <div className="rounded border-2 border-red-400 flex flex-col items-center relative h-20 w-20 md:h-28 md:w-28">
                        <span className="block bg-red-400 rounded-b absolute sm:h-2 top-0 sm:-top-0.5"></span>

                        <svg
                          className="w-10 h-10 fill-gray-600 mt-5"
                          fill="none"
                          stroke="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 640 512"
                        >
                          <path d="M631.2 96.5L436.5 0C416.4 27.8 371.9 47.2 320 47.2S223.6 27.8 203.5 0L8.8 96.5c-7.9 4-11.1 13.6-7.2 21.5l57.2 114.5c4 7.9 13.6 11.1 21.5 7.2l56.6-27.7c10.6-5.2 23 2.5 23 14.4V480c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V226.3c0-11.8 12.4-19.6 23-14.4l56.6 27.7c7.9 4 17.5.8 21.5-7.2L638.3 118c4-7.9.8-17.6-7.1-21.5z" />
                        </svg>
                        <p className="text-black font-medium mt-1">Clothes</p>
                      </div>

                      <div className="rounded border-2 border-pink-400 flex flex-col items-center relative h-20 w-20 md:h-28 md:w-28">
                        <span className="block bg-pink-400 rounded-b absolute sm:h-2 top-0 sm:-top-0.5"></span>
                        <svg
                          className="w-10 h-10 fill-gray-600 mt-5"
                          fill="none"
                          stroke="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                        >
                          <path d="M392 64h166.54L576 0H192v352h288l17.46-64H392c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h114.18l17.46-64H392c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h140.36l17.46-64H392c-4.42 0-8-3.58-8-8V72c0-4.42 3.58-8 8-8zM158.8 335.01l-25.78-63.26c-2.78-6.81-9.8-10.99-17.24-10.26l-45.03 4.42c-17.28-46.94-17.65-99.78 0-147.72l45.03 4.42c7.43.73 14.46-3.46 17.24-10.26l25.78-63.26c3.02-7.39.2-15.85-6.68-20.07l-39.28-24.1C98.51-3.87 80.09-.5 68.95 11.97c-92.57 103.6-92 259.55 2.1 362.49 9.87 10.8 29.12 12.48 41.65 4.8l39.41-24.18c6.89-4.22 9.7-12.67 6.69-20.07zM480 384H192c-35.35 0-64 28.65-64 64v32c0 17.67 14.33 32 32 32h352c17.67 0 32-14.33 32-32v-32c0-35.35-28.65-64-64-64zm-144 96c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z" />
                        </svg>

                        <p className="text-black font-medium mt-1">
                          Electronics
                        </p>
                      </div>
                    </div>
                    <div>
                      <Products products={currentProducts} />
                    </div>
                    <Pagination
                      itemsPerPage={productsPerPage}
                      total={productData.length}
                      paginate={paginate}
                      currentPage={currentPage}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Home;
