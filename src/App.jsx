import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./MyComponents/Navbar";
import Footer from "./MyComponents/Footer";
import Deals from "./MyComponents/Deals";
import Burgers from "./MyComponents/Burgers";
import Sides from "./MyComponents/Sides";
import Dips from "./MyComponents/Dips";
import Drinks from "./MyComponents/Drinks";
import BuyOneGetOne from "./MyComponents/BuyOneGetOne";
import ProductCard from "./MyComponents/ProductCard";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import Location from "./pages/Location";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-[#F2F3F4]">
      <Navbar />
      <main className="flex-1">
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/buy-one-get-one" element={<BuyOneGetOne />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/burgers" element={<Burgers />} />
        <Route path="/sides" element={<Sides />} />
        <Route path="/dips" element={<Dips />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
        <Route path='/location' element={<Location />}/>
        <Route path ='/productcard' element={<ProductCard/>}/>
      </Routes>
      </main>
      <Footer/>
      </div>
    </BrowserRouter>

  );
}

export default App