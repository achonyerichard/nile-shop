import * as nigerianStates from "nigerian-states-and-lgas";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsFillBagCheckFill } from "react-icons/bs";

const Register = () => {
  const states = nigerianStates.all();
  const [selectedState, setSelectedState] = useState("");

  const [selectedLga, setSelectedLga] = useState("");
  const [filteredLga, setFilteredLga] = useState([]);

  useEffect(() => {
    const filteredStates = states?.filter(
      (state) => state?.state === selectedState
    );

    setFilteredLga(filteredStates[0]?.lgas);
  }, [selectedState, states]);

  return (
    <>
      <div className="login-bg min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0">
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
            <form className="flex flex-col" method="POST" action="#">
              <div className="grid lg:grid-cols-2 gap-2">
                <div className="mb-6 pt-3 rounded bg-gray-200">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                    htmlFor="name"
                  >
                    Input your full name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-[#A16161] transition duration-500 px-3 "
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
                    className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-[#A16161] transition duration-500 px-3 "
                  />
                </div>
                <div className="mb-6 pt-3 rounded bg-gray-200">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                    htmlFor="number"
                  >
                    Phone Number
                  </label>
                  <input
                    type="number"
                    id="number"
                    className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-[#A16161] transition duration-500 px-3 "
                  />
                </div>
                <div className="mb-6 pt-3 rounded bg-gray-200">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                    htmlFor="number"
                  >
                    Gender
                  </label>
                  <select
                    name="gender"
                    id=""
                    className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-[#A16161] transition duration-500 px-3 "
                    required
                  >
                    <option value="">Select your Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div className="mb-6 pt-3 rounded bg-gray-200">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                    htmlFor="number"
                  >
                    State
                  </label>
                  <select
                    name="state"
                    id=""
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
                    htmlFor="number"
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
                  />
                </div>
                <div className="mb-6 pt-3 rounded bg-gray-200">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                    htmlFor="name"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-[#A16161] transition duration-500 px-3 "
                  />
                </div>
              </div>

              <button
                className="bg-[#A16161] hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
                type="submit"
              >
                Login
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
