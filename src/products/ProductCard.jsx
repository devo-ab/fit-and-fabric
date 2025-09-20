import { useContext } from "react";
import Rating from "./Rating";
import { ProductContext } from "../context/context";

export default function ProductCard({ product, onAdded, onRemove }) {
  const { state } = useContext(ProductContext);

  const isInCart = state.addToCard.find((item) => item.id === product.id);
  const isOutOfStock = product.stock === 0;

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300 shadow-md">
      {/* Product Image */}
      <div className="h-48 bg-gray-800 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-auto object-cover rounded"
        />
      </div>

      {/* Product Details */}
      <div className="p-4">
        <h3 className="font-medium text-white">{product.title}</h3>

        {/* Rating */}
        <div className="flex items-center justify-between my-1">
          <div className="flex items-center">
            <Rating value={product.rating}></Rating>
          </div>
          <span className="text-xs text-gray-400">({product.stock} pcs left)</span>
        </div>

        {/* Price */}
        <div>
          {product.offerPrice === null ? (
            <p className="font-bold text-white">${product.price}</p>
          ) : (
            <div className="flex items-center">
              <p className="font-bold text-white">${product.offerPrice}</p>
              <p className="text-gray-500 line-through ml-2">${product.price}</p>
            </div>
          )}
        </div>

        {/* Buttons */}
        {isInCart ? (
          <button
            onClick={() => onRemove(product.id)}
            className="w-full mt-2 bg-red-800 py-1 text-white rounded flex items-center justify-center hover:bg-red-700 transition-colors"
          >
            Remove from Cart
          </button>
        ) : isOutOfStock ? (
          <button
            disabled
            className="disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed w-full mt-2 bg-gray-800 py-1 text-white rounded flex items-center justify-center"
          >
            Add to Cart
          </button>
        ) : (
          <button
            onClick={() => onAdded(product)}
            className="w-full mt-2 bg-green-500 py-1 text-white rounded flex items-center justify-center hover:bg-green-600 active:translate-y-1 transition-all"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}
