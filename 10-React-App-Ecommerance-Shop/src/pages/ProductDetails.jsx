import { ShoppingCart } from 'lucide-react'

import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const { addToCart } = useContext(CartContext);

    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => setProduct(res.data));
    }, [id]);

    if (!product) return <h2 className="text-center mt-10">Loading...</h2>;

    const handleAddToCart = () => {
        addToCart(product);
        navigate("/cart");
    };

    return (
        <div className="flex flex-col md:flex-row gap-10 p-10 mt-20">

            <img src={product.image} className="h-60 object-contain" />

            <div>
                <h1 className="text-2xl font-bold">{product.title}</h1>
                <p className="text-gray-600 mt-4">{product.description}</p>
                <h2 className="text-xl text-blue-600 mt-4">
                    ${product.price}
                </h2>

                <button
                    onClick={handleAddToCart}
                    className="flex items-center gap-1 mt-5 bg-green-600 text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-green-700">
                    Add to Cart <ShoppingCart />
                </button>
            </div>
        </div>
    );
};

export default ProductDetails;