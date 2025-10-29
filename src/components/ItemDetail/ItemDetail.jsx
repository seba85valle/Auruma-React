import "./ItemDetail.css";
import { useCartContext } from "../../context/CartContext/useCartContext";
import { Count } from "../Count/Count";

export const ItemDetail = ({ detail }) => {
  const { addItem } = useCartContext();

  const handleAdd = (quantity) => {
    addItem({ ...detail, quantity });
  };

  return (
    <div className="item-detail-wrapper">
      <div className="item-detail-horizontal">
        <div className="item-detail-image">
          <img
            src={detail.imageUrl}
            alt={detail.name}
            className="product-img-animate"
          />
        </div>
        <div className="item-detail-info">
          <h2 className="item-detail-title">{detail.name}</h2>
          <p className="item-detail-price">${detail.price}</p>
          <p className="item-detail-short">{detail.description}</p>
          <Count btnText="Agregar al carrito" onConfirm={handleAdd} />
        </div>
      </div>

      {detail.longDescription && (
        <div className="descripcion-detalle mt-4">
          <h4>Descripción del producto</h4>
          <p>{detail.longDescription}</p>
        </div>
      )}
    </div>
  );
};
