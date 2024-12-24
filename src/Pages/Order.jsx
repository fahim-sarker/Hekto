import React from 'react'
import { MdOutlineDone } from "react-icons/md";
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux"



const Checkoutpage = () => {
  let data = useSelector((state) => state.product.cartitem)

  const {Totalprice} = data.reduce((acc,item)=>{
    acc.Totalprice += item.price * item.quantity
    return acc
  },{Totalprice:0,})




  return (
    <section className='lg:pb-[147px] pb-[30px]'>
      <div className="lg:pt-[96px] lg:pb-[126px] py-[30px] lg:px-0 px-3 bg-[#F6F5FF]">
        <div className="container mx-auto">
          <h2 className='font-joss font-bold lg:text-[36px] text-[20px]'>Hekto Demo</h2>
        </div>
      </div>
      <div className="container mx-auto lg:pt-[74px] pt-[30px] lg:px-0 px-3">
        <div className="">
          <h3 className='font-joss font-bold text-[24px]'>Hekto Demo</h3>
          <h4 className='font-joss font-bold text-[12px] pb-10'>Cart/ Information/ Shipping/ Payment</h4>
        </div>
        <div className="lg:flex justify-between">
          <div className="lg:w-[65%] w-full bg-[#F8F8FD] lg:py-[64px] py-[30px] lg:px-[30px] px-[10px]">
            <div className="lg:flex justify-between">
              <div className="">
                <h3 className='font-joss lg:font-bold font-medium lg:text-[18px] text-[14px] lg:text-start text-center pb-3'>Contact Information</h3>
              </div>
              <div className="flex lg:gap-3 gap-32">
                <p className='font-joss font-normal text-[12px] cursor-pointer'>Already have an account?</p>
                <p className='font-joss font-normal text-[12px] cursor-pointer'>Log in</p>
              </div>
            </div>
            <input type="text" placeholder='Email or mobile phone number' className='outline-none w-full bg-[#F8F8FD] pb-1 text-[14px] lg:text-[16px]' />
            <p className='bg-[#BFC6E0] h-[2px]'></p>
            <div className="flex lg:pt-12 pt-3 gap-5 items-center">
              <div className="w-[20px] h-[20px] bg-[#19D16F] flex items-center justify-center">
                <MdOutlineDone className='text-white' />
              </div>
              <p className='font-joss font-normal lg:text-[16px] text-[12px] text-[#8A91AB]'>Keep me up to date on news and excluive offers</p>
            </div>
            <h2 className='font-joss font-bold lg:text-[18px] text-[16px] text-[#1D3178] lg:pt-[109px] pt-[30px] lg:pb-[43px] pb-[20px]'>Shipping address</h2>
            <form action="">
              <div className="flex justify-between lg:pb-10 pb-4">
                <div className="w-[50%] border-[#BFC6E0] border-b-2">
                  <input placeholder='First name (optional)' type="text" className='outline-none bg-[#F8F8FD] w-full lg:text-[16px] text-[12px] text-[#8A91AB] pb-3' />
                </div>
                <div className="w-[48%] border-[#BFC6E0] border-b-2">
                  <input placeholder='Last name' type="text" className='outline-none bg-[#F8F8FD] w-full lg:text-[16px] text-[12px] text-[#8A91AB] pb-3' />
                </div>
              </div>
              <input type="text" placeholder='Address' name="" id="" className='outline-none bg-[#F8F8FD] w-full lg:text-[16px] text-[12px] text-[#8A91AB] pb-3 border-[#BFC6E0] border-b-2' />
              <input type="text" placeholder='Appaetnentment,suit,e.t.c (optinal)' name="" id="" className='outline-none bg-[#F8F8FD] w-full lg:text-[16px] text-[14px] text-[#8A91AB] pb-3 border-[#BFC6E0] border-b-2 lg:pt-14 pt-4' />
              <input type="text" placeholder='City' name="" id="" className='outline-none bg-[#F8F8FD] w-full lg:text-[16px] text-[12px] text-[#8A91AB] pb-3 border-[#BFC6E0] border-b-2 lg:pt-14 pt-4' />
              <div className="flex justify-between lg:py-16 py-4">
                <div className="w-[50%] border-[#BFC6E0] border-b-2">
                  <input placeholder='Bangladesh' type="text" className='outline-none bg-[#F8F8FD] w-full lg:text-[16px] text-[12px] text-[#8A91AB] pb-3' />
                </div>
                <div className="w-[45%] border-[#BFC6E0] border-b-2">
                  <input placeholder='Postal Code' type="text" className='outline-none bg-[#F8F8FD] w-full lg:text-[16px] text-[12px] text-[#8A91AB] pb-3' />
                </div>
              </div>
              <div className="lg:pb-10 pb-1 flex lg:justify-start justify-center">
                <button className='py-[14px] px-[30px] bg-[#FB2E86] lg:mt-[50px] mt-5 font-Sans font-bold lg:text-[16px] text-[14px] text-[#fff] rounded-sm'><Link to="/shop">Continue Shipping</Link></button>
              </div>
            </form>
          </div>
          <div className="lg:w-[30%] w-full lg:mt-0 mt-5">
            <div className="">
              {data.map((cartproduct) => (
                <div className="flex justify-between items-center border-b-2 border-[#000] py-3">
                  <div className="w-[30%]">
                    <img className='lg:h-[100px] h-[60px]' src={cartproduct.thumbnail} alt="" />
                  </div>
                  <div className="w-[50%]">
                    <h3 className='font-joss lg:font-bold font-normal lg:text-[18px] text-[12px] text-[#000]'>{cartproduct.title}</h3>
                    <ul className='flex gap-3'>
                      <li className='font-joss lg:font-bold font-normal lg:text-[14px] text-[12px]'>Color:</li>
                      <li className='font-joss lg:font-bold font-normal lg:text-[14px] text-[12px]'>Brown</li>
                    </ul>
                    <ul className='flex gap-3'>
                      <li className='font-joss lg:font-bold font-normal lg:text-[14px] text-[12px]'>Size:</li>
                      <li className='font-joss lg:font-bold font-normal lg:text-[14px] text-[12px]'>XL</li>
                    </ul>
                  </div>
                  <div className="w-[20%]">
                    <p className='font-joss lg:font-bold font-normal lg:text-[16px] text-[12px]'>${cartproduct.price}</p>
                  </div>
                </div>
              ))}
               <div className="py-[20px] px-[20px] bg-[#F4F4FC] lg:mt-[40px] mt-[20px] rounded-md">
                              <div className="flex justify-between   relative after:absolute after:contain-[''] after:bottom-[-10px] after:left-0 after:h-[1px] after:w-[100%] after:bg-[#fff]">
                                <h3 className='font-Sans lg:font-semibold font-normal lg:text-[18px] text-[16px] text-[#1D3178]'>Subtotals:</h3>
                                <h3 className='font-pops lg:font-semibold font-normal lg:text-[18px] text-[16px] text-[#15245E]'>£{Totalprice.toFixed(2)}</h3>
                              </div>
                              <div className="flex justify-between mt-[30px]   relative after:absolute after:contain-[''] after:bottom-[-10px] after:left-0 after:h-[1px] after:w-[100%] after:bg-[#fff]">
                                <h3 className='font-Sans lg:font-semibold font-normal lg:text-[18px] text-[16px] text-[#1D3178]'>Totals:</h3>
                                <h3 className='font-Sans lg:font-semibold font-normal lg:text-[18px] text-[16px] text-[#15245E]'>£{Totalprice.toFixed(2)}</h3>
                              </div>
                              <div className="flex  gap-3 lg:mt-[40px] mt-[20px]">
                                <input type="radio" name='yes' />
                                <p className='font-Sans lg:font-semibold lg:text-[16px] font-normal text-[14px] text-[#8A91AB]'>Shipping & taxes calculated at checkout</p>
                              </div>
                              <div className="lg:mt-[30px] mt-[10px] lg:mx-0 mx-auto">
                                <button className='py-[10px] lg:px-[80px] px-[50px] bg-[#19D16F] lg:mt-[50px] mt-[15px] font-Sans lg:font-bold lg:text-[16px] text-[14px] font-normal text-[#fff] rounded-lg'><Link to="/order">Proceed To Checkout</Link> </button>
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
