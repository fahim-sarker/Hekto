import React from 'react'
import Con from "../assets/contact.png"
import { Link } from 'react-router-dom'



const Contact = () => {
  return (
    <section className='pb-[147px]'>
      <div className="pt-[96px] pb-[126px] bg-[#F6F5FF]">
        <div className="container mx-auto">
          <h2 className='font-joss font-bold text-[36px]'>Contact Us</h2>
          <ul className='flex gap-1'>
            <li className='font-joss font-normal text-[16px]'><Link to="/">Home .</Link></li>
            <li className='font-joss font-normal text-[16px]'>Pages .</li>
            <li className='font-joss font-normal text-[16px] text-pink-600'>Contact us</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto pt-[120px]">
        <div className="flex justify-between">
          <div className="w-1/2">
            <h2 className='font-joss text-[36px] font-semibold text-[#101750] py-5'>Information About us</h2>
            <p className='text-[16px] font-normal text-[#8D92A7] font-joss leading-7 w-[625px] pb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
            <div className="flex gap-3">
              <div className="h-[25px] w-[25px] rounded-full bg-[#5625DF]"></div>
              <div className="h-[25px] w-[25px] rounded-full bg-[#FF27B7]"></div>
              <div className="h-[25px] w-[25px] rounded-full bg-[#37DAF3]"></div>
            </div>
          </div>
          <div className="w-1/2">
            <h2 className='font-joss text-[36px] font-semibold text-[#101750] py-5'>Contact Way</h2>
            <div className="flex justify-between items-center">
              <div className="">
                <div className="flex gap-5 pb-8">
                  <div className="h-[45px] w-[45px] rounded-full bg-[#5625DF]"></div>
                  <div className="">
                    <h5 className='font-joss font-normal text-[16px]'>Tel: 877-67-88-99</h5>
                    <p className='font-joss font-normal text-[16px]'>E-Mail: shop@store.com</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="h-[45px] w-[45px] rounded-full bg-[#FFB265]"></div>
                  <div className="">
                    <h5 className='font-joss font-normal text-[16px]'>20 Margaret st, London</h5>
                    <p className='font-joss font-normal text-[16px]'>Great britain, 3NM98-LK</p>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="flex gap-5 pb-8">
                  <div className="h-[45px] w-[45px] rounded-full bg-[#FB2E86]"></div>
                  <div className="">
                    <h5 className='font-joss font-normal text-[16px]'>Support Forum</h5>
                    <p className='font-joss font-normal text-[16px]'>For over 24hr</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="h-[45px] w-[45px] rounded-full bg-[#1BE982]"></div>
                  <div className="">
                    <h5 className='font-joss font-normal text-[16px]'>Free standard shipping</h5>
                    <p className='font-joss font-normal text-[16px]'>on all orders.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between pt-[120px]">
          <div className="w-[50%]">
            <h2 className='font-joss text-[36px] font-semibold text-[#101750] py-5'>Get In Touch</h2>
            <p className='text-[16px] font-medium text-[#8D92A7] font-joss leading-7 w-[625px] pb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices  tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.</p>
            <div className="flex gap-10 pb-10">
              <input className='w-[255px] h-[45px] pl-3 outline-none border-2 border-[#A4B6C8]' type="text" placeholder='Your Name*' />
              <input className='w-[255px] h-[45px] pl-3 outline-none border-2 border-[#A4B6C8]' type="text" placeholder='Your E-mail' />
            </div>
            <input className='w-[550px] h-[45px] pl-3 outline-none border-2 border-[#A4B6C8]' type="text" placeholder='Subject*' />
            <div className="pt-10">
            <textarea className='w-[550px] h-[150px] pl-3 outline-none border-2 border-[#A4B6C8]' type="text" placeholder='your message'></textarea>
            </div>
            <button className='py-[14px] px-[30px] bg-[#FB2E86] mt-[50px] font-Sans font-bold text-[16px] text-[#fff] rounded-sm'>Send Mail</button>
          </div>
          <div className="w-[50%]">
            <img src={Con} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
