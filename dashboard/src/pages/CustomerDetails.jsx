import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context/Context";
import Dashboard from "../components/sidebar";
import Customers from "../components/customers/Details";

const Home = () => {
  const { isAuth } = useContext(MyContext);
  const navigate = useNavigate();

  if (!isAuth) {
    navigate("/login");
  }

  return (
    <Dashboard>
      <Customers />
    </Dashboard>
  );
};

export default Home;
