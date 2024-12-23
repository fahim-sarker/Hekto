import React, { useContext } from 'react'
import { BiSolidCategory } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { TfiMenuAlt } from "react-icons/tfi";
import five from "../assets/5.png"
import { FaShoppingCart, FaRegHeart, FaSearchPlus } from "react-icons/fa";
import { apidata } from '../components/ContextApi';


const Shoplist = () => {
    let data = useContext(apidata)
    return (
        <div>
            <div className="lg:pt-[96px] lg:pb-[126px] py-[30px] lg:px-0 px-3 bg-[#F6F5FF]">
                <div className="container mx-auto">
                    <h2 className='font-joss font-bold lg:text-[36px] text-[20px]'>Shop List</h2>
                    <ul className='flex gap-1'>
                        <li className='font-joss font-normal text-[16px]'><Link to="/">Home .</Link></li>
                        <li className='font-joss font-normal text-[16px]'>Pages .</li>
                        <li className='font-joss font-normal text-[16px] text-pink-600'>Shop List</li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto">
                <div className="lg:py-[124px] py-[30px] lg:px-0 px-3 lg:flex items-center">
                    <div className="lg:w-[35%] w-full">
                        <h3 className='lg:text-[22px] text-[18px] font-joss font-bold'>Ecommerce Acceories & Fashion item </h3>
                        <p className='text-[#767676]  text-[14px] font-joss font-normal'>About 9,620 results (0.62 seconds)</p>
                    </div>
                    <div className="lg:w-[15%] w-full flex  gap-2 items-center lg:mt-0 mt-5">
                        <p className='text-[16px] font-joss font-semi-bold text-[#767676]'>Per Page :</p>
                        <input className='lg:w-[80px] w-[200px] h-[30px] outline-none border-2 border-bg-[#000] pl-2' type="text" />
                    </div>
                    <div className="lg:w-[25%] w-full lg:my-0 mt-3">
                        <div className="flex gap-6">
                            <p className='font-joss text-[16px] text-[#767676] py-2 font-semi-bold capitalize'>Sort by :</p>
                            <select className='font-sans text-[16px] font-bold text-[#767676] capitalize border-2 border-bg-[#000] h-[36px] w-[200px] pl-[10px]' name="" id="">
                                <option className='font-joss text-[16px] text-[#767676] font-semi-bold' value="">Best Match</option>
                                <option className='font-sans text-[16px] text-[#767676] font-medium capitalize' value="">price</option>
                            </select>
                        </div>
                    </div>
                    <div className="lg:w-[20%] w-full flex items-center gap-2">
                        <h3 className='font-joss text-[16px] text-[#767676] py-2 font-semi-bold'>View :</h3>
                        <Link to="/shop">
                            <BiSolidCategory className='text-[22px] cursor-pointer ' />
                        </Link>
                        <TfiMenuAlt className='text-[22px] cursor-pointer text-pink-600' />
                        <input className='w-[180px] h-[30px] outline-none border-2 border-bg-[#000] pl-2 ml-3' type="text" />
                    </div>
                </div>
            </div>
            <div className="container mx-auto lg:pb-[130px] lg:px-0 px-3">
                {data.map((item) => (
                    <Link to={`/shop/${item.id}`}>
                        <div className="lg:flex gap-32 bg-white shadow-lg  gap-y-5 lg:py-7 py-3 px-3 lg:mb-0 mb-2 items-center border-2">
                            <div className="w-[20%] lg:mx-0 mx-auto">
                                <img className='' src={item.thumbnail} alt="" />
                            </div>
                            <div className="lg:w-[60%] w-full pt-4">
                                <div className="lg:flex gap-5 items-center">
                                    <h2 className='lg:text-[18px] font-joss lg:font-bold font-normal text-[16px] lg:text-start text-center lg:py-[5px] py-[2px]'>{item.title}</h2>
                                    <div className="flex gap-x-3 justify-center pb-[5px]">
                                        <div className="w-[14px] h-[14px] bg-[#DE9034] rounded-full"></div>
                                        <div className="w-[14px] h-[14px] bg-[#F701A8] rounded-full"></div>
                                        <div className="w-[14px] h-[14px] bg-[#8568FF] rounded-full"></div>
                                    </div>
                                </div>
                                <div className="flex gap-2 lg:justify-start justify-center">
                                    <h3 className='lg:text-[18px] text-[16px] font-joss font-bold'>{item.price}</h3>
                                    <h3 className='lg:text-[18px] text-[16px] font-joss font-bold text-pink-600'>$42.00</h3>
                                </div>
                                <p className='lg:text-[16px] text-[12px] font-joss font-medium text-[#9295AA] lg:w-[591px] lg:leading-[30px] leading-[20px] lg:text-start text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                                <div className="flex gap-10 items-center lg:justify-start justify-center">
                                    <div className="lg:text-[20px] text-[18px]">
                                        <FaShoppingCart />
                                    </div>
                                    <div className="lg:text-[20px] text-[18px] py-3">
                                        <FaRegHeart />
                                    </div>
                                    <div className="lg:text-[20px] text-[18px]">
                                        <FaSearchPlus />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="container mx-auto">
                <div className="py-[83px] flex justify-center">
                    <img src={five} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Shoplist
