import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav/Nav";
import { Home } from "./components/Home/Home"; 
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { Footer } from "./components/Footer/Footer";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { CartProvider } from "./context/CartContext/CartProvider";
import { Cart } from "./components/Cart/Cart";
import { ProductFormContainer } from "./components/adminComponents/ProductFormContainer/ProductFormContainer";
import { MainLayout } from "./layouts/MainLayout";
import { AdminLayout } from "./layouts/AdminLayout";
import { Login } from "./components/Login/Login";
import { RutaProtegida } from "./components/RutaProtegida/RutaProtegida";

import "./App.css";


function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route element={<MainLayout />}>
            {/* Home */}
            <Route path="/" element={<Home />} />

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
          
            {/* Carrito */}
            <Route path="/carrito" element={<Cart />} />
        
            {/* Contacto */}
            <Route path="/contacto" element={<ContactForm />} />
          </Route>

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Login />}/>
            <Route path="alta-productos" element={
              <RutaProtegida>
                <ProductFormContainer />
              </RutaProtegida>}/>
          </Route>
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;


