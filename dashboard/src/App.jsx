import db from "../public/db";
import Dashboard from "./components/dashboard";
import Condo from "./components/condo";

const App = () => {
  return (
    <div className="bg-gray-50">
      <Dashboard>
        <Condo data={db}/>
      </Dashboard>
    </div>
  );
};

export default App;
