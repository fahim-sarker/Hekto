import React, { useContext } from 'react'
import Container from './Container'
import { Tabs } from '@ark-ui/react'
import { IoMdCheckmark } from "react-icons/io";
import Unique from "../assets/unique.png"
import Unique1 from "../assets/sofa.png"
import Unique2 from "../assets/chair.png"
import { apidata } from './ContextApi';
import { Link } from 'react-router-dom';


const Discount = () => {

    let data = useContext(apidata)

    let Discount = data.filter((product) => product.id == 124)
    let Oppo = data.filter((product) => product.id == 129)
    let Realme = data.filter((product) => product.id == 133)

    return (
        <div className='py-[120px]'>
            <Container>
                <div className="flex justify-center">
                    <h2 className='text-[42px] text-[navy] font-joss font-bold pb-[48px]'>Discount Item</h2>
                </div>
                <Tabs.Root defaultValue="react">
                    <Tabs.List className='flex gap-x-16 justify-center pb-14'>
                        <Tabs.Trigger className='font-joss text-[20px] font-normal underline' value="react">Apple</Tabs.Trigger>
                        <Tabs.Trigger className='font-joss text-[20px] font-normal underline' value="vue">Realme</Tabs.Trigger>
                        <Tabs.Trigger className='font-joss text-[20px] font-normal underline' value="solid">Samsung</Tabs.Trigger>
                    </Tabs.List>
                    <Tabs.Content value="react">
                        {Discount.map((Discountdata) => (
                            <div className="flex justify-between">
                                <div className="w-[50%]">
                                    <h2 className='text-[35px] font-joss font-medium text-[navy] pb-4'>20% Discount Of All Products</h2>
                                    <p className='text-[20px] font-joss font-medium text-pink-500 pb-5'>{Discountdata.title}</p>
                                    <p className='text-[18px] font-joss font-normal w-[500px] leading-[30px] text-[#B7BACB] pb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>
                                    <div className="flex">
                                        <div className="flex gap-x-2 items-center">
                                            <div className="">
                                                <IoMdCheckmark />
                                            </div>
                                            <div className="">
                                                <p className='text-[18px] font-joss font-normal w-[500px] leading-[30px] text-[#B7BACB]'>Material expose like metals</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-x-2 items-center">
                                            <div className="">
                                                <IoMdCheckmark />
                                            </div>
                                            <div className="">
                                                <p className='text-[18px] font-joss font-normal w-[500px] leading-[30px] text-[#B7BACB]'>Material expose like metals</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="flex gap-x-2 items-center">
                                            <div className="">
                                                <IoMdCheckmark />
                                            </div>
                                            <div className="">
                                                <p className='text-[18px] font-joss font-normal w-[500px] leading-[30px] text-[#B7BACB]'>Clear lines and geomatric figures.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-x-2 items-center">
                                            <div className="">
                                                <IoMdCheckmark />
                                            </div>
                                            <div className="">
                                                <p className='text-[18px] font-joss font-normal w-[500px] leading-[30px] text-[#B7BACB]'>Material expose like metals</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pt-10">
                                        <button className='h-[60px] w-[170px] rounded-sm bg-pink-600 text-white font-joss font-medium text-[20px] cursor-pointer'><Link to="/shop">Shop Now</Link></button>
                                    </div>
                                </div>
                                <div className="w-[45%] flex justify-center">
                                    <Link to="/shop">
                                        <div className="w-[500px] flex justify-center h-[500px] rounded-full bg-pink-100 items-center">
                                            <img className='w-[350px] h-[350px]' src={Discountdata.thumbnail} alt="" />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </Tabs.Content>
                    <Tabs.Content value="vue">
                        {Oppo.map((oppophone) => (
                            <div className="flex justify-between">
                                <div className="w-[50%]">
                                    <h2 className='text-[35px] font-joss font-medium text-[navy] pb-4'>20% Discount Of All Products</h2>
                                    <p className='text-[20px] font-joss font-medium text-pink-500 pb-5'>{oppophone.title}</p>
                                    <p className='text-[18px] font-joss font-normal w-[500px] leading-[30px] text-[#B7BACB] pb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>
                                    <div className="flex">
                                        <div className="flex gap-x-2 items-center">
                                            <div className="">
                                                <IoMdCheckmark />
                                            </div>
                                            <div className="">
                                                <p className='text-[18px] font-joss font-normal w-[500px] leading-[30px] text-[#B7BACB]'>Material expose like metals</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-x-2 items-center">
                                            <div className="">
                                                <IoMdCheckmark />
                                            </div>
                                            <div className="">
                                                <p className='text-[18px] font-joss font-normal w-[500px] leading-[30px] text-[#B7BACB]'>Material expose like metals</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="flex gap-x-2 items-center">
                                            <div className="">
                                                <IoMdCheckmark />
                                            </div>
                                            <div className="">
                                                <p className='text-[18px] font-joss font-normal w-[500px] leading-[30px] text-[#B7BACB]'>Clear lines and geomatric figures.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-x-2 items-center">
                                            <div className="">
                                                <IoMdCheckmark />
                                            </div>
                                            <div className="">
                                                <p className='text-[18px] font-joss font-normal w-[500px] leading-[30px] text-[#B7BACB]'>Material expose like metals</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pt-10">
                                        <button className='h-[60px] w-[170px] rounded-sm bg-pink-600 text-white font-joss font-medium text-[20px]'><Link to="/shop">Shop Now</Link></button>
                                    </div>
                                </div>
                                <div className="w-[45%] flex justify-center">
                                    <Link to="/shop">
                                        <div className="w-[500px] h-[500px] flex justify-center rounded-full bg-pink-100 items-center">
                                            <img className='w-[350px] h-[350px]' src={oppophone.thumbnail} alt="" />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </Tabs.Content>
                    <Tabs.Content value="solid">
                        {Realme.map((realmephone) => (
                            <div className="flex justify-between">
                                <div className="w-[50%]">
                                    <h2 className='text-[35px] font-joss font-medium text-[navy] pb-4'>20% Discount Of All Products</h2>
                                    <p className='text-[20px] font-joss font-medium text-pink-500 pb-5'>{realmephone.title}</p>
                                    <p className='text-[18px] font-joss font-normal w-[500px] leading-[30px] text-[#B7BACB] pb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>
                                    <div className="flex">
                                        <div className="flex gap-x-2 items-center">
                                            <div className="">
                                                <IoMdCheckmark />
                                            </div>
                                            <div className="">
                                                <p className='text-[18px] font-joss font-normal w-[500px] leading-[30px] text-[#B7BACB]'>Material expose like metals</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-x-2 items-center">
                                            <div className="">
                                                <IoMdCheckmark />
                                            </div>
                                            <div className="">
                                                <p className='text-[18px] font-joss font-normal w-[500px] leading-[30px] text-[#B7BACB]'>Material expose like metals</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="flex gap-x-2 items-center">
                                            <div className="">
                                                <IoMdCheckmark />
                                            </div>
                                            <div className="">
                                                <p className='text-[18px] font-joss font-normal w-[500px] leading-[30px] text-[#B7BACB]'>Clear lines and geomatric figures.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-x-2 items-center">
                                            <div className="">
                                                <IoMdCheckmark />
                                            </div>
                                            <div className="">
                                                <p className='text-[18px] font-joss font-normal w-[500px] leading-[30px] text-[#B7BACB]'>Material expose like metals</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pt-10">
                                        <button className='h-[60px] w-[170px] rounded-sm bg-pink-600 text-white font-joss font-medium text-[20px]'><Link to="/shop">Shop Now</Link></button>
                                    </div>
                                </div>
                                <div className="w-[45%] flex justify-center">
                                    <Link to="/shop">
                                        <div className="w-[500px] h-[500px] flex justify-center rounded-full bg-pink-100 items-center">
                                            <img className='w-[350px] h-[350px]' src={realmephone.thumbnail} alt="" />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </Tabs.Content>
                </Tabs.Root>
            </Container>
        </div>
    )
}

export default Discount
