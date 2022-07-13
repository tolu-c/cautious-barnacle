import DataBox from "./components/data/DataBox";
import Header from "./components/Header";
import Layout from "./components/ui/Layout";
import DataContext from "./store/data-context";

export default function App() {
  return (
    <DataContext.Provider
      value={{
        books: [],
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
