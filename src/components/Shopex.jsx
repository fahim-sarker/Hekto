import React from 'react'
import Container from './Container'
import Delivery from "../assets/delivery.png"
import Support from "../assets/support.png"
import premium from "../assets/premium.png"
import Cash from "../assets/cashback 1.png"

const Shopex = () => {
    return (
        <div className='pt-[50px] pb-[120px]'>
            <Container>
                <div className="pb-[50px] text-center">
                    <h2 className='text-[42px] font-joss font-bold pb-[48px]'>What Shopex Offer!</h2>
                </div>
                <div className="flex justify-between">
                    <div className="w-[23%] py-[45px] h-[320px] text-center bg-[#ffff] shadow-xl">
                        <div className="flex justify-center">
                            <img className='' src={Delivery} alt="" />
                        </div>
                        <h3 className='font-joss font-medium text-[25px] py-[20px]'>24/7 Support</h3>
                        <p className='font-joss font-normal text-[20px] px-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                    <div className="w-[23%] py-[45px] h-[320px] text-center bg-[#ffff] shadow-xl">
                        <div className="flex justify-center">
                            <img className='' src={Cash} alt="" />
                        </div>
                        <h3 className='font-joss font-medium text-[25px] py-[20px]'>24/7 Support</h3>
                        <p className='font-joss font-normal text-[20px] px-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                    <div className="w-[23%] py-[45px] h-[320px] text-center bg-[#] shadow-xl">
                        <div className="flex justify-center">
                            <img className='' src={premium} alt="" />
                        </div>
                        <h3 className='font-joss font-medium text-[25px] py-[20px]'>24/7 Support</h3>
                        <p className='font-joss font-normal text-[20px] px-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                    <div className="w-[23%] py-[45px] h-[320px] text-center bg-[#ffff] shadow-xl">
                        <div className="flex justify-center">
                            <img className='' src={Support} alt="" />
                        </div>
                        <h3 className='font-joss font-medium text-[25px] py-[20px]'>24/7 Support</h3>
                        <p className='font-joss font-normal text-[20px] px-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Shopex
