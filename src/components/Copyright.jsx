import React from 'react'
import Container from './Container'
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";


const Copyright = () => {
  return (
    <div className='py-[20px] bg-[#E7E4F8]'>
      <Container>
        <div className="flex justify-between items-center">
          <p className='text-[20px] font-joss font-normal text-[#9DA0AE]'>©Webecy - All Rights Reserved</p>
          <div className="flex gap-x-5 items-center">
            <div className="h-[40px] w-[40px] items-center rounded-full bg-[navy]  flex justify-center">
              <FaFacebookF className='text-[25px] text-white' />
            </div>
            <div className="h-[40px] w-[40px] items-center rounded-full bg-[navy]  flex justify-center">
              <FaInstagram className='text-[25px] text-white' />
            </div>
            <div className="h-[40px] w-[40px] items-center rounded-full bg-[navy] flex justify-center">
              <CiTwitter className='text-[25px] text-white' />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Copyright
