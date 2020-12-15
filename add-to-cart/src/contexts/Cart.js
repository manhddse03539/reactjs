import { createContext, useState } from 'react';
export const CartContext = createContext();
export const CartProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);
    const addToCart = (product) => {
        setCartItems(cartItems.concat(product));
    }
    return (
        <CartContext.Provider
            value={{
                cartItems: cartItems,
                addToCart: addToCart,
            }}
        >
            {props.children}
        </CartContext.Provider>
    );
}