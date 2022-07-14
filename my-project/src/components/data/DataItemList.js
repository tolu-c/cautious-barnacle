import { useContext, useEffect } from "react";
import DataContext from "../../store/data-context";
import DataItem from "./DataItem";

const DataItemList = () => {
  const dataCtx = useContext(DataContext);

  console.log("From DataItemList:", dataCtx.books);

  useEffect(() => {
    console.log(dataCtx.books);
  }, [dataCtx])

  return dataCtx.books.map((book, index) => (
    <DataItem key={book.id} receivedData={book} numbering={index} />
  ));
};


export default DataItemList;
