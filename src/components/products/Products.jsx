/* eslint-disable react/prop-types */
import {Link} from "react-router-dom"


const Products = ({products}) => {
  

  return (
    <>
      <section className="w-fit mx-auto grid grid-cols-2 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-4 md:gap-y-20 gap-x-4 md:gap-x-14 mt-10 mb-5">
      {  products.map((item)=>(
        <div key={item.id} className="md:w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <div>
            <img
              src={item.image}
              alt="Product"
              className="w-60 h-40 md:h-60 md:w-72 object-cover rounded-t-xl"
            />
            <div className="px-4 py-3 md:w-72">
              <span className="text-gray-400 mr-3 uppercase text-xs">
                {item.category}
              </span>
              <p className="text-lg font-bold text-black truncate block capitalize">
               {item.product}
              </p>
              <div className="flex items-center justify-center">
                <div className="w-1/3">
                <p className="text-lg font-semibold text-black cursor-auto my-3">
                  <span>&#8358;</span>
                 {`${item.price}`}
                </p>
                </div>
                
                <div className="flex justify-center w-1/3">
                  <Link to={`/product/${item.id}`}>
                   <button className="rounded px-2 py-1 text-xs bg-[#DD8888] text-white hover:bg-[#bd5a5a] duration-300">View</button>
               
                  </Link>
               
                </div>
                 <div className="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="black"
                    className="bi bi-bag-plus"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                    />
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

       
      </section>

    </>
  );
};

export default Products;
