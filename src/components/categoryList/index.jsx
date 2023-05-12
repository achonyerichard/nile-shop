/* eslint-disable react/prop-types */


const CategoryList = ({options}) => {
  return (
    <>
     <ul className="w-full">
                     {options.map((item)=>(
                        <li key={item.id} className="py-5  px-5">
                        <div className="flex items-center space-x-4">
                          <div className="flex-1 min-w-0">
                            <p className="text-xl text-black truncate  capitalize cursor-pointer">
                              {item.name}
                            </p>
                          </div>
                          <div className="inline-flex items-center text-base font-semibold text-gray-900">
                           
                          </div>
                        </div>
                      </li>
                     )) }
                     
                    </ul>
    </>
  )
}

export default CategoryList