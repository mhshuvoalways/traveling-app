import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context/Context";
import db from "../../public/db";
import Dashboard from "../components/sidebar";
import Customers from "../components/customers";

const Home = () => {
  const { isAuth } = useContext(MyContext);
  const navigate = useNavigate();

  if (!isAuth) {
    navigate("/login");
  }

  return (
    <Dashboard>
      <Customers data={db} />
    </Dashboard>
  );
};

export default Home;
