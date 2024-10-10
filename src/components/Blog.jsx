import React from 'react'
import Container from './Container'
import Bl1 from "../assets/bl1.png"
import Bl2 from "../assets/bl2.png"
import Bl3 from "../assets/bl3.png"
import { FaPenNib } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { Link } from 'react-router-dom'



const Blog = () => {
    return (
        <div className='py-[100px]'>
            <Container>
                <div className="flex justify-center">
                    <h2 className='text-[42px] text-[navy] font-joss font-bold pb-[48px]'>Leatest Blog</h2>
                </div>
                <div className="flex justify-between">
                    <div className="w-[32%] shadow-lg px-3 hover:scale-110 duration-700 ease-in-out">
                        <div className="">
                            <img className='w-full' src={Bl1} alt="" />
                        </div>
                        <div className="flex pt-5 gap-5">
                            <div className="flex gap-x-3 items-center">
                                <FaPenNib className='text-[20px] text-pink-600' />
                                <p className='text-[20px] font-joss font-normal'>Saber Ali</p>
                            </div>
                            <div className="flex gap-x-3 items-center">
                                <CiCalendar className='text-[20px] text-[#FFA454]' />
                                <p className='text-[20px] font-joss font-normal'>21 August,2020</p>
                            </div>
                        </div>
                        <h2 className='text-[30px] font-joss font-bold pt-8 '>Top esssential Trends in 2021</h2>
                        <p className='text-[20px] font-joss font-normal pt-4 leading-10'>More off this less hello samlande lied much
                        over tightly circa horse taped mightly</p>
                        <p className='text-[24px] font-joss font-normal pt-4 pb-20 underline  cursor-pointer'><Link to="/blog">Read More</Link></p>
                    </div>
                    <div className="w-[32%] shadow-lg px-3 hover:scale-110 duration-700 ease-in-out">
                    <div className="">
                            <img className='w-full' src={Bl2} alt="" />
                        </div>
                        <div className="flex pt-5 gap-5">
                            <div className="flex gap-x-3 items-center">
                                <FaPenNib className='text-[20px] text-pink-600' />
                                <p className='text-[20px] font-joss font-normal'>Surfauxion</p>
                            </div>
                            <div className="flex gap-x-3 items-center">
                                <CiCalendar className='text-[20px] text-[#FFA454]' />
                                <p className='text-[20px] font-joss font-normal'>21 August,2020</p>
                            </div>
                        </div>
                        <h2 className='text-[30px] font-joss font-bold pt-8 text-pink-600'>Top esssential Trends in 2021</h2>
                        <p className='text-[20px] font-joss font-normal pt-4 leading-10'>More off this less hello samlande lied much
                        over tightly circa horse taped mightly</p>
                        <p className='text-[24px] font-joss font-normal pt-4 pb-20 underline text-pink-600 cursor-pointer'><Link to="/blog">Read More</Link></p>
                    </div>
                    <div className="w-[32%] shadow-lg px-3 hover:scale-105 duration-700 ease-in-out">
                    <div className="">
                            <img className='w-full' src={Bl3} alt="" />
                        </div>
                        <div className="flex pt-5 gap-5">
                            <div className="flex gap-x-3 items-center">
                                <FaPenNib className='text-[20px] text-pink-600' />
                                <p className='text-[20px] font-joss font-normal'>Saber Ali</p>
                            </div>
                            <div className="flex gap-x-3 items-center">
                                <CiCalendar className='text-[20px] text-[#FFA454]' />
                                <p className='text-[20px] font-joss font-normal'>21 August,2020</p>
                            </div>
                        </div>
                        <h2 className='text-[30px] font-joss font-bold pt-8 '>Top esssential Trends in 2021</h2>
                        <p className='text-[20px] font-joss font-normal pt-4 leading-10'>More off this less hello samlande lied much
                        over tightly circa horse taped mightly</p>
                        <p className='text-[24px] font-joss font-normal pt-4 pb-20 underline cursor-pointer'><Link to="/blog">Read More</Link></p>
                    </div>
                </div>
            </Container>

        </div>
    )
}

export default Blog
