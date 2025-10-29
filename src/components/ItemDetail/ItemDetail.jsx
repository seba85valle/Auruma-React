import { useState } from "react";
import { Link } from "react-router-dom";
import "./ItemDetail.css";
import { useCartContext } from "../../context/CartContext/useCartContext";
import { Count } from "../Count/Count";

export const ItemDetail = ({ detail }) => {
  const { addItem } = useCartContext();
  const [quantityAdded, setQuantityAdded] = useState(0);

  const handleAdd = (quantity) => {
    addItem({ ...detail, quantity });

    setQuantityAdded(quantity);

    const modalEl = document.getElementById("addedModal");
    if (modalEl && window.bootstrap?.Modal) {
      const modal = new window.bootstrap.Modal(modalEl);
      modal.show();
    }
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
          {detail.size && <p className="item-detail-size">{detail.size}</p>}

          <p className="item-detail-price">
            ${Number(detail.price || 0).toLocaleString("es-AR")}
          </p>

          <p className="item-detail-short">{detail.description}</p>

          {/* Contador + botón */}
          <Count btnText="Agregar al carrito" onConfirm={handleAdd} />
        </div>
      </div>

      {detail.longDescription && (
        <div className="descripcion-detalle mt-4">
          <h4>Descripción del producto</h4>
          <p>{detail.longDescription}</p>
        </div>
      )}

      {/* Modal de agregado */}
      <div
        className="modal fade"
        id="addedModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content auruma-modal">
            <div className="modal-header border-0">
              <h5 className="modal-title">
                Producto agregado 🛍️
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Cerrar"
              ></button>
            </div>

            <div className="modal-body">
              <div className="modal-product">
                <img
                  src={detail.imageUrl}
                  alt={detail.name}
                  className="modal-product-img"
                />
                <div className="modal-product-info">
                  <p className="modal-product-name">{detail.name}</p>
                  {detail.size && (
                    <p className="modal-product-size">{detail.size}</p>
                  )}
                  <p className="modal-product-qty">
                    Cantidad: <strong>{quantityAdded}</strong>
                  </p>
                  <p className="modal-product-sub">
                    Subtotal:{" "}
                    <strong>
                      $
                      {(Number(detail.price || 0) * quantityAdded).toLocaleString(
                        "es-AR"
                      )}
                    </strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="modal-footer border-0">
              <button
                type="button"
                className="btn btn-outline-dark"
                data-bs-dismiss="modal"
              >
                Seguir comprando
              </button>
              <Link to="/carrito" className="btn btn-dark">
                Ir al carrito
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* /Modal */}
    </div>
  );
};
