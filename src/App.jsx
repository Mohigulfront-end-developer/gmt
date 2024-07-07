import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/CatalogPage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Manifacture from "./pages/Manifacture";
import CabinetRegister from "./pages/CabinetRegister";
import Services from "./pages/Services";
import Customers from "./pages/Customers";
import Contact  from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Dostavka from "./pages/Deliver";
import Oplata from "./pages/Pay";
import Garantii from "./pages/Garantii";
import Labaratory from "./pages/Labaratory";
import ProductPage from "./pages/ProductPage";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Korzinka from "./pages/Korzinka";
import Liked from "./pages/Liked";
import SalePage from "./pages/Sale";
import CabinetInform from "./pages/CabinetInform";
// import Text from "./pages/Text"




function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/katalog" element={<Catalog />} />
          <Route path="/katalog/laboratornoe" element={<Labaratory />} />
          <Route path="/katalog/laboratornoe/:id" element={<ProductPage />} />
          <Route path="/proizvoditel" element={<Manifacture />} />
          <Route path="/kabinet-podklyuch" element={<CabinetRegister />} />
          <Route path="/kabinet-podklyuch/:id" element={<CabinetInform />} />

          <Route path="/servisi" element={<Services />} />
          <Route path="/aktsiya" element={<SalePage />} />
          <Route path="/pokupatel" element={<Customers />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/o-kompanii" element={<AboutUs />} />
          <Route path="/dostavka" element={<Dostavka />} />
          <Route path="/oplata" element={<Oplata />} />
          <Route path="/garantii" element={<Garantii />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/korzinka" element={<Korzinka />} />
          <Route path="/избранное" element={<Liked />} />

          <Route path="/blog/informatsioniy-statya" element={<BlogDetail />} />
        </Routes>
        {/* <Text /> */}
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
