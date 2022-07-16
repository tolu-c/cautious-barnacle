import DataGroup from "./DataGroup";
// import { gql, useQuery } from "@apollo/client";


const DataBox = ({filterValue}) => {

  return (
    <div className="flex flex-col items-start gap-y-8">
      <DataGroup filterValue={filterValue} />
    </div>
  );
};

export default DataBox;
