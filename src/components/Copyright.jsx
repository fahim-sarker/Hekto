import React from 'react'
import Container from './Container'
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";


const Copyright = () => {
  return (
    <div className='py-[20px] bg-[#E7E4F8] lg:px-0 px-3'>
      <Container>
        <div className="lg:flex lg:justify-between text-center items-center ">
          <p className='lg:text-[20px] text-[16px] font-joss font-normal text-[#9DA0AE]'>©Webecy - All Rights Reserved</p>
          <div className="flex gap-x-5 items-center lg:justify-start justify-center lg:mt-0 mt-2">
            <div className="lg:h-[40px] lg:w-[40px] h-[25px] w-[25px] cursor-pointer items-center rounded-full bg-[navy]  flex justify-center">
              <FaFacebookF className='lg:text-[25px] text-[18px] text-white' />
            </div>
            <div className="lg:h-[40px] lg:w-[40px] h-[25px] w-[25px] cursor-pointer items-center rounded-full bg-[navy]  flex justify-center">
              <FaInstagram className='lg:text-[25px] text-[18px] text-white' />
            </div>
            <div className="lg:h-[40px] lg:w-[40px] h-[25px] w-[25px] cursor-pointer items-center rounded-full bg-[navy] flex justify-center">
              <CiTwitter className='lg:text-[25px] text-[18px] text-white' />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Copyright
