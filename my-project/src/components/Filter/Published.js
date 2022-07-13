import { useContext } from "react";
import { useQuery, gql } from "@apollo/client";
// import { request, gql } from "graphql-request";
// import { useQuery } from "react-query";
import DataContext from "../../store/data-context";

// const endpoint = "https://mock-book-api.herokuapp.com/api/";

const books = gql`
  {
    status(name: "Published") {
      books {
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
  }
`;

const Published = () => {
  const dataCtx = useContext(DataContext);
  dataCtx.query = books;
  const { data } = useQuery(dataCtx.query);

  // const dataCtx = useContext(DataContext);
  // const { data, isLoading, error } = useQuery("query", () => {
  //   return request(endpoint, books);
  // });
  // if (isLoading) return "Loading...";
  // if (error) return <pre>{error.message}</pre>;

  const publishHandler = (event) => {
    event.preventDefault();

    dataCtx.books = data.status;

    console.log(dataCtx.books);
  };
  return (
    <div className="cursor-pointer" onClick={publishHandler}>
      Published
    </div>
  );
};

export default Published;
