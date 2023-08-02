const Rools = ({ data }) => {
  return (
    <div className="shadow-sm border rounded-xl p-5 md:p-10 bg-white">
      <p className="text-3xl text-gray-800 font-semibold mb-2">Rules</p>
      <p>{`Please don't break our rules`}</p>
      <div className="mt-5 space-y-2">
        <div className="flex items-center gap-2">
          <i className="fa-solid fa-check text-green-600"></i>
          <p>Children welcome</p>
        </div>
        <div className="flex items-center gap-2">
          {data?.id === 2 ? (
            <>
              <p className="text-secondary font-semibold">✕</p>
              <p>Not pet friendly</p>
            </>
          ) : (
            <>
              <i className="fa-solid fa-check text-green-600"></i>
              <p>Pet friendly</p>
            </>
          )}
        </div>
        <div className="flex items-center gap-2">
          <i className="fa-solid fa-check text-green-600"></i>
          <p>Credit cards accepted</p>
        </div>
        <div className="flex items-center gap-2">
          <i className="fa-solid fa-check text-green-600"></i>
          <p>50% due at time of booking</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-secondary font-semibold">✕</p>
          <p>Smoking not allowed</p>
        </div>
      </div>
    </div>
  );
};

export default Rools;
