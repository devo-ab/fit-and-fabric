import { getAllProducts } from "../data/product";

const products = getAllProducts();
const initialState = {
  allProducts: products,
  addToCard: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "SEARCH_PRODUCTS": {
      const searchText = action.payload.toLowerCase();

      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(searchText)
      );

      return {
        ...state,
        allProducts: filtered,
      };
    }

    case "ADD_TO_CART": {
      const product = action.payload;
      const alreadyInCart = state.addToCard.find((item) => item.id === product.id);

      if (alreadyInCart || product.stock <= 0) return state;

      const updatedCart = [...state.addToCard, { ...product, quantity: 1 }];
      const updatedProducts = state.allProducts.map((item) =>
        item.id === product.id ? { ...item, stock: item.stock - 1 } : item
      );

      return {
        ...state,
        addToCard: updatedCart,
        allProducts: updatedProducts,
      };
    }

    case "REMOVE_FROM_CART": {
      const productId = action.payload;
      const productInCart = state.addToCard.find((item) => item.id === productId);
      if (!productInCart) return state;

      const updatedCart = state.addToCard.filter((item) => item.id !== productId);
      const updatedProducts = state.allProducts.map((item) =>
        item.id === productId ? { ...item, stock: item.stock + productInCart.quantity } : item
      );

      return {
        ...state,
        addToCard: updatedCart,
        allProducts: updatedProducts,
      };
    }

    case "INCREMENT_QUANTITY": {
      const productId = action.payload;
      const productInStock = state.allProducts.find((p) => p.id === productId);
      if (!productInStock || productInStock.stock <= 0) return state;

      const updatedCart = state.addToCard.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      );

      const updatedProducts = state.allProducts.map((item) =>
        item.id === productId ? { ...item, stock: item.stock - 1 } : item
      );

      return {
        ...state,
        addToCard: updatedCart,
        allProducts: updatedProducts,
      };
    }

    case "DECREMENT_QUANTITY": {
      const productId = action.payload;
      const productInCart = state.addToCard.find((item) => item.id === productId);
      if (!productInCart || productInCart.quantity <= 1) return state;

      const updatedCart = state.addToCard.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      );

      const updatedProducts = state.allProducts.map((item) =>
        item.id === productId ? { ...item, stock: item.stock + 1 } : item
      );

      return {
        ...state,
        addToCard: updatedCart,
        allProducts: updatedProducts,
      };
    }

//     case "SORT_PRODUCTS": {
//       const sortType = action.payload;

//       const sorters = {
//         mostPopular: (a, b) => b.rating - a.rating,
//         newest: (a, b) => new Date(b.date) - new Date(a.date),
//         lowToHigh: (a, b) => (a.offerPrice ?? a.price) - (b.offerPrice ?? b.price),
//         highToLow: (a, b) => (b.offerPrice ?? b.price) - (a.offerPrice ?? a.price),
//       };

//       const sorter = sorters[sortType];
//       if (!sorter) return state;

//       const sortedProducts = [...state.allProducts].sort(sorter);

//       return {
//         ...state,
//         allProducts: sortedProducts,
//       };
//     }

//     default:
//       return state;
//   }
// }

export { initialState, reducer };
