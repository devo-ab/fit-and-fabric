import { useReducer } from "react";
import Announcement from "./components/Announcement";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Newsletter from "./components/Newsletter";
import ProductBoard from "./components/ProductBoard";
import { ProductContext } from "./context/context";
import { initialState, reducer } from "./reducer/ProductReducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSearch = (text) => {
    dispatch({ type: "SEARCH_PRODUCTS", payload: text });
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 min-h-screen">
      <ProductContext.Provider value={{ state, dispatch }}>
        <Announcement />
        <Header onSearch={handleSearch} />
        <ProductBoard />
        <Newsletter />
        <Footer />
      </ProductContext.Provider>
    </div>
  );
}

export default App;
