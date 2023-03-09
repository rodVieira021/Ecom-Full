import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Partials/Nav.jsx";
import Main from "./Components/Pages/Main.jsx";
import Cart from "./Components/Pages/Cart.jsx";
import Checkout from "./Components/Pages/Checkout";
import ProductPage from "./Components/Partials/ProductPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/productpage" element={< ProductPage/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
