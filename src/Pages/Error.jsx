import React from 'react'
import { Link } from 'react-router-dom'
import Errr from "../assets/err.png"

const Error = () => {
    return (
        <section>
            <div className="pt-[96px] pb-[126px] bg-[#F6F5FF]">
                <div className="container mx-auto">
                    <h2 className='font-joss font-bold text-[36px]'>404 Not Found</h2>
                    <ul className='flex gap-1'>
                        <li className='font-joss font-normal text-[16px]'><Link to="/">Home .</Link></li>
                        <li className='font-joss font-normal text-[16px]'>Pages .</li>
                        <li className='font-joss font-normal text-[16px] text-pink-600'>404 Not Found</li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto py-10">
                <div className="flex justify-center">
                    <img src={Errr} alt="" />
                </div>
                <div className="flex justify-center">
                    <button className='py-[14px] px-[36px] bg-[#FB2E86] font-Sans font-bold text-[16px] text-[#fff] rounded-sm'>Continue Shopping</button>
                </div>
            </div>
        </section>
    )
}

export default Error
