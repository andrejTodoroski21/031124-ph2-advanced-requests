function BookItem({ book }) {


    // RENDER
    return (
        <div className="flex-item book-item">

            <h2>{book.title}</h2>

            <h3>By {book.author}</h3>

            <button>{book.likes} Likes</button>

            <button>Read by {book.reads} people</button>

        </div>
    )

}

export default BookItem