import { createContext } from "react";

const DataContext = createContext({
  books: [],
  genre: "",
  status: "",
});

export default DataContext;
