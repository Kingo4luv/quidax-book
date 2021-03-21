import {createContext, useState} from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([]);
    const [searchedBooks, setSearchedBooks] = useState([]);
    const [query, setQuery] = useState(null);

    const setAllBooks = (books) => {
        setBooks(books)
    }

    const search = (searchTerm) => {
        setQuery(searchTerm);
        if(searchTerm === "" || searchTerm.length < 2){
           return setSearchedBooks([]);
        }
        const searchedBooks =  books.filter((book) => {
            return book.title.toLowerCase().match(searchTerm.toLowerCase()) || book.authors[0].name.toLowerCase().match(searchTerm.toLowerCase());
        });
        setSearchedBooks([...searchedBooks]);
    }

    return (
        <BookContext.Provider value={{books, searchedBooks, search, query,  setAllBooks}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;