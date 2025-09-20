import { useContext } from "react";
import ProductCard from "./ProductCard";
import { ProductContext } from "../context/context";

export default function ProductList({ handleAddToCard, handleRemoveToCart }) {
  const { state } = useContext(ProductContext);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-lg">
      {state.allProducts.map((product) => (
        <ProductCard
          product={product}
          key={product.id}
          onAdded={handleAddToCard}
          onRemove={handleRemoveToCart}
        />
      ))}
    </div>
  );
}
