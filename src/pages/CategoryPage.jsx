import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { ChevronDown, Menu, X, ChevronRight } from "lucide-react"
import ProductCard from "../components/ProductCard"
import Footer from "../components/Footer"
import productsData from "../db/products.json"

const CategoryPage = () => {
    const { categorySlug } = useParams()
    const [searchTerm, setSearchTerm] = useState("")
    const [currentPage, setCurrentPage] = useState(1)

    const productsPerPage = 9
    useEffect(() => {
        setCurrentPage(1)
    }, [searchTerm])

    // Find category
    const category = productsData.find((c) => c.slug === categorySlug)

    if (!category) {
        return <div className="p-10 text-center">Category not found</div>
    }

    // Products from this category
    const categoryProducts = category.subProducts.map((sub) => ({
        ...sub,
        category: category.category,
        categorySlug: category.slug,
    }))

    // Filter by search
    const filteredProducts = categoryProducts.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    // Pagination
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage)
    const indexOfLast = currentPage * productsPerPage
    const indexOfFirst = indexOfLast - productsPerPage
    const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast)


    return (
        <div>
            

            {/* Category Products */}
            <div className="px-[40px] py-[60px] bg-white">
                {/* Search */}
                <div className="mb-[30px] flex justify-between items-center">
                    <input
                        type="search"
                        placeholder="Search Products"
                        className="border-b border-gray-300 outline-none p-2 sm:w-[300px] w-full"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <p className="text-gray-500 sm:block hidden">
                        Showing {indexOfFirst + 1}–
                        {Math.min(indexOfLast, filteredProducts.length)} of{" "}
                        {filteredProducts.length} results
                    </p>
                </div>

                <div className="sm:grid sm:grid-cols-3 flex flex-col gap-4">
                    {currentProducts.map((product) => (
                        <ProductCard key={product.slug} product={product} />
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center mt-6 gap-2">
                    <button
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage((prev) => prev - 1)}
                        className="px-3 py-1 border rounded disabled:opacity-50"
                    >
                        Prev
                    </button>
                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentPage(i + 1)}
                            className={`px-3 py-1 border rounded ${currentPage === i + 1
                                    ? "bg-[#fcdb5a] text-black font-bold"
                                    : ""
                                }`}
                        >
                            {i + 1}
                        </button>
                    ))}
                    <button
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage((prev) => prev + 1)}
                        className="px-3 py-1 border rounded disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default CategoryPage
