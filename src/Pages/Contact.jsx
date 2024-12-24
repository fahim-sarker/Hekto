import React from 'react'
import Con from "../assets/contact.png"
import { Link } from 'react-router-dom'



const Contact = () => {
  return (
    <section className='lg:pb-[147px] pb-[30px]'>
      <div className="lg:pt-[96px] lg:pb-[126px] py-[30px] lg:px-0 px-3 bg-[#F6F5FF]">
        <div className="container mx-auto">
          <h2 className='font-joss font-bold lg:text-[36px] text-[20px]'>Contact Us</h2>
          <ul className='flex gap-1'>
            <li className='font-joss font-normal text-[16px]'><Link to="/">Home .</Link></li>
            <li className='font-joss font-normal text-[16px]'>Pages .</li>
            <li className='font-joss font-normal text-[16px] text-pink-600'>Contact us</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto lg:pt-[120px] pt-[30px] lg:px-0 px-3">
        <div className="lg:flex justify-between">
          <div className="lg:w-1/2 w-full">
            <h2 className='font-joss lg:text-[36px] text-[20px] font-semibold text-[#101750] py-5'>Information About us</h2>
            <p className='lg:text-[16px] text-[14px] font-normal text-[#8D92A7] font-joss leading-7 lg:w-[625px] pb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
            <div className="flex lg:gap-3 gap-x-10 lg:justify-start justify-center">
              <div className="lg:h-[25px] lg:w-[25px] h-[15px] w-[15px] rounded-full bg-[#5625DF]"></div>
              <div className="lg:h-[25px] lg:w-[25px] h-[15px] w-[15px] rounded-full bg-[#FF27B7]"></div>
              <div className="lg:h-[25px] lg:w-[25px] h-[15px] w-[15px] rounded-full bg-[#37DAF3]"></div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <h2 className='font-joss lg:text-[36px] text-[20px] lg:text-start text-center font-semibold text-[#101750] py-5'>Contact Way</h2>
            <div className="flex justify-between items-center">
              <div className="">
                <div className="flex lg:gap-5 gap-2 pb-8 items-center">
                  <div className="lg:h-[45px] lg:w-[45px] h-[15px] w-[15px] rounded-full bg-[#5625DF]"></div>
                  <div className="">
                    <h5 className='font-joss font-normal lg:text-[16px] text-[12px]'>Tel: 877-67-88-99</h5>
                    <p className='font-joss font-normal lg:text-[16px] text-[12px]'>E-Mail: shop@store.com</p>
                  </div>
                </div>
                <div className="flex lg:gap-5 gap-2 items-center">
                  <div className="lg:h-[45px] lg:w-[45px] h-[15px] w-[15px] rounded-full bg-[#FFB265]"></div>
                  <div className="">
                    <h5 className='font-joss font-normal lg:text-[16px] text-[12px]'>20 Margaret st, London</h5>
                    <p className='font-joss font-normal lg:text-[16px] text-[12px]'>Great britain, 3NM98-LK</p>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="flex lg:gap-5 gap-2 pb-8 items-center">
                  <div className="lg:h-[45px] lg:w-[45px] h-[15px] w-[15px]  rounded-full bg-[#FB2E86]"></div>
                  <div className="">
                    <h5 className='font-joss font-normal lg:text-[16px] text-[12px]'>Support Forum</h5>
                    <p className='font-joss font-normal lg:text-[16px] text-[12px]'>For over 24hr</p>
                  </div>
                </div>
                <div className="flex lg:gap-5 gap-2 items-center">
                  <div className="lg:h-[45px] lg:w-[45px] h-[15px] w-[15px] rounded-full  bg-[#1BE982]"></div>
                  <div className="">
                    <h5 className='font-joss font-normal lg:text-[16px] text-[12px]'>Free standard shipping</h5>
                    <p className='font-joss font-normal lg:text-[16px] text-[12px]'>on all orders.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex justify-between lg:pt-[120px] pt-[30px]">
          <div className="lg:w-[50%] w-full">
            <h2 className='font-joss lg:text-[36px] text-[18px] font-semibold text-[#101750] py-5 lg:text-start text-center'>Get In Touch</h2>
            <p className='lg:text-[16px] text-[14px] font-medium text-[#8D92A7] font-joss leading-7 lg:w-[625px] pb-10 lg:text-start text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices  tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.</p>
            <div className="lg:flex gap-10 lg:pb-10 pb-3">
              <input className='lg:w-[255px] w-full h-[45px] pl-3 outline-none border-2 border-[#A4B6C8]' type="text" placeholder='Your Name*' />
              <input className='lg:w-[255px] w-full lg:mt-0 mt-3 h-[45px] pl-3 outline-none border-2 border-[#A4B6C8]' type="text" placeholder='Your E-mail' />
            </div>
            <input className='lg:w-[550px] w-full h-[45px] pl-3 outline-none border-2 border-[#A4B6C8]' type="text" placeholder='Subject*' />
            <div className="lg:pt-10 pt-3">
            <textarea className='lg:w-[550px] w-full h-[150px] pl-3 outline-none border-2 border-[#A4B6C8]' type="text" placeholder='your message'></textarea>
            </div>
            <button className='lg:py-[14px] py-2 lg:px-[30px] px-[20px] bg-[#FB2E86] lg:mt-[50px] mt-5 font-Sans lg:font-bold font-medium text-[16px] text-[#fff] rounded-sm lg:text-start text-center'>Send Mail</button>
          </div>
          <div className="lg:w-[50%] w-full lg:mt-0 mt-3">
            <img src={Con} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
