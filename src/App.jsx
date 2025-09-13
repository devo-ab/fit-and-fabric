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
    <>
      <ProductContext.Provider value={{ state, dispatch }}>
        <Announcement></Announcement>
        <Header onSearch={handleSearch}></Header>
        <ProductBoard></ProductBoard>
        <Newsletter></Newsletter>
        <Footer></Footer>
      </ProductContext.Provider>
    </>
  );
}

export default App;
