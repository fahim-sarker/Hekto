import React from 'react'
import about from "../assets/about.png"
import Habout1 from "../assets/habout1.png"
import Habout2 from "../assets/habout2.png"
import { FaPenNib } from "react-icons/fa";
import { CiCalendar, CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom'
import Rec from "../assets/recent.png"
import Sale from "../assets/sale.png"
import Offer from "../assets/ofer.png"
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";


const Blog = () => {
  return (
    <section>
      <div className="lg:pt-[96px] lg:pb-[126px] py-[30px] lg:px-0 px-3 bg-[#F6F5FF]">
        <div className="container mx-auto">
          <h2 className='font-joss font-bold lg:text-[36px] text-[20px]'>Blog Page</h2>
          <ul className='flex gap-1'>
            <li className='font-joss font-normal text-[16px]'><Link to="/">Home .</Link></li>
            <li className='font-joss font-normal text-[16px]'>Pages .</li>
            <li className='font-joss font-normal text-[16px] text-pink-600'>Blog Page</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="lg:flex justify-between lg:py-[100px] py-[30px] lg:px-0 px-3">
          <div className="lg:w-[70%] w-full">
            <img className='lg:w-[870px] w-full' src={about} alt="" />
            <div className="flex pt-5 gap-5 lg:justify-start justify-center">
              <div className="flex gap-x-3 items-center">
                <FaPenNib className='lg:text-[20px] text-[16px] text-pink-600' />
                <p className='lg:text-[20px] text-[14px] font-joss font-normal bg-[#FFE7F9] lg:px-8 px-2 rounded-md py-1'>Surf Auxion</p>
              </div>
              <div className="flex gap-x-3 items-center">
                <CiCalendar className='lg:text-[22px] text-[16px] text-[#FFA454]' />
                <p className='lg:text-[20px] text-[14px] font-joss font-normal bg-[#FFECE2] lg:px-8 px-2 rounded-md py-1'>Aug 09 2020</p>
              </div>
            </div>
            <h2 className='font-joss font-bold lg:text-[30px] text-[18px] lg:text-start text-center text-[navy] py-5'>Mauris at orci non vulputate diam tincidunt nec.</h2>
            <p className='font-joss font-semibold lg:text-[16px] text-[14px] text-[#C7CEE4] lg:w-[900px]  lg:text-start text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
            <p className='lg:text-[24px] text-[20px] lg:text-start text-center font-joss font-normal pt-4 lg:pb-20 pb-3 cursor-pointer'>Read More</p>
            <img src={Habout2} alt="" />
            <div className="flex pt-5 gap-5 lg:justify-start justify-center">
              <div className="flex gap-x-3 items-center">
                <FaPenNib className='lg:text-[20px] text-[16px] text-pink-600' />
                <p className='lg:text-[20px] text-[14px] font-joss font-normal bg-[#FFE7F9] lg:px-8 px-2 rounded-md py-1'>Surf Auxion</p>
              </div>
              <div className="flex gap-x-3 items-center">
                <CiCalendar className='lg:text-[22px] text-[16px] text-[#FFA454]' />
                <p className='lg:text-[20px] text-[14px] font-joss font-normal bg-[#FFE7F9] lg:px-8 px-2 rounded-md py-1'>Aug 09 2020</p>
              </div>
            </div>
            <h2 className='font-joss font-bold lg:text-[30px] text-[18px] lg:text-start text-center text-[navy] py-5'>Mauris at orci non vulputate diam tincidunt nec.</h2>
            <p className='font-joss font-semibold lg:text-[16px] text-[14px] text-[#C7CEE4] lg:w-[900px]  lg:text-start text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
            <p className='lg:text-[24px] text-[20px] lg:text-start text-center font-joss font-normal pt-4 lg:pb-20 pb-3 cursor-pointer'>Read More</p>
            <img src={Habout1} alt="" />
            <div className="flex pt-5 gap-5 lg:justify-start justify-center">
              <div className="flex gap-x-3 items-center">
                <FaPenNib className='lg:text-[20px] text-[16px] text-pink-600' />
                <p className='lg:text-[20px] text-[14px] font-joss font-normal bg-[#FFE7F9] lg:px-8 px-2 rounded-md py-1'>Surf Auxion</p>
              </div>
              <div className="flex gap-x-3 items-center">
                <CiCalendar className='lg:text-[22px] text-[16px] text-[#FFA454]' />
                <p className='lg:text-[20px] text-[14px] font-joss font-normal bg-[#FFE7F9] lg:px-8 px-2 rounded-md py-1'>Aug 09 2020</p>
              </div>
            </div>
            <h2 className='font-joss font-bold lg:text-[30px] text-[18px] lg:text-start text-center text-[navy] py-5'>Mauris at orci non vulputate diam tincidunt nec.</h2>
            <p className='font-joss font-semibold lg:text-[16px] text-[14px] text-[#C7CEE4] lg:w-[900px]  lg:text-start text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
            <p className='lg:text-[24px] text-[20px] lg:text-start text-center font-joss font-normal pt-4 lg:pb-20 pb-3 cursor-pointer'>Read More</p>
          </div>
          <div className="lg:w-[30%] w-full">
            <h3 className='font-joss font-bold text-[20px] text-[navy] py-5 lg:text-start text-center'>Search</h3>
            <div className="">
              <input placeholder='Search For Posts' className='h-[44px] lg:w-[350px] w-full outline-none px-2 border-2 border-[#BDBDD8]' type="search" />
            </div>
            <h3 className='font-joss font-bold text-[20px] text-[navy] py-5 lg:text-start text-center'>Categories</h3>
            <div className="flex gap-20">
              <p className='font-joss font-normal text-[16px] text-white bg-pink-500 w-[122px] h-[30px] flex items-center justify-center rounded-md'>Hobbies (14)</p>
              <p className='font-joss font-normal text-[16px] hover:text-white hover:bg-pink-500 w-[122px] h-[30px] flex items-center justify-center rounded-md text-[#3F509E] duration-300 ease-in-out'>Women (21)</p>
            </div>
            <div className="flex gap-20 lg:py-10 py-2">
              <p className='font-joss font-normal text-[16px] hover:text-white hover:bg-pink-500 w-[122px] h-[30px] flex items-center justify-center rounded-md text-[#3F509E] duration-300 ease-in-out'>Women (21)</p>
              <p className='font-joss font-normal text-[16px] hover:text-white hover:bg-pink-500 w-[122px] h-[30px] flex items-center justify-center rounded-md text-[#3F509E] duration-300 ease-in-out'>Women (21)</p>
            </div>
            <div className="flex gap-20">
              <p className='font-joss font-normal text-[16px] hover:text-white hover:bg-pink-500 w-[122px] h-[30px] flex items-center justify-center rounded-md text-[#3F509E] duration-300 ease-in-out'>Women (21)</p>
              <p className='font-joss font-normal text-[16px] hover:text-white hover:bg-pink-500 w-[122px] h-[30px] flex items-center justify-center rounded-md text-[#3F509E] duration-300 ease-in-out'>Women (21)</p>
            </div>
            <h3 className='text-[22px] font-joss font-semibold text-[#151875] py-10 lg:text-start text-center'>Recent Post</h3>
            <div className="flex gap-5">
              <div className="">
                <img src={Rec} alt="" />
              </div>
              <div className="">
                <p className='font-joss font-normal text-[16px]'>It is a long established fact</p>
                <p className='font-joss font-normal text-[16px]'>Aug 09 2020</p>
              </div>
            </div>
            <div className="flex gap-5 py-5">
              <div className="">
                <img src={Rec} alt="" />
              </div>
              <div className="">
                <p className='font-joss font-normal text-[16px]'>It is a long established fact</p>
                <p className='font-joss font-normal text-[16px]'>Aug 09 2020</p>
              </div>
            </div>
            <div className="flex gap-5 pb-5">
              <div className="">
                <img src={Rec} alt="" />
              </div>
              <div className="">
                <p className='font-joss font-normal text-[16px]'>It is a long established fact</p>
                <p className='font-joss font-normal text-[16px]'>Aug 09 2020</p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="">
                <img src={Rec} alt="" />
              </div>
              <div className="">
                <p className='font-joss font-normal text-[16px]'>It is a long established fact</p>
                <p className='font-joss font-normal text-[16px]'>Aug 09 2020</p>
              </div>
            </div>
            <h3 className='text-[22px] font-joss font-semibold text-[#151875] py-10 lg:text-start text-center'>Recent Post</h3>
            <div className="flex gap-5">
              <div className="">
                <img src={Sale} alt="" />
              </div>
              <div className="">
                <p className='font-joss font-normal text-[16px]'>Elit ornare in enim mauris.</p>
                <p className='font-joss font-normal text-[16px]'>Aug 09 2020</p>
              </div>
            </div>
            <div className="flex gap-5 py-5">
              <div className="">
                <img src={Sale} alt="" />
              </div>
              <div className="">
                <p className='font-joss font-normal text-[16px]'>Elit ornare in enim mauris.</p>
                <p className='font-joss font-normal text-[16px]'>Aug 09 2020</p>
              </div>
            </div>
            <div className="flex gap-5 pb-5">
              <div className="">
                <img src={Sale} alt="" />
              </div>
              <div className="">
                <p className='font-joss font-normal text-[16px]'>Elit ornare in enim mauris.</p>
                <p className='font-joss font-normal text-[16px]'>Aug 09 2020</p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="">
                <img src={Sale} alt="" />
              </div>
              <div className="">
                <p className='font-joss font-normal text-[16px]'>Elit ornare in enim mauris.</p>
                <p className='font-joss font-normal text-[16px]'>Aug 09 2020</p>
              </div>
            </div>
            <h3 className='text-[22px] font-joss font-semibold text-[#151875] py-10 lg:text-start text-center'>Offer product</h3>
            <div className="flex gap-5">
              <div className="lg:ml-0 ml-10">
                <img src={Offer} alt="" />
                <p className='font-joss font-normal text-[18px] py-2'>Duis lectus est.</p>
                <p className='font-joss font-normal text-[16px]'>$12.00 - $15.00</p>
              </div>
              <div className="">
                <img src={Offer} alt="" />
                <p className='font-joss font-normal text-[18px] py-2'>Duis lectus est.</p>
                <p className='font-joss font-normal text-[16px]'>$12.00 - $15.00</p>
              </div>
            </div>
            <div className="flex gap-5 pt-5">
              <div className="lg:ml-0 ml-10">
                <img src={Offer} alt="" />
                <p className='font-joss font-normal text-[18px] py-2'>Duis lectus est.</p>
                <p className='font-joss font-normal text-[16px]'>$12.00 - $15.00</p>
              </div>
              <div className="">
                <img src={Offer} alt="" />
                <p className='font-joss font-normal text-[18px] py-2'>Duis lectus est.</p>
                <p className='font-joss font-normal text-[16px]'>$12.00 - $15.00</p>
              </div>
            </div>
            <h3 className='text-[22px] font-joss font-semibold text-[#151875] py-10 lg:text-start text-center'>Follow</h3>
            <div className="flex gap-x-5 items-center lg:justify-start justify-center">
            <div className="h-[40px] w-[40px] items-center rounded-full bg-[navy]  flex justify-center">
              <FaFacebookF className='text-[25px] text-white' />
            </div>
            <div className="h-[40px] w-[40px] items-center rounded-full bg-pink-500  flex justify-center">
              <FaInstagram className='text-[25px] text-white' />
            </div>
            <div className="h-[40px] w-[40px] items-center rounded-full bg-[skyblue] flex justify-center">
              <CiTwitter className='text-[25px] text-white' />
            </div>
          </div>
          <h3 className='text-[22px] font-joss font-semibold text-[#151875] py-10 lg:text-start text-center'>Tags</h3>
          <ul className='flex lg:justify-start justify-center gap-8'>
            <li className='font-joss font-normal text-[18px] underline'>General</li>
            <li className='font-joss font-normal text-[18px] underline'>Atsanil</li>
            <li className='font-joss font-normal text-[18px] underline'>Insas.</li>
          </ul>
          <ul className='flex lg:justify-start justify-center gap-8 pt-5'>
            <li className='font-joss font-normal text-[18px] underline'>Bibsaas</li>
            <li className='font-joss font-normal text-[18px] underline'>Nulla.</li>
          </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog
