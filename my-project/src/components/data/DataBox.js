import DataGroup from "./DataGroup";
import { gql, useQuery } from "@apollo/client";

const statusQuery = gql`
  {
    status(id: 1) {
      name
      books {
        id
        name
        created
      }
    }
  }
`;

const DataBox = () => {
  const { data, loading, error } = useQuery(statusQuery);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;

  console.log(data);

  return (
    <div className="flex flex-col items-start gap-y-8">
      {data.status.books.map((book) => (
        <div key={book.id}>
          <p>{book.name}</p>
          <span>Created: {book.created}</span>
        </div>
      ))}
      <DataGroup />
      <DataGroup />
      <DataGroup />
      <DataGroup />
    </div>
  );
};

export default DataBox;
