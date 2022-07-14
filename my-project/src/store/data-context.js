import { createContext } from "react";

const DataContext = createContext({
  books: [],
  genre: "All",
  status: "All",
});

export default DataContext;
