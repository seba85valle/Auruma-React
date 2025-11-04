import { useState } from "react";
import { ProductFormUI } from "../ProductFormUI/ProductFormUI";
import { validateProducts } from "../../../utils/validateProducts";
import { uploadToImgbb } from "../../../services/uploadImage";
import { createProduct } from "../../../services/products";
import "../ProductFormContainer/ProductFormContainer.css";

export const ProductFormContainer = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [file, setFile] = useState(null);
  const [successModal, setSuccessModal] = useState(false);

  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    size: "",
    description: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    const newErrors = validateProducts({ ...product, file });
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    try {
      const imageUrl = await uploadToImgbb(file);

      const productData = {
        ...product,
        price: Number(product.price),
        imageUrl
      };

      await createProduct(productData);

      setSuccessModal(true);

      setProduct({
        name: "",
        price: "",
        category: "",
        size: "",
        description: ""
      });
      setFile(null);
    } catch (error) {
      setErrors({ general: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="admin-form-section">
      <ProductFormUI
        product={product}
        errors={errors}
        loading={loading}
        onChange={handleChange}
        onFileChange={setFile}
        onSubmit={handleSubmit}
      />

      {successModal && (
        <div className="modal-overlay" onClick={() => setSuccessModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>✨ Producto creado con éxito</h3>
            <p>El producto fue guardado correctamente en la base de datos.</p>
            <button onClick={() => setSuccessModal(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </section>
  );
};

