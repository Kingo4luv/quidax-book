import Books from '../Components/Home/Books';
import Featured from '../Components/Home/FeaturedBook';
import { useEffect, useContext } from 'react';
import {BookContext} from '../context/BookContext';
import { CartContext } from '../context/CartContext';
import Cart from '../Components/Cart'
import {AnimatePresence} from 'framer-motion';


const Homepage = () => {
    const {books, setAllBooks} = useContext(BookContext);
    const {cartIsOpen} = useContext(CartContext);
    useEffect(() => {
        getBooks();
    })
    
    const getBooks = async()=> {
        const res = await fetch('https://quidax-feec-graphql.herokuapp.com/books');
        const books = await res.json();
        setAllBooks([...books]);
    }


    return (
        <>
            <AnimatePresence>
                {cartIsOpen && (
                <Cart />
                )}
            </AnimatePresence>
            <div className="home">
                <Featured  books={books}/>
                <Books books={books} />
            </div>
        </>
    )
}

export default Homepage;