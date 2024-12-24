import React from 'react'
import { GiCheckMark } from "react-icons/gi";
import five from "../assets/5.png"
import { Link } from 'react-router-dom';


const Checkout = () => {
    return (
        <section className='lg:pb-[147px] pb-[30px]'>
            <div className="lg:pt-[96px] lg:pb-[126px] py-[30px] lg:px-0 px-3 bg-[#F6F5FF]">
                <div className="container mx-auto">
                    <h2 className='font-joss font-bold lg:text-[36px] text-[20px]'>Order Completed</h2>
                    <ul className='flex gap-1'>
                        <li className='font-joss font-normal text-[16px]'><Link to="/">Home .</Link></li>
                        <li className='font-joss font-normal text-[16px]'>Pages .</li>
                        <li className='font-joss font-normal text-[16px] text-pink-600'>Order Completed</li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto lg:pt-[150px] pt-[20px] lg:px-0 px-3">
                <div className="text-center">
                    <div className="flex justify-center">
                        <GiCheckMark className='lg:h-[50px] lg:w-[50px] h-[30px] w-[30px] border-[2px] text-[#FF1788] rounded-full' />
                    </div>
                    <h2 className='font-joss lg:text-[36px] text-[20px] font-semibold text-[#101750] lg:py-8 py-3'>Your Order Is Completed! </h2>
                    <p className='text-[16px] font-normal text-[#8D92A7] font-joss leading-7 lg:w-[625px] mx-auto'>Thank you for your order! Your order is being processed and will be completed within 3-6
                        hours. You will receive an email confirmation when your order is completed.
                    </p>
                    <div className="flex justify-center">
                    <button className='py-[14px] px-[36px] bg-[#FB2E86] lg:mt-[50px] mt-[20px] font-Sans font-bold text-[16px] text-[#fff] rounded-sm'><Link to="/shop">Continue Shopping</Link></button>
                    </div>
                </div>
                <div className="flex justify-center mt-12">
                    <img src={five} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Checkout
