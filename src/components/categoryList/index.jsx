/* eslint-disable react/prop-types */

const CategoryList = ({ categoryData, filterProductsByCategory,productData,setFilteredProducts }) => {
  return (
    <>
      <ul className="w-full ">
        <li className="py-5  px-5"     onClick={() => setFilteredProducts(productData)}>
          <div className="flex items-center space-x-4">
            <div className="flex-1 min-w-0">
              <p className="text-xl text-black truncate  capitalize cursor-pointer">
                All
              </p>
            </div>
            <div className="inline-flex items-center text-base font-semibold text-gray-900"></div>
          </div>
        </li>
        {categoryData.map((item) => (
          <li
            key={item.id}
            className="py-5  px-5"
            onClick={() => filterProductsByCategory(item)}
          >
            <div className="flex items-center space-x-4">
              <div className="flex-1 min-w-0">
                <p className="text-xl text-black truncate  capitalize cursor-pointer">
                  {item.name}
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900"></div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CategoryList;
