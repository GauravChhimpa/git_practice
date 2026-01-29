import React from 'react'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import AllProducts from './components/AllProducts'
import ProductDetail from './components/ProductDetail'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<AllProducts />} />
        <Route path='/productdetail' element={<ProductDetail />} />
      </Routes>
      
    </div>
  )
}

export default App