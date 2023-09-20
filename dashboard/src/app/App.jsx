import Router from "./Router";
import Context from "../context/Context";

const App = () => {
  return (
    <div className="bg-gray-50">
      <Context>
        <Router />;
      </Context>
    </div>
  );
};

export default App;
