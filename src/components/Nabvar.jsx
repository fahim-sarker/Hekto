import React, { useContext, useEffect, useRef, useState } from "react";
import Container from "./Container";
import { FaAngleDown } from "react-icons/fa6";
import Ban from "../assets/banner.png";
import { CiSearch } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { apidata } from "./ContextApi";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Nabvar = () => {
  let data = useContext(apidata);
  let [search, setSearch] = useState("");
  let [searchfilter, setSearchfilter] = useState([]);
  let [selectedIndex, setSelectedIndex] = useState(-1);
  let navigate = useNavigate();
  let [menu, setMenu] = useState(false);
  let menuref = useRef();

  let handlesearch = (e) => {
    setSearch(e.target.value);
    if (e.target.value === "") {
      setSearchfilter([]);
      setSelectedIndex(-1);
    } else {
      let productsearch = data.filter((item) =>
        item.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setSearchfilter(productsearch);
      setSelectedIndex(-1);
    }
  };

  let handleproductdetailpage = (id) => {
    navigate(`/shop/${id}`);
    setSearchfilter([]);
    setSearch("");
  };

  let handlekey = (e) => {
    if (e.key === "ArrowDown") {
      setSelectedIndex((prevIndex) =>
        Math.min(prevIndex + 1, searchfilter.length - 1)
      );
    } else if (e.key === "ArrowUp") {
      setSelectedIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    } else if (e.key === "Enter") {
      if (selectedIndex >= 0 && selectedIndex < searchfilter.length) {
        handleproductdetailpage(searchfilter[selectedIndex].id);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (menuref.current.contains(e.target)) {
        setMenu(!menu);
      } else {
        setMenu(false);
      }
    });
  }, [menu]);

  return (
    <div className="lg:py-[20px] py-2 bg-[#fff] lg:px-0 px-3">
      <Container>
        <div className="flex justify-between items-center">
          <div className="w-[15%]">
            <Link to="/">
              <img src={Ban} alt="banner" />
            </Link>
          </div>
          <div className="lg:w-[35%] relative flex justify-center">
            <div className="">
              <input
                onKeyDown={handlekey}
                value={search}
                onChange={handlesearch}
                className="h-[40px] lg:w-[350px] w-[150px] bg-[#D9D9D9] outline-none px-2 rounded-lg"
                type="search"
              />
            </div>
            <div className="absolute top-0 lg:right-[50px] right-[-15px] bg-[#FB2E86] px-5 h-[40px] flex items-center text-white">
              <CiSearch />
            </div>
            {searchfilter.length > 0 && (
              <div className="absolute h-[500px] overflow-y-scroll top-[50px] left-0 z-50">
                {searchfilter.map((item, index) => (
                  <div
                    key={item.id}
                    onClick={() => handleproductdetailpage(item.id)}
                    className={`bg-[#000] flex items-center text-white cursor-pointer ${selectedIndex === index ? "bg-[#FB2E86]" : ""
                      }`}
                  >
                    <img
                      className="w-[100px] h-[100px]"
                      src={item.thumbnail}
                      alt={item.title}
                    />
                    <p>{item.title}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="lg:w-[45%] relative flex justify-end">
            <ul
              className={`lg:flex lg:flex-row flex flex-col gap-y-3 gap-x-10  pl-[20px] pt-[20px] lg:pt-0 font-joss text-[#000] text-[18px] font-medium lg:static fixed duration-[800ms] z-50 cursor-pointer  ${menu == true
                ? "bg-gray-300 top-[0px] left-0 w-1/2 h-full py-2"
                : "top-[0px] left-[-250px] h-full"
                }`}
            >
              <li className='text-black flex justify-between items-center lg:hidden'>Menu <ImCross className='mr-[20px] lg:hidden' /></li>
              <div className="flex items-center hover:text-[#FB2E86] duration-300 ease-in-out">
                <a href="">
                  <Link to="/">Home</Link>
                </a>
                <FaAngleDown />
              </div>
              <div className="">
                <li className="hover:text-[#FB2E86] duration-300 ease-in-out">
                  <Link to="/category">Categories</Link>
                </li>
              </div>
              <li className="hover:text-[#FB2E86] duration-300 ease-in-out">
                <Link to="/product">Products</Link>
              </li>
              <li className="hover:text-[#FB2E86] duration-300 ease-in-out">
                <Link to="/blog">Blog</Link>
              </li>
              <li className="hover:text-[#FB2E86] duration-300 ease-in-out">
                {" "}
                <Link to="/shop">Shop</Link>
              </li>
              <li className="hover:text-[#FB2E86] duration-300 ease-in-out">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            <div className="lg:hidden" ref={menuref}>
              <FaBars className="cursor-pointer text-[30px] border-2 border-[#FB2e86]" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Nabvar;
