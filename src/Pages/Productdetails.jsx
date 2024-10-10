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
            singledata.rating >= index+1 ?<FaStar /> : singledata.rating > ratingnumber ?<FaStarHalfAlt /> :<FaRegStar />
        )
    })
    
    let handleaddtocart = (item) =>{
        dispatch(Addtocart({...item, quantity:1}))
    }
      
    return (
        <section>
            <div className="pt-[96px] pb-[126px] bg-[#F6F5FF]">
                <div className="container mx-auto">
                    <h2 className='font-joss font-bold text-[36px]'>Product Details</h2>
                    <ul className='flex gap-1'>
                        <li className='font-joss font-normal text-[16px]'><Link to="/">Home .</Link></li>
                        <li className='font-joss font-normal text-[16px]'>Pages .</li>
                        <li className='font-joss font-normal text-[16px] text-pink-600'>Product Details</li>
                    </ul>
                </div>
            </div>
                {singledata?.images?.map((item)=>(
            <div className="py-[120px] container mx-auto">
                <div className="bg-[#FFFFFF] py-[20px] shadow-xl flex justify-between px-4">
                    <div className="w-15%]">
                        <img className='w-[151px] h-[155px] bg-[#E5F0FA] rounded-md' src={item} alt="" />
                        <img className='w-[151px] my-2 h-[155px] bg-[#C4C4C4] rounded-md' src={item} alt="" />
                        <img className='w-[151px] h-[155px] bg-[#C4C4C4] rounded-md' src={item} alt="" />
                    </div>
                    <div className="w-[30%] bg-[#C4C4C4] rounded-md">
                        <img src={item} alt="" />
                    </div>
                    <div className="w-[50%]">
                        <h2 className='text-[36px] font-joss font-semibold pt-[74px] pb-[10px]'>{singledata.title}</h2>
                        <div className="flex gap-4 items-center py-[10px]">
                            <div className="flex gap-x-2 text-[#FFC416] ">
                                {Rating}
                            </div>
                            <div className="">
                                <p className='text-[16px] font-joss font-medium'>(22)</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-center py-[5px]">
                            <p className='text-[16px] font-joss font-medium'>${singledata.price}</p>
                            <p className='text-[16px] font-joss text-pink-600 line-through font-medium'>${singledata.price}</p>
                        </div>
                        <p className='text-[16px] font-joss font-semibold py-[5px]'>Color</p>
                        <p className='text-[16px] font-joss font-semibold w-[560px] text-[#A9ACC6] py-[5px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.</p>
                        <div className="flex gap-4 items-center py-[5px]">
                            <button className='h-[50px] w-[145px] rounded-sm hover:bg-pink-600 hover:text-white text-black duration-300 ease-in-out font-joss font-medium text-[20px] border-2 border-[#000]'><Link to="/signup" onClick={()=>handleaddtocart(singledata)}>Add To Cart</Link></button>
                            <CiHeart className='text-[29px] font-joss font-medium' />
                        </div>
                        <h3 className='text-[16px] font-joss font-semibold py-[5px]'>Categories:</h3>
                        <h4 className='text-[16px] font-joss font-semibold'>Tags</h4>
                        <div className="flex gap-4 items-center">
                            <p className='text-[16px] font-joss font-semibold py-[5px]'>Share</p>
                            <div className="flex gap-x-5 items-center">
                                <div className="h-[25px] w-[25px] items-center rounded-full bg-[navy]  flex justify-center">
                                    <FaFacebookF className='text-[16px] text-white' />
                                </div>
                                <div className="h-[25px] w-[25px] items-center rounded-full bg-pink-600  flex justify-center">
                                    <FaInstagram className='text-[16px] text-white' />
                                </div>
                                <div className="h-[25px] w-[25px] items-center rounded-full bg-[navy] flex justify-center">
                                    <CiTwitter className='text-[16px] text-white' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                ))}
            <div className="bg-[#F9F8FE] py-[110px]">
                <div className="container mx-auto">
                    <Tabs.Root defaultValue="react">
                        <Tabs.List className='flex gap-x-16'>
                            <Tabs.Trigger className='text-[24px] underline font-joss font-semibold' value="react">Description</Tabs.Trigger>
                            <Tabs.Trigger className='text-[24px] underline font-joss font-semibold' value="vue">Additional Info</Tabs.Trigger>
                            <Tabs.Trigger className='text-[24px] underline font-joss font-semibold' value="solid">Reviews</Tabs.Trigger>
                            <Tabs.Trigger className='text-[24px] underline font-joss font-semibold' value="fahim">Video</Tabs.Trigger>
                        </Tabs.List>
                        <Tabs.Content value="react">
                            <h3 className='text-[24px] font-joss font-semibold pt-[60px]'>Varius tempor.</h3>
                            <p  className='text-[16px] font-joss font-semibold text-[#A9ACC6] py-5 w-[1186px]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                            <h4 className='text-[24px] font-joss font-semibold py-[30px]'>More details</h4>
                            <div className="flex gap-4 items-center">
                                <FaArrowRightLong />
                                <p className='text-[16px] font-joss font-semibold text-[#A9ACC6]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                            </div>
                            <div className="flex gap-4 items-center py-5">
                                <FaArrowRightLong />
                                <p className='text-[16px] font-joss font-semibold text-[#A9ACC6]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <FaArrowRightLong />
                                <p className='text-[16px] font-joss font-semibold text-[#A9ACC6]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <FaArrowRightLong />
                                <p className='text-[16px] font-joss font-semibold text-[#A9ACC6] py-5'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                            </div>
                        </Tabs.Content>
                        <Tabs.Content value="vue">
                            <h3 className='text-[24px] font-joss font-semibold pt-[60px]'>Varius tempor.</h3>
                            <p  className='text-[16px] font-joss font-semibold text-[#A9ACC6] py-5 w-[1186px]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                            <h4 className='text-[24px] font-joss font-semibold py-[30px]'>More details</h4>
                            <div className="flex gap-4 items-center">
                                <FaArrowRightLong />
                                <p className='text-[16px] font-joss font-semibold text-[#A9ACC6]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                            </div>
                            <div className="flex gap-4 items-center py-5">
                                <FaArrowRightLong />
                                <p className='text-[16px] font-joss font-semibold text-[#A9ACC6]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <FaArrowRightLong />
                                <p className='text-[16px] font-joss font-semibold text-[#A9ACC6]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <FaArrowRightLong />
                                <p className='text-[16px] font-joss font-semibold text-[#A9ACC6] py-5'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                            </div>
                        </Tabs.Content>
                        <Tabs.Content value="solid">
                            <h3 className='text-[24px] font-joss font-semibold pt-[60px]'>Varius tempor.</h3>
                            <p  className='text-[16px] font-joss font-semibold text-[#A9ACC6] py-5 w-[1186px]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                            <h4 className='text-[24px] font-joss font-semibold py-[30px]'>More details</h4>
                            <div className="flex gap-4 items-center">
                                <FaArrowRightLong />
                                <p className='text-[16px] font-joss font-semibold text-[#A9ACC6]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                            </div>
                            <div className="flex gap-4 items-center py-5">
                                <FaArrowRightLong />
                                <p className='text-[16px] font-joss font-semibold text-[#A9ACC6]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <FaArrowRightLong />
                                <p className='text-[16px] font-joss font-semibold text-[#A9ACC6]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <FaArrowRightLong />
                                <p className='text-[16px] font-joss font-semibold text-[#A9ACC6] py-5'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                            </div>
                        </Tabs.Content>
                        <Tabs.Content value="fahim">
                            <h3 className='text-[24px] font-joss font-semibold pt-[60px] text-pink-600'>Varius tempor.</h3>
                            <p  className='text-[16px] font-joss font-semibold text-[#A9ACC6] py-5 w-[1186px]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                            <h4 className='text-[24px] font-joss font-semibold py-[30px]'>More details</h4>
                            <div className="flex gap-4 items-center">
                                <FaArrowRightLong />
                                <p className='text-[16px] font-joss font-semibold text-[#A9ACC6]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                            </div>
                            <div className="flex gap-4 items-center py-5">
                                <FaArrowRightLong />
                                <p className='text-[16px] font-joss font-semibold text-[#A9ACC6]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <FaArrowRightLong />
                                <p className='text-[16px] font-joss font-semibold text-[#A9ACC6]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <FaArrowRightLong />
                                <p className='text-[16px] font-joss font-semibold text-[#A9ACC6] py-5'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                            </div>
                        </Tabs.Content>
                    </Tabs.Root>
                </div>
            </div>
            <div className="py-[120px]">
                <div className="container mx-auto">
                    <h2 className='text-[36px] font-joss font-semibold pb-5'>Related Products</h2>
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
                    <div className="pt-[125px] flex justify-center">
                        <img src={five} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Productdetails
