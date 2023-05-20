import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductsContext } from "../../contexts/products-context";
import { FaWhatsapp } from "react-icons/fa";
import ReviewForm from "../../components/Reviews/ReviewForm";
import ReviewList from "../../components/Reviews/ReviewList";

import Pagination from "../../components/pagination/Pagination";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import Rating from "../../components/Rating/Rating";
import useApi from "../../hooks/useApi";

const ProductDetails = () => {
  const { productData } = useContext(ProductsContext);

  const { id } = useParams();
  console.log(id);
  
  const [filteredData, setFilteredData] = useState({});
  console.log("juju", filteredData?.numberOfReview);
  const [data] = useApi(
    `https://caroapp-2sc7.onrender.com/api/comment/product/${id}`
  );
  console.log("comments", data);

  const [currentPage, setCurrentPage] = useState(1);
  const [reviewsPerPage] = useState(3);

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = data.slice(indexOfFirstReview, indexOfLastReview);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  useEffect(() => {
    const filteredProducts = productData.filter(
      (product) => product?.id === id
    );
    console.log("fit", filteredProducts);
    console.log("fit", productData);
    setFilteredData(filteredProducts[0]);
  }, [productData, id]);

  return (
    <>
      <Navigation />
      <div className="py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <Link to="/" className="hover:underline hover:text-gray-600">
              Home
            </Link>
            <span>
              <svg
                className="h-5 w-5 leading-none text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
            <span className="hover:underline hover:text-gray-600">
              {filteredData?.categoryName}
            </span>
            <span>
              <svg
                className="h-5 w-5 leading-none text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
            <span>{filteredData?.name}</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div>
                <div className="  mb-4">
                  <img
                    src={filteredData?.image}
                    className="h-64 md:h-80 w-full rounded-lg"
                  />
                </div>

                <div className="flex -mx-2 mb-4">
                  <template>
                    <div className="flex-1 px-2">
                      <button className="focus:outline-none w-full rounded-lg h-24 md:h-32 bg-gray-100 flex items-center justify-center">
                        <span className="text-2xl"></span>
                      </button>
                    </div>
                  </template>
                </div>
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="mb-2 leading-tight tracking-tight font-bold text-black text-2xl md:text-3xl">
                {filteredData?.name}
              </h2>
              <p className="text-gray-500 text-sm">
                By{" "}
                <a href="#" className="text-gray-800 hover:underline">
                  {`${filteredData?.firstname} ${filteredData?.lastname}`}
                </a>
              </p>

              <div className="flex items-center space-x-4 my-4">
                <div>
                  <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                    <span className="text-[#A16161] mr-1 mt-1">&#8358;</span>
                    <span className="font-bold text-[#A16161] text-3xl">
                      {filteredData?.price}
                    </span>
                  </div>
                </div>
                {/* <div className="flex-1">
            <p className="text-green-500 text-xl font-semibold">Save 12%</p>
            <p className="text-gray-400 text-sm">Inclusive of all Taxes.</p>
          </div> */}
              </div>

              <p className="text-gray-800">{filteredData?.description}</p>
              <div>
                <Rating
                  review={filteredData?.reviews}
                  amount={filteredData?.numberOfReview}
                  id={filteredData?.id}
                />
              </div>
              <div className="md:flex py-4 space-x-4 space-y-4 md:space-y-0 items-center">
                <button
                  type="button"
                  className="h-14 px-6 py-2 w-full md:w-auto font-semibold rounded-xl bg-[#A16161] hover:bg-[#DD8888] text-white"
                >
                  Add to Wishlist
                </button>
                <Link
                  to={`https://wa.me/${filteredData?.number}`}
                  target="_blank"
                >
                  <button className="bg-white text-black pl-3 md:pl-6 rounded-full w-auto flex items-center">
                    <span className="mr-6">Contact seller via</span>{" "}
                    <span className="bg-[#25D366] hover:bg-indigo-700 md:w-[50px] md:h-[50px] w-16 h-16 flex items-center justify-center rounded-full">
                      <FaWhatsapp className="text-white text-2xl" />
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <ReviewForm filteredData={filteredData} />
          <ReviewList data={currentReviews} />
          <Pagination
            itemsPerPage={reviewsPerPage}
            total={data.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
