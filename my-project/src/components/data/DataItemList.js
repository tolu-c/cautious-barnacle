import { useContext } from "react";
import { useQuery, gql } from "@apollo/client";
// import { request, gql } from "graphql-request";
// import { useQuery } from "react-query";
import DataContext from "../../store/data-context";
import DataItem from "./DataItem";

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
const DataItemList = () => {
  const dataCtx = useContext(DataContext);
  dataCtx.query = books;
  const { data, loading, error } = useQuery(dataCtx.query);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;

  dataCtx.books = data.books;

  // console.log(dataCtx.books);

  return dataCtx.books.map((book, index) => (
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
