import React from 'react'
import { Link } from 'react-router-dom'

const Myaccount = () => {
  return (
    <section className=''>
      <div className="pt-[96px] pb-[126px] bg-[#F6F5FF]">
        <div className="container mx-auto">
          <h2 className='font-joss font-bold text-[36px]'>My Account</h2>
          <ul className='flex gap-1'>
            <li className='font-joss font-normal text-[16px]'>Home .</li>
            <li className='font-joss font-normal text-[16px]'>Pages .</li>
            <li className='font-joss font-normal text-[16px] text-pink-600'>My Account</li>
          </ul>
        </div>
      </div>
      <div className='container mx-auto'>
        <div className=" mt-10 lg:flex justify-between pb-20">
          <div className="lg:w-[20%] w-full">
            <ul>
              <li><h3 className='font-dmsans text-[16px] font-normal leading-[30px] text-[#767676] border-b-[1px] border-[#F0F0F0] py-4 hover:font-bold hover:text-[#262626] ease-in-out duration-500'>Dashboard</h3></li>
              <li><h3 className='font-dmsans text-[16px] font-normal leading-[30px] text-[#767676] border-b-[1px] border-[#F0F0F0] py-4 hover:font-bold hover:text-[#262626] ease-in-out duration-500'>Others</h3></li>
              <li><h3 className='font-dmsans text-[16px] font-normal leading-[30px] text-[#767676] border-b-[1px] border-[#F0F0F0] py-4 hover:font-bold hover:text-[#262626] ease-in-out duration-500'>Donwloads</h3></li>
              <li><h3 className='font-dmsans text-[16px] font-normal leading-[30px] text-[#767676] border-b-[1px] border-[#F0F0F0] py-4 hover:font-bold hover:text-[#262626] ease-in-out duration-500'>Addresses</h3></li>
              <li><h3 className='font-dmsans text-[16px] font-normal leading-[30px] text-[#767676] border-b-[1px] border-[#F0F0F0] py-4 hover:font-bold hover:text-[#262626] ease-in-out duration-500'>Account details</h3></li>
              <li><h3 className='font-dmsans text-[16px] font-normal leading-[30px] text-[#767676] border-b-[1px] border-[#F0F0F0] py-4 hover:font-bold hover:text-[#262626] ease-in-out duration-500'>Logout</h3></li>
            </ul>
          </div>
          <div className="lg:w-[75%] w-full">
            <div className=" mt-7">
              <h3 className='font-dmsans text-[16px] font-normal leading-[30px] text-[#767676]'>Hello <span className='text-[#262626]'>admin</span> (not <span className='text-[#262626]'>admin</span>? <span className='text-[#262626]'>Log out</span>)</h3>
              <p className='font-dmsans lg:text-[16px] font-normal leading-[30px] text-[#767676] w-[80%] mt-[50px]'>From your account dashboard you can view your <span className='text-[#262626]'>recent orders</span>, manage your <span className='text-[#262626]'>shipping and billing addresses</span>, and <span className='text-[#262626]'>edit your password and account details.</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Myaccount
