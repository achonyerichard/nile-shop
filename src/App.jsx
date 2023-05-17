

import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import ProductDetails from './pages/Home/ProductDetails'
import Login from './pages/Login'
import Register from './pages/Register'
import Wishlist from './pages/Wishlist'


function App() {
  

  return (
    <>
   
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/wishlist" element={<Wishlist />} />
    </Routes>
    </>
  )
}

export default App
