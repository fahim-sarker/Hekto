import React from 'react'
import Container from './Container'
import Foot from "../assets/banner.png"

const FOOTER = () => {
    return (
        <div className='lg:py-[100px] py-5 lg:px-0 px-3 bg-[aliceblue] '>
            <Container>
                <div className="lg:flex justify-between lg:items-start items-center">
                    <div className="lg:w-[40%] w-full relative lg:text-start text-center">
                        <img src={Foot} alt="" />
                        <div className="flex pt-10">
                            <input placeholder='Enter Email Address' className='h-[60px] w-[350px] bg-[#D9D9D9] outline-none px-2 text-[20px] font-joss font-medium' type="search" />
                            <p className=' bg-[#FB2E86] w-[139px] text-center h-[60px] leading-[60px] text-white text-[20px] font-joss font-medium cursor-pointer'>Sign Up</p>
                        </div>
                        <p className='lg:text-[20px] text-[18px] font-joss font-normal pt-10'>Contact Info</p>
                        <p className='lg:text-[20px] text-[16px] font-joss font-normal py-3'>17 Princess Road, London, Greater London NW1 8JR, UK</p>
                    </div>
                    <div className="lg:w-[18%] w-full ">
                        <h2 className='lg:text-[35px] text-[20px] lg:text-start text-center font-joss font-bold lg:pb-10 pb-3'>Catagories</h2>
                        <ul>
                            <li className='lg:text-[20px] text-[16px] lg:text-start text-center font-joss font-normal pb-3  text-[#9DA0AE]'>Laptops & Computers</li>
                            <li className='lg:text-[20px] text-[16px] lg:text-start text-center font-joss font-normal pb-3  text-[#9DA0AE]'>Cameras & Photography</li>
                            <li className='lg:text-[20px] text-[16px] lg:text-start text-center font-joss font-normal pb-3  text-[#9DA0AE]'>Smart Phones & Tablets</li>
                            <li className='lg:text-[20px] text-[16px] lg:text-start text-center font-joss font-normal pb-3  text-[#9DA0AE]'>Video Games & Consoles</li>
                            <li className='lg:text-[20px] text-[16px] lg:text-start text-center font-joss font-normal pb-3  text-[#9DA0AE]'>Waterproof Headphones</li>
                        </ul>
                    </div>
                    <div className="lg:w-[18%] w-full">
                        <h2 className='lg:text-[35px] text-[20px] lg:text-start text-center font-joss font-bold lg:pb-10 pb-3'>Customer Care</h2>
                        <ul>
                            <li className='lg:text-[20px] text-[16px] lg:text-start text-center font-joss font-normal pb-3  text-[#9DA0AE]'>My Account</li>
                            <li className='lg:text-[20px] text-[16px] lg:text-start text-center font-joss font-normal pb-3  text-[#9DA0AE]'>Discount</li>
                            <li className='lg:text-[20px] text-[16px] lg:text-start text-center font-joss font-normal pb-3  text-[#9DA0AE]'>
                            Returns</li>
                            <li className='lg:text-[20px] text-[16px] lg:text-start text-center font-joss font-normal pb-3  text-[#9DA0AE]'>Orders History</li>
                            <li className='lg:text-[20px] text-[16px] lg:text-start text-center font-joss font-normal pb-3  text-[#9DA0AE]'>Order Tracking</li>
                        </ul>
                    </div>
                    <div className="lg:w-[18%] w-full">
                        <h2 className='lg:text-[35px] text-[20px] lg:text-start text-center font-joss font-bold lg:pb-10 pb-3'>Pages</h2>
                        <ul>
                            <li className='lg:text-[20px] text-[16px] lg:text-start text-center font-joss font-normal pb-3  text-[#9DA0AE]'>Blog</li>
                            <li className='lg:text-[20px] text-[16px] lg:text-start text-center font-joss font-normal pb-3  text-[#9DA0AE]'>Browse the Shop</li>
                            <li className='lg:text-[20px] text-[16px] lg:text-start text-center font-joss font-normal pb-3  text-[#9DA0AE]'>Category</li>
                            <li className='lg:text-[20px] text-[16px] lg:text-start text-center font-joss font-normal pb-3  text-[#9DA0AE]'>Pre-Built Pagess</li>
                            <li className='lg:text-[20px] text-[16px] lg:text-start text-center font-joss font-normal pb-3  text-[#9DA0AE]'>Visual Composer Elements</li>
                            <li className='lg:text-[20px] text-[16px] lg:text-start text-center font-joss font-normal pb-3 text-[#9DA0AE]' >WooCommerce Pages</li>
                        </ul>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default FOOTER
