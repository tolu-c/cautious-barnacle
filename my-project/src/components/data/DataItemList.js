import { useContext, useEffect } from 'react'
import DataContext from '../../store/data-context'
import DataItem from './DataItem'

const DataItemList = ({ filterValue }) => {
  const dataCtx = useContext(DataContext)

  console.log('From DataItemList:', dataCtx.books)

  useEffect(() => {
    console.log(dataCtx.books)
  }, [dataCtx])
  if (filterValue === 'All') {
    return dataCtx.books.map((book, index) => (
      <DataItem key={book.id} receivedData={book} numbering={index} />
    ))
  } else {
    return dataCtx.books
      .filter(
        el =>
          el.status.name === filterValue ||
          el.genre.name === filterValue ||
          el.name.toLowerCase().includes(filterValue)
      )
      .map((book, index) => (
        <DataItem key={book.id} receivedData={book} numbering={index} />
      ))
  }
}

export default DataItemList
