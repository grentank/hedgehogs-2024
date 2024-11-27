import { useState } from "react";
import ProductCard from "../ui/ProductCard";
import ProductForm from "../ui/ProductForm";
import initProducts from "../../assets/products";

export default function ShopPage() {
  const [products, setProducts] = useState(initProducts);
  const deleteHandler = (productId) => {
    setProducts((prev) => prev.filter((product) => product.id !== productId));
  };
  const addHandler = (formData) => {
    const newProduct = {
      ...formData,
      id: Math.random().toString(16),
      images: [formData.image],
    };
    setProducts((prev) => [newProduct, ...prev]);
  };
  return (
    <>
      <div className="row">
        <div className="col-12">
          <ProductForm addHandler={addHandler} />
        </div>
      </div>
      <div className="row">
        {products.map((product) => (
          <div className="col-4" key={product.id}>
            <ProductCard deleteHandler={deleteHandler} product={product} />
          </div>
        ))}
      </div>
    </>
  );
}
