import { ShoppingCart } from 'lucide-react'
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
    const { cart, removeFromCart } = useContext(CartContext);

    return (
        <div className="p-10 mt-20">
            <h1 className="flex items-center gap-1 text-2xl font-bold mb-6">
                <ShoppingCart />Cart
                </h1>

            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                cart.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between gap-6 mb-4 border p-4 rounded-lg">
                        <div className="flex items-center gap-6">
                            <img src={item.image} className="h-16" />

                            <div>
                                <h3 className="font-semibold">{item.title}</h3>
                                <p>${item.price}</p>
                            </div>
                        </div>

                        <button
                            onClick={() => removeFromCart(index)}
                            className="bg-red-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-red-600">
                            Delete
                        </button>
                    </div>
                ))
            )}
        </div>
    );
};

export default Cart;