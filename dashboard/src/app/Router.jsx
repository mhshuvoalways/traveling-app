import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Condos from "../pages/Condos";
import Login from "../components/login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/condos" element={<Condos />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
