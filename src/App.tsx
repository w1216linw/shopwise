import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Category from "./pages/Category";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import ItemDetail from "./pages/ItemDetail";
import NotFound from "./pages/NotFound";
import Success from "./pages/Success";
import TopDeal from "./pages/TopDeal";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path=":id" element={<ItemDetail />} />
          <Route path="category/:name" element={<Category />} />
          <Route path="topdeal" element={<TopDeal />} />
        </Route>
        <Route path="/checkout">
          <Route index element={<Checkout />} />
          <Route path="success" element={<Success />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
