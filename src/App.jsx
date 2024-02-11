import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Loader from "./components/Common/Loader";
// import HomePage from './pages/HomePage'
// import DashBoard from "./pages/DashBoard"
// import CoinPage from './pages/Coin'
// import ComparePage from './pages/ComparePage'
// import WatchList from './pages/WatchList'
import { Suspense, lazy } from "react";

// lazy loading routing
const HomePage = lazy(() => import("./pages/HomePage"));
const DashBoard = lazy(() => import("./pages/DashBoard"));
const CoinPage = lazy(() => import("./pages/Coin"));
const ComparePage = lazy(() => import("./pages/ComparePage"));
const WatchList = lazy(() => import("./pages/WatchList"));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/coin/:id" element={<CoinPage />} />
            <Route path="/compare" element={<ComparePage />} />
            <Route path="/watchlist" element={<WatchList />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
