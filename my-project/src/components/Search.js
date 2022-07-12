import { gql, useMutation } from "@apollo/client";
import { useEffect, useState } from "react";


const Search = () => {
  const [text, setText] = useState("Book");

  const searchQuery = gql`
    mutation {
      search(text: ${text}) {
        id
        name
        genre {
          name
        }
        status {
          name
        }
        created
      }
    }
  `;

  useEffect(() => {
    console.log(text);
  }, [text]);

  const { data, loading, error } = useMutation(searchQuery);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;

  console.log(data);
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
