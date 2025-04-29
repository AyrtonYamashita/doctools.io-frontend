import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Recovery from "./pages/Recovery/Recovery";
import Register from "./pages/Register/Register";
import Extract from "./pages/Extract/Extract";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/recovery" element={<Recovery />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/extract" element={<Extract />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
