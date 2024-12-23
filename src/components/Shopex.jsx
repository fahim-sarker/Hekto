import React from 'react'
import Container from './Container'
import Delivery from "../assets/delivery.png"
import Support from "../assets/support.png"
import premium from "../assets/premium.png"
import Cash from "../assets/cashback 1.png"

const Shopex = () => {
    return (
        <div className='lg:pt-[50px] pt-5 lg:pb-[120px] pb-[50px] lg:px-0 px-3'>
            <Container>
                <div className="lg:pb-[50px] pb-5 text-center">
                    <h2 className='lg:text-[42px] text-[20px] font-joss font-bold lg:pb-[48px] pb-5'>What Shopex Offer!</h2>
                </div>
                <div className="flex flex-wrap justify-between">
                    <div className="lg:w-[23%] w-[48%] py-[45px] lg:mt-0 mt-2 lg:h-[320px] h-[250px] text-center bg-[#ffff] shadow-xl">
                        <div className="flex justify-center">
                            <img className='' src={Delivery} alt=""/>
                        </div>
                        <h3 className='font-joss font-medium lg:text-[25px] text-[16px] lg:py-[20px] py-[10px]'>24/7 Support</h3>
                        <p className='font-joss font-normal lg:text-[20px] text-[14px] lg:px-[30px] px-[10px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                    <div className="lg:w-[23%] w-[48%] py-[45px] lg:mt-0 mt-2 lg:h-[320px] h-[250px] text-center bg-[#ffff] shadow-xl">
                        <div className="flex justify-center">
                            <img className='' src={Cash} alt="" />
                        </div>
                        <h3 className='font-joss font-medium lg:text-[25px] text-[16px] lg:py-[20px] py-[10px]'>24/7 Support</h3>
                        <p className='font-joss font-normal lg:text-[20px] text-[14px] lg:px-[30px] px-[10px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                    <div className="lg:w-[23%] w-[48%] py-[45px] lg:mt-0 mt-5 lg:h-[320px] h-[250px] text-center bg-[#ffff] shadow-xl">
                        <div className="flex justify-center">
                            <img className='' src={premium} alt="" />
                        </div>
                        <h3 className='font-joss font-medium lg:text-[25px] text-[16px] lg:py-[20px] py-[10px]'>24/7 Support</h3>
                        <p className='font-joss font-normal lg:text-[20px] text-[14px] lg:px-[30px] px-[10px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                    <div className="lg:w-[23%] w-[48%] py-[45px] lg:mt-0 mt-5 lg:h-[320px] h-[250px] text-center bg-[#ffff] shadow-xl">
                        <div className="flex justify-center">
                            <img className='' src={Support} alt="" />
                        </div>
                        <h3 className='font-joss font-medium lg:text-[25px] text-[16px] lg:py-[20px] py-[10px]'>24/7 Support</h3>
                        <p className='font-joss font-normal lg:text-[20px] text-[14px] lg:px-[30px] px-[10px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Shopex
