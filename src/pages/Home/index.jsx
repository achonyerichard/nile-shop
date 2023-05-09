const Home = () => {
  return (
    <>
      {" "}
      <div className="hero-bg flex items-center justify-center text-center">
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
              className="w-6 h-6 text-gray-700 absolute top-3 left-1"
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
            <div className=" md:flex justify-center  lg:gap-4 lg:pt-10 pt-5">
              <div className=" block  md:w-1/5 bg-white">
                <div className=" lg:border-gray-200 border lg:h-auto  ">
                <header className="py-2">
                        <h2 className="text-2xl font-semibold text-center text-black ">
                             Categories
                        </h2>
                    </header>
                  <div className="flex justify-center">
                    <ul className="w-full">
                      <li className="py-5  px-5">
                        <div className="flex items-center space-x-4">
                          <div className="flex-1 min-w-0">
                            <p className="text-xl text-gray-600 truncate  capitalize cursor-pointer">
                              All
                            </p>
                          </div>
                          <div className="inline-flex items-center text-base font-semibold text-gray-900">
                            <svg
                              className="fill-current h-4 w-4 -rotate-90"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                            </svg>
                          </div>
                        </div>
                      </li>
                      <li className="py-5  px-5">
                        <div className="flex items-center space-x-4">
                          <div className="flex-1 min-w-0">
                            <p className="text-xl text-gray-600 truncate  capitalize cursor-pointer">
                              All
                            </p>
                          </div>
                          <div className="inline-flex items-center text-base font-semibold text-gray-900">
                            <svg
                              className="fill-current h-4 w-4 -rotate-90"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                            </svg>
                          </div>
                        </div>
                      </li>
                      <li className="py-5  px-5">
                        <div className="flex items-center space-x-4">
                          <div className="flex-1 min-w-0">
                            <p className="text-xl text-gray-600 truncate  capitalize cursor-pointer">
                              All
                            </p>
                          </div>
                          <div className="inline-flex items-center text-base font-semibold text-gray-900">
                            <svg
                              className="fill-current h-4 w-4 -rotate-90"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                            </svg>
                          </div>
                        </div>
                      </li>
                      <li className="py-5  px-5">
                        <div className="flex items-center space-x-4">
                          <div className="flex-1 min-w-0">
                            <p className="text-xl text-gray-600 truncate  capitalize cursor-pointer">
                              All
                            </p>
                          </div>
                          <div className="inline-flex items-center text-base font-semibold text-gray-900">
                            <svg
                              className="fill-current h-4 w-4 -rotate-90"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                            </svg>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className=" block  md:w-4/5">
                <div className=" lg:h-auto  ">
                  <div className="flex flex-col justify-center">
                    <header className="pb-2">
                        <h2 className="text-3xl font-semibold text-center text-white ">
                            Top Categories
                        </h2>
                    </header>
                    <div className="grid grid-cols-3  md:grid-cols-6 place-items-center gap-5 pt-5 md:pt-0 ">
                      <div className="rounded border-2 border-purple-400 flex flex-col items-center relative h-28 w-28">
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
                        <p className="text-gray-700 font-semibold mt-1">
                          Property
                        </p>
                      </div>

                      <div className="rounded border-2 border-blue-400 flex flex-col items-center relative h-28 w-28">
                        <span className="block bg-blue-400 rounded-b absolute sm:h-2 top-0 sm:-top-0.5"></span>
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
                            d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                          ></path>
                        </svg>
                        <p className="text-gray-700 font-semibold mt-1">Gift</p>
                      </div>

                      <div className="rounded border-2 border-red-400 flex flex-col items-center relative h-28 w-28">
                        <span className="block bg-red-400 rounded-b absolute sm:h-2 top-0 sm:-top-0.5"></span>
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
                            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                          ></path>
                        </svg>
                        <p className="text-gray-700 font-semibold mt-1">
                          Video
                        </p>
                      </div>

                      <div className="rounded border-2 border-pink-400 flex flex-col items-center relative h-28 w-28">
                        <span className="block bg-pink-400 rounded-b absolute sm:h-2 top-0 sm:-top-0.5"></span>
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
                            d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                          ></path>
                        </svg>
                        <p className="text-gray-700 font-semibold mt-1">Film</p>
                      </div>

                      <div className="rounded border-2 border-yellow-400 flex flex-col items-center relative h-28 w-28">
                        <span className="block bg-yellow-400 rounded-b absolute sm:h-2 top-0 sm:-top-0.5"></span>
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
                            d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                          ></path>
                        </svg>
                        <p className="text-gray-700 font-semibold mt-1">
                          Ticket
                        </p>
                      </div>

                      <div className="rounded border-2 border-green-400 flex flex-col items-center relative h-28 w-28">
                        <span className="block bg-green-400 rounded-b absolute sm:h-2 top-0 sm:-top-0.5"></span>
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
                            d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                          ></path>
                        </svg>
                        <p className="text-gray-700 font-semibold mt-1">Wifi</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
