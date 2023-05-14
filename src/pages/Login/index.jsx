import {Link} from "react-router-dom"
import { BsFillBagCheckFill } from "react-icons/bs";

const Login = () => {
  return (
    <>
   <div className="login-bg min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0" >
    <header className="max-w-lg mx-auto">
    <Link to="/" className="text-xl text-white">
           <span className="flex justify-center text-white gap-1"> Caro-Shop<span><BsFillBagCheckFill/></span></span>
          </Link>
    </header>

    <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
        <section>
        <h3 className="font-bold text-2xl text-black">Login</h3>
            <p className="text-gray-600 pt-2">Sign up with your email and password.</p>
        </section>

        <section className="mt-10">
            <form className="flex flex-col" method="POST" action="#">
                <div className="mb-6 pt-3 rounded bg-gray-200">
                    <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="email">Input your email</label>
                    <input type="text" id="email" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-[#A16161] transition duration-500 px-3 "/>
                </div>
                <div className="mb-6 pt-3 rounded bg-gray-200">
                    <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="password">Register</label>
                    <input type="password" id="password" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-[#A16161] transition duration-500 px-3 pb-3"/>
                </div>
                
           
                <button className="bg-[#A16161] hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit">Login</button>
            </form>
        </section>
    </main>

    <div className="max-w-lg mx-auto text-center mt-12 mb-6">
        <p className="text-white">Dont have an account ? <Link to="/register" className="font-bold hover:underline">Register</Link>.</p>
    </div>

   
</div>
  
    </>
  );
};

export default Login;
