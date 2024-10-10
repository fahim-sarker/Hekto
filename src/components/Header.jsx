import React from 'react'
import Container from './Container'
import { MdOutlineMail } from "react-icons/md";
import { MdOutlinePhoneLocked } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  let data = useSelector((state) => state.product.cartitem)
  
  return (
    <section className='bg-[#7E33E0] py-[14px]'>
      <Container>
        <div className="flex justify-between">
          <div className="w-1/5 flex items-center gap-x-2 ">
            <div className="text-white text-[18px] font-medium"><MdOutlineMail /></div>
            <div className="text-white font-joss text-[18px] font-medium"><a href='mail to:sarkerfahim599@gmail.com'>sarkerfahim599@gmail.com</a></div>
          </div>
          <div className="w-1/5 flex items-center gap-x-2 font-joss">
            <div className="text-white text-[18px] font-medium"><MdOutlinePhoneLocked /></div>
            <div className="text-white font-joss text-[18px] font-medium"><a href='tel:+8801647389997'>01647389997</a></div>
          </div>
          <div className="w-3/5 font-joss  text-end flex justify-end items-center text-[16px] gap-x-10 text-white" >
            <div className="flex gap-x-1 items-center">
              <h2 className="text-white font-joss text-[18px] font-medium">English</h2>
              <FaAngleDown className="text-white font-joss text-[18px] font-medium"/>
            </div>
            <div className="flex gap-x-1 items-center">
              <h2 className="text-white font-joss text-[18px] font-medium">USD</h2>
              <FaAngleDown className="text-white font-joss text-[18px] font-medium"/>
            </div>
            <div className="flex gap-x-1 items-center">
                <h2 className='text-white font-joss text-[18px] font-medium'><Link to="/login">Login</Link></h2>
                <FaRegUser className="text-white font-joss text-[18px] font-medium"/>
            </div>
            <div className="flex gap-x-1 items-center">
              <h2 className="text-white font-joss text-[18px] font-medium">Wishlist</h2>
              <CiHeart className="text-white font-joss text-[25px] font-medium"/>
            </div>
            <div className="realative">
              <Link to="/signup">
                <IoCartOutline className='text-white font-joss text-[25px] font-medium' />
              </Link>
                {data.length > 0 ? <div className="absolute top-0 right-[10px] text-center  h-[20px] w-[20px] bg-[#000] rounded-full">
              {data.length}
              </div> : ""}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Header

