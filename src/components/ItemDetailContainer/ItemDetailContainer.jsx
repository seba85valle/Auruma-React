import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/products";
import "./ItemDetailContainer.css";

export const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getProductById(id)
      .then((data) => setDetail(data))
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

