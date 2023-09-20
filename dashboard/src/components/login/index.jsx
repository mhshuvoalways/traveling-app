import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import { MyContext } from "../../context/Context";

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [errMsg, setErrMsg] = useState("");
  const [btnClicked, setBtnClicked] = useState(false);

  const { isAuth, authHandler } = useContext(MyContext);

  const navigate = useNavigate();

  const onChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
    setErrMsg('')
  };

  const onSubmit = (event) => {
    const { email, password } = state;
    if (email && password) {
      setBtnClicked(true);
      event.preventDefault();
      axios
        .post("/user/login", state)
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          authHandler();
          setBtnClicked(false);
        })
        .catch((err) => {
          setErrMsg(err.response.data.message);
          setBtnClicked(false);
        });
    }
  };

  if (isAuth) {
    navigate("/");
  }

  return (
    <div className="h-screen flex">
      <div className="max-w-sm m-auto bg-white shadow rounded">
        <form className="shadow-md rounded-md text-left p-10">
          <label className="block">
            <span className="text-gray-700">EMAIL</span>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="p-2 my-1 placeholder-gray-400 text-gray-600 w-full bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring"
              name="email"
              onChange={onChange}
              value={state.email}
              required
            />
          </label>
          <label className="block">
            <span className="text-gray-700">PASSWORD</span>
            <input
              type="password"
              placeholder="Enter Your Password"
              className="p-2 my-1 placeholder-gray-400 text-gray-600 w-full bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring"
              name="password"
              onChange={onChange}
              value={state.password}
              required
            />
          </label>
          {!btnClicked ? (
            <button
              className="bg-indigo-900 text-white py-2 mt-5 w-full hover:bg-indigo-800"
              onClick={onSubmit}
            >
              LOGIN
            </button>
          ) : (
            <button
              className="bg-gray-600 cursor-not-allowed opacity-50 text-white py-2 mt-5 w-full"
              type="button"
            >
              LOGIN
            </button>
          )}
          {errMsg && <p className="text-center text-red-500 mt-2">{errMsg}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
