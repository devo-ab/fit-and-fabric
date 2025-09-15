import { useContext } from "react";
import OrSummary from "../assets/svg/OrSummary";
import { ProductContext } from "../context/context";

export default function OrderSummary() {
  const { state } = useContext(ProductContext);

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
    <div className="mt-6">
      <h3 className="font-bold text-lg mb-4">Order Summary</h3>

      <div className="space-y-2 mb-4">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-medium">${subTotal}</span>
        </div>
        <div className="flex justify-between text-red-500">
          <span>Discount (-20%)</span>
          {state.addToCard.length === 0 ? <span>$0</span> : <span>-${discount}</span>}
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Delivery Fee</span>
          <span className="font-medium">$15</span>
        </div>
        <div className="flex justify-between font-bold text-lg pt-2 border-t border-gray-200">
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
            className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm"
          />
          <span className="absolute left-3 top-2.5">
            <OrSummary></OrSummary>
          </span>
        </div>
        <button className="bg-black text-white rounded-md px-4 py-2 text-sm">Apply</button>
      </div>
      {/* Promo Code */}

      {/* Checkout Button */}
      <a
        href="#"
        className="block bg-black text-white text-center py-3 rounded-md hover:bg-gray-800 transition-colors"
      >
        Go to Checkout
        <span className="inline-block ml-2">→</span>
      </a>
      {/* Checkout Button */}
    </div>
  );
}
