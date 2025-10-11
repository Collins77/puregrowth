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
import { ArrowRight, Calendar, ChevronRight, ChevronsUp, CircleCheckBig, Link, MoveRight, ShoppingCart, ThumbsUp, UserCheck } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import bgImage from '../assets/bg.jpg'


const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div
                className='relative w-full sm:h-[85vh] h-fit flex justify-between px-[40px] py-[60px] bg-cover bg-center bg-no-repeat'
                style={{ backgroundImage: `url(${bgImage})`, backgroundPosition: 'center', backgroundSize: 'cover' }}
            >
                {/* Overlay for better text readability */}
                <div className='absolute inset-0 bg-black/40'></div>

                {/* Content */}
                <div className='relative w-full flex flex-col gap-4 justify-center items-center h-full text-white z-10'>
                    <h1 className='sm:text-7xl text-3xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent w-[80%] text-center'>
                        Your Trusted Sourcing Partner in Kenya
                    </h1>
                    <p className='text-gray-200 text-sm text-center w-[60%]'>
                        PUREGROWTH AGRIBUSINESS LIMITED is an established Sourcing and Trading company based in East Africa.
                        We are here to bring you the best local products at the best price.
                    </p>
                    <div className='flex sm:flex-row flex-col items-center gap-3 mb-[30px]'>
                        <button
                            onClick={() => navigate('/what-we-do')}
                            className='bg-[#039be6] px-4 py-2 rounded-md flex items-center gap-2 text-white hover:bg-transparent hover:text-white hover:border hover:border-[#039be6] duration-300 transition-all cursor-pointer font-semibold'
                        >
                            LEARN MORE
                            <ChevronRight />
                        </button>
                        <button
                            onClick={() => navigate('/shop')}
                            className='bg-transparent px-4 py-2 rounded-md flex items-center gap-2 text-white border border-[#039be6] hover:bg-[#039be6] duration-300 transition-all cursor-pointer font-semibold'
                        >
                            PRODUCTS
                            <ChevronRight />
                        </button>
                    </div>

                    <div className='sm:grid sm:grid-cols-3 flex flex-col gap-6'>
                        <div className='flex flex-col gap-1 items-center bg-white/10 rounded-lg shadow p-2'>
                            <ThumbsUp />
                            <h1 className='font-bold text-lg'>Competitive Pricing</h1>
                        </div>
                        <div className='flex flex-col gap-1 items-center bg-white/10 rounded-lg shadow p-2'>
                            <ShoppingCart />
                            <h1 className='font-bold text-lg'>Wide Range of Products</h1>
                        </div>
                        <div className='flex flex-col gap-1 items-center bg-white/10 rounded-lg shadow p-2'>
                            <CircleCheckBig />
                            <h1 className='font-bold text-lg'>Quality Control</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex sm:flex-row flex-col gap-4 px-[40px] py-[60px] bg-[#039be6]/10'>
                <div className='sm:w-[40%]'>
                    <div className='sm:w-[400px] h-[400px] rounded-full border border-[#039be6] bg-white relative overflow-hidden'>
                        <img src={chilli} alt="img" className='w-[60px] h-[60px] absolute right-3 bottom-[40%] rounded-full border-2 border-[#039be6]/10 object-cover' />
                        <img src={oil} alt="img" className='w-[80px] h-[80px] absolute right-[50px] bottom-[20px] rounded-full border-2 border-[#039be6]/10 object-cover' />
                        <img src={cere} alt="img" className='w-[70px] h-[70px] absolute left-[10px] bottom-[20%] rounded-full border-2 border-[#039be6]/10 object-cover' />
                        <img src={black} alt="img" className='w-[120px] h-[120px] absolute right-[40%] bottom-[40%] rounded-full border-2 border-[#039be6]/10 object-cover' />
                        <img src={carda} alt="img" className='w-[60px] h-[60px] absolute left-[60px] top-[20px] rounded-full border-2 border-[#039be6]/10 object-cover' />
                        <img src={beans} alt="img" className='w-[70px] h-[70px] absolute left-[40%] top-5 rounded-full border-2 border-[#039be6]/10 object-cover' />
                        <img src={cashew} alt="img" className='w-[100px] h-[100px] absolute right-[15%] top-[40px] rounded-full border-2 border-[#039be6]/10 object-cover' />
                        <img src={coffee} alt="img" className='w-[100px] h-[100px] absolute left-[30%] bottom-[50px] rounded-full border-2 border-[#039be6]/10 object-cover' />
                        <img src={clove} alt="img" className='w-[90px] h-[90px] absolute left-[30px] bottom-[50%] rounded-full border-2 border-[#039be6]/10 object-cover' />
                        <img src={sesame} alt="img" className='w-[90px] h-[90px] absolute right-[80px] bottom-[25%] rounded-full border-2 border-[#039be6]/10 object-cover' />
                        <img src={spice} alt="img" className='w-[90px] h-[90px] absolute right-[150px] -bottom-[40px] rounded-full border-2 border-[#039be6]/10 object-cover' />
                    </div>
                </div>
                <div className='sm:w-[60%] flex flex-col gap-4'>
                    <h1 className='font-bold sm:text-5xl text-2xl text-[#039be6]'>WE EMBRACE THE PRINCIPLES OF ORGANIC AGRICULTURE</h1>
                    <ul className='flex flex-col gap-4'>
                        <li className='sm:text-xl font-bold flex items-center gap-2'>
                            <ArrowRight className='sm:block hidden' />
                            We choose food that is grown with respect for nature
                        </li>
                        <li className='sm:text-xl font-bold flex items-center gap-2'>
                            <ArrowRight className='sm:block hidden' />
                            That is why 100% organic food is our standard
                        </li>
                        <li className='sm:text-xl font-bold flex items-center gap-2'>
                            <ArrowRight className='sm:block hidden' />
                            All our ingredients and products are certified and of the highest quality
                        </li>
                    </ul>
                    <button onClick={() => navigate('/what-we-do')} className='bg-[#039be6] py-2 px-4 text-white hover:bg-blue-700 duration-300 transition-all w-fit rounded-full cursor-pointer font-bold'>What We Do?</button>
                </div>
            </div>
            <div className="bg-white px-[40px] py-[60px]">
                <div>
                    <h1 className="font-bold sm:text-4xl text-2xl text-[#039be6]">
                        100% <br />
                        ORGANIC FOOD
                    </h1>
                </div>
                <div className="flex sm:flex-row flex-col items-center justify-center gap-8 mt-8">
                    <a
                        href="/assortment/ingredients"
                        onClick={(e) => {
                            e.preventDefault();
                            navigate('/assortment/ingredients');
                        }}
                        className="w-[400px] h-[400px] relative group block"
                        style={{ clipPath: 'url(#blobClip)' }}
                    >
                        <svg viewBox="0 0 500 500" className="w-full h-full">
                            <defs>
                                <clipPath id="blobClip">
                                    <path
                                        d="M424.7,166.7c26.3,53.3,21.3,129.7-21.3,190.7c-42.7,60.9-122.7,106.4-194.7,96.4c-72-10.7-136-76.8-162.4-156.8C20,216.9,30,122.7,82,73.5C134,24.3,227.9,20.1,294.7,56.5C361.4,92.9,398.3,113.5,424.7,166.7z"
                                    />
                                </clipPath>
                            </defs>
                            <path
                                d="M424.7,166.7c26.3,53.3,21.3,129.7-21.3,190.7c-42.7,60.9-122.7,106.4-194.7,96.4c-72-10.7-136-76.8-162.4-156.8C20,216.9,30,122.7,82,73.5C134,24.3,227.9,20.1,294.7,56.5C361.4,92.9,398.3,113.5,424.7,166.7z"
                                fill="#039be6"
                                fillOpacity="0.9"
                                className="transition-all duration-500 ease-in-out group-hover:fill-transparent"
                            />
                            <image
                                href={spice}
                                x="0"
                                y="0"
                                width="500"
                                height="500"
                                clipPath="url(#blobClip)"
                                className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                            />
                            <rect
                                x="0"
                                y="0"
                                width="500"
                                height="500"
                                fill="black"
                                fillOpacity="0.3"
                                clipPath="url(#blobClip)"
                                className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                            />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center text-white text-center px-8">
                            <h2 className="text-3xl font-bold tracking-wider z-10">
                                FOOD
                                <br />
                                INGREDIENTS
                            </h2>
                        </div>
                    </a>
                    <a
                        href="/assortment/private-label"
                        onClick={(e) => {
                            e.preventDefault();
                            navigate('/assortment/private-label');
                        }}
                        className="w-[350px] h-[350px] rounded-full bg-green-300 flex items-center justify-center relative group"
                    >
                        <h1 className="text-3xl font-bold tracking-wider text-center z-10 text-white">
                            PRIVATE
                            <br />
                            LABEL
                        </h1>
                        <div
                            style={{ backgroundImage: `url(${cere})`, backgroundSize: 'cover' }}
                            className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out rounded-full"
                        />
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out rounded-full z-0" />
                    </a>
                </div>
            </div>
            <div className="bg-[#039be6]/5 px-[40px] py-[60px]">
                <div className='mb-[30px]'>
                    <h1 className="font-bold sm:text-4xl text-2xl text-[#039be6]">
                        WHY CHOOSE US
                    </h1>
                </div>
                <div className='sm:grid sm:grid-cols-3 flex flex-col sm:mb-[20px]'>
                    <div className='bg-[#039be6] h-[200px] flex flex-col gap-2 justify-center items-center p-2'>
                        <UserCheck color='white' size={30} />
                        <h1 className='text-white font-bold text-lg'>Reliable Suppliers</h1>
                        <p className='text-center text-white'>We only work with reliable suppliers with strong financial background and a complete manufacturing set-up, systems and controls</p>
                    </div>
                    <div className='bg-gray-100 h-[200px] flex flex-col gap-2 justify-center items-center p-2'>
                        <Link color='black' size={30} />
                        <h1 className=' font-bold text-lg'>Compliance</h1>
                        <p className='text-center '>We ensure the factories comply with the social compliance and code of conduct laid down by our clients and us</p>
                    </div>
                    <div className='bg-[#039be6] h-[200px] flex flex-col gap-2 justify-center items-center p-2'>
                        <Calendar color='white' size={30} />
                        <h1 className='text-white font-bold text-lg'>Timeliness</h1>
                        <p className='text-center text-white'>We ensure that our Products and Services meet our client expectation and always aim to ship goods as per agreed timelines</p>
                    </div>
                    
                </div>
                <div className='sm:grid sm:grid-cols-2 flex flex-col sm:px-[80px]'>
                    <div className='bg-gray-100 h-[200px] flex flex-col gap-2 justify-center items-center p-2'>
                        <ShoppingCart color='black' size={30} />
                        <h1 className=' font-bold text-lg'>Best Source - Best Price</h1>
                        <p className='text-center '>We will provide the best competitive pricing with the support of a wide range of sourcing/manufacturing partners</p>
                    </div>
                    <div className='bg-[#039be6] h-[200px] flex flex-col gap-2 justify-center items-center p-2'>
                        <ChevronsUp color='white' size={30} />
                        <h1 className='text-white font-bold text-lg'>Constant updates</h1>
                        <p className='text-center text-white'>We will provide proactive updates through the entire life cycle of the order</p>
                    </div>
                    
                </div>
            </div>
            <div className='bg-[#039be6] px-[40px] py-[60px] flex sm:flex-row flex-col gap-4'>
                <div className='sm:w-[40%]'>
                    <h1 className='text-white font-bold sm:text-4xl text-2xl'>SPECIALIST IN ORGANIC FOOD PRODUCTS</h1>
                </div>
                <div className='grid grid-cols-2 gap-8 sm:w-[60%]'>
                    <div className='flex flex-col gap-2 justify-center text-white w-[50%]'>
                        <h1 className='font-bold sm:text-5xl text-2xl'>30+</h1>
                        <p className='font-bold'>Years of Experience</p>
                    </div>
                    <div className='flex flex-col gap-2 justify-center text-white w-[50%]'>
                        <h1 className='font-bold sm:text-5xl text-2xl'>100%</h1>
                        <p className='font-bold'>Organic Ingredients</p>
                    </div>
                    <div className='flex flex-col gap-2 justify-center text-white w-[50%]'>
                        <h1 className='font-bold sm:text-5xl text-2xl'>Global</h1>
                        <p className='font-bold'>Network</p>
                    </div>
                    <div className='flex flex-col gap-2  justify-center text-white w-[50%]'>
                        <h1 className='font-bold sm:text-5xl text-2xl'>High</h1>
                        <p className='font-bold'>Ethical principals</p>
                    </div>
                </div>
            </div>
            <div className='bg-white px-[40px] py-[60px] flex items-center justify-center'>
                <h1 className='sm:text-6xl text-3xl font-bold sm:w-[50%] w-[80%] text-[#039be6]'>We take action.
                    Stand up. Connect.
                    Together with people like you we create a sustainable future. Together for our planet.</h1>
            </div>
        </div>
    )
}

export default Home