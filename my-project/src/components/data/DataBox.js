import DataGroup from "./DataGroup";

const DataBox = () => {
  return (
    <div className="flex flex-col items-start gap-y-8">
      <DataGroup />
      <DataGroup />
      <DataGroup />
      <DataGroup />
    </div>
  );
};

export default DataBox;
