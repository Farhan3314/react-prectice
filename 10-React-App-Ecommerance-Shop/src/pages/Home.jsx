import { Link } from "react-router-dom";
import { ShoppingCart } from 'lucide-react'


const Home = () => {
    return (
        <div className="flex flex-col items-center text-center mt-20">
            <h1 className="text-4xl font-bold mb-4">
                Welcome to Ecommerce Shop
            </h1>
            <p className="text-gray-600 mb-6">
                Modern React E Commerce Store
            </p>

            <Link to="/products"
                className="flex gap-1 bg-blue-600 text-white px-6 py-2 rounded-lg">
                Explore Products <ShoppingCart />
            </Link>
        </div>
    );
};

export default Home;