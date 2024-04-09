import { useState } from 'react'

function BookForm() {


    // INPUT STATE
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")


    // HANDLE SUBMIT
    function handleSubmit(event) {
        event.preventDefault()
    }


    // RENDER
    return (
        <form onSubmit={handleSubmit}>

            <h2>Add New Book</h2>

            {/* Title Input */}
            <input type="text" 
            name="title"
            placeholder="title"
            onChange={e => setTitle(e.target.value)}
            value={title} />

            {/* Author Input */}
            <input type="text" 
            name="author"
            placeholder="author"
            onChange={e => setAuthor(e.target.value)}
            value={author} />

            {/* Submit Button */}
            <input type="submit" value="Add Book" />

        </form>
    )

}

export default BookForm