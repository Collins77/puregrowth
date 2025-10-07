import React from 'react'
import quality from '../assets/quality.jpg'
import qual from '../assets/qual.jpg'
import logo from '../assets/logo.png'

const Quality = () => {
    return (
        <div className='bg-white px-[60px] py-[60px]'>
            <h1 className='font-bold text-7xl text-[#039be6] uppercase mb-[40px]'>Our Quality</h1>
            <div className='flex flex-col gap-3'>
                <p className='text-gray-500'>We take all the necessary measures to guarantee that all of our products are organic, safe and in
                    conformity with all current legislation. In doing this, our customers can be sure that they work with the
                    best products available.</p>
                <p className='text-gray-500'>Do you want to know which measures we take? Read all about our quality team, our standards and more
                    regarding our quality. </p>
                <h1 className='font-semibold text-[#039be6] text-2xl'>Our Quality team</h1>
                <p className='text-gray-500'>Our  Department consists of academically trained food technologists who, through experience and
                    dedication, have specialized in quality assurance (QA), quality control (QC) and technological advice.
                    They continuously strive to provide the answers to your questions by maintaining intensive relations
                    with our suppliers and by keeping their own knowledge up-to-date. In 2008 they have enrolled in the
                    new pan-European food safety qualification programme leading to their accreditation as EU-recognised
                    food safety specialists.</p>
                <div className='flex gap-4 mt-[40px] mb-[20px]'>
                    <img src={quality} alt="QA" className='w-[60%] h-[300px] rounded-full object-cover' />
                    <div className='flex flex-col gap-4 w-[40%]'>
                        <h1 className='font-semibold text-[#039be6] text-2xl'>Our Quality Standards</h1>
                        <p className='text-gray-500 w-[70%]'>We  serve the customer with 100% organic Food Ingredients a reliable supply of high-quality products
                            which are fully suitable and safe for the end use intended by our customers, and meet all legal
                            requirements. </p>
                    </div>
                </div>
                <h1 className='font-semibold text-[#039be6] text-2xl'>
                    Standard Quality Response
                </h1>
                <p className='text-gray-500'>We consider answering your questionnaires as an important part of our mutual communication and
                    sharing of relevant information in order to build and strengthen our shared supply chain.  </p>
                <div className='flex gap-4 my-[40px]'>
                    <div className='w-[50%] flex flex-col gap-2'>
                        <h1 className='font-semibold text-[#039be6] text-2xl'>General Quality Statement</h1>
                        <p>All our products are: </p>
                        <ul className='flex flex-col gap-1'>
                            <li className='flex items-center gap-2'>
                                <img src={logo} alt="logo" className='w-[20px] h-[20px]' />
                                100% Organic
                            </li>
                            <li className='flex items-center gap-2'>
                                <img src={logo} alt="logo" className='w-[20px] h-[20px]' />
                                Compliant with the Dutch and EU food laws and regulations.
                            </li>
                            <li className='flex items-center gap-2'>
                                <img src={logo} alt="logo" className='w-[20px] h-[20px]' />
                                Not irradiated
                            </li>
                            <li className='flex items-center gap-2'>
                                <img src={logo} alt="logo" className='w-[20px] h-[20px]' />
                                GMO-free
                            </li>
                        </ul>
                    </div>
                    <img src={qual} alt="quality image" className='w-[50%] h-[300px] object-cover rounded-full' />
                </div>
                <h1 className='font-semibold text-[#039be6] text-2xl'>General disclaimer</h1>
                <p className='text-gray-500'>All information is given according to the best of our knowledge. However, this information can be subject
                    to inadvertent change.</p>
                <p className='text-gray-500'>If you intend to use any of our products for vulnerable consumers (the allergenic, infants and young
                    children, elderly citizens or the immuno-compromised) you must note that this product is not sold as
                    being  specifically suitable for these groups. You are under the obligation to determine suitability for
                    each batch of product bought. We are happy to be of service in this respect. </p>
            </div>
        </div>
    )
}

export default Quality