import { useEffect, useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import { useAuthContext } from "../../hooks/useAuthContext";
import useApi from "../../hooks/useApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";


// eslint-disable-next-line react/prop-types
const EditModal = ({setEditModal,editModal,id}) => {
  const [imgloader, setImgLoader] = useState(false);
  const [imgurl, setImgUrl] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  const user = useAuthContext();
  const token = user?.user?.token;

  const [data] = useApi(
    "https://caroapp-2sc7.onrender.com/api/category/allcategories"
  );
  console.log(data);
console.log("ID",id);
async function handleChange(e) {
  e.preventDefault();
  setImgLoader(true);
  const file = e.target.files[0];
  console.log("line0", e.target);
  console.log("line1", file);
  const formData = new FormData();
  formData.append("avatar", file);

  await axios
    .post(`https://caroapp-2sc7.onrender.com/api/product/upload/`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((result) => {
      console.log("Post request, results", result);
      setImgUrl(result.data);
      setImgLoader(false);
    })
    .catch((error) => {
      console.log("Errors", error);
      setImgLoader(false);
    });
}
async function handleSubmit(e) {
  setLoading(true);
  e.preventDefault();

  await axios
    .put(
      `https://caroapp-2sc7.onrender.com/api/product/update/${id}`,
      {
        name: name,
        description: desc,
        price: price,
        category: category,
        image: imgurl,
      },
      {
        headers: {
          "x-auth-token": token,
        },
      }
    )
    .then((result) => {
      console.log("Post request, results", result);

      setLoading(false);
      setSuccess("Product Edited Succesfully");
      setEditModal(false)
    })
    .catch((error) => {
      console.log("Errors", error);
      setError(error.message);
      setLoading(false);
    });
}
useEffect(() => {
  if (error) {
    toast.error(error, {
      position: toast.POSITION.TOP_RIGHT,
    });
  } else if (success) {
    toast.success(success, {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
}, [error, success]);

    return (
      <>
        {editModal && (
          <div className="">
          <div className="z-50 md:mt-32 font-sans antialiased fixed top-40 md:bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <ToastContainer
              position="center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
            <div className="bg-white z-50 rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
              <div className="relative">
                <div className="absolute top-0 right-0">
                 
                   <FaWindowClose className="text-xl text-black cursor-pointer " onClick={()=>setEditModal(false)}/>

                </div>
              </div>
              <div className="bg-white px-10 pt-5 pb-4 sm:p-6 sm:pb-4">
                <header className="flex justify-center py-2">
                  <h3 className="font-bold text-2xl text-black">Edit Product</h3>
                </header>
                <form className="flex flex-col" onSubmit={handleSubmit}>
                  <div className="mb-6 pt-3 rounded bg-gray-200">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                      htmlFor="name"
                    >
                      Product Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      onChange={(e) => setName(e.target.value)}
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
                      
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option value="">Select your Category</option>
                     {data.map((item)=>(
                      <option key={item?.id} value={item?.id}>{item?.name}</option>
                     )) }
                      
                    </select>
                  </div>
                  <div className="mb-6 pt-3 rounded bg-gray-200">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                      htmlFor="price"
                    >
                      Price
                    </label>
                    <div className="relative flex">
                      <div className="absolute left-4">
                        <span className="text-black">&#8358;</span>
                      </div>
                      <input
                        type="number"
                        id="price"
                        className="pl-8 bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-[#A16161] transition duration-500 px-3 "
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    </div>
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
                      onChange={(e) => setDesc(e.target.value)}
                      className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-[#A16161] transition duration-500 px-3 "
                    />
                  </div>
                  <div className="   flex justify-center">
                    <div className="  mb-5 flex">
                      <div className="relative   ">
                        <label
                          htmlFor="fileInput"
                          type="button"
                          className="cursor-pointer inine-flex justify-between items-center focus:outline-none border py-2 px-2 rounded-lg shadow-sm text-left text-white bg-[#aa6e6e]  font-medium"
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
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    className="bg-[#A16161] hover:bg-[#966565] text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
                    disabled={imgloader || loading}
                  
                  >
                    {imgloader || loading ? "Loading" : "Submit"}
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
  
  export default EditModal;
  