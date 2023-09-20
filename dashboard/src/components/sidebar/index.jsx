import { useState, useContext } from "react";
import { MyContext } from "../../context/Context";

const SidebarHeader = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const { authHandler } = useContext(MyContext);

  const logoutHandler = () => {
    localStorage.clear();
    authHandler();
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="bg-white shadow w-full">
        <div className="py-5 flex justify-between items-center px-10">
          <p className="text-xl font-semibold cursor-pointer">Traveling</p>
          <button className="text-2xl flex justify-end" onClick={toggleSidebar}>
            {isOpen ? "☰" : "✕"}
          </button>
        </div>
      </div>
      <div className="flex border-t">
        <div
          className={`bg-white h-screen transform transition-all duration-300 shadow-lg absolute md:static z-10 ${
            isOpen
              ? "translate-x-0 w-full sm:w-56"
              : "-translate-x-full w-0 opacity-0"
          }`}
        >
          <ul className="list-none my-10">
            <li>
              <p className="hover:text-blue-700 font-semibold hover:bg-gray-50 py-3 pl-10 cursor-pointer">
                Dashboard
              </p>
            </li>
            <li onClick={logoutHandler}>
              <p className="hover:text-blue-700 font-semibold hover:bg-gray-50 py-3 pl-10 cursor-pointer">
                Logout
              </p>
            </li>
          </ul>
        </div>
        <div className={`px-10 my-10 w-full`}>{children}</div>
      </div>
    </div>
  );
};

export default SidebarHeader;
