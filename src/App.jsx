
import Navigation from './components/Navigation'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'

function App() {
  

  return (
    <>
    <Navigation/>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    </>
  )
}

export default App
