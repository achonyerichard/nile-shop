/* eslint-disable react/prop-types */
const TopCategories = ({ filterProductsByCategory, setFilteredProducts,productData }) => {
  const options = [
    {
      name: "Phone",
      id: 2,
      Svg: (
        <svg
          className="w-10 h-10 fill-gray-600 mt-5"
          fill="none"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" />
        </svg>
      ),
    },
    {
      name: "Clothes",
      Svg: (
        <svg
          className="w-10 h-10 fill-gray-600 mt-5"
          fill="none"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
        >
          <path d="M631.2 96.5L436.5 0C416.4 27.8 371.9 47.2 320 47.2S223.6 27.8 203.5 0L8.8 96.5c-7.9 4-11.1 13.6-7.2 21.5l57.2 114.5c4 7.9 13.6 11.1 21.5 7.2l56.6-27.7c10.6-5.2 23 2.5 23 14.4V480c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V226.3c0-11.8 12.4-19.6 23-14.4l56.6 27.7c7.9 4 17.5.8 21.5-7.2L638.3 118c4-7.9.8-17.6-7.1-21.5z" />
        </svg>
      ),
      id: 3,
    },
    {
      name: "Electronics",
      Svg: (
        <svg
          className="w-10 h-10 fill-gray-600 mt-5"
          fill="none"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path d="M392 64h166.54L576 0H192v352h288l17.46-64H392c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h114.18l17.46-64H392c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h140.36l17.46-64H392c-4.42 0-8-3.58-8-8V72c0-4.42 3.58-8 8-8zM158.8 335.01l-25.78-63.26c-2.78-6.81-9.8-10.99-17.24-10.26l-45.03 4.42c-17.28-46.94-17.65-99.78 0-147.72l45.03 4.42c7.43.73 14.46-3.46 17.24-10.26l25.78-63.26c3.02-7.39.2-15.85-6.68-20.07l-39.28-24.1C98.51-3.87 80.09-.5 68.95 11.97c-92.57 103.6-92 259.55 2.1 362.49 9.87 10.8 29.12 12.48 41.65 4.8l39.41-24.18c6.89-4.22 9.7-12.67 6.69-20.07zM480 384H192c-35.35 0-64 28.65-64 64v32c0 17.67 14.33 32 32 32h352c17.67 0 32-14.33 32-32v-32c0-35.35-28.65-64-64-64zm-144 96c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z" />
        </svg>
      ),
      id: 4,
    },
  ];
  return (
    <>
      <div className="grid grid-cols-4  md:grid-cols-4  gap-2 pt-5 md:pt-0 ">
        <div    onClick={() => setFilteredProducts(productData)} className="rounded border-2 border-[#A16161] hover:bg-white cursor-pointer flex flex-col items-center relative h-20 w-20 md:h-28 md:w-28">
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

        {options.map((item) => (
          <div
            key={item?.id}
            onClick={() => filterProductsByCategory(item)}
            className="rounded border-2 border-[#A16161] hover:bg-white cursor-pointer flex flex-col items-center relative h-20 w-20 md:h-28 md:w-28"
          >
            <span className="block bg-blue-400 rounded-b absolute sm:h-2 top-0 sm:-top-0.5"></span>
            {item.Svg}
            <p className="text-black font-medium mt-1">{item.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default TopCategories;
