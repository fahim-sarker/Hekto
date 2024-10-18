import React from 'react'
import Container from './Container'
import five from "../assets/5.png"
import { Link } from 'react-router-dom'

const News = () => {
    return (
        <div className='lg:py-[100px] lg:px-0 px-3'>
            <Container>
                <div className="lg:pt-[170px] py-5 lg:pb-[100px] bg-arr bg-no-repeat bg-center bg-cover">
                    <div className="flex justify-center">
                        <h2 className='lg:text-[42px] text-[20px] leading-14 text-[navy] font-joss font-bold lg:pb-[48px] text-center w-[700px]'>Get Leatest Update By Subscribe
                            0ur Newslater</h2>
                    </div>
                    <div className="flex justify-center">
                        <button className='h-[60px] w-[170px] rounded-sm bg-pink-600 text-white font-joss font-medium text-[20px]'><Link to="/shop">Shop Now</Link></button>
                    </div>
                </div>
                <div className="pt-[50px] flex justify-center">
                    <img src={five} alt="" />
                </div>
            </Container>
        </div>
    )
}

export default News
