import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

export const MyContext = createContext(null);

const Context = ({ children }) => {
  const [isAuth, setIsAuth] = useState(true);

  const authHandler = () => {
    const token = localStorage.getItem("token");
    if (token) {
      var decoded = jwt_decode(token);
      var dateNow = new Date();
      if (decoded.exp * 1000 < dateNow.getTime()) {
        setIsAuth(false);
      } else {
        setIsAuth(true);
      }
    } else {
      setIsAuth(false);
    }
  };

  useEffect(() => {
    authHandler();
  }, []);

  return (
    <MyContext.Provider
      value={{
        isAuth,
        authHandler,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default Context;
