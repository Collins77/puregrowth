import React from 'react';
import { Link } from 'react-router-dom';
import productsData from '../db/products.json';

const Ingredients = () => {
  return (
    <div className='px-[40px] py-[60px] bg-white'>
      <h1 className='font-bold text-7xl text-[#039be6] uppercase mb-[40px]'>Food Ingredients</h1>
      <div className='grid grid-cols-4 gap-6'>
        {productsData.map((category) => (
          <Link
            key={category.slug}
            to={`/${category.slug}`} // Link to shop filtered by category
            className='w-full flex flex-col gap-2 items-center hover:text-[#039be6]'
          >
            <div className='h-[200px] w-[200px] rounded-full border border-[#039be6] flex items-center justify-center bg-[#f5f5f5]'>
              {/* Optionally, you can use the first product image as category image */}
              {category.subProducts[0]?.images?.[0] ? (
                <img
                  src={category.subProducts[0].images[0]}
                  alt={category.category}
                  className='h-full w-full object-cover rounded-full'
                />
              ) : (
                <span className='text-gray-500 uppercase font-semibold'>{category.category[0]}</span>
              )}
            </div>
            <p className='uppercase text-center font-semibold'>{category.category}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Ingredients;
