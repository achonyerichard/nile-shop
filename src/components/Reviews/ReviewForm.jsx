/* eslint-disable react/prop-types */

const ReviewForm = ({ filteredData }) => {
  return (
    <>
      <div className=" p-2 pt-4 rounded shadow-lg">
        <header className="p-3">
          <h2 className="text-xl md:text-3xl text-white text-center">Drop a Review </h2>
        </header>
        <div className="flex ml-3">
          <div>
            <h1 className="font-medium">{filteredData?.seller}</h1>
            <p className="text-xs text-gray-500">2 seconds ago</p>
          </div>
        </div>

        <div className="mt-3 p-3 w-full">
          <textarea
            rows="3"
            className="border p-2 rounded w-full"
            placeholder="Write something..."
          ></textarea>
        </div>

        <div className="flex justify-between mx-3">
          <div>
            <button className="px-4 py-1 bg-gray-800 text-white rounded font-light hover:bg-gray-700">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewForm;
