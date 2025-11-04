export const validateProducts = (product, fileRequired = true) => {
  const errors = {};

  if (!product.name.trim()) errors.name = "Por favor, ingresá el nombre del producto.";
  if (!product.price || product.price <= 0) errors.price = "El precio debe ser mayor a 0.";
  if (!product.category.trim()) errors.category = "Seleccioná una categoría.";
  if (!product.size.trim()) errors.size = "Indicá el tamaño del producto.";
  if (!product.description.trim()) errors.description = "Agregá una descripción.";
  if (fileRequired && !product.file) errors.file = "Debés subir una imagen del producto.";

  return errors;
};

