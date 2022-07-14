import { useContext, useEffect, useState } from "react";
import DataBox from "./components/data/DataBox";
import Header from "./components/Header";
import Layout from "./components/ui/Layout";
import DataContext from "./store/data-context";
import { useQuery, gql } from "@apollo/client";

const booksQuery = gql`
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

export default function App() {
  const dataCtx = useContext(DataContext);
  dataCtx.query = booksQuery;
  const { data, loading, error } = useQuery(dataCtx.query);

  console.log(dataCtx);

  const [books, setBooks] = useState([]);

  const filterFunction = (statusValue) => {
    if (statusValue === "All") {
      setBooks(data.books);
    } else if (statusValue === "Published") {
      setBooks(data.books.filter((book) => book.status.name === "Published"));
    } else if (statusValue === "Not Published") {
      setBooks(
        data.books.filter((book) => book.status.name === "Not Published")
      );
    }
    console.log(statusValue);
  };

  // useEffect(() => {
  //   filterFunction("All");
  // }, [filterFunction]);


  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;

  const statusFilterHandler = (filteredStatusValue) => {
    dataCtx.status = filteredStatusValue;
  };

  // if (dataCtx.status === "All") {
  //   dataCtx.books = data.books;
  // } else if (dataCtx.status === "Published") {
  //   dataCtx.books = data.books.filter(
  //     (book) => book.status.name === "Published"
  //   );
  // } else if (dataCtx.status === "Not Published") {
  //   dataCtx.books = data.books.filter(
  //     (book) => book.status.name === "Not Published"
  //   );
  // }

  console.log(dataCtx.books);
  console.log(dataCtx.status);

  return (
    <DataContext.Provider
      value={{
        books: books,
        query: ``,
        genre: "",
        status: "",
      }}
    >
      <Layout>
        <Header
          onStatusFilterValue={statusFilterHandler}
          booksProps={filterFunction}
        />
        <DataBox />
      </Layout>
    </DataContext.Provider>
  );
}
