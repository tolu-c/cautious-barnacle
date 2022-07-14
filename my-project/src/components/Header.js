import { Fragment } from "react";
import FilterBox from "./FilterBox";
// import Search from "./Search";

const Header = ({ onStatusFilterValue, booksProps }) => {
  const filteredStatusHandler = (statusValue) => {
    onStatusFilterValue(statusValue);
  };

  return (
    <Fragment>
      {/* <Search /> */}
      <FilterBox onAddStatusValue={filteredStatusHandler} onAddBookProps={booksProps} />
    </Fragment>
  );
};

export default Header;
