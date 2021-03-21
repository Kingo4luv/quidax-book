import {createContext, useState} from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([]);

    const setAllBooks = (books) => {
        setBooks(books)
    }

    return (
        <BookContext.Provider value={{books,  setAllBooks}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;