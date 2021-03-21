import BackArrowIcon from '../../assets/arrow.svg';
import CartIcon from '../../assets/cart.svg';
import CartItem from './item';
import {motion} from 'framer-motion';
import Button from '../Button';
const Cart = ({toggleCart}) => {
    return (
        <div id="cart">
            <div className="cart-background">
                    <motion.aside className="main-cart"
                    initial={{x: "100%"}}
                    animate={{x: 0}}
                    exit={{x: "100%" }}
                    transition={{type:"tween", duration: 0.3}}
                    >
                        <div className="header">
                            <div className="icon-wrapper">
                                <button className="icon-button" onClick={toggleCart}>
                                    <img src={BackArrowIcon} alt="back-icon"/>
                                </button>
                                <span className="icon-title">Back</span>
                            </div>
                            <div className="icon-wrapper">
                                <span className="icon-title">Your Cart</span>
                                <button className="icon-button">
                                    <img src={CartIcon} alt="back-icon"/>
                                </button>
                            </div>
                        </div>
                        <div className="body">
                            <CartItem />
                            <CartItem />
                            <CartItem />
                            <div className="footer">
                                <div className="summary">
                                    <p className="summary-title">Subtotal</p>
                                    <p className="summary-total">$96.76</p>
                                </div>
                                <Button title="Proceed to cart" />
                            </div>
                        </div>
                    </motion.aside>
            </div>
        </div>
    )
}

export default Cart;