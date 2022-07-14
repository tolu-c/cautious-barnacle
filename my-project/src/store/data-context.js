import { createContext } from "react";

const DataContext = createContext({
  books: [],
  genre: "",
  status: "All",
});

export default DataContext;
