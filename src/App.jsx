

import Home from './pages/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import ProductDetails from './pages/Home/ProductDetails'
import Login from './pages/Login'
import Register from './pages/Register'
import Wishlist from './pages/Wishlist'
import Profile from './pages/Profile'
import { useAuthContext } from './hooks/useAuthContext'


function App() {
  const { user } = useAuthContext();

  return (
    <>
  
    <Routes>
      <Route index  path="/" element= { <Home /> } />
      <Route path="/product/:id" element={user ? <ProductDetails />: <Navigate to="/login"/>} />
      <Route path="/login" element={!user ? <Login /> :<Navigate to="/"/>} />
      <Route path="/register" element={!user ? <Register /> :<Navigate to="/"/>} />
      <Route path="/wishlist" element={user?<Wishlist /> : <Navigate to="/login"/>} />
      <Route path="/profile" element={user ?<Profile /> : <Navigate to="/login"/>} />
    </Routes>
    </>
  )
}

export default App