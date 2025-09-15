import { useContext } from "react";
import { ProductContext } from "../context/context";

export default function CartItem({ OnAddQuantity, onRemoveQuantity, onRemoveCart }) {
  const { state } = useContext(ProductContext);

  return (
    <div>
      {state.addToCard.length === 0 ? (
        <p className="text-2xl">Your cart is empty, please add a product</p>
      ) : (
        <div>
          {state.addToCard.map((item) => (
            <div
              key={item.id}
              className="flex items-start space-x-4 pb-4 border-b border-gray-200 mb-4"
            >
              <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center">
                <img src={item.image} alt={item.title} className="h-full w-auto object-cover" />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between">
                  <h3 className="font-medium">{item.title}</h3>
                  <button onClick={() => onRemoveCart(item.id)} className="text-red-500 text-md">
                    ×
                  </button>
                </div>
                <p className="text-sm text-gray-500">Size: Large</p>
                <p className="text-sm text-gray-500">Color: White</p>
                <div className="flex justify-between items-center mt-2">
                  {item.offerPrice === null ? (
                    <p className="font-bold">${item.price}</p>
                  ) : (
                    <p className="font-bold">${item.offerPrice}</p>
                  )}
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => onRemoveQuantity(item.id)}
                      className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center"
                    >
                      −
                    </button>
                    <span className="text-sm">{item.quantity}</span>
                    <button
                      onClick={() => OnAddQuantity(item.id)}
                      className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center"
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
