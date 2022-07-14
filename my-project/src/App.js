import { useContext } from "react";
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

  // const [books, setBooks] = useState([]);

  const { data, loading, error } = useQuery(dataCtx.query);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;

  // useEffect(()=> {
  //   dataCtx.books = data.books;
  //   setBooks(dataCtx.books);
  // }, [dataCtx, dataCtx.books, data.books]);

  dataCtx.books = data.books;
  console.log(dataCtx.books);

  return (
    <DataContext.Provider
      value={{
        books: dataCtx.books,
        query: ``,
        genre: "",
        status: "",
      }}
    >
      <Layout>
        <Header />
        <DataBox />
      </Layout>
    </DataContext.Provider>
  );
}
