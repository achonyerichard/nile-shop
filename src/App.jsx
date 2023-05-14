

import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import ProductDetails from './pages/Home/ProductDetails'
import Login from './pages/Login'


function App() {
  

  return (
    <>
   
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </>
  )
}

export default App
