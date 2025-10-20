import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Nav } from "./components/Nav/Nav";
import { Home } from "./components/Home/Home"; 
import { Nosotros } from "./components/Nosotros/Nosotros";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { Footer } from "./components/Footer/Footer";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { CartProvider } from "./context/CartContext/CartProvider";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header />
        <Nav />
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Sección Nosotros */}
          <Route path="/nosotros" element={<Nosotros />} />

          {/* Perfumes */}
          <Route
            path="/perfumes"
            element={<ItemListContainer titulo="Perfumes" />}
          />
          <Route
            path="/perfumes/:categoria"
            element={<ItemListContainer titulo="Perfumes" />}
          />

          {/* Detalle de producto */}
          <Route path="/detail/:id" element={<ItemDetailContainer />} />

          {/* Contacto */}
          <Route path="/contacto" element={<ContactForm />} />
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;





