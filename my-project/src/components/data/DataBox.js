import DataGroup from "./DataGroup";
import { gql, useQuery } from "@apollo/client";

const statusQuery = gql`
  {
    books {
      id
      name
      genre {
        name
      }
      status {
        name
      }
      created
    }
  }
`;

const DataBox = () => {
  const { data, loading, error } = useQuery(statusQuery);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;

  return (
    <div className="flex flex-col items-start gap-y-8">
      <DataGroup receivedData={data} />
    </div>
  );
};

export default DataBox;
