import { useState, useEffect } from 'react'
import BooksContainer from './BooksContainer'
import BookForm from './BookForm'

function App() {


  // BOOKS STATE
  const [booksData, setBooksData] = useState( [] )


  // FETCH ALL BOOKS
  useEffect(() => {
      fetch("http://localhost:3000/books")
      .then(res => res.json())
      .then(data => setBooksData(data))
  }, [])


  // RENDER
  return (
    <div className="App">

      <h1>Advanced Fetch Requests</h1>

      <BooksContainer booksData={booksData} />

      <BookForm />

    </div>
  )
}

export default App