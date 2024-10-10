import React from 'react'
import { GiCheckMark } from "react-icons/gi";
import five from "../assets/5.png"
import { Link } from 'react-router-dom';


const Checkout = () => {
    return (
        <section className='pb-[147px]'>
            <div className="pt-[96px] pb-[126px] bg-[#F6F5FF]">
                <div className="container mx-auto">
                    <h2 className='font-joss font-bold text-[36px]'>Order Completed</h2>
                    <ul className='flex gap-1'>
                        <li className='font-joss font-normal text-[16px]'><Link to="/">Home .</Link></li>
                        <li className='font-joss font-normal text-[16px]'>Pages .</li>
                        <li className='font-joss font-normal text-[16px] text-pink-600'>Order Completed</li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto pt-[150px]">
                <div className="text-center">
                    <div className="flex justify-center">
                        <GiCheckMark className='h-[50px] w-[50px] border-[2px] text-[#FF1788] rounded-full' />
                    </div>
                    <h2 className='font-joss text-[36px] font-semibold text-[#101750] py-8'>Your Order Is Completed! </h2>
                    <p className='text-[16px] font-normal text-[#8D92A7] font-joss leading-7 w-[625px] mx-auto'>Thank you for your order! Your order is being processed and will be completed within 3-6
                        hours. You will receive an email confirmation when your order is completed.
                    </p>
                    <div className="flex justify-center">
                    <button className='py-[14px] px-[36px] bg-[#FB2E86] mt-[50px] font-Sans font-bold text-[16px] text-[#fff] rounded-sm'>Continue Shopping</button>
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
