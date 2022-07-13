// import { gql, useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { request, gql } from "graphql-request";
import { useQuery } from "react-query";

const endpoint = "https://mock-book-api.herokuapp.com/api/";

const Search = () => {
  const [text, setText] = useState("");
  let searchQuery;

  useEffect(() => {
    searchQuery = gql`
    mutation {
      search(text: "${text}") {
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
  }, [text]);

  const response = useQuery("mutation", () => {
    return request(endpoint, searchQuery);
  });
  const { data, isLoading, error } = response;

  if (isLoading) return "Loading...";
  if (error) return console.log(error);

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
