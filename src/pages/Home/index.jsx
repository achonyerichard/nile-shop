import CategoryList from "../../components/categoryList";
import Pagination from "../../components/pagination/Pagination";
import Products from "../../components/products/Products";

import { useContext, useState } from "react";
import { ProductsContext } from "../../contexts/products-context";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import { CategoryContext } from "../../contexts/categories-context";
import CategoryPills from "../../components/categoryPills";
import TopCategories from "../../components/topCategories/index.jsx";

const Home = () => {
  const {
    productData,
    filteredProducts,
    filterProductsByCategory,
    setFilteredProducts,
  } = useContext(ProductsContext);
  const { categoryData } = useContext(CategoryContext);

  const displayProducts =
    filteredProducts.length > 0 ? filteredProducts : productData;

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = displayProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Navigation />{" "}
      <div className="hero-bg flex items-center justify-center text-center md:mt-24 mt-20">
        <div className="bg-[#975720] bg-opacity-90 w-50 text-white rounded-md w-100 m-5 p-5 sm:m-10 sm:p-10 md:max-w-xl lg:rounded-lg">
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
              <CategoryPills
                categoryData={categoryData}
                filterProductsByCategory={filterProductsByCategory}
                productData={productData}
                setFilteredProducts={setFilteredProducts}
              />

              <div className="   md:w-1/5 bg-white hidden md:block  shadow-xl  ">
                <div className="  h-screen  top-20 sticky">
                  <header className="py-2">
                    <h2 className="text-2xl font-semibold text-center text-black ">
                      Categories
                    </h2>
                  </header>
                  <div className="flex justify-center h-72">
                    <CategoryList
                      categoryData={categoryData}
                      filterProductsByCategory={filterProductsByCategory}
                      productData={productData}
                      setFilteredProducts={setFilteredProducts}
                    />
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
                    <TopCategories
                      filterProductsByCategory={filterProductsByCategory}
                      setFilteredProducts={setFilteredProducts}
                      productData={productData}
                    />
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
      <Footer />
    </>
  );
};

export default Home;
