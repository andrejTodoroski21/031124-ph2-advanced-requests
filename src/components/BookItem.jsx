function BookItem({ book, booksData ,setBooksData }) {

    function handleDelete(){
        fetch(`http://localhost:3003/books/${book.id}`,{
            method: 'DELETE'
        })
        const filteredBooks = booksData.filter(b => b.id !== book.id)
        setBooksData(filteredBooks)
    }



    function handleUpdateLikes(){
        fetch(`http://localhost:3003/books/${book.id}`,{
            method: "PATCH",
            header:{
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({likes:book.likes+1})
        })
        .then(res => res.json())
        .then(updatedBook => {
           const updatedBooksData =  booksData.map(book =>{
            if(book.id !== updatedBook.id){
                return book
            }else{
                return updatedBook
            }
           })
           setBooksData(updatedBooksData)
        })
    }

    function handleRead(){
        fetch(`http://localhost:3003/books/${book.id}`,{
            method: "PATCH",
            header:{
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({reads:book.reads+1})
        })
        .then(res => res.json())
        .then(updatedBook => {
           const updatedBooksData =  booksData.map(book =>{
            if(book.id !== updatedBook.id){
                return book
            }else{
                return updatedBook
            }
           })
           setBooksData(updatedBooksData)
        })
    }


    // RENDER
    return (
        <div className="flex-item book-item">

            <h2>{book.title}</h2>

            <h3>By {book.author}</h3>

            <button onClick = {handleUpdateLikes}>{book.likes} Likes</button>

            <button onClick = {handleRead}>Read by {book.reads} people</button>

            <button onClick = {handleDelete}>Remove Book</button>

        </div>
    )

}

export default BookItem