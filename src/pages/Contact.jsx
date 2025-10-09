import React from 'react'

const Contact = () => {
  return (
    <div className='px-[40px] py-[40px] bg-white'>
        <h1 className='sm:text-7xl text-2xl text-[#039be6] text-center uppercase font-bold mb-[40px] border-b border-gray-200'>Contact PUREGROWTH AGRIBUSINESS LIMITED </h1>
        <div className='flex sm:flex-row flex-col gap-4'>
            <div className='sm:w-[50%]'>
                <h1 className='font-bold text-[#039be6] sm:text-xl mb-4'>Puregrowth Agribusiness Limited office & warehouse</h1>
                <p className='sm:text-lg text-gray-500'>Times Tower</p>
                <p className='sm:text-lg text-gray-500'>Ngong Road</p>
                <p className='sm:text-lg text-gray-500 mb-2'>Nairobi, Kenya</p>
                <p className='sm:text-lg text-gray-500'>+254754153083</p>
            </div>
            <div className='sm:w-[50%]'>
                <form action="" className='flex flex-col gap-4'>
                    <h1 className='font-bold text-[#039be6] text-xl mb-4'>Contact Us By Email</h1>
                    <input type="text" placeholder='Name'  className='border border-gray-300 rounded-md p-2 outline-none' />
                    <input type="text" placeholder='Company'  className='border border-gray-300 rounded-md p-2 outline-none' />
                    <input type="email" placeholder='Email Address'  className='border border-gray-300 rounded-md p-2 outline-none' />
                    <input type="tel" placeholder='Phone Number'  className='border border-gray-300 rounded-md p-2 outline-none' />
                    <textarea name="" id="" placeholder='Message' className='border border-gray-300 rounded-md p-2 outline-none'></textarea>
                    <button className='bg-[#039be6] rounded-lg py-3 text-white hover:bg-blue-950 transition-all duration-300 cursor-pointer'>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact