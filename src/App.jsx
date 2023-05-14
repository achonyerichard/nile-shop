

import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import ProductDetails from './pages/Home/ProductDetails'
import Login from './pages/Login'
import Register from './pages/Register'


function App() {
  

  return (
    <>
   
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
    </>
  )
}

export default App
