import { Fragment } from "react";
import FilterBox from "./FilterBox";
// import Search from "./Search";

const Header = ({ onStatusFilterValue, booksProps, onGenreFilterValue }) => {
  const filteredStatusHandler = (statusValue) => {
    onStatusFilterValue(statusValue);
  };

  const filteredGenreHandler = (genreValue) => {
    onGenreFilterValue(genreValue);
  };

  return (
    <Fragment>
      {/* <Search /> */}
      <FilterBox
        onAddStatusValue={filteredStatusHandler}
        onAddGenreValue={filteredGenreHandler}
        // onAddBookProps={booksProps}
      />
    </Fragment>
  );
};

export default Header;
