import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useAuthContext } from "../../hooks/useAuthContext";
import useApi from "../../hooks/useApi";

const EditProfile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  const user = useAuthContext();
  const token = user?.user?.token;

  const [data] = useApi(
    "https://caroapp-2sc7.onrender.com/api/user/userprofile"
  );
  console.log(data);
  async function handleSubmit(e) {
    setLoading(true);
    e.preventDefault();

    await axios
      .put(
        `https://caroapp-2sc7.onrender.com/api/user/update
          `,
        {
          firstname: firstName,
          lastname: lastName,
          address: address,
          number: phone,
          password: password,
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
        setSuccess("Profile Updated Succesfully");

        setFirstName("");
        setLastName("");
        setPassword("");
      })
      .catch((error) => {
        console.log("Errors", error);
        setError(error.message);
        setLoading(false);
        setFirstName("");
        setLastName("");
        setPassword("");
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
      {" "}
      
      <div className="p-4 ">
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
      
        <header className="flex justify-center py-2">
          <h3 className="font-bold text-2xl text-black">Edit Profile</h3>
        </header>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6 pt-3 rounded bg-gray-200">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 ml-3"
              htmlFor="firstNname"
            >
              Input your first name
            </label>
            <input
              type="text"
              id="firstName"
              defaultValue={data?.firstname}
              className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-[#A16161] transition duration-500 px-3 "
              onChange={(e) => {
                setFirstName(e.target.value);
                console.log(e.target.value);
              }}
            />
          </div>
          <div className="mb-6 pt-3 rounded bg-gray-200">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 ml-3"
              htmlFor="lastName"
            >
              Input your last name
            </label>
            <input
              type="text"
              id="lastName"
              defaultValue={data?.lastname}
              className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-[#A16161] transition duration-500 px-3 "
              onChange={(e) => {
                setLastName(e.target.value);
                console.log(e.target.value);
              }}
            />
          </div>
          <div className="mb-6 pt-3 rounded bg-gray-200">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 ml-3"
              htmlFor="number"
            >
              Phone Number
            </label>
            <div className="relative flex">
              <div className="absolute left-1">
                <p className="text-black">+234</p>
              </div>
              <input
                type="number"
                id="number"
                className="pl-10 bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-[#A16161] transition duration-500 px-3 "
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-6 pt-3 rounded bg-gray-200">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 ml-3"
              htmlFor="name"
            >
              Input your Address
            </label>
            <input
              type="address"
              id="name"
              className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-[#A16161] transition duration-500 px-3 "
              defaultValue={data?.address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="mb-6 pt-3 rounded bg-gray-200">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 ml-3"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-[#A16161] transition duration-500 px-3 "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            className="bg-[#A16161] hover:bg-[#a17171] text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
            disabled={loading}
          >
            {loading ? "Loading" : "Submit"}
          </button>
        </form>
      </div>
    </>
  );
};

export default EditProfile;
