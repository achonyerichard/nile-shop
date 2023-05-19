import * as nigerianStates from "nigerian-states-and-lgas";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsFillBagCheckFill } from "react-icons/bs";
import useSignUp from "../../hooks/useSignup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const states = nigerianStates.all();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedState, setSelectedState] = useState("");

  const [selectedLga, setSelectedLga] = useState("");
  const [filteredLga, setFilteredLga] = useState([]);

  const { signup,error, loading, success, setError } = useSignUp();

  const data = {
    firstname: firstName,
    lastname: lastName,
    gender: gender,
    state: selectedState,
    lga: selectedLga,
    number: `+234${phone}`,
    address: address,
    email: email,
    password: password,
  };
  async function handleSubmit(e) {
    e.preventDefault();
    if (!email && !password) {
      setError("Email and Password cannot be empty");
    } else {
      e.preventDefault();
      await signup(data);
    }
    
  }
  useEffect(() => {
    const filteredStates = states?.filter(
      (state) => state?.state === selectedState
    );

    setFilteredLga(filteredStates[0]?.lgas);
  }, [selectedState, states]);
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
      <div className="login-bg min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0">
      <ToastContainer
          position="top-right"
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
        <header className="max-w-lg mx-auto">
          <Link to="/" className="text-xl text-white">
            <span className="flex justify-center text-white gap-1">
              {" "}
              Caro-Shop
              <span>
                <BsFillBagCheckFill />
              </span>
            </span>
          </Link>
        </header>

        <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
          <section>
            <h3 className="font-bold text-2xl text-black">Register</h3>
            <p className="text-gray-600 pt-2">
              Input your details to register.
            </p>
          </section>

          <section className="mt-10">
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <div className="grid lg:grid-cols-2 gap-2">
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
                    htmlFor="email"
                  >
                    Input your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-[#A16161] transition duration-500 px-3 "
                    onChange={(e) => {
                      setEmail(e.target.value);
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
                    htmlFor="gender"
                  >
                    Gender
                  </label>
                  <select
                    name="gender"
                    id=""
                    className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-[#A16161] transition duration-500 px-3 "
                    required
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value="">Select your Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div className="mb-6 pt-3 rounded bg-gray-200">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                    htmlFor="state"
                  >
                    State
                  </label>
                  <select
                    name="state"
                    id="state"
                    className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-[#A16161] transition duration-500 px-3 "
                    required
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                  >
                    <option value="">Select State</option>
                    {states.map((state) => (
                      <option key={state?.state} value={state?.state}>
                        {state?.state}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-6 pt-3 rounded bg-gray-200">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                    htmlFor="lgas"
                  >
                    Lga
                  </label>
                  <select
                    name="lgas"
                    id=""
                    className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-[#A16161] transition duration-500 px-3 "
                    required
                    value={selectedLga}
                    onChange={(e) => setSelectedLga(e.target.value)}
                  >
                    <option value="">Select Lgas</option>
                    {selectedState &&
                      filteredLga?.map((lga, index) => (
                        <option key={index} value={lga}>
                          {lga}
                        </option>
                      ))}
                  </select>
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
                    value={address}
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
                <div className="mb-6 pt-3 rounded bg-gray-200">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                    htmlFor="confirmpassword"
                  >
                    Confirm Password
                  </label>
                  <input
                    value={confirmpassword}
                    type="password"
                    id="confirmpassword"
                    className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-[#A16161] transition duration-500 px-3 "
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
              </div>

              <button
                className="bg-[#A16161] hover:bg-[#9e6868] text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
                type="submit"
                disabled={loading}
              >
                {loading ? "Loading...":"Login"}
              </button>
            </form>
          </section>
        </main>

        <div className="max-w-lg mx-auto text-center mt-12 mb-6">
          <p className="text-white">
            Have have an account ?{" "}
            <Link to="/login" className="font-bold hover:underline">
              Login
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
