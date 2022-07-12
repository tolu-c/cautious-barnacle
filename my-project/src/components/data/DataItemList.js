import DataItem from "./DataItem";

// TODO: To use when mapping props
const DataItemList = ({ receivedData }) => {

  return receivedData.books.map((book) => (
    <DataItem key={book.id} receivedData={book} />
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
