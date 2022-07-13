const DataItem = ({ receivedData, numbering }) => {
  return (
    <div className="flex gap-x-8 w-full">
      <div className="basis-1/6 h-auto bg-green-400 border-2 border-gray-900 flex justify-center items-center text-lg font-bold font-sans text-gray-900">
        {numbering + 1}
      </div>
      <div className="basis-5/6 h-auto p-2 bg-teal-400 flex flex-col gap-y-2 flex-grow border-2 border-gray-900 justify-center uppercase font-sans">
        <span className="text-xs font-bold font-sans text-gray-600">{receivedData.created}</span>
        <p className="font-bold">{receivedData.name}</p>
        <div className="flex justify-between capitalize">
          <span>{receivedData.genre.name}</span> -
          <span>{receivedData.status.name}</span>
        </div>
      </div>
    </div>
  );
};

export default DataItem;
