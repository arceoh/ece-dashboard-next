const loading = () => {
  const schoolsCount = 24;
  const schoolsArray = Array.from(Array(schoolsCount).keys());
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 pt-4">
      <h1>Settings</h1>
      <div>
        <div className="sm:grid sm:grid-cols-2 sm:gap-x-28 lg:grid-cols-3">
          {schoolsArray.map((school) => (
            <div
              key={school}
              className="animate-pulse w-full h-4 bg-base-200 my-3 rounded-sm"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default loading;
