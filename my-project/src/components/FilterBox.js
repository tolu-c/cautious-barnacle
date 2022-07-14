import FilterByGenre from "./Filter/FilterByGenre";
import FilterByStatus from "./Filter/FilterByStatus";

const FilterBox = ({ onAddStatusValue, onAddBookProps, onAddGenreValue }) => {
  const statusHandler = (status) => {
    onAddStatusValue(status);
  };

  const addGenreHandler = (genre) => {
    onAddGenreValue(genre);
  };

  return (
    <div className="flex justify-between my-8">
      <FilterByStatus
        onAddStatus={statusHandler}
        // onAddBookProps={onAddBookProps}
      />

      <FilterByGenre onAddGenre={addGenreHandler} />
    </div>
  );
};

export default FilterBox;
