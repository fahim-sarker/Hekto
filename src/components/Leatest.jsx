import { Tabs } from '@ark-ui/react'
import Container from './Container'
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { LuZoomIn } from "react-icons/lu";
import { useContext, useEffect, useState } from 'react'
import { apidata } from './ContextApi';
import { Link } from 'react-router-dom'



const Leatest = () => {

    let data = useContext(apidata)

    let [category, setCategory] = useState([])

    let NewArrival = data.filter(product => product.id >= 115 && product.id <= 120);
    let BestSeller = data.filter(product => product.id >= 110 && product.id <= 115)
    let Featured = data.filter(product => product.id >= 135 && product.id <= 140)
    let SpecialOffer = data.filter(product => product.id >= 160 && product.id <= 165)


    useEffect(()=>{
        setCategory([...new Set(data.map((item)=>item.category))])
    },[data])

    

    return (
        <div className="py-[50px]">
            <Container>
                <h2 className='text-[42px] font-joss font-bold pb-[48px] text-center'>Leatest Products</h2>
                <Tabs.Root defaultValue="react">
                    <Tabs.List className='flex gap-x-16 justify-center pb-10'>
                        <Tabs.Trigger className='font-joss text-[20px] font-normal underline' value="react">New Arrival</Tabs.Trigger>
                        <Tabs.Trigger className='font-joss text-[20px] font-normal underline' value="vue">Best Seller</Tabs.Trigger>
                        <Tabs.Trigger className='font-joss text-[20px] font-normal underline' value="solid">Featured</Tabs.Trigger>
                        <Tabs.Trigger className='font-joss text-[20px] font-normal underline' value="fahim">Special Offer</Tabs.Trigger>
                    </Tabs.List>
                    <Tabs.Content value="react">
                        <Link to="/shop">
                            <div className="flex justify-between flex-wrap">
                                {NewArrival.map((item) => (
                                    <div className="w-[32%] group mb-[100px]">
                                        <div className="w-full bg-[#F6F7FB] h-[270px] py-3 flex justify-center relative overflow-hidden group-hover:overflow-visible group-hover:bg-white duration-700 ease-in-out hover:scale-110">
                                            <img src={item.thumbnail} alt="" />
                                            <div className="absolute opacity-0 top-[50%] group-hover:opacity-100 left-5 flex flex-col text-[20px] text-[#1389FF] group-hover:bottom-0 duration-500 ease-in-out">
                                                <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FiShoppingCart /></div>
                                                <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FaRegHeart /></div>
                                                <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><LuZoomIn /></div>
                                            </div>
                                            <div className="absolute top-7 left-2 -rotate-[25deg] opacity-0 group-hover:opacity-100 duration-700 ease-in-out">
                                                <h5 className='text-[16px] text-[#FFF] px-[50px] py-2 bg-[#3F509E] duration-300 ease-in-out'>Sale</h5>
                                            </div>
                                        </div>
                                        <div className="flex justify-between pt-3 bg-white">
                                            <div className="">
                                                <h4 className='text-[16px] font-normal text-[#151875]'>{item.title}</h4>
                                            </div>
                                            <div className="flex">
                                                <h4 className='text-[16px] font-normal text-[#151875] pr-4'>${item.price}</h4>
                                                <h5 className='text-[16px] font-normal text-[#FB2448] pr-4 line-through'>$65.00</h5>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Link>
                    </Tabs.Content>
                    <Tabs.Content value="vue">
                    <Link to="/shop">
                        <div className="flex justify-between flex-wrap">
                            {BestSeller.map((item) => (
                                <div className="w-[32%] group mb-[100px]">
                                    <div className="w-full bg-[#F6F7FB] h-[270px] py-3 flex justify-center relative overflow-hidden group-hover:overflow-visible group-hover:bg-white duration-700 ease-in-out hover:scale-110">
                                        <img src={item.thumbnail} alt="" />
                                        <div className="absolute opacity-0 top-[50%] group-hover:opacity-100 left-5 flex flex-col text-[20px] text-[#1389FF] group-hover:bottom-0 duration-500 ease-in-out">
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FiShoppingCart /></div>
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FaRegHeart /></div>
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><LuZoomIn /></div>
                                        </div>
                                        <div className="absolute top-7 left-2 -rotate-[25deg] opacity-0 group-hover:opacity-100 duration-700 ease-in-out">
                                            <h5 className='text-[16px] text-[#FFF] px-[50px] py-2 bg-[#3F509E] duration-300 ease-in-out'>Sale</h5>
                                        </div>
                                    </div>
                                    <div className="flex justify-between pt-3 bg-white">
                                        <div className="">
                                            <h4 className='text-[16px] font-normal text-[#151875]'>{item.title}</h4>
                                        </div>
                                        <div className="flex">
                                            <h4 className='text-[16px] font-normal text-[#151875] pr-4'>${item.price}</h4>
                                            <h5 className='text-[16px] font-normal text-[#FB2448] pr-4 line-through'>$65.00</h5>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Link>
                    </Tabs.Content>
                    <Tabs.Content value="solid">
                    <Link to="/shop">
                        <div className="flex justify-between flex-wrap">
                            {Featured.map((item) => (
                                <div className="w-[32%] group mb-[100px]">
                                    <div className="w-full bg-[#F6F7FB] h-[270px] py-3 flex justify-center relative overflow-hidden group-hover:overflow-visible group-hover:bg-white duration-700 ease-in-out hover:scale-110">
                                        <img src={item.thumbnail} alt="" />
                                        <div className="absolute opacity-0 top-[50%] group-hover:opacity-100 left-5 flex flex-col text-[20px] text-[#1389FF] group-hover:bottom-0 duration-500 ease-in-out">
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FiShoppingCart /></div>
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FaRegHeart /></div>
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><LuZoomIn /></div>
                                        </div>
                                        <div className="absolute top-7 left-2 -rotate-[25deg] opacity-0 group-hover:opacity-100 duration-700 ease-in-out">
                                            <h5 className='text-[16px] text-[#FFF] px-[50px] py-2 bg-[#3F509E] duration-300 ease-in-out'>Sale</h5>
                                        </div>
                                    </div>
                                    <div className="flex justify-between pt-3 bg-white">
                                        <div className="">
                                            <h4 className='text-[16px] font-normal text-[#151875]'>{item.title}</h4>
                                        </div>
                                        <div className="flex">
                                            <h4 className='text-[16px] font-normal text-[#151875] pr-4'>${item.price}</h4>
                                            <h5 className='text-[16px] font-normal text-[#FB2448] pr-4 line-through'>$65.00</h5>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Link>
                    </Tabs.Content>
                    <Tabs.Content value="fahim">
                    <Link to="/shop">
                        <div className="flex justify-between flex-wrap">
                            {SpecialOffer.map((item) => (
                                <div className="w-[32%] group mb-[100px]">
                                    <div className="w-full bg-[#F6F7FB] h-[270px] py-3 flex justify-center relative overflow-hidden group-hover:overflow-visible group-hover:bg-white duration-700 ease-in-out hover:scale-110">
                                        <img src={item.thumbnail} alt="" />
                                        <div className="absolute opacity-0 top-[50%] group-hover:opacity-100 left-5 flex flex-col text-[20px] text-[#1389FF] group-hover:bottom-0 duration-500 ease-in-out">
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FiShoppingCart /></div>
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FaRegHeart /></div>
                                            <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><LuZoomIn /></div>
                                        </div>
                                        <div className="absolute top-7 left-2 -rotate-[25deg] opacity-0 group-hover:opacity-100 duration-700 ease-in-out">
                                            <h5 className='text-[16px] text-[#FFF] px-[50px] py-2 bg-[#3F509E] duration-300 ease-in-out'>Sale</h5>
                                        </div>
                                    </div>
                                    <div className="flex justify-between pt-3 bg-white">
                                        <div className="">
                                            <h4 className='text-[16px] font-normal text-[#151875]'>{item.title}</h4>
                                        </div>
                                        <div className="flex">
                                            <h4 className='text-[16px] font-normal text-[#151875] pr-4'>${item.price}</h4>
                                            <h5 className='text-[16px] font-normal text-[#FB2448] pr-4 line-through'>$65.00</h5>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Link>
                    </Tabs.Content>
                </Tabs.Root>

            </Container>
        </div>
    )
}

export default Leatest
