import { useContext } from "react";
import { request, gql } from "graphql-request";
import { useQuery } from "react-query";
import DataContext from "../../store/data-context";
import DataItem from "./DataItem";

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
const DataItemList = ({ receivedData }) => {
  const dataCtx = useContext(DataContext);
  const { data, isLoading, error } = useQuery("query", () => {
    return request(endpoint, books);
  });

  if (isLoading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;

  dataCtx.books = data
  // console.log(dataCtx.books);


  return dataCtx.books.books.map((book, index) => (
    <DataItem key={book.id} receivedData={book} numbering={index} />
  ));
};

export default DataItemList;

// import React, { Fragment } from "react";

// const DataItemList = () => {
//   return (
//     <Fragment>
//       <DataItem />
//       <DataItem />
//       <DataItem />
//       <DataItem />
//     </Fragment>
//   );
// };

// export default DataItemList;
