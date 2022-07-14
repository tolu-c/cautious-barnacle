import { useState } from "react";

const Search = () => {
  const [text, setText] = useState("");

  // console.log(data);
  return (
    <input
      type="search"
      name="search"
      placeholder="Search"
      id="search"
      value={text}
      onChange={(e) => setText(e.target.value)}
      className="flex w-full form-input border-2 border-gray-800 placeholder:italic font-sans text-base text-gray-800 placeholder:text-gray-600"
    />
  );
};

export default Search;
