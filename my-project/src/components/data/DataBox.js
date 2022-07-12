import DataGroup from "./DataGroup";
// import { gql, useQuery } from "@apollo/client";
import { request, gql } from "graphql-request";
import { useQuery } from "react-query";

const endpoint = "https://mock-book-api.herokuapp.com/api/";
const books = gql`
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
  const { data, isLoading, error } = useQuery("query",() => {
    return request(endpoint, books);
  });

  if (isLoading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;

  return (
    <div className="flex flex-col items-start gap-y-8">
      <DataGroup receivedData={data} />
    </div>
  );
};

export default DataBox;
