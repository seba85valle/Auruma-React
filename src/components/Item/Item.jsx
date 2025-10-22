import "./Item.css";

export const Item = ({ name, price, description, imageUrl, size, children }) => {
  return (
    <div className="card h-100 shadow-sm producto-card text-center">
      <img src={imageUrl} alt={name} className="card-img-top producto-img" />
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title">{name}</h5>
          {size && <p className="card-size">{size}</p>}
          <p className="card-text">{description}</p>
        </div>
        <p className="fw-bold precio">${price.toLocaleString()}</p>
        {children}
      </div>
    </div>
  );
};

