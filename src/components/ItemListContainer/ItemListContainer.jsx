import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";
import "./ItemListContainer.css";

export const ItemListContainer = ({ titulo = "Perfumes" }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoria } = useParams();

  useEffect(() => {
    setLoading(true);
    fetch("https://6908eeba2d902d0651b22ef5.mockapi.io/products")
      .then((res) => {
        if (!res.ok) throw new Error("Hubo un problema al buscar productos");
        return res.json();
      })
      .then((data) => {
        setProducts(categoria ? data.filter((p) => p.category === categoria) : data);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [categoria]);

  const order = ["femeninos", "masculinos", "unisex", "premium"];

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
        <p>Cargando perfumes...</p>
      </div>
    );
  }

  return (
    <section id="perfumes" className={`item-list-section ${categoria || "general"}`}>
      <div className="container text-center">
        <h1 className="titulo-principal">{titulo}</h1>

        <div className="categoria-links mb-4">
          <Link to="/perfumes/femeninos" className="cat-link">Femeninos</Link>
          <Link to="/perfumes/masculinos" className="cat-link">Masculinos</Link>
          <Link to="/perfumes/unisex" className="cat-link">Unisex</Link>
          <Link to="/perfumes/premium" className="cat-link">Premium</Link>
        </div>

        {categoria ? (
          <ItemList lista={products} />
        ) : (
          order.map((cat) => {
            const productosFiltrados = products.filter((p) => p.category === cat);
            return (
              productosFiltrados.length > 0 && (
                <div key={cat} className="categoria-block mb-5">
                  <ItemList lista={productosFiltrados} />
                </div>
              )
            );
          })
        )}
      </div>
    </section>
  );
};




