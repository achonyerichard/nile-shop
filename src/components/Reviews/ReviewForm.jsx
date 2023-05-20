/* eslint-disable no-unused-vars */

/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useAuthContext } from "../../hooks/useAuthContext";

const ReviewForm = ({ filteredData }) => {
  const [comment, setComment] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  const id = filteredData?.id;
  const { user } = useAuthContext();
  const token = user?.token;
  console.log("tok",token);

  async function handleSubmit(e) {
    setLoading(true);
    e.preventDefault();

    await axios
      .post(
        `https://caroapp-2sc7.onrender.com/api/comment/add
          `,
        {
          message: comment,
          product: id,
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
        setSuccess("Comment Updated Succesfully");

        setComment("");
      })
      .catch((error) => {
        console.log("Errors", error);
        setError(error.message);
        setComment("");
        setLoading(false)
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
      <div className=" p-2 pt-4 rounded shadow-xl">
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
        <header className="p-3">
          <h2 className="text-xl md:text-3xl text-black text-center">
            Drop a Review{" "}
          </h2>
        </header>
        <div className="flex ml-3">
          <div>
            <h1 className="font-medium text-black">{`${user?.lastname} ${user?.firstname}`}</h1>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mt-3 p-3 w-full">
            <textarea
              rows="3"
              className="border p-2 rounded w-full text-black"
              placeholder="Write something..."
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>
          <div className="flex justify-between mx-3">
            <div>
              <button
                disabled={loading}
                className="px-4 py-1 bg-[#A16161] text-white rounded font-light hover:bg-[#DD8888]"
              >
                {loading ? "Loading..." : "Submit"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ReviewForm;
