import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./views/test";
import Home from "./views/home";
import Profile from "./views/profile";
import Login from "./views/login";
import Cart from "./views/cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
