
import DataItemList from "./DataItemList";

const DataGroup = ({ receivedData }) => {
  
  return (
    <div className="flex w-full flex-col items-start gap-y-4">
      <span className="uppercase flex justify-center items-center px-6 py-2 text-sm font-bold font-sans bg-blue-400 border-2 border-gray-900">
        date
      </span>
      <DataItemList receivedData={receivedData} />
    </div>
  );
};

export default DataGroup;
