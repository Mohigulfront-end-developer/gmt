import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/CatalogPage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Manifacture from "./pages/Manifacture";
import CabinetRegister from "./pages/CabinetRegister";
import Services from "./pages/Services";
import Sale from "./pages/Sale";
import Customers from "./pages/Customers";
import Contact  from "./pages/Contact";



function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/katalog" element={<Catalog />} />
          <Route path="/proizvoditel" element={<Manifacture />} />
          <Route path="/kabinet-podklyuch" element={<CabinetRegister />} />
          <Route path="/servisi" element={<Services />} />
          <Route path="/aktsiya" element={<Sale />} />
          <Route path="/pokupatel" element={<Customers/>} />
          <Route path="/kontakt" element={<Contact/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
