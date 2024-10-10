import React, { useContext, useEffect, useState } from 'react'
import { BiSolidCategory } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { TfiMenuAlt } from "react-icons/tfi";
import { apidata } from '../components/ContextApi';
import { FaShoppingCart, FaRegHeart, FaSearchPlus } from "react-icons/fa";
import five from "../assets/5.png"
import { MdOutlineDone } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";



const Category = () => {
    let data = useContext(apidata)
    let [category, setCategory] = useState([])
    let [categorysearchfilter, setCategorysearchfilter] = useState([])


    useEffect(() => {
        setCategory([...new Set(data.map((item) => item.category))])
    },[data])

    let handlesubcate = (ccategories) => {
        let categoryfilter = data.filter((categories) => categories.category == ccategories)
        setCategorysearchfilter(categoryfilter); 
    }
    


    return (
        <div>
            <div className="pt-[96px] pb-[126px] bg-[#F6F5FF]">
                <div className="container mx-auto">
                    <h2 className='font-joss font-bold text-[36px]'>Shop Left Sidebar</h2>
                    <ul className='flex gap-1'>
                        <li className='font-joss font-normal text-[16px]'>Home .</li>
                        <li className='font-joss font-normal text-[16px]'>Pages .</li>
                        <li className='font-joss font-normal text-[16px] text-pink-600'>Shop Left Sidebar</li>
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
                        <input className='w-[80px] h-[30px] outline-none border-2 border-bg-[#000] pl-2' type="text" />
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
                        <Link to="/shop">
                            <BiSolidCategory className='text-[16px] cursor-pointer' />
                        </Link>
                        <TfiMenuAlt className='text-[16px] cursor-pointer' />
                        <input className='w-[180px] h-[30px] outline-none border-2 border-bg-[#000] pl-2 ml-3' type="text" />
                    </div>
                </div>
            </div>
            <div className="container mx-auto pb-[130px]">
                <div className="flex justify-between">
                    <div className="w-[25%]">
                        <h2 className='text-[#151875] font-joss font-semibold text-[20px] underline pt-5 pb-6'>Product Brand</h2>
                            {category.map((categories) => (
                        <div className="flex gap-3">
                            <div className={`w-[20px] h-[20px] bg-[#E5E0FC] flex items-center justify-center`}>
                                <MdOutlineDone />
                            </div>
                               <ul>
                                <li onClick={()=>handlesubcate(categories)} className='text-[16px] font-joss font-medium capitalize pb-8 cursor-pointer'>{categories}</li>
                               </ul>
                        </div>
                            ))}
                        <h2 className='text-[#151875] font-joss font-semibold text-[20px] underline pb-6 pt-[200px]'>Discount Offer</h2>
                        <div className="flex gap-3">
                            <div className="w-[20px] h-[20px] bg-[#FFDBF1] flex items-center justify-center">
                                <MdOutlineDone />
                            </div>
                            <p className='text-[16px] font-joss font-medium'>20% Cashback</p>
                        </div>
                        <div className="flex gap-3 py-5">
                            <div className="w-[20px] h-[20px] bg-[#FFDBF1] flex items-center justify-center">
                                <MdOutlineDone />
                            </div>
                            <p className='text-[16px] font-joss font-medium'>5% Cashback Offer</p>
                        </div>
                        <div className="flex gap-3">
                            <div className="w-[20px] h-[20px] bg-[#FFDBF1] flex items-center justify-center">
                                <MdOutlineDone />
                            </div>
                            <p className='text-[16px] font-joss font-medium'>25% Discount Offer</p>
                        </div>
                        <h2 className='text-[#151875] font-joss font-semibold text-[20px] underline pb-6 pt-[50px]'>Rating Item</h2>
                        <div className="flex gap-3">
                            <div className="w-[20px] h-[20px] bg-[#FFF6DA] flex items-center justify-center">
                                <MdOutlineDone />
                            </div>
                            <div className="flex gap-3 items-center text-[#FFC107]">
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <p className='text-[16px] font-normal text-[#000]'>(2341)</p>
                            </div>
                        </div>
                        <div className="flex gap-3 py-3">
                            <div className="w-[20px] h-[20px] bg-[#FFF6DA] flex items-center justify-center">
                                <MdOutlineDone />
                            </div>
                            <div className="flex gap-3 items-center text-[#FFC107]">
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <p className='text-[16px] font-normal text-[#000]'>(2341)</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <div className="w-[20px] h-[20px] bg-[#FFF6DA] flex items-center justify-center">
                                <MdOutlineDone />
                            </div>
                            <div className="flex gap-3 items-center text-[#FFC107]">
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <p className='text-[16px] font-normal text-[#000]'>(2341)</p>
                            </div>
                        </div>
                        <div className="flex gap-3 pt-3">
                            <div className="w-[20px] h-[20px] bg-[#FFF6DA] flex items-center justify-center">
                                <MdOutlineDone />
                            </div>
                            <div className="flex gap-3 items-center text-[#FFC107]">
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <p className='text-[16px] font-normal text-[#000]'>(2341)</p>
                            </div>
                        </div>
                        <h2 className='text-[#151875] font-joss font-semibold text-[20px] underline pb-6 pt-[50px]'>Price Filter</h2>
                        <div className="flex gap-3">
                            <div className="w-[20px] h-[20px] bg-[#FFDBF1] flex items-center justify-center">
                                <MdOutlineDone />
                            </div>
                            <div className="flex gap-3 items-center">
                                <p className='text-[16px] font-normal text-[#000] font-joss'>$0.00 - $150.00</p>
                            </div>
                        </div>
                        <div className="flex gap-3 py-4">
                            <div className="w-[20px] h-[20px] bg-[#FFDBF1] flex items-center justify-center">
                                <MdOutlineDone />
                            </div>
                            <div className="flex gap-3 items-center">
                                <p className='text-[16px] font-normal text-[#000] font-joss'>$150.00 - $350.00</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <div className="w-[20px] h-[20px] bg-[#FFDBF1] flex items-center justify-center">
                                <MdOutlineDone />
                            </div>
                            <div className="flex gap-3 items-center">
                                <p className='text-[16px] font-normal text-[#000] font-joss'>$150.00 - $504.00</p>
                            </div>
                        </div>
                        <div className="flex gap-3 py-4">
                            <div className="w-[20px] h-[20px] bg-[#FFDBF1] flex items-center justify-center">
                                <MdOutlineDone />
                            </div>
                            <div className="flex gap-3 items-center">
                                <p className='text-[16px] font-normal text-[#000] font-joss'>$450.00 +</p>
                            </div>
                        </div>
                        <div className="pt-12">
                            <input placeholder='search products' className='h-[40px] w-[350px]  outline-none px-2 border-2' type="search" />
                        </div>
                        <div className="absolute top-0 right-0 bg-[#FB2E86] px-5 py-3 text-white">
                            <CiSearch />
                        </div>
                    </div>
                    <div className="w-[75%]">
                        {categorysearchfilter.length > 0 ?
                        categorysearchfilter.map((categories) => (
                            <Link to={`/shop/${categories.id}`}>
                                <div className="py-5">
                                    <div className="flex gap-32 bg-[#FFFFFF] shadow-md  gap-y-5 py-7 px-3 items-center">
                                        <div className="w-[20%]">
                                            <img className='' src={categories.thumbnail} alt="" />
                                        </div>
                                        <div className="w-[60%] pt-4">
                                            <div className="flex gap-5 items-center">
                                                <h2 className='text-[18px] font-joss font-bold py-[5px]'>{categories.title}</h2>
                                                <div className="flex gap-x-3 justify-center pb-[5px]">
                                                    <div className="w-[14px] h-[14px] bg-[#DE9034] rounded-full"></div>
                                                    <div className="w-[14px] h-[14px] bg-[#F701A8] rounded-full"></div>
                                                    <div className="w-[14px] h-[14px] bg-[#8568FF] rounded-full"></div>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <h3 className='text-[18px] font-joss font-bold'>{categories.price}</h3>
                                                <h3 className='text-[18px] font-joss font-bold text-pink-600'>$42.00</h3>
                                            </div>
                                            <p className='text-[16px] font-joss font-medium text-[#9295AA] w-[591px] leading-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                                            <div className="flex gap-10 items-center">
                                                <div className="text-[20px]">
                                                    <FaShoppingCart />
                                                </div>
                                                <div className="text-[20px] py-3">
                                                    <FaRegHeart />
                                                </div>
                                                <div className="text-[20px]">
                                                    <FaSearchPlus />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )) :data.map((item) => (
                            <Link to={`/shop/${item.id}`}>
                                <div className="py-5">
                                    <div className="flex gap-32 bg-[#FFFFFF] shadow-md  gap-y-5 py-7 px-3 items-center">
                                        <div className="w-[20%]">
                                            <img className='' src={item.thumbnail} alt="" />
                                        </div>
                                        <div className="w-[60%] pt-4">
                                            <div className="flex gap-5 items-center">
                                                <h2 className='text-[18px] font-joss font-bold py-[5px]'>{item.title}</h2>
                                                <div className="flex gap-x-3 justify-center pb-[5px]">
                                                    <div className="w-[14px] h-[14px] bg-[#DE9034] rounded-full"></div>
                                                    <div className="w-[14px] h-[14px] bg-[#F701A8] rounded-full"></div>
                                                    <div className="w-[14px] h-[14px] bg-[#8568FF] rounded-full"></div>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <h3 className='text-[18px] font-joss font-bold'>{item.price}</h3>
                                                <h3 className='text-[18px] font-joss font-bold text-pink-600'>$42.00</h3>
                                            </div>
                                            <p className='text-[16px] font-joss font-medium text-[#9295AA] w-[591px] leading-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                                            <div className="flex gap-10 items-center">
                                                <div className="text-[20px]">
                                                    <FaShoppingCart />
                                                </div>
                                                <div className="text-[20px] py-3">
                                                    <FaRegHeart />
                                                </div>
                                                <div className="text-[20px]">
                                                    <FaSearchPlus />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))
                        
                        }
                    </div>
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

export default Category
