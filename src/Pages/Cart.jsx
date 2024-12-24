import React from 'react'
import { MdCancel } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { handleincrement, handleindeccrement, productremove,allproductremove } from '../components/slice/Productslice';
import { Link } from 'react-router-dom'

const Cart = () => {
  let data = useSelector((state) => state.product.cartitem)
  let dispatch = useDispatch()

  let handleincre = (index) => {
    dispatch(handleincrement(index))
  }

  let handledecre = (index) => {
    dispatch(handleindeccrement(index))
  }

  let handleremove = (index) => {
    dispatch(productremove(index))
  }

  let handleallrem = (index) => {
    dispatch(allproductremove(index))
  }

  const {Totalprice} = data.reduce((acc,item)=>{
    acc.Totalprice += item.price * item.quantity
    return acc
  },{Totalprice:0,})
  

  return (
    <section className='lg:pb-[147px] pb-[30px]'>
      <div className="lg:pt-[96px] lg:pb-[126px] py-[30px] lg:px-0 px-3 bg-[#F6F5FF]">
        <div className="container mx-auto">
          <h2 className='font-joss font-bold lg:text-[36px] text-[20px]'>Shopping Cart</h2>
          <ul className='flex gap-1'>
            <li className='font-joss font-normal text-[16px]'><Link to="/">Home .</Link></li>
            <li className='font-joss font-normal text-[16px]'>Pages .</li>
            <li className='font-joss font-normal text-[16px] text-pink-600'>shopping curt</li>
          </ul>
        </div>
      </div>
      <div className="lg:mt-[100px] mt-[30px] px-3 ">
        <div className=" lg:flex w-full justify-between">
          <div className="lg:w-[65%] w-full">
            <div className="">
              <div className=" flex justify-between">
                <h3 className='font-Sans lg:font-bold font-medium lg:text-[20px] text-[16px] text-[#0D0E43]'>Product</h3>
                <h3 className='font-Sans lg:font-bold font-medium lg:text-[20px] text-[16px] text-[#0D0E43]'>Price</h3>
                <h3 className='font-Sans lg:font-bold font-medium lg:text-[20px] text-[16px] text-[#0D0E43]'>Quantity</h3>
                <h3 className='font-Sans lg:font-bold font-medium lg:text-[20px] text-[16px] text-[#0D0E43]'>Total</h3>
              </div>
              {data.map((item, index) => (
                <div className="flex justify-between items-center lg:mt-[50px] mt-[10px] border-b border-[#0D0E43] pb-5">
                  <div className="w-[28%]  flex justify-between items-center">
                    <div className="">
                      <div onClick={() => handleremove(index)} className="cursor-pointer lg:text-[20px] text-[16px]">
                        <MdCancel />
                      </div>
                      <div className="">
                        <img className='lg:h-[100px] h-[50px]' src={item.thumbnail} alt="" />
                      </div>
                      <div className="">
                        <h3 className='font-joss font-normal lg:text-[16px] text-[12px]'>{item.title}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="w-[70%] flex justify-between items-center">
                    <h3 className='font-Sans lg:font-bold font-medium lg:text-[16px] text-[12px] text-[#0D0E43] pr-[30px] lg:pl-5'>${item.price}</h3>
                    <div className="border-2 border-[#000]">
                      <button onClick={() => handledecre(index)} className='font-Sans lg:font-bold lg:text-[20px] text-[14px] text-[#FFFF] bg-pink-500 h-[30px] w-[30px]'>-</button>
                      <button className='font-Sans lg:font-bold lg:text-[20px] text-[14px] px-3'>{item.quantity}</button>
                      <button onClick={() => handleincre(index)} className='font-Sans lg:font-bold lg:text-[20px] text-[14px] text-[#FFFF] bg-pink-500 h-[30px] w-[30px]'>+</button>
                    </div>
                    <h3 className='font-Sans lg:font-bold font-medium lg:text-[16px] text-[12px] text-[#0D0E43]'>£{(item.price * item.quantity)}</h3>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between">
              <button className='py-[10px] px-[30px] bg-[#FB2E86] lg:mt-[50px] mt-[20px] font-Sans lg:font-bold font-medium lg:text-[16px] text-[14px] text-[#fff] rounded-lg'>Update Curt</button>
              <button onClick={handleallrem} className='py-[10px] px-[30px] bg-[#FB2E86] lg:mt-[50px] mt-[20px] font-Sans lg:font-bold font-medium lg:text-[16px] text-[14px] text-[#fff] rounded-lg'>Clear Curt</button>
            </div>
          </div>
          <div className="lg:w-[30%] w-full">
            <div className="text-center">
              <h3 className='font-Sans lg:font-bold font-medium lg:mt-0 mt-5 lg:text-[20px] text-[16px] text-[#0D0E43]'>Cart Totals</h3>
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
                <div className="lg:mt-[30px] mt-[10px]">
                  <button className='py-[10px] lg:px-[80px] px-[50px] bg-[#19D16F] lg:mt-[50px] mt-[15px] font-Sans lg:font-bold lg:text-[16px] text-[14px] font-normal text-[#fff] rounded-lg'><Link to="/order">Proceed To Checkout</Link> </button>
                </div>
              </div>

            </div>
            <div className="lg:mt-[50px] mt-[10px]">
              <div className="text-center">
                <h3 className='font-Sans lg:font-bold lg:text-[20px] font-medium text-[16px] text-[#0D0E43]'>Calculate Shopping</h3>
              </div>
              <div className="py-[20px] px-[20px] bg-[#F4F4FC] mt-[20px] rounded-md">
                <div className="w-full border-b border-[#C7CEE4] py-2">
                  <input type="text" name="" id="" placeholder='country' className='border-none outline-none bg-[#F4F4FC] text-[#C5CBE3] font-joss font-semibold lg:text-[18px] text-[14px] pb-2 capitalize' />
                </div>
                <div className="w-full border-b border-[#C7CEE4] py-2">
                  <input type="text" name="" id="" placeholder='address' className='border-none outline-none bg-[#F4F4FC] text-[#C5CBE3] font-joss font-semibold lg:text-[18px] text-[14px] pb-2 capitalize' />
                </div>
                <div className="w-full border-b border-[#C7CEE4] py-2">
                  <input type="text" name="" id="" placeholder='postal-code' className='border-none outline-none bg-[#F4F4FC] text-[#C5CBE3] font-joss font-semibold lg:text-[18px] text-[14px] pb-2 capitalize' />
                </div>
                <div className="">
                  <button className='py-[10px] px-[30px] bg-[#FB2E86] lg:mt-[50px] mt-[10px] font-Sans lg:font-bold font-normal lg:text-[16px] text-[14px] text-[#fff] rounded-lg'>Calculate Shiping</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Cart
