import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({book, index}) => {
     const {removeFromCart, decreaseBookQuantity, increaseBookQuantity} = useContext(CartContext);
    return(
        <div className="cart-item">
            <div className="image-container">
                <img src={book.image_url} alt={book.image_url} / >
            </div>
            <div className="cart-item-meta">
                <div className="meta-left">
                    <div>
                        <h5 className="book-title">
                            {book.title}
                        </h5>
                        <p className="book-author">
                            {book.authors[0].name}
                        </p>
                    </div>
                    <p className="remove-book" onClick={(()=> removeFromCart(index))}>Remove</p>
                </div>
                <div className="meta-right">
                    <div>
                        <span className="single-amount">${book.price}</span>
                        <div className="quantity-control">
                            <button className="btn" onClick={(() => decreaseBookQuantity(book.id))}>-</button>
                            <span className="quantity">{book.quantity}</span>
                            <button className="btn" onClick={(() => increaseBookQuantity(book.id))}>+</button>
                        </div>
                    </div>
                    <span className="collective-amount">${(book.price * book.quantity).toFixed(2)}</span>
                </div>
            </div>
        </div>
    )
}

export default CartItem;