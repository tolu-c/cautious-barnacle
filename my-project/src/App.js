import { useContext, useEffect, useState } from 'react'
import DataBox from './components/data/DataBox'
import Header from './components/Header'
import Layout from './components/ui/Layout'
import DataContext from './store/data-context'
import { useQuery, gql } from '@apollo/client'

const booksQuery = gql`
  {
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
`

export default function App () {
  const dataCtx = useContext(DataContext)
  // const [books, setBooks] = useState([]);
  const { data, loading, error } = useQuery(booksQuery)

  // const filterFunction = useCallback((statusValue) => {
  //   // if (statusValue === "All") {
  //   //   setBooks(data.books);
  //   // } else if (statusValue === "Published") {
  //   //   setBooks(data.books.filter((book) => book.status.name === "Published"));
  //   // } else if (statusValue === "Not Published") {
  //   //   setBooks(
  //   //     data.books.filter((book) => book.status.name === "Not Published")
  //   //   );
  //   // }
  //   // console.log(statusValue);
  // }, [data.books]);

  // useEffect(() => {
  //   filterFunction('All');
  // }, [filterFunction])

  const [filterValue, setFilterValue] = useState('All')

  if (loading) return 'Loading...'
  if (error) return <pre>{error.message}</pre>

  const statusFilterHandler = filteredStatusValue => {
    dataCtx.status = filteredStatusValue
    console.log(dataCtx.status)
    setFilterValue(dataCtx.status)
  }
  const genreFilterHandler = genre => {
    dataCtx.genre = genre
    console.log(dataCtx.genre)
    setFilterValue(dataCtx.genre)
  }

  if (dataCtx.status === 'All' && dataCtx.genre === 'All') {
    dataCtx.books = data.books
  } else if (dataCtx.status === 'Published') {
    if (dataCtx.genre === 'Action') {
      dataCtx.books = data.books.filter(book => book.genre.name === 'Action')
    }

    dataCtx.books = data.books.filter(book => book.status.name === 'Published')
  } else if (dataCtx.status === 'Not Published') {
    dataCtx.books = data.books.filter(
      book => book.status.name === 'Not Published'
    )
  }

  const searchHandler = e => {
    console.log(e)
    if (e.length == 0) {
      setFilterValue('All')
    } else {
      setFilterValue(e)
    }
  }

  return (
    <DataContext.Provider
      value={{
        books: dataCtx.books,
        genre: '',
        status: ''
      }}
    >
      <Layout>
        <Header
          onStatusFilterValue={statusFilterHandler}
          onGenreFilterValue={genreFilterHandler}
          searchHandler={searchHandler}
          // booksProps={filterFunction}
        />
        <DataBox filterValue={filterValue} />
      </Layout>
    </DataContext.Provider>
  )
}
