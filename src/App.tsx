import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Category from "./pages/Category";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Success from "./pages/Success";
import TopDeal from "./pages/TopDeal";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:name" element={<Category />} />
        <Route path="/topdeal" element={<TopDeal />} />
        <Route path="/checkout">
          <Route index element={<Checkout />} />
          <Route path="success" element={<Success />} />
        </Route>
      </Routes>
    </Router>
  );
}
