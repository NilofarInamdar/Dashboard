import React from 'react'
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import { BsFillCartFill } from 'react-icons/bs'
const navbar = () => {
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
      <div className='flex items-center'>
        <div className='cursor-pointer'>
          <AiOutlineMenu size={30} />
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2 '>
          Best <span className='font-bold'> East</span>
        </h1>
        <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
          <p className='bg-black text-white rounded-full p-2'>Delivery</p>
          <p className='p-2'>Pickup</p>
        </div>
      </div>
      {/* search bar */}
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px]
       lg:w-[500px]'>
        <AiOutlineSearch size={25} />
        <input className='bg-transparent p-2 w-full focus:outline-none' type="text" placeholder='Search food'></input>
      </div>

      {/* cart button */}
      <button className=' border  p-2 w-28 bg-black text-white hidden md:flex items-center py-2 rounded-full'>
        <BsFillCartFill size={20} className='mr-2' /> Cart
      </button>
      {/* mobile menu */}
    </div>
  )
}

export default navbar
