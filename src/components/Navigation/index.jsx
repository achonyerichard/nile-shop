import { BsFillPersonFill } from 'react-icons/bs';
import { FaHeart } from 'react-icons/fa';


const Navigation = () => {
  return (
    <>
      {" "}
      <header className="bg-[#DD8888] lg:px-16 px-8  flex flex-wrap items-center py-2 md:py-4 shadow-md max-w-[1920px]">
        <div className="flex-1 flex justify-between items-center">
          <a href="#" className="text-xl text-white">
            Nile-Shop
          </a>
        </div>

        

        <div
          className="flex items-center w-auto "
          id="menu"
        >
          <nav>
            <ul className="flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
             
              <li className='mr-4 md:mr-0'>
                <div className="p-4 py-2 md:py-3 px-0 block md:mb-0 mb-2" >
                 <BsFillPersonFill className='text-2xl text-white'/>
                </div>
              </li>
              <li>
              <div className="relative cursor-pointer md:p-4 py-2 md:py-3 px-0  md:mb-0 mb-2">
              <FaHeart className='text-2xl text-white'/>
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
