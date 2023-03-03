import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Success from "./pages/Success";
import Test from "./pages/Test";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout">
          <Route index element={<Checkout />} />
          <Route path="success" element={<Success />} />
        </Route>
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  );
}
