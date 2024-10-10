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
    <section className='pb-[147px]'>
      <div className="pt-[96px] pb-[126px] bg-[#F6F5FF]">
        <div className="container mx-auto">
          <h2 className='font-joss font-bold text-[36px]'>Shopping Cart</h2>
          <ul className='flex gap-1'>
            <li className='font-joss font-normal text-[16px]'>Home .</li>
            <li className='font-joss font-normal text-[16px]'>Pages .</li>
            <li className='font-joss font-normal text-[16px] text-pink-600'>shopping curt</li>
          </ul>
        </div>
      </div>
      <div className="mt-[100px] px-3 ">
        <div className=" lg:flex w-full justify-between">
          <div className="lg:w-[65%] w-full">
            <div className="">
              <div className=" flex justify-between">
                <h3 className='font-Sans font-bold text-[20px] text-[#0D0E43]'>Product</h3>
                <h3 className='font-Sans font-bold text-[20px] text-[#0D0E43]'>Price</h3>
                <h3 className='font-Sans font-bold text-[20px] text-[#0D0E43]'>Quantity</h3>
                <h3 className='font-Sans font-bold text-[20px] text-[#0D0E43]'>Total</h3>
              </div>
              {data.map((item, index) => (
                <div className="flex justify-between items-center mt-[50px] border-b border-[#0D0E43] pb-5">
                  <div className="w-[28%]  flex justify-between items-center">
                    <div className="">
                      <div onClick={() => handleremove(index)} className="cursor-pointer text-[20px]">
                        <MdCancel />
                      </div>
                      <div className="">
                        <img className='h-[100px]' src={item.thumbnail} alt="" />
                      </div>
                      <div className="">
                        <h3>{item.title}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="w-[70%] flex justify-between items-center">
                    <h3 className='font-Sans font-bold text-[16px] text-[#0D0E43] mr-[30px]'>${item.price}</h3>
                    <div className="border-2 border-[#000]">
                      <button onClick={() => handledecre(index)} className='font-Sans font-bold text-[20px] text-[#FFFF] bg-pink-500 h-[30px] w-[30px]'>-</button>
                      <button className='font-Sans font-bold text-[20px] px-3'>{item.quantity}</button>
                      <button onClick={() => handleincre(index)} className='font-Sans font-bold text-[20px] text-[#FFFF] bg-pink-500 h-[30px] w-[30px]'>+</button>
                    </div>
                    <h3 className='font-Sans font-bold text-[16px] text-[#0D0E43]'>£{(item.price * item.quantity).toFixed(2)}</h3>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between">
              <button className='py-[10px] px-[30px] bg-[#FB2E86] mt-[50px] font-Sans font-bold text-[16px] text-[#fff] rounded-lg'>Update Curt</button>
              <button onClick={handleallrem} className='py-[10px] px-[30px] bg-[#FB2E86] mt-[50px] font-Sans font-bold text-[16px] text-[#fff] rounded-lg'>Clear Curt</button>
            </div>
          </div>
          <div className="lg:w-[30%] w-full">
            <div className=" text-center">
              <h3 className='font-Sans font-bold text-[20px] text-[#0D0E43]'>Cart Totals</h3>
              <div className="py-[20px] px-[20px] bg-[#F4F4FC] mt-[40px] rounded-md">
                <div className="flex justify-between   relative after:absolute after:contain-[''] after:bottom-[-10px] after:left-0 after:h-[1px] after:w-[100%] after:bg-[#fff]">
                  <h3 className='font-Sans font-semibold text-[18px] text-[#1D3178]'>Subtotals:</h3>
                  <h3 className='font-pops font-semibold text-[18px] text-[#15245E]'>£{Totalprice.toFixed(2)}</h3>
                </div>
                <div className="flex justify-between mt-[30px]   relative after:absolute after:contain-[''] after:bottom-[-10px] after:left-0 after:h-[1px] after:w-[100%] after:bg-[#fff]">
                  <h3 className='font-Sans font-semibold text-[18px] text-[#1D3178]'>Totals:</h3>
                  <h3 className='font-Sans font-semibold text-[18px] text-[#15245E]'>£{Totalprice.toFixed(2)}</h3>
                </div>
                <div className="flex  gap-3 mt-[40px]  ">
                  <input type="radio" name='yes' />
                  <p className='font-Sans font-semibold text-[16px] text-[#8A91AB]'>Shipping & taxes calculated at checkout</p>
                </div>
                <div className="mt-[30px]">
                  <button className='py-[10px] px-[80px] bg-[#19D16F] mt-[50px] font-Sans font-bold text-[16px] text-[#fff] rounded-lg'><Link to="/order">Proceed To Checkout</Link> </button>
                </div>
              </div>

            </div>
            <div className="  mt-[50px]">
              <div className="text-center">
                <h3 className='font-Sans font-bold text-[20px] text-[#0D0E43]'>Calculate Shopping</h3>
              </div>
              <div className="py-[20px] px-[20px] bg-[#F4F4FC] mt-[20px] rounded-md">
                <div className="w-full border-b border-[#C7CEE4] py-2">
                  <input type="text" name="" id="" placeholder='country' className='border-none outline-none bg-[#F4F4FC] text-[#C5CBE3] font-joss font-semibold text-[18px] pb-2 capitalize' />
                </div>
                <div className="w-full border-b border-[#C7CEE4] py-2">
                  <input type="text" name="" id="" placeholder='address' className='border-none outline-none bg-[#F4F4FC] text-[#C5CBE3] font-joss font-semibold text-[18px] pb-2 capitalize' />
                </div>
                <div className="w-full border-b border-[#C7CEE4] py-2">
                  <input type="text" name="" id="" placeholder='postal-code' className='border-none outline-none bg-[#F4F4FC] text-[#C5CBE3] font-joss font-semibold text-[18px] pb-2 capitalize' />
                </div>
                <div className="">
                  <button className='py-[10px] px-[30px] bg-[#FB2E86] mt-[50px] font-Sans font-bold text-[16px] text-[#fff] rounded-sm'>Calculate Shiping</button>
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
