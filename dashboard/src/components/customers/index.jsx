import { Link } from "react-router-dom";

const Index = ({ data }) => {
  return (
    <div>
      {data.map((res) => (
        <Link to={`/customers/${res.id}`} key={res.id}>
          <div className="bg-white p-5 shadow rounded mt-5 flex gap-5 flex-wrap">
            <p>{res.id}</p>
            <p>{res.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Index;
