import {Link, useHistory} from "react-router-dom";
import BrandFull from '../../assets/brand-full.svg';
import BrandLite from '../../assets/brand-lite.svg';
import BookIcon from '../../assets/books.svg';
import SearchIcon from '../../assets/search.svg';
import CartIcon from '../../assets/cart.svg';
import BackArrowIcon from '../../assets/arrow.svg';
import {motion, AnimatePresence} from 'framer-motion';
import { useContext, useState } from 'react';
import { CartContext } from "../../context/CartContext";
import { BookContext } from "../../context/BookContext";


const PageHeader = () => {
    const {toggleCart, cart} = useContext(CartContext);
    const {search} = useContext(BookContext);
    const [searchTerm, setSearchTerm] = useState("");
    let history = useHistory();
    
    const onChangeSearch = (e) => {
        if (window.location.pathname !== '/search'){
            history.push('/search')
        }
        setSearchTerm(e.target.value);
        
        search(searchTerm);
    }

    const [openMobileSearch, setOpenMobileSearch] = useState(false);
    const toggleMobileSearch = () => {
        setOpenMobileSearch(!openMobileSearch)
    }
    return(
        <>
        <header>
            <div className="brand-container">
                <div className="brand-logo">
                    <Link to="/">
                        <img src={BrandFull} className="logo-full" alt="brand-logo"/>
                        <img src={BrandLite} className="logo-lite" alt="brand-logo"/>
                    </Link>
                </div>
            </div>
            <div className="search-container">
                <input type="text" onKeyUp={onChangeSearch} className="search" placeholder="Search books, genres, author, etc." />
                <button className="search-button">
                    <img src={SearchIcon} alt="search-icon"/>
                </button>
                <button className="mobile-search-button" onClick={toggleMobileSearch}>
                    <img src={SearchIcon} alt="search-icon"/>
                </button>
                </div>
            <div className="action-icons">
                <Link to = "/" className="books-icon-link" >
                    <img src={BookIcon} alt="books"/>
                </Link>
                <button className="cart-icon" onClick={toggleCart}>
                    <img src={CartIcon} alt="books"/>
                    <span>{cart.length}</span>
                </button>
            </div>
        </header>
        <AnimatePresence>
        {openMobileSearch && (
            <div className="mobile-search-overlay">
            <motion.div className="mobile-search-container"
            initial={{y: "-100%"}}
            animate={{y: 0}}
            exit={{y: "-100%" }}
            transition={{type:"tween", duration: 0.5}}
            >
                <button className="close-button" onClick={toggleMobileSearch}>
                    <img src={BackArrowIcon} alt="search-icon"/>
                </button>
                <div className="mobile-search-wrapper">
                    <input type="text" onKeyUp={onChangeSearch} className="search" placeholder="Search books, genres, author, etc." />
                        <button className="search-button">
                        <img src={SearchIcon} alt="search-icon"/>
                    </button>
                </div>
            </motion.div>
            </div>
        )}
        </AnimatePresence>

        </>
    )
}

export default PageHeader;