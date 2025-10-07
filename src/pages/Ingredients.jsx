import React from 'react'
import chilli from '../assets/chili.jpg'
import cere from '../assets/cerealss.jpg'
import oil from '../assets/sunflower oil.jpg'
import black from '../assets/balck pepper.jpg'
import beans from '../assets/BEANS 1.jpg'
import carda from '../assets/cardamom.jpg'
import cashew from '../assets/cashew 1.jpg'
import coffee from '../assets/coffee - Copy.jpg'
import clove from '../assets/clove.jpg'
import sesame from '../assets/sesame seed 1.png'
import spice from '../assets/spices.jpg'

const Ingredients = () => {
  return (
    <div className='px-[40px] py-[60px] bg-white'>
        <h1 className='font-bold text-7xl text-[#039be6] uppercase mb-[40px]'>Food ingredients</h1>
        <div className='grid grid-cols-4 gap-6'>
            <a href='/' className='w-full flex flex-col gap-2 items-center hover:text-[#039be6]'>
                <img src={spice} alt="img" className='h-[200px] w-[200px] rounded-full border border-[#039be6]' />
                <p className='uppercase '>Spices</p>
            </a>
            <a href='/' className='w-full flex flex-col gap-2 items-center hover:text-[#039be6]'>
                <img src={chilli} alt="img" className='h-[200px] w-[200px] rounded-full border border-[#039be6]' />
                <p className='uppercase '>Spices</p>
            </a>
            <a href='/' className='w-full flex flex-col gap-2 items-center hover:text-[#039be6]'>
                <img src={cere} alt="img" className='h-[200px] w-[200px] rounded-full border border-[#039be6]' />
                <p className='uppercase '>Spices</p>
            </a>
            <a href='/' className='w-full flex flex-col gap-2 items-center hover:text-[#039be6]'>
                <img src={oil} alt="img" className='h-[200px] w-[200px] rounded-full border border-[#039be6]' />
                <p className='uppercase '>Spices</p>
            </a>
            <a href='/' className='w-full flex flex-col gap-2 items-center hover:text-[#039be6]'>
                <img src={black} alt="img" className='h-[200px] w-[200px] rounded-full border border-[#039be6]' />
                <p className='uppercase '>Spices</p>
            </a>
            <a href='/' className='w-full flex flex-col gap-2 items-center hover:text-[#039be6]'>
                <img src={beans} alt="img" className='h-[200px] w-[200px] rounded-full border border-[#039be6]' />
                <p className='uppercase '>Spices</p>
            </a>
            <a href='/' className='w-full flex flex-col gap-2 items-center hover:text-[#039be6]'>
                <img src={carda} alt="img" className='h-[200px] w-[200px] rounded-full border border-[#039be6]' />
                <p className='uppercase '>Spices</p>
            </a>
            <a href='/' className='w-full flex flex-col gap-2 items-center hover:text-[#039be6]'>
                <img src={cashew} alt="img" className='h-[200px] w-[200px] rounded-full border border-[#039be6]' />
                <p className='uppercase '>Spices</p>
            </a>
            <a href='/' className='w-full flex flex-col gap-2 items-center hover:text-[#039be6]'>
                <img src={coffee} alt="img" className='h-[200px] w-[200px] rounded-full border border-[#039be6]' />
                <p className='uppercase '>Spices</p>
            </a>
            <a href='/' className='w-full flex flex-col gap-2 items-center hover:text-[#039be6]'>
                <img src={clove} alt="img" className='h-[200px] w-[200px] rounded-full border border-[#039be6]' />
                <p className='uppercase '>Spices</p>
            </a>
            <a href='/' className='w-full flex flex-col gap-2 items-center hover:text-[#039be6]'>
                <img src={sesame} alt="img" className='h-[200px] w-[200px] rounded-full border border-[#039be6]' />
                <p className='uppercase '>Spices</p>
            </a>
            <a href='/' className='w-full flex flex-col gap-2 items-center hover:text-[#039be6]'>
                <img src={spice} alt="img" className='h-[200px] w-[200px] rounded-full border border-[#039be6]' />
                <p className='uppercase '>Spices</p>
            </a>
        </div>
    </div>
  )
}

export default Ingredients