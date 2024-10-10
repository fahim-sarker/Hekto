import React, { useContext, useState } from 'react'
import { BiSolidCategory } from "react-icons/bi";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaShoppingCart, FaRegHeart, FaSearchPlus } from "react-icons/fa";
import five from "../assets/5.png"
import { apidata } from '../components/ContextApi';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Addtocart } from '../components/slice/Productslice';

const Product = () => {
    let data = useContext(apidata)
    let dispatch = useDispatch();

    let [currentpage, setCurrentpage] = useState(1)
    let [perpage, setPerpage] = useState(28)

    let lastpage = currentpage * perpage
    let firstpage = lastpage - perpage



    let fulldata = data.slice(firstpage, lastpage)


    let pagenumber = [];

    for (let i = 0; i < Math.ceil(data.length / perpage); i++) {
        pagenumber.push(i)
    }

    let handlechange = (pagenumber) => {
        setCurrentpage(pagenumber + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    let next = () => {
        if (currentpage < pagenumber.length) {
            setCurrentpage((state) => state + 1)
        }
    }
    let prev = () => {
        if (currentpage > 1) {
            setCurrentpage((state) => state - 1)
        }
    }
    let handlecart = (item) => {
        dispatch(Addtocart({...item,quantity: 1}))
    }
    let handlecount = (e) =>{
        setPerpage(e.target.value)
    }

    return (
        <div className=''>
            <div className="pt-[96px] pb-[126px] bg-[#F6F5FF]">
                <div className="container mx-auto">
                    <h2 className='font-joss font-bold text-[36px]'>Shop Grid Default</h2>
                    <ul className='flex gap-1'>
                        <li className='font-joss font-normal text-[16px]'>Home .</li>
                        <li className='font-joss font-normal text-[16px]'>Pages .</li>
                        <li className='font-joss font-normal text-[16px] text-pink-600'>Shop Grid Default</li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto">
                <div className="py-[124px] flex items-center">
                    <div className="w-[35%]">
                        <h3 className='text-[22px] font-joss font-bold'>Ecommerce Acceories & Fashion item </h3>
                        <p className='text-[#767676]  text-[14px] font-joss font-normal'>About 9,620 results (0.62 seconds)</p>
                    </div>
                    <div className="w-[15%] flex gap-2 items-center">
                        <p className='text-[16px] font-joss font-semi-bold text-[#767676]'>Per Page :</p>
                        <input onChange={handlecount} className='w-[80px] h-[30px] outline-none border-2 border-bg-[#000] pl-2' type="text" />
                    </div>
                    <div className="w-[25%]">
                        <div className="flex gap-6">
                            <p className='font-joss text-[16px] text-[#767676] py-2 font-semi-bold capitalize'>Sort by :</p>
                            <select className='font-sans text-[16px] font-bold text-[#767676] capitalize border-2 border-bg-[#000] h-[36px] w-[200px] pl-[10px]' name="" id="">
                                <option className='font-joss text-[16px] text-[#767676] font-semi-bold' value="">Best Match</option>
                                <option className='font-sans text-[16px] text-[#767676] font-medium capitalize' value="">price</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-[20%] flex items-center gap-2">
                        <h3 className='font-joss text-[16px] text-[#767676] py-2 font-semi-bold'>View :</h3>
                        <BiSolidCategory className='text-[22px] cursor-pointer text-pink-600' />
                        <Link to="/shoplist">
                            <TfiMenuAlt className='text-[22px] cursor-pointer' />
                        </Link>
                        <input className='w-[180px] h-[30px] outline-none border-2 border-bg-[#000] pl-2 ml-3' type="text" />
                    </div>
                </div>
            </div>
            <div className="container mx-auto">
                <div className="flex justify-between flex-wrap">
                    {fulldata?.map((item) => (
                        <div className="relative !w-[24%] group h-[500px] ">
                            <div className="">
                                <div className="w-full h-[350px] bg-[#F6F7FB] flex justify-center items-center">
                                    <Link to={`/shop/${item.id}`}>
                                        <img className='h-[178px] w-[178px] hover:scale-125 duration-700 cursor-pointer ease-in-out' src={item.thumbnail} alt="" />
                                    </Link>
                                </div>
                                <div className="flex justify-center py-5">
                                    <Link to={`/shop/${item.id}`}>
                                        <div className="">
                                            <h2 className='text-[18px] font-joss font-bold py-[10px]'>{item.title}</h2>
                                            <div className="flex gap-x-3 justify-center pb-[10px]">
                                                <div className="w-[14px] h-[14px] bg-[#DE9034] rounded-full"></div>
                                                <div className="w-[14px] h-[14px] bg-[#F701A8] rounded-full"></div>
                                                <div className="w-[14px] h-[14px] bg-[rgb(133,104,255)] rounded-full"></div>
                                            </div>
                                            <div className="flex gap-2 justify-center">
                                                <h3 className='text-center text-[18px] font-joss font-bold'>{item.price}</h3>
                                                <h3 className='text-center text-[18px] font-joss font-bold text-pink-600'>$42.00</h3>
                                            </div>
                                        </div>
                                    </Link>
                                    <div className="absolute bottom-[40%] left-[25px] gap-x-5 opacity-0 group-hover:opacity-100 duration-700 ease-in-out cursor-pointer">
                                        <div className="text-[#000] text-[30px]" onClick={()=>handlecart(item)}>
                                            <FaShoppingCart />
                                        </div>
                                        <div className="text-[#000] text-[30px] py-5">
                                            <FaRegHeart />
                                        </div>
                                        <div className="text-[#000] text-[30px]">
                                            <FaSearchPlus />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center pt-10">


                    <nav aria-label="Page navigation example">
                        <ul className="inline-flex -space-x-px text-base h-10 cursor-pointer">
                            <li onClick={prev}>
                                <a className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    Previous
                                </a>
                            </li>
                            {pagenumber.map((number, i) => (
                                <li onClick={() => handlechange(i)} className={currentpage === i + 1 ? " flex items-center justify-center px-5 h-10 leading-tight bg-pink-500 border border-black-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white text-white" : " flex items-center justify-center px-5 h-10 leading-tight text-gray-500  border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}>
                                    <a className=""
                                    >
                                        {number + 1}
                                    </a>
                                </li>
                            ))}

                            <li onClick={next}>
                                <a className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    Next
                                </a>
                            </li>
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
    )
}

export default Product
