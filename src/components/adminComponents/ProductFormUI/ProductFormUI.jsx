export const ProductFormUI = ({ product, errors, loading, onChange, onFileChange, onSubmit }) => {
  return (
    <section className="form-section fade-in">
      <form className="product-form" onSubmit={onSubmit}>
        <h2 className="form-title">Agregar nuevo producto</h2>

        <div className="form-group">
          <label>Nombre:</label>
          <input type="text" value={product.name} onChange={onChange} name="name" />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label>Precio:</label>
          <input type="number" value={product.price} onChange={onChange} name="price" />
          {errors.price && <p className="error">{errors.price}</p>}
        </div>

        <div className="form-group">
          <label>Categoría:</label>
          <input type="text" value={product.category} onChange={onChange} name="category" />
          {errors.category && <p className="error">{errors.category}</p>}
        </div>

        <div className="form-group">
          <label>Tamaño:</label>
          <input type="text" value={product.size} onChange={onChange} name="size" />
          {errors.size && <p className="error">{errors.size}</p>}
        </div>

        <div className="form-group">
          <label>Descripción:</label>
          <textarea value={product.description} onChange={onChange} name="description" />
          {errors.description && <p className="error">{errors.description}</p>}
        </div>

        <div className="form-group">
          <label>Imagen:</label>
          <input type="file" accept="image/*" onChange={(e) => onFileChange(e.target.files[0] ?? null)} />
          {errors.file && <p className="error">{errors.file}</p>}
        </div>

        <button className="btn-submit" type="submit" disabled={loading}>
          {loading ? "Guardando..." : "Guardar producto"}
        </button>
      </form>
    </section>
  );
};

