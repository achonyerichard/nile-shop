import { FaWindowClose } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const AddProductModal = ({ setAddProductModal, addProductModal }) => {
  return (
    <>
      {addProductModal && (
        <div className="">
          <div className="z-50 md:mt-20 font-sans antialiased fixed top-40 md:bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <div className="bg-white z-50 rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
              <div className="relative">
                <div className="absolute top-0 right-0">
                 
                   <FaWindowClose className="text-xl text-black cursor-pointer " onClick={()=>setAddProductModal(false)}/>

                </div>
              </div>
              <div className="bg-white px-10 pt-5 pb-4 sm:p-6 sm:pb-4">
                <header className="flex justify-center py-2">
                  <h3 className="font-bold text-2xl text-black">Add Product</h3>
                </header>
                <form className="flex flex-col" method="POST" action="#">
                  <div className="mb-6 pt-3 rounded bg-gray-200">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                      htmlFor="email"
                    >
                      Product Name
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
                      htmlFor="number"
                    >
                      Category
                    </label>
                    <select
                      name="gender"
                      id=""
                      className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-[#A16161] transition duration-500 px-3 "
                      required
                    >
                      <option value="">Select your Category</option>
                      <option value="Male">Shoes</option>
                      <option value="Female">Clothes</option>
                      <option value="Female">Phone</option>
                    </select>
                  </div>
                  <div className="mb-6 pt-3 rounded bg-gray-200 ">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                      htmlFor="email"
                    >
                      Description
                    </label>
                    <textarea
                      type="text"
                      id="email"
                      className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-[#A16161] transition duration-500 px-3 "
                    />
                  </div>
                  <div className="   flex justify-center">
                    <div className="  mb-5 flex">
                      <div className="relative   ">
                        <label
                          htmlFor="fileInput"
                          type="button"
                          className="cursor-pointer inine-flex justify-between items-center focus:outline-none border py-2 px-2 rounded-lg shadow-sm text-left text-white bg-[#aa6e6e] hover:bg-gray-100 font-medium"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="inline-flex flex-shrink-0 w-6 h-6 -mt-1 mr-1"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect
                              x="0"
                              y="0"
                              width="24"
                              height="24"
                              stroke="none"
                            ></rect>
                            <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
                            <circle cx="12" cy="13" r="3" />
                          </svg>
                          Browse Photo
                        </label>

                        <input
                          name="candidatePic"
                          id="fileInput"
                          accept="image/*"
                          className="hidden"
                          type="file"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    className="bg-[#A16161] hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
                    type="submit"
                    onClick={() => setAddProductModal(false)}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddProductModal;
