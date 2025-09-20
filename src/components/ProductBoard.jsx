import { useContext } from "react";
import CartItem from "../products/CartItem";
import OrderSummary from "../products/OrderSummary";
import ProductBar from "../products/ProductBar";
import ProductList from "../products/ProductList";
import Header from "./Header";
import { ProductContext } from "../context/context";

export default function ProductBoard() {
  const { state, dispatch } = useContext(ProductContext);
  // const { state, dispatch } = useContext(CartContext);

  //   add cart
  const handleAddToCard = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
  //   add cart

  //   remove cart
  const handleRemoveToCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };
  //   remove cart

  //   add quantity
  const handleAddQuantity = (id) => {
    dispatch({ type: "INCREMENT_QUANTITY", payload: id });
  };
  //   add quantity

  //   remove quantity
  const handleRemoveQuantity = (id) => {
    dispatch({ type: "DECREMENT_QUANTITY", payload: id });
  };
  //   remove quantity

  // sorting product
  const handleSorting = (sortType) => {
    dispatch({ type: "SORT_PRODUCTS", payload: sortType });
  };
  // sorting product

  return (
    <div className="container mx-auto px-4 md:px-8 py-8">
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
    <div className="lg:col-span-2">
      <ProductBar onSort={handleSorting}></ProductBar>

      {state.allProducts.length === 0 ? (
        <p className="text-red-600 text-4xl text-center flex items-center mx-auto">
          Not Found
        </p>
      ) : (
        <ProductList
          handleAddToCard={handleAddToCard}
          handleRemoveToCart={handleRemoveToCart}
        ></ProductList>
      )}
    </div>

    {/* Cart Section */}
    <div className="lg:col-span-1">
      <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-lg p-6 border border-gray-800 shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-white">YOUR CART</h2>

        {/* Cart Item */}
        <CartItem
          OnAddQuantity={handleAddQuantity}
          onRemoveQuantity={handleRemoveQuantity}
          onRemoveCart={handleRemoveToCart}
        ></CartItem>

        {/* Order Summary */}
        <OrderSummary></OrderSummary>
      </div>
    </div>
  </div>
</div>

  );
}
