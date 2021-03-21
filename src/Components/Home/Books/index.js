import BookCard from "./BookCard"

const Books = ({books}) => {
    return(
        <div id="all-books">
                <div className="title-section">
                    <h4 className="title">All Books</h4>
                </div>
                <div className="books-wrapper">
                    {books.map((book, i) => {
                        return(
                            <BookCard book={book} key={i}/>
                        )
                    })}
                </div>
            </div>
    )
}

export default Books;