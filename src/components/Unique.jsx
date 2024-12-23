import React from 'react'
import Container from './Container'
import Sofa from "../assets/sofa.png"

const Unique = () => {
  return (
    <div className='bg-purple-50 lg:h-[579px] py-5 lg:px-0 px-3'>
        <Container>
            <div className="lg:flex justify-between">
                <div className="lg:w-[48%] w-full">
                    <img src={Sofa} alt="Sofa"/>
                </div>
                <div className="lg:w-[48%] w-full">
                    <h2 className='lg:text-[40px] text-[18px] lg:pt-[50px] lg:pb-[30px] pb-3 font-bold font-joss'>Unique Features Of leatest &
                    Trending Poducts</h2>
                    <div className="flex gap-x-2 items-center">
                        <div className="w-[15px] h-[15px] bg-red-600 rounded-full"></div>
                        <div className="">
                            <h2  className='font-joss lg:text-[16px] text-[12px] font-normal'>All frames constructed with hardwood solids and laminates</h2>
                        </div>
                    </div>
                    <div className="flex gap-x-2 items-center py-5">
                        <div className="w-[15px] h-[15px] bg-[#2B2BF5] rounded-full"></div>
                        <div className="">
                            <h2 className='font-joss lg:text-[16px] text-[12px] font-normal'>Reinforced with double wood dowels.</h2>
                        </div>
                    </div>
                    <div className="flex gap-x-2 items-center">
                        <div className="w-[15px] h-[15px] bg-[#2BF5CC] rounded-full"></div>
                        <div className="">
                            <h2 className='font-joss lg:text-[16px] text-[12px] font-normal'>Arms, backs and seats are structurally reinforced</h2>
                        </div>
                    </div>
                    <div className="flex gap-x-5 pt-10 items-center">
                        <div className="">
                            <button className='lg:h-[50px] h-[45px] lg:w-[145px] w-[130px] rounded-sm bg-pink-600 text-white font-joss font-medium lg:text-[20px] text-[16px]'>Add To Cart</button>
                        </div>
                        <div className="pt-2">
                            <h3 className='font-joss font-bold text-[16px]'>B&B Italian Sofa </h3>
                            <h3 className='font-joss font-normal text-[16px]'>$32.00</h3>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Unique
