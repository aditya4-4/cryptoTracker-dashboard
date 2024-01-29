
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import DashBoard from "./pages/DashBoard"
import CoinPage from './pages/Coin'
import ComparePage from './pages/ComparePage'
import WatchList from './pages/WatchList'


function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/dashboard' element={<DashBoard />} />
          <Route path='/coin/:id' element={<CoinPage />} />
          <Route path='/compare' element={<ComparePage />} />
          <Route path='/watchlist' element={<WatchList />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
