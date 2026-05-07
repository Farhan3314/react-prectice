import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [message, setMessage] = useState("");

    const addToCart = (product) => {
        if (cart.find(item => item.id === product.id)) {
            setMessage("Already in cart");
            setTimeout(() => setMessage(""), 2000);
            return;
        }

        setCart([...cart, product]);
        setMessage("Added to cart");
        setTimeout(() => setMessage(""), 2000);
    };

    const removeFromCart = (index) => {
        setCart(cart.filter((_, i) => i !== index));
        setMessage("Removed");
        setTimeout(() => setMessage(""), 2000);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, message }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;