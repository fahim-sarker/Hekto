import React from 'react'
import Container from './Container'
import Foot from "../assets/banner.png"

const FOOTER = () => {
    return (
        <div className='py-[100px] bg-[aliceblue]'>
            <Container>
                <div className="flex justify-between">
                    <div className="w-[40%] relative">
                        <img src={Foot} alt="" />
                        <div className="flex pt-10">
                            <input placeholder='Enter Email Address' className='h-[60px] w-[350px] bg-[#D9D9D9] outline-none px-2 text-[20px] font-joss font-medium' type="search" />
                            <p className=' bg-[#FB2E86] w-[139px] text-center h-[60px] leading-[60px] text-white text-[20px] font-joss font-medium cursor-pointer'>Sign Up</p>
                        </div>
                        <p className='text-[20px] font-joss font-normal pt-10'>Contact Info</p>
                        <p className='text-[20px] font-joss font-normal pt-3'>17 Princess Road, London, Greater London NW1 8JR, UK</p>
                    </div>
                    <div className="w-[18%]">
                        <h2 className='text-[35px] font-joss font-bold pb-10'>Catagories</h2>
                        <ul>
                            <li className='text-[20px] font-joss font-normal pb-3  text-[#9DA0AE]'>Laptops & Computers</li>
                            <li className='text-[20px] font-joss font-normal pb-3  text-[#9DA0AE]'>Cameras & Photography</li>
                            <li className='text-[20px] font-joss font-normal pb-3  text-[#9DA0AE]'>Smart Phones & Tablets</li>
                            <li className='text-[20px] font-joss font-normal pb-3  text-[#9DA0AE]'>Video Games & Consoles</li>
                            <li className='text-[20px] font-joss font-normal pb-3  text-[#9DA0AE]'>Waterproof Headphones</li>
                        </ul>
                    </div>
                    <div className="w-[18%]">
                        <h2 className='text-[35px] font-joss font-bold pb-10'>Customer Care</h2>
                        <ul>
                            <li className='text-[20px] font-joss font-normal pb-3  text-[#9DA0AE]'>My Account</li>
                            <li className='text-[20px] font-joss font-normal pb-3  text-[#9DA0AE]'>Discount</li>
                            <li className='text-[20px] font-joss font-normal pb-3  text-[#9DA0AE]'>
                            Returns</li>
                            <li className='text-[20px] font-joss font-normal pb-3  text-[#9DA0AE]'>Orders History</li>
                            <li className='text-[20px] font-joss font-normal pb-3  text-[#9DA0AE]'>Order Tracking</li>
                        </ul>
                    </div>
                    <div className="w-[18%]">
                        <h2 className='text-[35px] font-joss font-bold pb-10'>Pages</h2>
                        <ul>
                            <li className='text-[20px] font-joss font-normal pb-3  text-[#9DA0AE]'>Blog</li>
                            <li className='text-[20px] font-joss font-normal pb-3  text-[#9DA0AE]'>Browse the Shop</li>
                            <li className='text-[20px] font-joss font-normal pb-3  text-[#9DA0AE]'>Category</li>
                            <li className='text-[20px] font-joss font-normal pb-3  text-[#9DA0AE]'>Pre-Built Pagess</li>
                            <li className='text-[20px] font-joss font-normal pb-3  text-[#9DA0AE]'>Visual Composer Elements</li>
                            <li className='text-[20px] font-joss font-normal pb-3 text-[#9DA0AE]' >WooCommerce Pages</li>
                        </ul>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default FOOTER
