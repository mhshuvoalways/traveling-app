import { useEffect, useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MyContext } from "../../context/context";

const Tostify = () => {
  const { tostify } = useContext(MyContext);

  useEffect(() => {
    if (tostify) {
      toast(tostify, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }, [tostify]);

  return (
    <div>
      <ToastContainer />
    </div>
  );
};

export default Tostify;
