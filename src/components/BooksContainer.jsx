import BookItem from "./BookItem"

function BooksContainer({ booksData, setBooksData }) {

    // MAPPED BOOKS
    const mappedBooks = booksData.map( book => <BookItem key={book.id} booksData={booksData} book={book} setBooksData={setBooksData} /> )


    // RENDER
    return (
        <div className="flex-container">

            { mappedBooks }

        </div>
    )

}

export default BooksContainer