import "./ProductFormContainer.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductFormUI } from "./ProductFormUI";
import { validateProduct } from "../../utils/validateProduct";
import { uploadImage } from "../../services/uploadImage";
import { createProduct } from "../../services/productsServices";

export const ProductFormContainer = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [file, setFile] = useState(null);
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0] || null;
    setFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError({});
    setLoading(true);

    // Validaciones
    const newErrors = validateProduct({ ...product, file });
    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
      setLoading(false);
      return; // Si hay errores, no seguimos
    }
    // Subir imagen y crear producto
    try {
      const image = await uploadImage(file);

    //armado del producto completo con la URL de la imagen

      const productData = {
        ...product,
        price: Number(product.price),
        image,
      };

      const id = await createProduct(productData);

      // Reset
      setProduct({
        name: "",
        price: "",
        category: "",
        description: "",
      });
      setFile(null);

      navigate(`/success/${id}`, { replace: true });

    } catch (err) {
      setError({ general: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProductFormUI
      product={product}
      errors={error}
      loading={loading}
      onChange={handleChange}
      onFileChange={handleFileChange}
      onSubmit={handleSubmit}
    />
  );
};