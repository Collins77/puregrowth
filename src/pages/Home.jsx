import React from 'react'
import chilli from '../assets/chili.jpg'
import cere from '../assets/cerealss.jpg'
import oil from '../assets/sunflower oil.jpg'
import { ChevronRight, MoveRight } from 'lucide-react'


const Home = () => {
  return (
    <div>
        <div className='h-[80vh] bg-white w-full flex justify-between px-[40px] py-[60px]'>
            <div className='w-[50%] flex flex-col gap-4 justify-center h-full'>
                <p className='text-[12px] px-4 py-1 border-[#039be6] border w-fit rounded-lg text-gray-500'>Trusted manufacturer & Sourcing Partner</p>
                <h1 className='text-5xl font-bold bg-linear-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent'>
                    Your Trusted Sourcing Partner in Kenya
                </h1>
                <p className='text-gray-500'>
                    PUREGROWTH AGRIBUSINESS LIMITED is an established Sourcing and Trading company based in East Africa. We are here to bring you the best local products at the best price.
                </p>
                <div className='flex items-center gap-3'>
                     <button className='bg-[#039be6] px-2 py-1 rounded-md flex items-center gap-2 text-white hover:bg-transparent hover:text-black hover:border hover:border-[#039be6] duration-300 transition-all cursor-pointer font-semibold'>
                        LEARN MORE
                        <ChevronRight />
                     </button>
                     <button className='bg-transparent px-2 py-1 rounded-md flex items-center gap-2 text-black hover:text-white border border-[#039be6] hover:bg-[#039be6] duration-300 transition-all cursor-pointer font-semibold'>
                        PRODUCTS
                        <ChevronRight />
                     </button>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-4 w-[50%]'>
                <div className='w-full h-full rounded-full border-2 border-[#039be6]' style={{backgroundImage: `url(${chilli})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>

                </div>
                <div className='w-full h-full rounded-full -mt-[40px] border-2 border-[#039be6]' style={{backgroundImage: `url(${cere})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>

                </div>
                <div className='w-full h-full rounded-full border-2 border-[#039be6]' style={{backgroundImage: `url(${oil})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Home