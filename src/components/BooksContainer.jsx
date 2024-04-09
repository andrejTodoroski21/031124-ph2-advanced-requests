import BookItem from "./BookItem"

function BooksContainer({ booksData }) {

    // MAPPED BOOKS
    const mappedBooks = booksData.map( book => <BookItem key={book.id} book={book} /> )


    // RENDER
    return (
        <div className="flex-container">

            { mappedBooks }

        </div>
    )

}

export default BooksContainer