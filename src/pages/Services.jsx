import React from 'react'
import logo from '../assets/logo.png'
import { HandFist, Microscope, ShieldCheck, Truck } from 'lucide-react'

const Services = () => {
    return (
        <div className='bg-white px-[40px] py-[60px]'>
            <h1 className='font-bold sm:text-7xl text-3xl text-[#039be6] uppercase mb-[20px]'>Services</h1>
            <p className='text-gray-500'>At the heart of our operations lies a commitment to excellence, efficiency, and ethical partnerships. From product conception to final delivery, we ensure seamless coordination across every stage of the supply chain.</p>
            <div className='sm:grid sm:grid-cols-2 flex flex-col gap-4 mt-[40px] mb-[20px]'>
                <div className='flex flex-col gap-3 border border-gray-200 rounded-md p-3 bg-white shadow-lg'>
                    <div className='w-[50px] h-[50px] rounded-full border border-gray-200 flex items-center justify-center'>
                        <Microscope color='#039be6' />
                    </div>
                    <h1 className='font-bold'>R&D and Sourcing</h1>
                    <ul className='flex flex-col gap-2'>
                        <li className='flex items-center gap-2 text-[12px]'>
                            <img src={logo} alt="logo" className='w-[20px] h-[20px]' />
                            Sampling: We develop and present product samples that align with client specifications and market demands.
                        </li>
                        <li className='flex items-center gap-2 text-[12px]'>
                            <img src={logo} alt="logo" className='w-[20px] h-[20px]' />
                            Competitive Pricing: Our established network of trusted suppliers enables us to achieve the most cost-effective solutions without compromising quality.                    </li>
                        <li className='flex items-center gap-2 text-[12px]'>
                            <img src={logo} alt="logo" className='w-[20px] h-[20px]' />
                            Factory Evaluation: Each manufacturing partner is thoroughly vetted for capacity, compliance, and ethical standards to ensure consistent reliability.                        </li>
                    </ul>
                </div>
                <div className='flex flex-col gap-3 border border-gray-200 rounded-md p-3 bg-white shadow-lg'>
                    <div className='w-[50px] h-[50px] rounded-full border border-gray-200 flex items-center justify-center'>
                        <ShieldCheck color='#039be6' />
                    </div>
                    <h1 className='font-bold'>Quality Assurance</h1>
                    <ul className='flex flex-col gap-2'>
                        <li className='flex items-center gap-2 text-[12px]'>
                            <img src={logo} alt="logo" className='w-[20px] h-[20px]' />
                            Internal Quality Checks: Our in-house team conducts rigorous assessments at every stage to maintain premium product standards.
                        </li>
                        <li className='flex items-center gap-2 text-[12px]'>
                            <img src={logo} alt="logo" className='w-[20px] h-[20px]' />
                            International Auditor Collaboration: We work with globally recognized audit firms to ensure compliance with international safety, quality, and sustainability benchmarks.                   </li>
                    </ul>
                </div>
                <div className='flex flex-col gap-3 border border-gray-200 rounded-md p-3 bg-white shadow-lg'>
                    <div className='w-[50px] h-[50px] rounded-full border border-gray-200 flex items-center justify-center'>
                        <HandFist color='#039be6' />
                    </div>
                    <h1 className='font-bold'>Production Support</h1>
                    <ul className='flex flex-col gap-2'>
                        <li className='flex items-center gap-2 text-[12px]'>
                            <img src={logo} alt="logo" className='w-[20px] h-[20px]' />
                            Merchandising & Communications: Our merchandising team ensures seamless coordination between clients and factories.
                        </li>
                        <li className='flex items-center gap-2 text-[12px]'>
                            <img src={logo} alt="logo" className='w-[20px] h-[20px]' />
                            Pre-Production Approvals: Every product detail — from design to material — is carefully reviewed before mass production begins.                    </li>
                        <li className='flex items-center gap-2 text-[12px]'>
                            <img src={logo} alt="logo" className='w-[20px] h-[20px]' />
                            Inspections: Multi-stage inspections help us detect and resolve potential issues early, ensuring consistent product excellence.                        </li>
                    </ul>
                </div>
                <div className='flex flex-col gap-3 border border-gray-200 rounded-md p-3 bg-white shadow-lg'>
                    <div className='w-[50px] h-[50px] rounded-full border border-gray-200 flex items-center justify-center'>
                        <Truck color='#039be6' />
                    </div>
                    <h1 className='font-bold'>Logistics</h1>
                    <ul className='flex flex-col gap-2'>
                        <li className='flex items-center gap-2 text-[12px]'>
                            <img src={logo} alt="logo" className='w-[20px] h-[20px]' />
                            Documentation & Customs Brokerage: We handle all export documentation, compliance requirements, and customs clearance with precision.
                        </li>
                        <li className='flex items-center gap-2 text-[12px]'>
                            <img src={logo} alt="logo" className='w-[20px] h-[20px]' />
                            Domestic & International Transportation: Our logistics network ensures timely, secure, and cost-efficient delivery across global markets.                    </li>
                        <li className='flex items-center gap-2 text-[12px]'>
                            <img src={logo} alt="logo" className='w-[20px] h-[20px]' />
                            Warehousing & Packaging: We provide flexible storage and packaging solutions that protect and enhance your products.                        </li>
                    </ul>
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                <h1 className='font-bold text-[#039be6] sm:text-2xl text-xl'>Our Commitment</h1>
                <div className='sm:grid sm:grid-cols-4 flex flex-col gap-4'>
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <div className='w-[50px] h-[50px] rounded-full border border-gray-200 flex items-center justify-center'>
                            <h1 className='font-bold text-xl text-[#039be6]'>1</h1>
                        </div>
                        <h1 className='font-bold'>Building Partnerships with Integrity</h1>
                        <p className='text-[12px] text-gray-500 text-center'>We believe in creating long-term relationships founded on trust, transparency, and mutual growth.</p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <div className='w-[50px] h-[50px] rounded-full border border-gray-200 flex items-center justify-center'>
                            <h1 className='font-bold text-xl text-[#039be6]'>2</h1>
                        </div>
                        <h1 className='font-bold'>Competitive Pricing</h1>
                        <p className='text-[12px] text-gray-500 text-center'>Through strategic sourcing and lean operations, we offer the best market value while maintaining superior quality standards.</p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <div className='w-[50px] h-[50px] rounded-full border border-gray-200 flex items-center justify-center'>
                            <h1 className='font-bold text-xl text-[#039be6]'>3</h1>
                        </div>
                        <h1 className='font-bold'>Wide Range of Products</h1>
                        <p className='text-[12px] text-gray-500 text-center'>Our diverse product portfolio caters to a variety of industries and consumer needs, ensuring flexibility and adaptability in a dynamic market.</p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <div className='w-[50px] h-[50px] rounded-full border border-gray-200 flex items-center justify-center'>
                            <h1 className='font-bold text-xl text-[#039be6]'>4</h1>
                        </div>
                        <h1 className='font-bold'>Uncompromising Quality Control</h1>
                        <p className='text-[12px] text-gray-500 text-center'>From raw materials to final shipment, we maintain strict quality oversight, ensuring that every product meets and exceeds client expectations.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services