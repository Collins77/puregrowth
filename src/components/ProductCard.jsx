import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
    const truncateDesc = (desc, maxLength = 60) => {
        if (!desc) return '';
        return desc.length > maxLength ? desc.slice(0, maxLength) + '...' : desc;
    };
    return (
        <div className='w-full h-[350px] rounded-md bg-white shadow-xl'>
            <img src={product.images?.[0] || product.image} alt="prod pic" className='w-full h-[50%] object-cover rounded-t-md' />
            <div className='mt-1 p-2 flex flex-col gap-1'>
                <h1 className='font-bold'>{product.name}</h1>
                <div>
                    <p className='text-[12px] text-gray-500'>Category: {product.category}</p>
                </div>
                <p className='text-gray-500 text-sm mb-3'>{truncateDesc(product.description)}</p>
                <Link to={`/${product.categorySlug}/${product.slug}`} className='bg-[#039be6] px-4 py-2 text-white rounded-md text-center'>More Details</Link>
            </div>
        </div>
    )
}

export default ProductCard