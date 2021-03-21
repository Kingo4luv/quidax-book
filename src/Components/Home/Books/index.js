import BookCard from "./BookCard"

const Books = ({books}) => {
    return(
        <div id="all-books">
                <div className="title-section">
                    <h4 className="title">All Books</h4>
                </div>
                <div className="books-wrapper">
                    {books.map(book => {
                        return(
                            <BookCard book={book} />
                        )
                    })}
                </div>
            </div>
    )
}

export default Books;