import { useContext } from "react";
import Rating from "./Rating";
import { ProductContext } from "../context/context";

export default function ProductCard({ product, onAdded, onRemove }) {
  const { state } = useContext(ProductContext);

  const isInCart = state.addToCard.find((item) => item.id === product.id);
  const isOutOfStock = product.stock === 0;

  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <img src={product.image} alt={product.title} className="h-full w-auto object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-medium">{product.title}</h3>

        {/* rating start */}
        <div className="flex items-center justify-between">
          <div className="flex items-center my-1">
            <Rating value={product.rating}></Rating>
          </div>
          <span className="text-xs text-gray-700">({product.stock} pcs left)</span>
        </div>
        {/* rating end */}

        {/* price start */}
        <div>
          {product.offerPrice === null ? (
            <p className="font-bold">${product.price}</p>
          ) : (
            <div className="flex items-center">
              <p className="font-bold">${product.offerPrice}</p>
              <p className="text-gray-400 line-through ml-2">${product.price}</p>
            </div>
          )}
        </div>
        {/* price end */}

        {/* button start */}

        {isInCart ? (
          <button
            onClick={() => onRemove(product.id)}
            className="w-full mt-2 bg-red-800 py-1 text-gray-100 rounded flex items-center justify-center"
          >
            Remove from Cart
          </button>
        ) : isOutOfStock ? (
          <button
            disabled
            className="disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed w-full mt-2 bg-gray-800 py-1 text-gray-100 rounded flex items-center justify-center"
          >
            Add to Cart
          </button>
        ) : (
          <button
            onClick={() => onAdded(product)}
            className="w-full mt-2 bg-gray-800 py-1 text-gray-100 rounded flex items-center justify-center active:translate-y-1 transition-all active:bg-gray-900"
          >
            Add to Cart
          </button>
        )}
        {/* button start */}
      </div>
    </div>
  );
}
