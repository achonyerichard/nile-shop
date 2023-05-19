import { Link } from "react-router-dom";
import { BsFillBagCheckFill } from "react-icons/bs";
import useLogin from "../../hooks/useLogin";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, loading, success, setError } = useLogin();

  async function handleSubmit(e) {
    if (!email && !password) {
      setError("Email and Password cannot be empty");
    } else {
      e.preventDefault();
      await login(email, password);
    }
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
            <h3 className="font-bold text-2xl text-black">Login</h3>
            <p className="text-gray-600 pt-2">
              Sign up with your email and password.
            </p>
          </section>

          <section className="mt-10">
            <form className="flex flex-col" onSubmit={handleSubmit}>
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
                  onChange={(e) => {
                    setEmail(e.target.value);
                    console.log(e.target.value);
                  }}
                  required
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
                  className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-[#A16161] transition duration-500 px-3 pb-3"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button
                className="bg-[#A16161] hover:bg-[#996363] text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
                disabled={loading}
              >
                {loading ? "Loading..." : "Login"}
              </button>
            </form>
          </section>
        </main>

        <div className="max-w-lg mx-auto text-center mt-12 mb-6">
          <p className="text-white">
            Dont have an account ?{" "}
            <Link to="/register" className="font-bold hover:underline">
              Register
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
