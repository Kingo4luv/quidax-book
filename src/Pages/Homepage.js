import Books from '../Components/Home/Books';
import Featured from '../Components/Home/FeaturedBook';
import { useEffect, useState, useContext } from 'react';
import {BookContext} from '../context/BookContext';


const Homepage = () => {
    const {books, setAllBooks} = useContext(BookContext);
    useEffect(() => {
        getBooks();
    }, [])
    
    const getBooks = async()=> {
        const res = await fetch('https://quidax-feec-graphql.herokuapp.com/books');
        const books = await res.json();
        setAllBooks([...books]);
    }


    return (
        <div className="home">
            <Featured />
            <Books books={books} />
        </div>
    )
}

export default Homepage;