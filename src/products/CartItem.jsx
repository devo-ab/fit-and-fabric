import { useContext } from "react";
import { ProductContext } from "../context/context";

export default function CartItem({ OnAddQuantity, onRemoveQuantity, onRemoveCart }) {
  const { state } = useContext(ProductContext);

  return (
    <div>
      {state.addToCard.length === 0 ? (
        <p className="text-2xl text-gray-300 text-center mt-8">
          Your cart is empty, please add a product
        </p>
      ) : (
        <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-lg p-4">
          {state.addToCard.map((item) => (
            <div
              key={item.id}
              className="flex items-start space-x-4 pb-4 border-b border-gray-800 mb-4"
            >
              {/* Product Image */}
              <div className="w-16 h-16 bg-gray-800 rounded flex-shrink-0 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-auto object-cover rounded"
                />
              </div>

              {/* Product Details */}
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium text-white">{item.title}</h3>
                  <button
                    onClick={() => onRemoveCart(item.id)}
                    className="text-red-500 text-lg hover:text-red-400 transition"
                  >
                    ×
                  </button>
                </div>

                <p className="text-sm text-gray-400">Size: Large</p>
                <p className="text-sm text-gray-400">Color: White</p>

                <div className="flex justify-between items-center mt-2">
                  <p className="font-bold text-white">
                    ${item.offerPrice === null ? item.price : item.offerPrice}
                  </p>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => onRemoveQuantity(item.id)}
                      className="w-6 h-6 bg-gray-800 rounded flex items-center justify-center hover:bg-gray-700 transition"
                    >
                      −
                    </button>
                    <span className="text-sm text-white">{item.quantity}</span>
                    <button
                      onClick={() => OnAddQuantity(item.id)}
                      className="w-6 h-6 bg-gray-800 rounded flex items-center justify-center hover:bg-gray-700 transition"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
