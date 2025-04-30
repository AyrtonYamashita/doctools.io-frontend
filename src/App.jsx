import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Recovery from "./pages/Recovery/Recovery";
import Register from "./pages/Register/Register";
import Extract from "./pages/Extract/Extract";

function AnimateRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/recovery" element={<Recovery />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/extract" element={<Extract />}></Route>
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AnimateRoutes />
    </BrowserRouter>
  );
}

export default App;
