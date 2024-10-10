import React from 'react'
import Container from './Container'
import Sofa from "../assets/sofa.png"

const Unique = () => {
  return (
    <div className='bg-purple-50 h-[579px] py-5'>
        <Container>
            <div className="flex justify-between">
                <div className="w-[48%]">
                    <img src={Sofa} alt="" />
                </div>
                <div className="w-[48%]">
                    <h2 className='text-[40px] pt-[50px] pb-[30px] font-bold font-joss tracking-[1.5%]'>Unique Features Of leatest &
                    Trending Poducts</h2>
                    <div className="flex gap-x-2 items-center">
                        <div className="w-[15px] h-[15px] bg-red-600 rounded-full"></div>
                        <div className="">
                            <h2  className='font-joss text-[16px] font-normal'>All frames constructed with hardwood solids and laminates</h2>
                        </div>
                    </div>
                    <div className="flex gap-x-2 items-center py-5">
                        <div className="w-[15px] h-[15px] bg-[#2B2BF5] rounded-full"></div>
                        <div className="">
                            <h2 className='font-joss text-[16px] font-normal'>Reinforced with double wood dowels, glue, screw - nails corner 
                            blocks and machine nails</h2>
                        </div>
                    </div>
                    <div className="flex gap-x-2 items-center">
                        <div className="w-[15px] h-[15px] bg-[#2BF5CC] rounded-full"></div>
                        <div className="">
                            <h2 className='font-joss text-[16px] font-normal'>Arms, backs and seats are structurally reinforced</h2>
                        </div>
                    </div>
                    <div className="flex gap-x-5 pt-10">
                        <div className="">
                            <button className='h-[50px] w-[145px] rounded-sm bg-pink-600 text-white font-joss font-medium text-[20px]'>Add To Cart</button>
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
