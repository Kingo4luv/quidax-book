import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import FeaturedBook from "./book";

const options = {
    loop: true,
        margin: 10,
        responsive: {
            0: {
                items: 2,
            },
            600: {
                items: 4,
            },
            1000: {
                items: 6,
            },
            1200: {
                items: 8,
            }
        }
};

const Featured = ({books}) => {
    return(
        <div id="featured-books">
            <div className="title-section">
                <h4 className="title">Featured Books</h4>
            </div>
            <div className="featured-container">
                <div className="featured-books-wrapper">
                    <OwlCarousel className='owl-theme' {...options}  nav> 
                        {
                            books.filter(book => book.featured !== null).map((book, i) => {
                            return(
                                <FeaturedBook book={book} key={i}/>
                            )
                        })}
                    </OwlCarousel>
                    <div className="left-nav">
                        <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M5.5 10.5L5.49846 0.5L0.5 5.5L5.5 10.5Z" fill="black"/>
                        </svg>
                    </div>
                    <div className="right-nav">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 512 512"><title>ionicons-v5-b</title><polygon points="144 448 368 256 144 64 144 448"/></svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured;