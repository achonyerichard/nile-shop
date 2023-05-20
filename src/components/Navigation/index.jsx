import {  useState } from "react";
import { BsFillPersonFill, BsFillBagCheckFill } from "react-icons/bs";

import { Link } from "react-router-dom";

import { useAuthContext } from "../../hooks/useAuthContext";
import useLogout from "../../hooks/useLogout";
import useApi from "../../hooks/useApi";

const Navigation = () => {
  const { user } = useAuthContext();
  const [data] = useApi(
    `https://caroapp-2sc7.onrender.com/api/favourite/mywishlist`
  );
 
  const [profile, setProfile] = useState(false);
  const [nav, setNav] = useState(false);

  const { logout } = useLogout();
  const handleLogout = () => {
    logout();
  };
  if (typeof window !== "undefined") {
    const changeBackground = () => {
      if (window.scrollY >= 80) {
        setNav(true);
      } else {
        setNav(false);
      }
    };

    window.addEventListener("scroll", changeBackground);
  }

  return (
    <>
      {" "}
      <nav
        className={
          nav
            ? `top-0 bg-[#DD8888] z-10 nav fixedTop active shadow-lg lg:px-16 px-8  flex flex-wrap items-center py-2 md:py-4 shadow-md max-w-[1920px]`
            : `nav fixedTop top-0 bg-[#DD8888] z-10 shadow-lg lg:px-16 px-8  flex flex-wrap items-center py-2 md:py-4 shadow-md max-w-[1920px]`
        }
      >
        <div className="flex-1 flex justify-between items-center">
          <Link to="/" className="text-xl text-white">
            <span className="flex justify-center text-white gap-1">
              {" "}
              Caro-Shop
              <span>
                <BsFillBagCheckFill />
              </span>
            </span>
          </Link>
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
                      ? `peer-focus-visible:block dropdown-menu right-9 md:right-20 min-w-max absolute bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none`
                      : `hidden`
                  }
                  aria-labelledby="dropdownMenuButton2"
                >
                  <li>
                    <div
                      className=" dropdown-item text-lg py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100
            "
                      href="#"
                    >
                      {user ? (
                        <span className="cursor-pointer" onClick={handleLogout}>Logout</span>
                      ) : (
                        <>
                          <span>
                            <Link to="/login">Login</Link>
                          </span>
                          /
                          <span>
                            <Link to="/register">Register</Link>
                          </span>
                        </>
                      )}
                    </div>
                  </li>
                  {user && (
                    <li>
                      <Link
                        to="/profile"
                        className=" dropdown-item text-lg py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100
            "
                        href="#"
                      >
                        Profile
                      </Link>
                    </li>
                  )}
                </ul>
              </li>
              <li>
                <div className="relative cursor-pointer md:p-4 py-2 md:py-3 px-0  md:mb-0 mb-2 ">
                  <Link to="/wishlist">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="white"
                      className=""
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                      />
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg>
                  </Link>

                  <div className="absolute md:-top-0 -top-3 -right-2 md:right-2">
                    <span className="text-white font-bold text-sm rounded-full ">
                      {data?.length}
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
