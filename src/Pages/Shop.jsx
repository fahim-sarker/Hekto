import React, { useContext, useState } from "react";
import { BiSolidCategory } from "react-icons/bi";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaShoppingCart, FaRegHeart, FaSearchPlus } from "react-icons/fa";
import five from "../assets/5.png";
import { apidata } from "../components/ContextApi";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Addtocart } from "../components/slice/Productslice";

const Shop = () => {
  let data = useContext(apidata);
  let dispatch = useDispatch();

  let [currentpage, setCurrentpage] = useState(1);
  let [perpage, setPerpage] = useState(28);

  let lastpage = currentpage * perpage;
  let firstpage = lastpage - perpage;

  let fulldata = data.slice(firstpage, lastpage);

  let pagenumber = [];

  for (let i = 0; i < Math.ceil(data.length / perpage); i++) {
    pagenumber.push(i);
  }

  let handlechange = (pagenumber) => {
    setCurrentpage(pagenumber + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  let next = () => {
    if (currentpage < pagenumber.length) {
      setCurrentpage((state) => state + 1);
    }
  };
  let prev = () => {
    if (currentpage > 1) {
      setCurrentpage((state) => state - 1);
    }
  };
  let handlecart = (item) => {
    dispatch(Addtocart({ ...item, quantity: 1 }));
  };
  let handlecount = (e) => {
    setPerpage(e.target.value);
  };
  const startPage = Math.max(currentpage - 3, 0);
  const endPage = Math.min(currentpage + 2, pagenumber.length - 1);

  return (
    <div className="">
      <div className="lg:pt-[96px] lg:pb-[126px] py-[30px] lg:px-0 px-3 bg-[#F6F5FF]">
        <div className="container mx-auto">
          <h2 className="font-joss font-bold lg:text-[36px] text-[20px]">
            Shop Grid Default
          </h2>
          <ul className="flex gap-1">
            <li className="font-joss font-normal text-[16px]">
              <Link to="/">Home .</Link>
            </li>
            <li className="font-joss font-normal text-[16px]">Pages .</li>
            <li className="font-joss font-normal text-[16px] text-pink-600">
              Shop Grid Default
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="lg:py-[124px] py-[30px] lg:px-0 px-3 lg:flex items-center">
          <div className="lg:w-[35%] w-full">
            <h3 className="lg:text-[22px] text-[18px] font-joss font-bold">
              Ecommerce Acceories & Fashion item{" "}
            </h3>
            <p className="text-[#767676]  text-[14px] font-joss font-normal">
              About 9,620 results (0.62 seconds)
            </p>
          </div>
          <div className="lg:w-[15%] w-full flex  gap-2 items-center lg:mt-0 mt-5">
            <p className="text-[16px] font-joss font-semi-bold text-[#767676]">
              Per Page :
            </p>
            <input
              onChange={handlecount}
              className="lg:w-[80px] w-[200px] h-[30px] outline-none border-2 border-bg-[#000] pl-2"
              type="text"
            />
          </div>
          <div className="lg:w-[25%] w-full lg:my-0 mt-3">
            <div className="flex gap-6">
              <p className="font-joss text-[16px] text-[#767676] py-2 font-semi-bold capitalize">
                Sort by :
              </p>
              <select
                className="font-sans text-[16px] font-bold text-[#767676] capitalize border-2 border-bg-[#000] h-[36px] w-[200px] pl-[10px]"
                name=""
                id=""
              >
                <option
                  className="font-joss text-[16px] text-[#767676] font-semi-bold"
                  value=""
                >
                  Best Match
                </option>
                <option
                  className="font-sans text-[16px] text-[#767676] font-medium capitalize"
                  value=""
                >
                  price
                </option>
              </select>
            </div>
          </div>
          <div className="lg:w-[20%] w-full flex items-center gap-2">
            <h3 className="font-joss text-[16px] text-[#767676] py-2 font-semi-bold">
              View :
            </h3>
            <BiSolidCategory className="text-[22px] cursor-pointer text-pink-600" />
            <Link to="/shoplist">
              <TfiMenuAlt className="text-[22px] cursor-pointer" />
            </Link>
            <input
              className="w-[180px] h-[30px] outline-none border-2 border-bg-[#000] pl-2 ml-3"
              type="text"
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex justify-between flex-wrap lg:px-0 px-3">
          {fulldata?.map((item) => (
            <div className="relative lg:!w-[24%] w-[48%] group lg:h-[500px] h-[280px]">
              <div className="">
                <div className="w-full lg:h-[350px] h-[150px] bg-[#F6F7FB] flex justify-center items-center">
                  <Link to={`/shop/${item.id}`}>
                    <img
                      className="lg:h-[178px] lg:w-[178px] w-[100px] h-[100px] hover:scale-125 duration-700 cursor-pointer ease-in-out"
                      src={item.thumbnail}
                      alt=""
                    />
                  </Link>
                </div>
                <div className="flex justify-center lg:py-5 py-2 lg:px-0 px-2 group-hover:bg-red-300 duration-300 ease-in-out">
                  <Link to={`/shop/${item.id}`}>
                    <div className="">
                      <h2 className="lg:text-[18px] text-[14px] font-joss lg:font-bold font-medium lg:py-[10px] py-1  text-center">
                        {item.title}
                      </h2>
                      <div className="flex gap-x-3 justify-center pb-[10px]">
                        <div className="w-[14px] h-[14px] bg-[#DE9034] rounded-full"></div>
                        <div className="w-[14px] h-[14px] bg-[#F701A8] rounded-full"></div>
                        <div className="w-[14px] h-[14px] bg-[rgb(133,104,255)] rounded-full"></div>
                      </div>
                      <div className="flex gap-2 justify-center">
                        <h3 className="text-center lg:text-[18px] text-[14px] font-joss font-bold">
                          {item.price}
                        </h3>
                        <h3 className="text-center lg:text-[18px] text-[14px] font-joss font-bold text-pink-600">
                          $42.00
                        </h3>
                      </div>
                    </div>
                  </Link>
                  <div
                    className="absolute lg:bottom-[40%] left-[25px] bottom-[55%]
                                     gap-x-5 opacity-0 group-hover:opacity-100 duration-700 ease-in-out cursor-pointer"
                  >
                    <div
                      className="text-[#000] lg:text-[30px] text-[16px]"
                      onClick={() => handlecart(item)}
                    >
                      <FaShoppingCart />
                    </div>
                    <div className="text-[#000] lg:text-[30px] text-[16px] py-5">
                      <FaRegHeart />
                    </div>
                    <div className="text-[#000] lg:text-[30px] text-[16px]">
                      <FaSearchPlus />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center pt-10">
        <nav className="lg:mt-[50px] mt-[20px]" aria-label="Page navigation example">
      <ul className="flex justify-center space-x-1 text-sm cursor-pointer flex-nowrap overflow-hidden">
        {pagenumber.length > 0 && (
          <li onClick={prev} className="cursor-pointer">
            <a className="flex items-center justify-center px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-md">
              Prev
            </a>
          </li>
        )}
        <div className="hidden lg:flex">
          {pagenumber.map((item, i) => (
            <li
              key={i}
              onClick={() => paginate(item)}
              className="cursor-pointer"
            >
              <a
                className={
                  currentpage === item + 1
                    ? "flex items-center justify-center px-3 py-2 leading-tight text-white bg-pink-600 border border-gray-300"
                    : "flex items-center justify-center px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300"
                }
              >
                {item + 1}
              </a>
            </li>
          ))}
        </div>
        <div className="flex lg:hidden">
          {pagenumber
            .slice(startPage, endPage + 1)
            .map((item, i) => (
              <li
                key={i}
                onClick={() => paginate(item)}
                className="cursor-pointer"
              >
                <a
                  className={
                    currentpage === item + 1
                      ? "flex items-center justify-center px-3 py-2 leading-tight text-white bg-pink-600 border border-gray-300"
                      : "flex items-center justify-center px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300"
                  }
                >
                  {item + 1}
                </a>
              </li>
            ))}
        </div>
        {pagenumber.length > 0 && (
          <li onClick={next} className="cursor-pointer">
            <a className="flex items-center justify-center px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-md">
              Next
            </a>
          </li>
        )}
      </ul>
    </nav>
</div>

      </div>
      <div className="container mx-auto">
        <div className="py-[83px] flex justify-center">
          <img src={five} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Shop;
