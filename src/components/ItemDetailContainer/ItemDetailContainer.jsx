import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";

export const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    fetch("/data/products.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("No se encontró el producto");
        }
        return res.json();
      })
      .then((data) => {
        const found = data.find((p) => p.id === id);
        if (found) {
          setDetail(found);
        } else {
          throw new Error("Producto no encontrado");
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <main className="detalle-container container py-5">
      {loading ? (
        <div className="loader-container">
          <div className="loader"></div>
          <p>Cargando producto...</p>
        </div>
      ) : Object.keys(detail).length ? (
        <ItemDetail detail={detail} />
      ) : (
        <p className="text-center text-muted">Producto no encontrado.</p>
      )}
    </main>
  );
};
