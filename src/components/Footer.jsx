import React from 'react'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <div className=''>
            <div className='bg-[#039be6] px-[40px] py-[60px] sm:grid sm:grid-cols-6 flex flex-col gap-4 justify-center border-b border-gray-200'>
                <div className='flex flex-col gap-4 col-span-2'>
                    <NavLink to="/" className="flex items-center gap-2">
                        <img src={logo} alt="logo" className="object-fit h-[40px] w-[40px]" />
                        <div className="flex flex-col">
                            <h1 className="text-[12px] font-bold text-white">
                                PUREGROWTH AGRIBUSINESS LIMITED
                            </h1>
                            <p className="text-[10px] text-white">Trusted manufacturer . Sourcing Partner</p>
                        </div>
                    </NavLink>
                    <p className='text-white text-[12px]'>We manufacture, Source and Trade. we have branches across East Africa .We are here to bring you the
                        best local products at the best price</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <h1 className='font-bold text-sm text-white'>OUR ASSORTMENT</h1>
                    <ul className='flex flex-col gap-2'>
                        <li className='text-white text-sm'>
                            <a href="" className='hover:text-green-400 duration-300 transition-all'>Food Ingredients</a>
                        </li>
                        <li className='text-white text-sm'>
                            <a href="" className='hover:text-green-400 duration-300 transition-all'>Private Label</a>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col gap-4'>
                    <h1 className='font-bold text-sm text-white'>QUICK LINKS</h1>
                    <ul className='flex flex-col gap-2'>
                        <li className='text-white text-sm'>
                            <a href="" className='hover:text-green-400 duration-300 transition-all'>Shop</a>
                        </li>
                        <li className='text-white text-sm'>
                            <a href="" className='hover:text-green-400 duration-300 transition-all'>Contact</a>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col gap-4'>
                    <h1 className='font-bold text-sm text-white'>OUR QUALITY</h1>
                    <ul className='flex flex-col gap-2'>
                        <li className='text-white text-sm'>
                            <a href="" className='hover:text-green-400 duration-300 transition-all'>Certifications</a>
                        </li>
                        <li className='text-white text-sm'>
                            <a href="" className='hover:text-green-400 duration-300 transition-all'>Services</a>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col gap-4'>
                    <h1 className='font-bold text-sm text-white'>PUREGROWTH</h1>
                    <ul className='flex flex-col gap-2'>
                        <li className='text-white text-sm'>
                            <a href="" className='hover:text-green-400 duration-300 transition-all'>What We Do</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='bg-white px-[40px] py-3 flex items-center justify-center'>
                <div>
                    <p className='text-[10px] text-gray-500'>&copy; 2025. PureGrowth Agribusiness Limited.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer