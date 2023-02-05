import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" >
          <Route index element={<Checkout />}/>
          <Route path="success" element={<Success />}/>
        </Route>
      </Routes>
    </Router>
  );
}
