import React from 'react'
import priv from '../assets/priva.jpg'
import logo from '../assets/logo.png'
import basmati from '../assets/basmati.png'

const PrivateLabel = () => {
    return (
        <div className='px-[40px] py-[60px] bg-white'>
            <div className='flex flex-col gap-3 mb-[40px]'>
                <h1 className='font-bold sm:text-7xl text-3xl text-[#039be6] uppercase'>Private Label</h1>
                <h1 className='font-bold sm:text-lg'>Interested in developing your own brand with only organic ingredients?</h1>
                <p>We pack, blend and mix 100% organic grains, rice, nuts, seeds, pulses and more. We can also give you advice about custom-made mixes.</p>
            </div>
            <div className='flex sm:flex-row flex-col gap-6'>
                <div className='sm:w-[50%] sm:h-[300px] h-[200px]'>
                    <img src={priv} alt="private" className='w-full h-full object-cover' />
                </div>
                <div className='sm:w-[50%]'>
                    <h1 className='font-bold sm:text-2xl text-xl text-[#039be6] mb-[20px]'>What we offer</h1>
                    <div className='flex flex-col gap-3 text-gray-500'>
                        <p>We offer more than 750 different organic ingredients directly from our organic farmers and producers. Fully transparent, traceable and provided with the necessary certificates.</p>
                        <p>We not only have exclusively organic ingredients, we also aim to have the most sustainable way of handling and packaging. We pack in compostable foil and labels or recyclable packaging. By doing this, packaging supports our philosophy of corporate social responsibility.</p>
                    </div>
                </div>
            </div>
            <div className='sm:grid sm:grid-cols-2 flex flex-col gap-3 bg-[#039be6]/5 py-[60px] px-[20px]'>
                <div>
                    <h1 className='font-bold sm:text-2xl text-xl text-[#039be6] mb-[20px]'>
                        In short
                    </h1>
                    <ul className='flex flex-col gap-2'>
                        <li className='flex items-center gap-2'>
                            <img src={logo} alt="logo" className='w-[20px] h-[20px] object-cover' />
                            Biodegradable and compostable film, labels and ink
                        </li>
                        <li className='flex items-center gap-2'>
                            <img src={logo} alt="logo" className='w-[20px] h-[20px] object-cover' />
                            BRC Food certified
                        </li>
                        <li className='flex items-center gap-2'>
                            <img src={logo} alt="logo" className='w-[20px] h-[20px] object-cover' />
                            Maximum certification level on bio-based content
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className='font-bold sm:text-2xl text-xl text-[#039be6] mb-2'>
                        Packaging options
                    </h1>
                    <p className='mb-[20px]'>We are flexible and open to your wishes. We now offer packaging with the following features:</p>
                    <ul className='flex flex-col gap-2'>
                        <li className='flex items-center gap-2'>
                            <img src={logo} alt="logo" className='w-[20px] h-[20px] object-cover' />
                            Pillow or blockbottom bags from 100 – 1000 grams
                        </li>
                        <li className='flex items-center gap-2'>
                            <img src={logo} alt="logo" className='w-[20px] h-[20px] object-cover' />
                            Paper bags from 1 - 15 kg
                        </li>
                        <li className='flex items-center gap-2'>
                            <img src={logo} alt="logo" className='w-[20px] h-[20px] object-cover' />
                            3 different dimensions in width
                        </li>
                        <li className='flex items-center gap-2'>
                            <img src={logo} alt="logo" className='w-[20px] h-[20px] object-cover' />
                            100% transparent with front and back labels
                        </li>
                    </ul>
                </div>
                <div className='sm:block hidden'>
                    <img src={basmati} alt="bas" className='w-[90%] h-[200px] rounded-full rotate-6' />
                </div>
                <div>
                    <h1 className='font-bold sm:text-2xl text-xl text-[#039be6] mb-2'>
                        Social impact
                    </h1>
                    <p className='mb-[20px]'>Last but not least, packing with us will also have a positive impact on your social footprint. By choosing to pack with us you accelerate not only the development of organic farming. You also reduce plastic waste and indirectly support our projects in local communities.  And you will contribute to our social inclusion program. Because we accept everybody who has the skills and motivation to be part of our team.</p>
                    <h1 className='font-bold'>
                        Together we can develop the best assortment and packaging to suit your specific market place.  
                    </h1>
                </div>
            </div>
            <div className='bg-white py-[40px]'>
                <h1 className='font-bold sm:text-2xl text-xl text-[#039be6] mb-[40px] sm:text-start text-center'>Why choose DO IT Organic for your private label?</h1>
                <div className='sm:grid sm:grid-cols-3 flex flex-col gap-4 justify-center sm:items-start items-center'>
                    <h1 className='font-semibold w-[50%] text-center text-lg'>1. We stock your products and labels</h1>
                    <h1 className='font-semibold w-[50%] text-center text-lg'>2. We develop it together</h1>
                    <h1 className='font-semibold w-[50%] text-center text-lg'>3. We can provide all the necessary certificates</h1>
                </div>
            </div>
        </div>
    )
}

export default PrivateLabel