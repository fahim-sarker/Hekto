import React from 'react'
import { MdOutlineDone } from "react-icons/md";
import Sale from "../assets/sale.png"
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux"



const Checkoutpage = () => {

  let data = useSelector((state) => state.product.cartitem)

  const {Totalprice} = data.reduce((acc,item)=>{
    acc.Totalprice += item.price * item.quantity
    return acc
  },{Totalprice:0,})




  return (
    <section className='pb-[147px]'>
      <div className="pt-[96px] pb-[126px] bg-[#F6F5FF]">
        <div className="container mx-auto">
          <h2 className='font-joss font-bold text-[36px]'>Hekto Demo</h2>
        </div>
      </div>
      <div className="container mx-auto pt-[74px]">
        <div className="">
          <h3 className='font-joss font-bold text-[24px]'>Hekto Demo</h3>
          <h4 className='font-joss font-bold text-[12px] pb-10'>Cart/ Information/ Shipping/ Payment</h4>
        </div>
        <div className="flex justify-between">
          <div className="w-[65%] bg-[#F8F8FD] py-[64px] px-[30px]">
            <div className="flex justify-between">
              <div className="">
                <h3 className='font-joss font-bold text-[18px] pb-5'>Contact Information</h3>
              </div>
              <div className="flex gap-3">
                <p className='font-joss font-normal text-[12px]'>Already have an account?</p>
                <p className='font-joss font-normal text-[12px]'>Log in</p>
              </div>
            </div>

            <input type="text" placeholder='Email or mobile phone number' className='outline-none w-full bg-[#F8F8FD] pb-1' />
            <p className='bg-[#BFC6E0] h-[2px]'></p>
            <div className="flex pt-12 gap-5 items-center">
              <div className="w-[20px] h-[20px] bg-[#19D16F] flex items-center justify-center">
                <MdOutlineDone className='text-white' />
              </div>
              <p className='font-joss font-normal text-[16px] text-[#8A91AB]'>Keep me up to date on news and excluive offers</p>
            </div>
            <h2 className='font-joss font-bold text-[18px] text-[#1D3178] pt-[109px] pb-[43px]'>Shipping address</h2>
            <form action="">
              <div className="flex justify-between pb-10">
                <div className="w-[50%] border-[#BFC6E0] border-b-2">
                  <input placeholder='First name (optional)' type="text" className='outline-none bg-[#F8F8FD] w-full text-[16px] text-[#8A91AB] pb-3' />
                </div>
                <div className="w-[45%] border-[#BFC6E0] border-b-2">
                  <input placeholder='Last name' type="text" className='outline-none bg-[#F8F8FD] w-full text-[16px] text-[#8A91AB] pb-3' />
                </div>
              </div>
              <input type="text" placeholder='Address' name="" id="" className='outline-none bg-[#F8F8FD] w-full text-[16px] text-[#8A91AB] pb-3 border-[#BFC6E0] border-b-2' />
              <input type="text" placeholder='Appaetnentment,suit,e.t.c (optinal)' name="" id="" className='outline-none bg-[#F8F8FD] w-full text-[16px] text-[#8A91AB] pb-3 border-[#BFC6E0] border-b-2 pt-14' />
              <input type="text" placeholder='City' name="" id="" className='outline-none bg-[#F8F8FD] w-full text-[16px] text-[#8A91AB] pb-3 border-[#BFC6E0] border-b-2 pt-14' />
              <div className="flex justify-between py-16 ">
                <div className="w-[50%] border-[#BFC6E0] border-b-2">
                  <input placeholder='Bangladesh' type="text" className='outline-none bg-[#F8F8FD] w-full text-[16px] text-[#8A91AB] pb-3' />
                </div>
                <div className="w-[45%] border-[#BFC6E0] border-b-2">
                  <input placeholder='Postal Code' type="text" className='outline-none bg-[#F8F8FD] w-full text-[16px] text-[#8A91AB] pb-3' />
                </div>
              </div>
              <div className="pb-10">
                <button className='py-[14px] px-[30px] bg-[#FB2E86] mt-[50px] font-Sans font-bold text-[16px] text-[#fff] rounded-sm'>Continue Shipping</button>
              </div>
            </form>
          </div>
          <div className="w-[30%]">
            <div className="">
              {data.map((cartproduct) => (
                <div className="flex justify-between items-center border-b-2 border-[#000]">
                  <div className="w-[30%]">
                    <img className='h-[100px]' src={cartproduct.thumbnail} alt="" />
                  </div>
                  <div className="w-[50%]">
                    <h3 className='font-joss font-bold text-[18px] text-[#000]'>{cartproduct.title}</h3>
                    <ul className='flex gap-3'>
                      <li className='font-joss font-bold text-[14px]'>Color:</li>
                      <li className='font-joss font-bold text-[14px]'>Brown</li>
                    </ul>
                    <ul className='flex gap-3'>
                      <li className='font-joss font-bold text-[14px]'>Size:</li>
                      <li className='font-joss font-bold text-[14px]'>XL</li>
                    </ul>
                  </div>
                  <div className="w-[20%]">
                    <p className='font-joss font-bold text-[16px]'>${cartproduct.price}</p>
                  </div>
                </div>
              ))}
              <div className="py-[20px] px-[20px] bg-[#F4F4FC] mt-[40px] rounded-md">
                <div className="flex justify-between   relative after:absolute after:contain-[''] after:bottom-[-10px] after:left-0 after:h-[1px] after:w-[100%] after:bg-[#fff]">
                  <h3 className='font-Sans font-semibold text-[18px] text-[#1D3178]'>Subtotals:</h3>
                  <h3 className='font-pops font-semibold text-[18px] text-[#15245E]'>£{Totalprice}</h3>
                </div>
                <div className="flex justify-between mt-[30px]   relative after:absolute after:contain-[''] after:bottom-[-10px] after:left-0 after:h-[1px] after:w-[100%] after:bg-[#fff]">
                  <h3 className='font-Sans font-semibold text-[18px] text-[#1D3178]'>Totals:</h3>
                  <h3 className='font-Sans font-semibold text-[18px] text-[#15245E]'>£{Totalprice}</h3>
                </div>
                <div className="flex  gap-3 mt-[40px]  ">
                  <input type="radio" name='yes' />
                  <p className='font-Sans font-semibold text-[16px] text-[#8A91AB]'>Shipping & taxes calculated at checkout</p>
                </div>
                <div className="mt-[30px] flex justify-center">
                  <button className='py-[12px] px-[80px] bg-[#19D16F] mt-[50px] font-Sans font-bold text-[16px] text-[#fff] rounded-lg'><Link to="/checkout">Proceed To Checkout</Link> </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Checkoutpage
