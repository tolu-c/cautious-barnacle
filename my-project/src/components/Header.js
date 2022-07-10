import { Fragment } from "react";
import FilterBox from "./FilterBox";
import Search from "./Search";

const Header = () => {
  return (
    <Fragment>
      <Search />
      <FilterBox />
    </Fragment>
  );
};

export default Header;
