import { useContext } from "react";
import { useQuery, gql } from "@apollo/client";
import DataContext from "../../store/data-context";

const books = gql`
  {
    status(name: "Not Published") {
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

const NotPublished = () => {
  const dataCtx = useContext(DataContext);
  dataCtx.query = books;
  const { data } = useQuery(dataCtx.query);

  const notPublishHandler = (event) => {
    event.preventDefault();

    dataCtx.books = data.status;

    console.log(dataCtx.books);
  };
  return (
    <div className="cursor-pointer" onClick={notPublishHandler}>
      Not Published
    </div>
  );
};

export default NotPublished;
