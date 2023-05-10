import { useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [profile, setProfile] = useState(false);

  return (
    <>
      {" "}
      <header className="bg-[#DD8888] lg:px-16 px-8  flex flex-wrap items-center py-2 md:py-4 shadow-md max-w-[1920px]">
        <div className="flex-1 flex justify-between items-center">
          <a href="#" className="text-xl text-white">
            Nile-Shop
          </a>
        </div>

        <div className="flex items-center w-auto " id="menu">
          <nav>
            <ul className="flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
              <li className="mr-4 md:mr-0">
                <div className="p-4 py-2 md:py-3 px-0 block md:mb-0 mb-2">
                  <BsFillPersonFill
                    className="text-2xl text-white cursor-pointer"
                    onClick={() => {
                      setProfile(!profile);
                    }}
                  />
                </div>
                <ul
                    className={
                      profile
                        ? `peer-focus-visible:block dropdown-menu right-9 md:right-0 min-w-max absolute bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none`
                        : `hidden`
                    }
                    aria-labelledby="dropdownMenuButton2"
                  >
                    <li>
                      <Link
                        to="/about"
                        className=" dropdown-item text-lg py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100
            "
                        href="#"
                      >
                        Login/Register
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/gallery"
                        className=" dropdown-item text-lg py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100
            "
                        href="#"
                      >
                        Profile
                      </Link>
                    </li>
                  </ul>
             
              </li>
              <li>
                <div className="relative cursor-pointer md:p-4 py-2 md:py-3 px-0  md:mb-0 mb-2 ">
                  <FaHeart className="text-2xl text-white cursor-pointer" />
                  <div className="absolute md:-top-0 -top-3 -right-2 md:right-2">
                    <span className="text-white font-bold text-sm rounded-full ">
                      0
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navigation;
