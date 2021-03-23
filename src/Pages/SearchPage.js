import { useContext, useEffect, useState } from "react";
import {useHistory} from "react-router-dom";
import Cart from "../Components/Cart";
import { CartContext } from "../context/CartContext";
import {AnimatePresence} from 'framer-motion';
import BookCard from "../Components/Home/Books/BookCard";
import { BookContext } from "../context/BookContext";
import Loader from "../Components/Loader";

const SearchPage = () => {
     const {cartIsOpen} = useContext(CartContext);
     const {searchedBooks, query, setAllBooks} = useContext(BookContext);
     const [loading, setLoading] = useState(true);
     let history = useHistory();
     

     useEffect(() => {
             getBooks();
         // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [])

     const getBooks = async () => {
        //  const res = await fetch('https://quidax-feec-graphql.herokuapp.com/books');
        //  const returnedBooks = await res.json();
         setAllBooks();
         setTimeout(() => {
             setLoading(false);
         }, 2000);

     }

     if (searchedBooks.length === 0 && query === null){
         history.push('/')
     }

     if (loading) {
         return ( 
             <Loader />
         )
     }
  
    return(
        <>
            <AnimatePresence>
                {cartIsOpen && (
                <Cart />
                )}
            </AnimatePresence>
            <div id="search">
               <div className="title-section">
                    {query.length > 0 ? (
                    <h4 className="title">{searchedBooks.length} results found for {query}</h4>) 
                    : (
                    <h4 className="title">Start typing to search</h4>
                    )}
                </div>
                <div className="books-wrapper">
                    {searchedBooks.map((book, i) => {
                        return(
                            <BookCard book={book} key={i}/>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default SearchPage;