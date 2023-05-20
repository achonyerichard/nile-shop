/* eslint-disable react/prop-types */

const CategoryPills = ({ categoryData,filterProductsByCategory,productData,setFilteredProducts }) => {
  return (
    <>
      <div
        className="
                    flex 
                    md:hidden  
                    lg:justify-center lg:items-center 
                    lg:pb-[50px] lg:border-b-[1px]
                    lg:border-appGreen lg:mb-4"
      >
        <div className={`flex max-w-[1920px] mx-auto overflow-x-auto  lg:flex`}>
          <div
          onClick={() => setFilteredProducts(productData)}
            className={`
                  whitespace-nowrap
                  lg:w-fit lg:max-h-[50px] 
                  lg:h-[50px] border-[1px] 
                  bg-[#A16161]
                  text-white
                  lg:grid lg:place-items-center lg:px-[3rem] px-3 text-xl
                  rounded-full  mx-[8px] hover:bg-[#DD8888] cursor-pointer hover:text-appWhite focus:bg-[#DD8888]
                 }`}
          >
            All
          </div>
          {categoryData.map((option) => (
            <div
           
              key={option.id}
              className={`
                  whitespace-nowrap
                  lg:w-fit lg:max-h-[50px] 
                  lg:h-[50px] border-[1px] 
                  bg-[#A16161]
                  text-white
                  lg:grid lg:place-items-center lg:px-[3rem] px-3 text-xl
                  rounded-full  mx-[8px] hover:bg-[#DD8888] cursor-pointer hover:text-appWhite focus:bg-[#DD8888]
                 }`}
            >
                <p  onClick={() => filterProductsByCategory(option)}> {option.name}</p>
             
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryPills;
