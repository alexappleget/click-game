const Inventory = () => {
  return (
    <div className="border-2 border-black w-96 h-96 grid grid-cols-6 gap-1 p-2">
      {Array.from({ length: 36 }).map((_, index) => (
        <div key={index} className="w-full h-full border-2"></div>
      ))}
    </div>
  );
};

export default Inventory;
