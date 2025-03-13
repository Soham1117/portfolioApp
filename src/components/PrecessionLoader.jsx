const Loader = () => {
  return (
    <div className="loader relative w-[25px] h-[50px] grid text-white">
      <div className="before absolute inset-0" />
      <div className="after absolute inset-0" />
    </div>
  );
};

export default Loader;
