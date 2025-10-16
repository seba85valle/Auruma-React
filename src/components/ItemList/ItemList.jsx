import { Link } from "react-router-dom";
import { Item } from "../Item/Item";
import "./ItemList.css";

export const ItemList = ({ lista }) => {
  if (!lista.length) {
    return (
      <div className="text-center mt-5">
        <p className="mensaje-vacio">No hay perfumes disponibles en esta categoría.</p>
      </div>
    );
  }

  return (
    <div className="row justify-content-center">
      {lista.map((prod) => (
        <div key={prod.id} className="col-md-4 col-sm-6 mb-4 d-flex align-items-stretch">
          <Link to={`/detail/${prod.id}`} className="card-link">
            <Item {...prod} />
          </Link>
        </div>
      ))}
    </div>
  );
};
