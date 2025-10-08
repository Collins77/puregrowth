import React from 'react'

const WhatWeDo = () => {
    return (
        <div className='bg-white px-[80px] py-[60px]'>
            <h1 className='font-bold text-7xl text-[#039be6] uppercase mb-[40px]'>What we do</h1>
            <div className='flex flex-col gap-4'>
                <p className='text-lg text-gray-500'>We are a  leading organic food company active in the supply chain of 100% organic food ingredients
                    and organic consumer products. As a specialist in organic food ingredients we partner globally with
                    producers to source a wide portfolio of only the highest-quality organic products.</p>
                <h1 className='text-2xl font-bold text-[#039be6]'>We are an organic wholesaler with sustainable food from all over the world</h1>
                <p className='text-lg text-gray-500'>We pack organic food ingredients for private labels within the food service market, offering full
                    traceability. We ensure that everything we do is up to the highest ethical and social standards and that
                    we meet all organic criteria to achieve the relevant certifications.</p>
                <h1 className='text-2xl font-bold'>Which kind of exclusively organic products do we distribute?</h1>
                <p className='text-lg text-gray-500'>As organic wholesale food suppliers, we sell more than 1000 different raw ingredients and only offer
                    100% organic food to our customers. All our products are grown and produced by our carefully
                    selected network of farmers from all over the world </p>
                <h1 className='text-2xl font-bold'>Is our organic wholesale business all about a sustainable food supply?</h1>
                <p className='text-lg text-gray-500'>Our mission is to change the entire food chain to 100%  which is why we work together with a network
                    of organic farmers on local projects.</p>
                <h1 className='text-2xl font-bold'>The role of organic agriculture in producing sustainable food</h1>
                <p className='text-lg text-gray-500'>As organic wholesale food suppliers, we sell more than 1000 different raw ingredients and only offer
                    100% organic food to our customers. All our products are grown and produced by our carefully
                    selected network of farmers from all over the world.</p>
            </div>
            <div className='mt-[40px]'>
                <h1 className='mb-[40px] font-bold text-2xl text-[#039be6]'>Core Values</h1>
                <div className='grid grid-cols-3 gap-4'>
                    <div className='flex flex-col gap-3 items-center'>
                        <div className='w-[50px] h-[50px] rounded-full border border-[#039be6] flex items-center justify-center'>
                            <h1 className='font-bold'>1</h1>
                        </div>
                        <div className=''>
                            <h1 className='font-bold text-center'>Involved</h1>
                            <p className='text-[12px] text-gray-500 text-center'>Making the world a little better through personal partnerships. We treat people fairly, from farmer to
                                consumer.  We care for the whole chain.</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3 items-center'>
                        <div className='w-[50px] h-[50px] rounded-full border border-[#039be6] flex items-center justify-center'>
                            <h1 className='font-bold'>2</h1>
                        </div>
                        <div className=''>
                            <h1 className='font-bold text-center'>Improve</h1>
                            <p className='text-[12px] text-gray-500 text-center'>We have a strong ambition to change the world’s agriculture towards organic farming and make a 
sustainable impact. For our planet, for our health and for future generations.</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3 items-center'>
                        <div className='w-[50px] h-[50px] rounded-full border border-[#039be6] flex items-center justify-center'>
                            <h1 className='font-bold'>3</h1>
                        </div>
                        <div className=''>
                            <h1 className='font-bold text-center'>100%</h1>
                            <p className='text-[12px] text-gray-500 text-center'>We are 100% committed to make the change happen. We do it by delivering 100% organic food.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo