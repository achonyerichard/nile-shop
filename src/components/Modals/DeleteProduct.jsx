import { FaWindowClose } from "react-icons/fa";
import axios from "axios"
import { useEffect, useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



// eslint-disable-next-line react/prop-types
const DeleteModal = ({setDeleteModal,deleteModal,id}) => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  const user = useAuthContext();
  const token = user?.user?.token;
  async function handleSubmit(e) {
    setLoading(true);
    e.preventDefault();
  
    await axios
      .delete(
        `https://caroapp-2sc7.onrender.com/api/product/delete/${id}`,
        
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
        setDeleteModal(false)
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
        {deleteModal && (
          <div>
            <div className="top-40 z-50 md:mt-20 font-sans antialiased fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center">
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
                 
                   <FaWindowClose className="text-xl text-black cursor-pointer " onClick={()=>setDeleteModal(false)}/>

                </div>
              </div>
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <svg
                        className="h-6 w-6 text-red-600"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                      </svg>
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Delete Product
                      </h3>
                      <div className="mt-2">
                        <p className="text-sm leading-5 text-gray-500">
                          Are you sure you want to delete this product? This
                          action cannot be undone.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                    <button
                      onClick={() => setDeleteModal(!deleteModal)}
                      type="button"
                      className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-red-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                    >
                      Decline
                    </button>
                  </span>
                  <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                    <button
                      onClick={handleSubmit}
                     disabled={loading}
                      className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-green-600 text-white leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                    >
                      Delete
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  };
  
  export default DeleteModal;
  