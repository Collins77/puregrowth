import React from 'react'
import { useNavigate } from 'react-router-dom';
import cere from '../assets/cerealss.jpg'
import spice from '../assets/spices.jpg'

const Assortment = () => {
    const navigate = useNavigate()

    return (
        <div className="bg-white px-[40px] py-[60px]">
            <div className="flex sm:flex-row flex-col  items-center justify-center gap-8 mt-8">
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
    )
}

export default Assortment