import { useContext } from "react";
import ProductCard from "./ProductCard";
import { ProductContext } from "../context/context";

export default function ProductList({ handleAddToCard, handleRemoveToCart }) {
  const { state } = useContext(ProductContext);

  return (
    <div className="product-grid">
      {state.allProducts.map((product) => (
        <ProductCard
          product={product}
          key={product.id}
          onAdded={handleAddToCard}
          onRemove={handleRemoveToCart}
        ></ProductCard>
      ))}
    </div>
  );
}
