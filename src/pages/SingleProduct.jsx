import React, { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { ChevronRight, CircleCheck, ArrowLeft } from "lucide-react"
import Footer from "../components/Footer"
import productsData from "../db/products.json"
import ProductCard from "../components/ProductCard"
import { FaWhatsapp } from "react-icons/fa6"

const DetailRow = ({ label, value }) => (
    <div className="flex items-center text-gray-700 text-sm mb-2">
        <span className="font-semibold text-gray-600">{label}</span>
        <span className="flex-grow border-b border-dashed border-gray-300 mx-2"></span>
        <span className="text-gray-900">{value}</span>
    </div>
)

const SingleProduct = () => {
    const { categorySlug, productSlug } = useParams()
    // const [isOpen, setIsOpen] = useState(false)
    // const [openDropdown, setOpenDropdown] = useState(null)
    const [activeTab, setActiveTab] = useState("specifics")

    // Find category and product
    const category = productsData.find((c) => c.slug === categorySlug)
    const product = category?.subProducts.find((p) => p.slug === productSlug)
    // Initialize with product.images.main
    const [selectedImage, setSelectedImage] = useState(product.images.main)

    // Reset image when product changes
    useEffect(() => {
        if (product?.images?.main) {
            setSelectedImage(product.images.main)
        }
    }, [product])

    if (!category || !product) {
        return <div className="p-10 text-center">Product not found</div>
    }

    return (
        <div className="px-[40px] py-[40px]">
            <div className="flex items-center gap-8 text-[12px]">
                <Link to={'shop'} className="flex gap-1 text-blue-500 underline items-center">
                    <ArrowLeft size={20} />
                    Back to overview
                </Link>
                <div className="text-gray-300 text-sm flex items-center gap-2">
                    <Link to="/" className="hover:text-[#039be6]">
                        Home
                    </Link>
                    <ChevronRight size={14} />
                    <Link to="/shop" className="hover:text-[#039be6]">
                        Shop
                    </Link>
                    <ChevronRight size={14} />
                    <Link to={`/${category.slug}`} className="hover:text-[#039be6]">
                        {category.category}
                    </Link>
                    <ChevronRight size={14} />
                    <span className="font-semibold text-[#039be6]">{product.name}</span>
                </div>
            </div>

            {/* Product Section */}
            <div className="px-[40px] py-[60px] bg-white">
                <div className="sm:flex w-full gap-4 mb-[60px]">
                    {/* ✅ Image Gallery */}
                    <div className="sm:w-[45%] flex flex-col gap-4">
                        <div className="w-full sm:h-[400px] border-2 border-[#039be6] rounded-md overflow-hidden">
                            <img
                                key={selectedImage}
                                src={selectedImage}
                                alt="main"
                                className="w-full h-full object-cover rounded-md transition-opacity duration-500 ease-in-out opacity-100"
                            />
                        </div>
                        <div className="sm:flex hidden gap-3">
                            {[...product.images.gallery].map((img, idx) => (
                                <div
                                    key={idx}
                                    className={`w-[100px] h-[70px] rounded-md cursor-pointer overflow-hidden border-2 
                  ${selectedImage === img ? "border-[#039be6]" : "border-transparent"}`}
                                    onClick={() => setSelectedImage(img)}
                                >
                                    <img
                                        src={img}
                                        alt={`thumb-${idx}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="sm:w-[55%] p-4">
                        <div className="flex flex-col gap-3">
                            <h1 className="font-bold text-3xl">{product.name}</h1>
                            <div className="flex items-center gap-3 text-[12px] text-gray-500">
                                <p>Category: {category.category}</p>
                                <p>Tags: {product.tags.join(", ")}</p>
                                {product.origin && <p>Origin: {product.origin.join(", ")}</p>}
                            </div>
                            <p className="text-gray-600">{product.description}</p>

                            <div className="flex flex-col gap-3">
                                <h1 className="font-bold text-lg">Key Features:</h1>
                                <ul className="flex flex-col gap-2">
                                    {product.features.map((feature, idx) => (
                                        <li
                                            key={idx}
                                            className="flex gap-2 items-center text-sm text-gray-500"
                                        >
                                            <CircleCheck color="#039be6" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <a
                                href={`https://wa.me/254754153083?text=Hello, I am interested in ${encodeURIComponent(product.name)}.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-500 px-4 py-2 rounded-xl cursor-pointer hover:bg-green-600 duration-300 transition-all text-white text-sm font-semibold flex items-center gap-2 sm:w-fit w-full text-center"
                            >
                                <FaWhatsapp />
                                WhatsApp Us
                            </a>
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="w-full">
                    <div className="flex gap-6 border-b border-gray-300 mb-4">
                        <button
                            onClick={() => setActiveTab("specifics")}
                            className={`pb-2 ${activeTab === "specifics"
                                ? "text-[#039be6] border-b-2 border-[#039be6]"
                                : "text-gray-500"
                                } transition-all`}
                        >
                            Description
                        </button>
                        <button
                            onClick={() => setActiveTab("details")}
                            className={`pb-2 ${activeTab === "details"
                                ? "text-[#039be6] border-b-2 border-[#039be6]"
                                : "text-gray-500"
                                } transition-all`}
                        >
                            Product Details
                        </button>
                        <button
                            onClick={() => setActiveTab("nutritional")}
                            className={`pb-2 ${activeTab === "nutritional"
                                ? "text-[#039be6] border-b-2 border-[#039be6]"
                                : "text-gray-500"
                                } transition-all`}
                        >
                            Nutritional Values
                        </button>
                    </div>

                    {activeTab === "specifics" && (
                        <div className="text-gray-600 space-y-3">
                            {Object.entries(product.desc).map(([label, value]) => (
                                <DetailRow key={label} label={label} value={value} />
                            ))}
                        </div>
                    )}

                    {activeTab === "details" && (
                        <div className="space-y-2">
                            {Object.entries(product.metrics).map(([label, value]) => (
                                <DetailRow key={label} label={label} value={value} />
                            ))}
                        </div>
                    )}
                    {activeTab === "nutritional" && (
                        <div className="space-y-2">
                            {Object.entries(product.specifics).map(([label, value]) => (
                                <DetailRow key={label} label={label} value={value} />
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Related Products */}
            <div className="px-[40px] py-[60px] bg-white">
                <h1 className="font-bold text-xl mb-[40px]">Related Products</h1>
                <div className="sm:grid sm:grid-cols-4 flex flex-col items-center gap-4">
                    {category.subProducts
                        .filter((p) => p.slug !== product.slug)
                        .slice(0, 4)
                        .map((related) => (
                            <ProductCard
                                key={related.slug}
                                product={{
                                    ...related,
                                    category: category.category || 'Unknown',
                                    categorySlug: category.slug || 'shop',
                                }}
                            />
                        ))}
                </div>
            </div>
        </div>
    )
}

export default SingleProduct
