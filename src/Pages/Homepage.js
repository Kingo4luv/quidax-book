import Books from '../Components/Home/Books';
import Featured from '../Components/Home/FeaturedBook';
import { useEffect, useContext, useState } from 'react';
import {BookContext} from '../context/BookContext';
import { CartContext } from '../context/CartContext';
import Cart from '../Components/Cart'
import {AnimatePresence} from 'framer-motion';
import Loader from '../Components/Loader';


const Homepage = () => {
    const {books, setAllBooks} = useContext(BookContext);
    const {cartIsOpen} = useContext(CartContext);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getBooks();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const getBooks = async()=> {
        const res = await fetch('https://quidax-feec-graphql.herokuapp.com/books');
        const books = await res.json();
        setAllBooks([...books]);
        setLoading(false);
    }

    if(loading){
        return(
            <Loader/>
        )
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