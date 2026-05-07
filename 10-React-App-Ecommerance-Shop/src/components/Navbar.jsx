import { Link } from "react-router-dom";
import { ShoppingCart } from 'lucide-react'

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 shadow-md bg-white">
            <Link to="/"
                className="flex items-center gap-1 text-2xl font-bold text-blue-600">
                <ShoppingCart />
                EC-Shop
            </Link>

            <div className="flex gap-6">
                <Link to="/" className="hover:text-blue-500">Home</Link>
                <Link to="/products" className="hover:text-blue-500">Products</Link>
                <Link to="/cart" className="hover:text-blue-500">Cart</Link>
            </div>
        </nav>
    );
};

export default Navbar;