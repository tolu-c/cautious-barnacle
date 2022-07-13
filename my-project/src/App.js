import { useState } from "react";
import DataBox from "./components/data/DataBox";
import Header from "./components/Header";
import Layout from "./components/ui/Layout";
import DataContext from "./store/data-context";

export default function App() {
  const [books, setBooks] = useState([]);
  console.log(`From App: ${JSON.stringify(books)}`);

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
        <Header />
        <DataBox />
      </Layout>
    </DataContext.Provider>
  );
}
