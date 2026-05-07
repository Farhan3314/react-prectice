import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    return (
        <div className="bg-white rounded-2xl shadow-md p-4 mt-20 hover:shadow-xl transition flex flex-col h-87.5">

            <img
                src={product.image}
                className="h-32 mx-auto object-contain"
            />

            <h3 className="font-semibold mt-4 text-sm line-clamp-2">
                {product.title}
            </h3>

            <p className="text-blue-600 font-bold mt-2">
                ${product.price}
            </p>

            <Link to={`/product/${product.id}`} className="mt-auto">
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg cursor-pointer hover:bg-blue-700">
                    View Details
                </button>
            </Link>
        </div>
    );
};

export default ProductCard;