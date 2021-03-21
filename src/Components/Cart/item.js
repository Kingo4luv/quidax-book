const CartItem = () => {
    return(
        <div className="cart-item">
            <div className="image-container">
                <img src = "https://res.cloudinary.com/quidaxengineering/image/upload/v1611770304/feec/the-innovators-dilemma_ap1zo4.jpg" alt="book" / >
            </div>
            <div className="cart-item-meta">
                <div className="meta-left">
                    <div>
                        <h5 className="book-title">
                            The Effective Engineer
                        </h5>
                        <p className="book-author">
                            Edmond Lau
                        </p>
                    </div>
                    <p className="remove-book">Remove</p>
                </div>
                <div className="meta-right">
                    <div>
                        <span className="single-amount">$25</span>
                        <div className="quantity-control">
                            <button className="btn">-</button>
                            <span className="quantity">1</span>
                            <button className="btn">+</button>
                        </div>
                    </div>
                    <span className="collective-amount">$76</span>
                </div>
            </div>
        </div>
    )
}

export default CartItem;