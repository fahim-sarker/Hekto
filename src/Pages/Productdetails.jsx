import React, { useEffect, useState } from 'react'
import Pt5 from "../assets/pt5.png"
import Pt6 from "../assets/pt6.png"
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import five from "../assets/5.png"
import { FaStar,FaArrowRightLong,FaRegStar  } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { Tabs } from '@ark-ui/react'
import { FaArrowRight } from "react-icons/fa";
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { Addtocart } from '../components/slice/Productslice';

const Productdetails = () => {
    let [singledata, Setsingledata]= useState([])
    let dispatch = useDispatch()
    let productid = useParams()
    let getdata = axios.get(`https://dummyjson.com/products/${productid.id}`).then((response)=>{
        Setsingledata(response.data);
    })
    useEffect=>(()=>{
        getdata()
    },[])
    
    let Rating = Array.from({length:5},(_,index)=>{
        let ratingnumber = index +0.5
        return(
            singledata.rating >= index+1 ? <FaStar /> : singledata.rating > ratingnumber ?<FaStarHalfAlt /> :<FaRegStar />
        )
    })
    
    let handleaddtocart = (item) =>{
        dispatch(Addtocart({...item, quantity:1}))
    }
      
    return (
        <section>
            <div className="lg:pt-[96px] lg:pb-[126px] py-[30px] lg:px-0 px-3 bg-[#F6F5FF]">
                <div className="container mx-auto">
                    <h2 className='font-joss font-bold lg:text-[36px] text-[20px]'>Product Details</h2>
                    <ul className='flex gap-1'>
                        <li className='font-joss font-normal text-[16px]'><Link to="/">Home .</Link></li>
                        <li className='font-joss font-normal text-[16px]'>Pages .</li>
                        <li className='font-joss font-normal text-[16px] text-pink-600'>Product Details</li>
                    </ul>
                </div>
            </div>
                {singledata?.images?.map((item)=>(
            <div className="lg:py-[120px] container mx-auto">
                <div className="bg-[#FFFFFF] py-[20px] shadow-xl lg:flex justify-between px-4">
                    <div className="lg:w-[15%] w-full lg:flex-col flex lg:gap-y-3 lg:gap-x-0 gap-x-5">
                        <img className='lg:w-[151px] lg:h-[155px] h-[100px] w-[100px] bg-[#E5F0FA] rounded-md' src={item} alt="" />
                        <img className='lg:w-[151px] lg:h-[155px] h-[100px] w-[100px] bg-[#C4C4C4] rounded-md' src={item} alt="" />
                        <img className='lg:w-[151px] lg:h-[155px] h-[100px] w-[100px] bg-[#C4C4C4] rounded-md' src={item} alt="" />
                    </div>
                    <div className="lg:w-[30%] w-full lg:h-auto h-[300px] lg:mt-0 mt-3 bg-[#C4C4C4] rounded-md">
                        <img src={item} alt="" className='lg:h-full h-[300px] w-full'/>
                    </div>
                    <div className="lg:w-[50%] w-full">
                        <h2 className='lg:text-[36px] text-[20px] font-joss font-semibold lg:pt-[74px] pt-[20px] lg:pb-[10px] lg:text-start text-center'>{singledata.title}</h2>
                        <div className="flex gap-4 items-center lg:py-[10px] py-1 lg:justify-start justify-center">
                            <div className="flex gap-x-2 text-[#FFC416] ">
                                {Rating}
                            </div>
                            <div className="">
                                <p className='text-[16px] font-joss font-medium'>(22)</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-center py-[5px] lg:justify-start justify-center">
                            <p className='text-[16px] font-joss font-medium'>${singledata.price}</p>
                            <p className='text-[16px] font-joss text-pink-600 line-through font-medium'>${singledata.price}</p>
                        </div>
                        <p className='text-[16px] font-joss font-semibold py-[5px] lg:text-start text-center'>Color</p>
                        <p className='lg:text-[16px] text-[12px] lg:text-start text-center font-joss font-semibold lg:w-[560px] text-[#A9ACC6] py-[5px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.</p>
                        <div className="flex gap-4 items-center py-[5px] lg:justify-start justify-center">
                            <button className='lg:h-[50px] lg:w-[145px] h-[40px] w-[120px] rounded-sm hover:bg-pink-600 hover:text-white text-black duration-300 ease-in-out font-joss font-medium lg:text-[20px] text-[16px] border-2 border-[#000]'><Link to="/signup" onClick={()=>handleaddtocart(singledata)}>Add To Cart</Link></button>
                            <CiHeart className='text-[29px] font-joss font-medium' />
                        </div>
                        <div className="flex justify-between lg:flex-col items-center lg:items-start">
                        <h3 className='lg:text-[16px] text-[14px] font-joss font-semibold py-[5px]'>Categories:</h3>
                        <h4 className='lg:text-[16px] text-[14px] font-joss font-semibold'>Tags</h4>
                        <div className="flex gap-4 items-center">
                            <p className='lg:text-[16px] text-[14px] font-joss font-semibold py-[5px]'>Share</p>
                            <div className="flex gap-x-5 items-center">
                                <div className="h-[25px] w-[25px] items-center rounded-full bg-[navy]  flex justify-center cursor-pointer">
                                    <FaFacebookF className='text-[16px] text-white' />
                                </div>
                                <div className="h-[25px] w-[25px] items-center rounded-full bg-pink-600  flex justify-center cursor-pointer">
                                    <FaInstagram className='text-[16px] text-white' />
                                </div>
                                <div className="h-[25px] w-[25px] items-center rounded-full bg-[navy] flex justify-center cursor-pointer">
                                    <CiTwitter className='text-[16px] text-white' />
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
                ))}
            <div className="bg-[#F9F8FE] lg:py-[110px] py-[30px] lg:px-0 px-3">
                <div className="container mx-auto">
                    <Tabs.Root defaultValue="react">
                        <Tabs.List className='flex lg:gap-x-16 gap-x-3'>
                            <Tabs.Trigger className='lg:text-[24px] text-[16px] underline font-joss lg:font-semibold font-normal' value="react">Description</Tabs.Trigger>
                            <Tabs.Trigger className='lg:text-[24px] text-[16px] underline font-joss lg:font-semibold font-normal' value="vue">Additional Info</Tabs.Trigger>
                            <Tabs.Trigger className='lg:text-[24px] text-[16px] underline font-joss lg:font-semibold font-normal' value="solid">Reviews</Tabs.Trigger>
                            <Tabs.Trigger className='lg:text-[24px] text-[16px] underline font-joss lg:font-semibold font-normal' value="fahim">Video</Tabs.Trigger>
                        </Tabs.List>
                        <Tabs.Content value="react">
                            <h3 className='lg:text-[24px] text-[20px] lg:text-start text-center font-joss font-semibold lg:pt-[60px] pt-[20px]'>Varius tempor.</h3>
                            <p  className='lg:text-[16px] text-[12px] font-joss lg:font-semibold font-normal lg:text-start text-center text-[#A9ACC6] py-5 lg:w-[1186px]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                            <h4 className='lg:text-[24px] text-[20px] lg:text-start text-center font-joss font-semibold lg:py-[30px] py-[10px]'>More details</h4>
                            <div className="flex gap-4 items-center">
                                <FaArrowRightLong />
                                <p className='lg:text-[16px] text-[12px] font-joss lg:font-semibold font-medium text-[#A9ACC6]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                            </div>
                            <div className="flex gap-4 items-center py-5">
                                <FaArrowRightLong />
                                <p className='lg:text-[16px] text-[12px] font-joss lg:font-semibold font-normal text-[#A9ACC6]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <FaArrowRightLong />
                                <p className='lg:text-[16px] text-[12px] font-joss lg:font-semibold font-normal text-[#A9ACC6]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <FaArrowRightLong />
                                <p className='lg:text-[16px] text-[12px] font-joss lg:font-semibold font-normal text-[#A9ACC6] py-5'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                            </div>
                        </Tabs.Content>
                        <Tabs.Content value="vue">
                            <h3 className='lg:text-[24px] text-[20px] lg:text-start text-center font-joss font-semibold lg:pt-[60px] pt-[20px]'>Varius tempor.</h3>
                            <p  className='lg:text-[16px] text-[12px] font-joss lg:font-semibold font-normal lg:text-start text-center text-[#A9ACC6] py-5 lg:w-[1186px]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                            <h4 className='lg:text-[24px] text-[20px] lg:text-start text-center font-joss font-semibold lg:py-[30px] py-[10px]'>More details</h4>
                            <div className="flex gap-4 items-center">
                                <FaArrowRightLong />
                                <p className='lg:text-[16px] text-[12px] font-joss lg:font-semibold font-medium text-[#A9ACC6]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                            </div>
                            <div className="flex gap-4 items-center py-5">
                                <FaArrowRightLong />
                                <p className='lg:text-[16px] text-[12px] font-joss lg:font-semibold font-normal text-[#A9ACC6]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <FaArrowRightLong />
                                <p className='lg:text-[16px] text-[12px] font-joss lg:font-semibold font-normal text-[#A9ACC6]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <FaArrowRightLong />
                                <p className='lg:text-[16px] text-[12px] font-joss lg:font-semibold font-normal text-[#A9ACC6] py-5'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                            </div>
                        </Tabs.Content>
                        <Tabs.Content value="solid">
                            <h3 className='lg:text-[24px] text-[20px] lg:text-start text-center font-joss font-semibold lg:pt-[60px] pt-[20px]'>Varius tempor.</h3>
                            <p  className='lg:text-[16px] text-[12px] font-joss lg:font-semibold font-normal lg:text-start text-center text-[#A9ACC6] py-5 lg:w-[1186px]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                            <h4 className='lg:text-[24px] text-[20px] lg:text-start text-center font-joss font-semibold lg:py-[30px] py-[10px]'>More details</h4>
                            <div className="flex gap-4 items-center">
                                <FaArrowRightLong />
                                <p className='lg:text-[16px] text-[12px] font-joss lg:font-semibold font-medium text-[#A9ACC6]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                            </div>
                            <div className="flex gap-4 items-center py-5">
                                <FaArrowRightLong />
                                <p className='lg:text-[16px] text-[12px] font-joss lg:font-semibold font-normal text-[#A9ACC6]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <FaArrowRightLong />
                                <p className='lg:text-[16px] text-[12px] font-joss lg:font-semibold font-normal text-[#A9ACC6]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <FaArrowRightLong />
                                <p className='lg:text-[16px] text-[12px] font-joss lg:font-semibold font-normal text-[#A9ACC6] py-5'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                            </div>
                        </Tabs.Content>
                        <Tabs.Content value="fahim">
                            <h3 className='lg:text-[24px] text-[20px] lg:text-start text-center font-joss font-semibold lg:pt-[60px] pt-[20px] text-pink-600'>Varius tempor.</h3>
                            <p  className='lg:text-[16px] text-[12px] font-joss lg:font-semibold font-normal lg:text-start text-center text-[#A9ACC6] py-5 lg:w-[1186px]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                            <h4 className='lg:text-[24px] text-[20px] lg:text-start text-center font-joss font-semibold lg:py-[30px] py-[10px]'>More details</h4>
                            <div className="flex gap-4 items-center">
                                <FaArrowRightLong />
                                <p className='lg:text-[16px] text-[12px] font-joss lg:font-semibold font-medium text-[#A9ACC6]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                            </div>
                            <div className="flex gap-4 items-center py-5">
                                <FaArrowRightLong />
                                <p className='lg:text-[16px] text-[12px] font-joss lg:font-semibold font-normal text-[#A9ACC6]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <FaArrowRightLong />
                                <p className='lg:text-[16px] text-[12px] font-joss lg:font-semibold font-normal text-[#A9ACC6]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <FaArrowRightLong />
                                <p className='lg:text-[16px] text-[12px] font-joss lg:font-semibold font-normal text-[#A9ACC6] py-5'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                            </div>
                        </Tabs.Content>
                    </Tabs.Root>
                </div>
            </div>
            <div className="lg:py-[120px] py-[30px] lg:px-0 px-3">
                <div className="container mx-auto">
                    <h2 className='lg:text-[36px] text-[20px] lg:text-start text-center font-joss font-semibold pb-5'>Related Products</h2>
                    <div className="flex justify-between">
                        <div className="w-[25%]">
                            <img src={Pt5} alt="" />
                        </div>
                        <div className="w-[25%]">
                        <img src={Pt6} alt="" />
                        </div>
                        <div className="w-[25%]">
                        <img src={Pt5} alt="" />
                        </div>
                        <div className="w-[25%]">
                        <img src={Pt6} alt="" />
                        </div>
                    </div>
                    <div className="lg:pt-[125px] pt-[30px] flex justify-center">
                        <img src={five} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Productdetails
