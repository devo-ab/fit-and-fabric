import { useContext, useState } from "react";
import OrSummary from "../assets/svg/OrSummary";
import { ProductContext } from "../context/context";

export default function OrderSummary() {
  const { state } = useContext(ProductContext);
  const [isOpen, setIsOpen] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  //   calculation start
  const subTotal = state.addToCard.reduce((total, item) => {
    const price = item.offerPrice ?? item.price;
    return total + price * item.quantity;
  }, 0);

  const discountRate = 0.2;
  const discount = subTotal * discountRate;

  const deliveryFee = 15;

  const total = subTotal - discount + deliveryFee;
  //   calculation start

  return (
    <div className="mt-6 bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-lg p-6 text-white shadow-lg">
      <h3 className="font-bold text-lg mb-4 text-white">Order Summary</h3>

      {/* Order Details */}
      <div className="space-y-2 mb-4">
        <div className="flex justify-between">
          <span className="text-gray-400">Subtotal</span>
          <span className="font-medium">${subTotal}</span>
        </div>

        {/* Discount */}
        <div className="flex justify-between font-semibold">
          <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 bg-clip-text text-transparent">
            Discount (-20%)
          </span>
          <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 bg-clip-text text-transparent">
            {state.addToCard.length === 0 ? "$0" : `-${discount}`}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Delivery Fee</span>
          <span className="font-medium">$15</span>
        </div>

        <div className="flex justify-between font-bold text-lg pt-2 border-t border-gray-700">
          <span>Total</span>
          {state.addToCard.length === 0 ? <span>$15</span> : <span>${total}</span>}
        </div>
      </div>

      {/* Promo Code */}
      <div className="flex items-center space-x-2 mb-6">
        <div className="flex-grow relative">
          <input
            type="text"
            placeholder="Add promo code"
            className="w-full bg-gray-800 text-white placeholder-gray-400 border border-gray-700 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <button className="bg-green-500 hover:bg-green-600 text-white rounded-md px-4 py-2 text-sm transition-colors">
          Apply
        </button>
      </div>

      {/* Checkout Button */}
      <div>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(true);
          }}
          className="block bg-green-500 hover:bg-green-600 text-white text-center py-3 rounded-md transition-colors font-medium"
        >
          Go to Checkout
          <span className="inline-block ml-2">→</span>
        </a>

        {/* Modal */}
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 p-6 rounded-lg shadow-lg max-w-sm w-full text-white">
              <h2 className="text-xl font-bold mb-4">Checkout</h2>
              <p className="mb-4">Are you sure you want to proceed?</p>

              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 bg-gray-700 rounded-md hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setOrderPlaced(true);
                  }}
                  className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Success Message */}
        {orderPlaced && (
          <div className="mt-4 p-4 rounded-md bg-green-600 text-white text-center font-medium">
            Order placed successfully!
          </div>
        )}
      </div>
    </div>

  );
}
