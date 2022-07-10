const DataItem = () => {
  return (
    <div className="flex gap-x-8 w-full ">
      <div className="basis-1/6 h-12 bg-green-400 border-2 border-gray-900"></div>
      <div className="basis-5/6 h-12 bg-teal-400 flex-grow border-2 border-gray-900 flex items-center justify-center uppercase font-sans font-bold">
        data
      </div>
    </div>
  );
};

export default DataItem;
