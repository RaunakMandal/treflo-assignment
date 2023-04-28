import { BrowserRouter, Route, Routes } from "react-router-dom";
import Base from "./components/core/Base";
import Home from "./components/core/Home";
import Cart from "./components/core/Cart";

const App = () => {
  return (
    <BrowserRouter>
      <Base>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Base>
    </BrowserRouter>
  );
};

export default App;
