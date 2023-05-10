import { BsFillPersonFill,BsFillCartCheckFill } from 'react-icons/bs';


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
             
              <li>
                <a className="p-4 py-2 md:py-3 px-0 block" href="#">
                 <BsFillPersonFill className='text-2xl text-white'/>
                </a>
              </li>
              <li>
                <a className="md:p-4 py-2 md:py-3 px-0 block md:mb-0 mb-2" href="#">
                 <BsFillCartCheckFill className='text-2xl text-white'/>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navigation;
