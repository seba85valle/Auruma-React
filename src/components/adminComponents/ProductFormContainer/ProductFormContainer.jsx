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
  const [modal, setModal] = useState({ show: false, message: "", success: false });

  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    size: "",
    description: "",
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
      const productData = { ...product, price: Number(product.price), imageUrl };
      await createProduct(productData);

      setModal({
        show: true,
        message: "Producto creado con éxito",
        success: true,
      });

      setProduct({
        name: "",
        price: "",
        category: "",
        size: "",
        description: "",
      });
      setFile(null);
    } catch (error) {
      setModal({
        show: true,
        message: `Error: ${error.message}`,
        success: false,
      });
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => setModal({ show: false, message: "", success: false });

  return (
    <>
      <ProductFormUI
        product={product}
        errors={errors}
        loading={loading}
        onChange={handleChange}
        onFileChange={setFile}
        onSubmit={handleSubmit}
      />

      {modal.show && (
        <div className={`modal ${modal.success ? "modal-success" : "modal-error"}`}>
          <div className="modal-content">
            <p>{modal.message}</p>
            <button onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )}
    </>
  );
};

