import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import productsData from '../db/products.json';
import ProductCard from '../components/ProductCard';

const Shop = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6;

    // Flatten all subProducts
    const allProducts = productsData.flatMap(cat => cat.subProducts);

    // Handle toggle change
    const handleCategoryChange = (slug) => {
        setCurrentPage(1); // Reset to first page
        setSelectedCategories(prev =>
            prev.includes(slug) ? prev.filter(s => s !== slug) : [...prev, slug]
        );
    };

    // Reset all filters
    const handleAllCategories = () => {
        setSelectedCategories([]);
    };

    // Filter products based on search and selected categories
    useEffect(() => {
        let filtered = allProducts;

        if (selectedCategories.length > 0) {
            filtered = filtered.filter(prod =>
                productsData.some(cat =>
                    selectedCategories.includes(cat.slug) &&
                    cat.subProducts.some(p => p.slug === prod.slug)
                )
            );
        }

        if (searchTerm) {
            filtered = filtered.filter(prod =>
                prod.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        setFilteredProducts(filtered);
    }, [selectedCategories, searchTerm]);

    // Pagination
    const indexOfLast = currentPage * productsPerPage;
    const indexOfFirst = indexOfLast - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    return (
        <div className='bg-white px-[40px] py-[10px]'>
            {/* Breadcrumbs */}
            <div className='p-4 w-full rounded-md mb-[40px] border-b border-gray-200 bg-[#039be6]/5'>
                <div className='text-gray-500 text-[12px] flex items-center gap-1'>
                    <Link to='/' className='hover:text-black cursor-pointer'>Home</Link>
                    <span className='text-gray-400'> &gt; </span>
                    <span className='font-semibold'>Shop</span>
                </div>
                <div className='w-full items-center justify-center flex mt-2'>
                    <input
                        type="search"
                        className='w-[600px] p-2 outline-none border border-gray-200 rounded-md'
                        placeholder='Search Product Name...'
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className='sm:flex gap-4'>
                {/* Filters */}
                <div className='bg-white shadow-md p-4 sm:w-[20%] h-fit hidden sm:block'>
                    <h1 className='font-bold mb-[20px]'>Categories</h1>
                    <ul className='flex flex-col gap-4'>
                        {/* All button */}
                        <li>
                            <button
                                onClick={handleAllCategories}
                                className={`w-full text-left px-4 py-2 rounded-md font-semibold border 
                  ${selectedCategories.length === 0 ? 'bg-[#039be6] text-white border-[#039be6]' : 'bg-white text-gray-700 border-gray-200'}
                  hover:bg-[#039be6] hover:text-white transition`}
                            >
                                All ({allProducts.length})
                            </button>
                        </li>

                        {/* Category toggles */}
                        {productsData.map(cat => (
                            <li key={cat.slug}>
                                <label className="flex items-center cursor-pointer select-none">
                                    <div
                                        className={`relative w-10 h-5 transition duration-200 ease-linear rounded-full
                      ${selectedCategories.includes(cat.slug) ? 'bg-[#039be6]' : 'bg-gray-300'}`}
                                        onClick={() => handleCategoryChange(cat.slug)}
                                    >
                                        <span
                                            className={`absolute left-0 top-0 w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-200
                        ${selectedCategories.includes(cat.slug) ? 'translate-x-full' : ''}`}
                                        ></span>
                                    </div>
                                    <span className='ml-3 text-gray-700'>{cat.category} ({cat.subProducts.length})</span>
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Products */}
                <div className="sm:w-[80%] shadow-md p-4">
                    <div className="mb-[30px]">
                        <p className="text-gray-500">
                            Showing {filteredProducts.length === 0 ? 0 : indexOfFirst + 1}–
                            {Math.min(indexOfLast, filteredProducts.length)} of {filteredProducts.length} results
                        </p>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 flex flex-col gap-4">
                        {currentProducts.map(product => {
                            const parentCategory = productsData.find(cat =>
                                cat.subProducts.some(p => p.slug === product.slug)
                            );

                            return (
                                <ProductCard
                                    key={product.slug}
                                    product={{
                                        ...product,
                                        category: parentCategory?.category || 'Unknown',
                                        categorySlug: parentCategory?.slug || 'shop'
                                    }}
                                />
                            );
                        })}
                        {currentProducts.length === 0 && (
                            <p className="text-center col-span-3 text-gray-500">No products found.</p>
                        )}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="flex justify-center items-center mt-6 gap-2">
                            <button
                                disabled={currentPage === 1}
                                onClick={() => setCurrentPage(prev => prev - 1)}
                                className="px-3 py-1 border rounded disabled:opacity-50"
                            >
                                Prev
                            </button>
                            {[...Array(totalPages)].map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentPage(i + 1)}
                                    className={`px-3 py-1 border rounded ${currentPage === i + 1 ? "bg-[#039be6] text-black font-bold" : ""}`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                            <button
                                disabled={currentPage === totalPages}
                                onClick={() => setCurrentPage(prev => prev + 1)}
                                className="px-3 py-1 border rounded disabled:opacity-50"
                            >
                                Next
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Shop;
