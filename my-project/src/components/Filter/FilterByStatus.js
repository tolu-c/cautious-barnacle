import { useContext, useState } from "react";
import DataContext from "../../store/data-context";

const FilterByStatus = ({ onAddStatus, onAddBookProps }) => {
  const dataCtx = useContext(DataContext);
  const [status, setStatus] = useState(dataCtx.status);

  const statusHandler = (event) => {
    event.preventDefault();
    setStatus(event.target.value);
    dataCtx.status = event.target.value;
    onAddStatus(dataCtx.status);
    // onAddBookProps(event.target.value);
  };

  return (
    <div className="flex gap-x-4 w-full items-center">
      <label htmlFor="status" className="text-sm font-bold">
        Filter By Status
      </label>
      <select
        name="status"
        id="status"
        onChange={statusHandler}
        className="capitalize"
      >
        <option value="All">All</option>
        <option value="Published">published</option>
        <option value="Not Published">not published</option>
      </select>
    </div>
  );
};

export default FilterByStatus;
