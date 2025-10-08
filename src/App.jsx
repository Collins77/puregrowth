import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Ingredients from "./pages/Ingredients"
import Assortment from "./pages/Assortment"
import PrivateLabel from "./pages/PrivateLabel"
import WhatWeDo from "./pages/WhatWeDo"
import Quality from "./pages/Quality"
import Services from "./pages/Services"
import Shop from "./pages/Shop"
import SingleProduct from "./pages/SingleProduct"
import Contact from "./pages/Contact"
import WhatsAppButton from "./components/WhatsAppButton"
import CategoryPage from "./pages/CategoryPage"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="assortment" element={<Assortment />} />
          <Route path="assortment/ingredients" element={<Ingredients />} />
          <Route path="assortment/private-label" element={<PrivateLabel />} />
          <Route path="what-we-do" element={<WhatWeDo />} />
          <Route path="quality" element={<Quality />} />
          <Route path="quality/certifications" element={<Quality />} />
          <Route path="quality/services" element={<Services />} />
          <Route path="shop" element={<Shop />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/:categorySlug/:productSlug" element={<SingleProduct />} />
          <Route path="/:categorySlug" element={<CategoryPage />} />
        </Route>
      </Routes>
      <WhatsAppButton />
    </>
  )
}

export default App
