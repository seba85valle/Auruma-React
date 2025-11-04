import "./ProductFormUI.css";

export const ProductFormUI = ({
  product,
  errors,
  loading,
  onChange,
  onFileChange,
  onSubmit,
  showModal,
  closeModal,
}) => {
  return (
    <section className="admin-form-section">
      <form onSubmit={onSubmit} className="admin-form">
        <h2 className="admin-form-title">Agregar producto</h2>

        <div className="form-group">
          <label>Nombre</label>
          <input
            type="text"
            value={product.name}
            onChange={onChange}
            name="name"
            required
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label>Precio</label>
          <input
            type="number"
            value={product.price}
            onChange={onChange}
            name="price"
            required
          />
          {errors.price && <p className="error">{errors.price}</p>}
        </div>

        <div className="form-group">
          <label>Categoría</label>
          <input
            type="text"
            value={product.category}
            onChange={onChange}
            name="category"
            required
          />
          {errors.category && <p className="error">{errors.category}</p>}
        </div>

        <div className="form-group">
          <label>Tamaño</label>
          <input
            type="text"
            value={product.size}
            onChange={onChange}
            name="size"
            required
          />
          {errors.size && <p className="error">{errors.size}</p>}
        </div>

        <div className="form-group">
          <label>Descripción</label>
          <textarea
            value={product.description}
            onChange={onChange}
            name="description"
            required
          />
          {errors.description && <p className="error">{errors.description}</p>}
        </div>

        <div className="form-group">
          <label>Imagen</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => onFileChange(e.target.files[0] ?? null)}
            name="image"
            required
          />
          {errors.file && <p className="error">{errors.file}</p>}
        </div>

        {errors.general && <p className="error">{errors.general}</p>}

        <button
          type="submit"
          disabled={loading}
          className="btn-submit"
        >
          {loading ? "Guardando..." : "Guardar producto"}
        </button>
      </form>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>✅ Producto agregado</h3>
            <p>El producto fue creado con éxito en tu catálogo.</p>
            <button onClick={closeModal} className="btn-close">
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

