
import Navigation from './components/Navigation'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import ProductDetails from './pages/Home/ProductDetails'


function App() {
  

  return (
    <>
    <Navigation/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
    </>
  )
}

export default App
