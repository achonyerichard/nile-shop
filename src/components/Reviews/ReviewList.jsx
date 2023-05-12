/* eslint-disable react/prop-types */
const ReviewList = ({reviews}) => {
  return (
    <>
      <div className="  shadow-xl rounded-lg mx-4 md:mx-auto my-10  ">
        <header className="p-3">
          <h2 className="text-xl md:text-3xl text-white text-center"> Reviews </h2>
        </header>
        <div className=" items-start px-4 py-6 ">
         {reviews.map((review)=>(
            <div key={review.id} className="border-y py-4">
            <div className="flex items-center justify-between pt-2">
              <h2 className="text-lg font-semibold text-white -mt-1">
                {review.poster}
              </h2>
              <small className="text-sm text-gray-200">22h ago</small>
            </div>
            
            <p className="mt-3 text-gray-200 text-sm">
              {review.review}
            </p>
            <div className="mt-4 flex items-center">
             
              <div className="flex mr-2 text-gray-700 text-sm mr-4">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 mr-1"
                  stroke="#d7d7d7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                  />
                </svg>
                <span className="text-white">Share</span>
              </div>
            </div>
          
          </div>
         )) }
        </div>
      </div>
    </>
  );
};

export default ReviewList;
