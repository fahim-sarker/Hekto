import React, { useContext } from 'react'
import Container from './Container'
import Clock from "../assets/clock.png"
import Box2 from "../assets/box2.png"
import { apidata } from './ContextApi';
import { Link } from 'react-router-dom'

const Trending = () => {

    let data = useContext(apidata)

    let Trending = data.filter((product) => product.id >= 50 && product.id <= 53)
    let Exclusive = data.filter((product) => product.id >= 70 && product.id <= 72)



    return (
        <div className='lg:py-[120px] py-10 lg:px-0 px-3'>
            <Container>
                <div className="pb-[50px] text-center">
                    <h2 className='lg:text-[42px] text-[20px] font-joss font-bold lg:pb-[48px] pb-5'>Trending Products</h2>
                </div>
                <div className="">
                    <Link to="/shop">
                        <div className="flex flex-wrap justify-between">
                            {Trending.map((trendingdata) => (
                                <div className="lg:w-[23%] w-[48%] lg:h-[400px] h-[250px] lg:mb-0 mb-3 py-3 px-3 shadow-xl bg-[#FFFFFF]">
                                    <div className="flex justify-center">
                                        <img className='w-full lg:h-[244px] h-[100px]' src={trendingdata.thumbnail} alt="" />
                                    </div>
                                    <div className="text-center">
                                        <h3 className='pt-[15px] lg:text-[18px] text-[16px] font-joss lg:font-bold font-normal py-[5px]'>{trendingdata.title}</h3>
                                        <div className="flex gap-x-3 justify-center">
                                            <p className='text-[16px] font-joss font-normal'>${trendingdata.price}</p>
                                            <p className='text-[14px] text-[#151875] font-joss font-normal line-through'>$42.00</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Link>
                    <div className="pt-[45px] flex flex-wrap justify-between">
                        <div className="lg:w-[35%] w-[48%] lg:h-[320px] h-[240px] bg-[#FFF6FB]">
                            <h2 className='pt-[34px] px-5 lg:text-[24px] text-[16px] font-joss font-medium '>23% off in all products</h2>
                            <p className='pt-[10px] text-pink-700 underline  px-5 lg:text-[18px] text-[14px] font-joss font-medium cursor-pointer'><Link to="/shop">Shop Now</Link></p>
                            <div className="flex justify-end pr-5">
                                <img src={Clock} alt="" className='lg:h-[100%] h-[100px]'/>
                            </div>
                        </div>
                        <div className="lg:w-[35%] w-[48%] lg:h-[320px] h-[240px] bg-[#F5F6F8]">
                            <h2 className='pt-[34px] px-5 lg:text-[24px] text-[16px] font-joss font-medium '>23% off in all products</h2>
                            <p className='pt-[10px] text-pink-700 underline  px-5 lg:text-[18px] text-[14px] font-joss font-medium cursor-pointer'><Link to="/shop">View Collection</Link></p>
                            <div className="flex lg:justify-end justify-center lg:pr-5">
                                <img src={Box2} alt="" />
                            </div>
                        </div>
                        <div className="lg:w-[20%] w-full h-[320px] bg-white lg:*:pt-0 pt-4">
                            {Exclusive.map((exclusivedata) => (
                                <Link to="/shop">
                                    <div className="flex justify-between pb-7">
                                        <div className="h-[80px] bg-[#F5F6F8] w-[30%]">
                                            <img className='w-full h-[75px]' src={exclusivedata.thumbnail} alt="" />
                                        </div>
                                        <div className="w-[60%]">
                                            <h3 className='pt-[15px] lg:text-[18px] text-[16px] font-joss font-bold py-[5px]'>{exclusivedata.title}</h3>
                                            <p className='text-[14px] text-[#151875] font-joss font-normal'>${exclusivedata.price}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Trending
