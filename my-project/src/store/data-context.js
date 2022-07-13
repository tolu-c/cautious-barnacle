import { createContext } from "react";

const DataContext = createContext({
  books: [],
  query: ``,
  genre: "",
  status: "",
});

export default DataContext;
