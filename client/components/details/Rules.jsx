import parse from "html-react-parser";

const Rules = ({ data }) => {
  return (
    <div className="shadow-sm border rounded-xl p-5 md:p-10 bg-white">
      {parse(data?.rules || "")}
    </div>
  );
};

export default Rules;
