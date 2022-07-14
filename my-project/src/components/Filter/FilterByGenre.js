import { useContext, useState } from "react";
import DataContext from "../../store/data-context";

const FilterByGenre = ({ onAddGenre }) => {
  const dataCtx = useContext(DataContext);
  const [genre, setGenre] = useState(dataCtx.genre);

  const genreHandler = (event) => {
    event.preventDefault();
    setGenre(event.target.value);
    dataCtx.genre = event.target.value;
    onAddGenre(dataCtx.genre);
  };

  return (
    <div className="flex gap-x-4 w-full items-center">
      <label htmlFor="status" className="text-sm font-bold">
        Filter By Genre
      </label>
      <select name="status" id="status" onChange={genreHandler}>
        <option value="All">All</option>
        <option value="Action">Action</option>
        <option value="Drama">Drama</option>
        <option value="Comedy">Comedy</option>
        <option value="Horror">Horror</option>
        <option value="Sci-Fi">Sci-Fi</option>
        <option value="Mystery">Mystery</option>
      </select>
    </div>
  );
};

export default FilterByGenre;
