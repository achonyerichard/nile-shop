import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../contexts/products-context";
import { FaWhatsapp } from "react-icons/fa";
import ReviewForm from "../../components/Reviews/ReviewForm";
import ReviewList from "../../components/Reviews/ReviewList";
import { ReviewsContext } from "../../contexts/reviews-context";
import Pagination from "../../components/pagination/Pagination";
import Footer from "../../components/Footer";

const ProductDetails = () => {
  const { productData } = useContext(ProductsContext);
  const { reviewsData } = useContext(ReviewsContext);
  const { id } = useParams();
  console.log(id);
  console.log("juju", productData);
  const [filteredData, setFilteredData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [reviewsPerPage] = useState(3);
  console.log(reviewsData);
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviewsData.slice(
    indexOfFirstReview,
    indexOfLastReview
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  useEffect(() => {
    const filteredProducts = productData.find(
      (product) => product?.id === parseInt(id)
    );

    setFilteredData(filteredProducts);
  }, [productData, id]);

  return (
    <>
      <div className="py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <a href="#" className="hover:underline hover:text-gray-600">
              Home
            </a>
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
            <a href="#" className="hover:underline hover:text-gray-600">
              {filteredData?.category}
            </a>
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
            <span>{filteredData?.product}</span>
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
              <h2 className="mb-2 leading-tight tracking-tight font-bold text-white text-2xl md:text-3xl">
                {filteredData?.product}
              </h2>
              <p className="text-gray-300 text-sm">
                By{" "}
                <a href="#" className="text-[#e7e4e4] hover:underline">
                  {filteredData?.seller}
                </a>
              </p>

              <div className="flex items-center space-x-4 my-4">
                <div>
                  <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                    <span className="text-indigo-400 mr-1 mt-1">&#8358;</span>
                    <span className="font-bold text-indigo-600 text-3xl">
                      {filteredData?.price}
                    </span>
                  </div>
                </div>
                {/* <div className="flex-1">
            <p className="text-green-500 text-xl font-semibold">Save 12%</p>
            <p className="text-gray-400 text-sm">Inclusive of all Taxes.</p>
          </div> */}
              </div>

              <p className="text-white">
                Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Vitae
                exercitationem porro saepe ea harum corrupti vero id laudantium
                enim, libero blanditiis expedita cupiditate a est.
              </p>

              <div className="md:flex py-4 space-x-4 space-y-4 md:space-y-0 items-center">
                <button
                  type="button"
                  className="h-14 px-6 py-2 w-full md:w-auto font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white"
                >
                  Add to Wishlist
                </button>
             
                  <button className="bg-white text-black pl-3 md:pl-6 rounded-full w-auto flex items-center">
                    <span className="mr-6">Contact seller via</span>{" "}
                    <span className="bg-[#25D366] hover:bg-indigo-700 md:w-[50px] md:h-[50px] w-16 h-16 flex items-center justify-center rounded-full">
                      <FaWhatsapp className="text-white text-2xl" />
                    </span>
                  </button>
                
              </div>
            </div>
          </div>
          <ReviewForm filteredData={filteredData} />
          <ReviewList reviews={currentReviews} />
          <Pagination
            itemsPerPage={reviewsPerPage}
            total={reviewsData.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ProductDetails;
