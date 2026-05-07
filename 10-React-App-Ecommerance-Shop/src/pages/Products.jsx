import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then(res => {
                setProducts(res.data);
                setLoading(false);
            });
    }, []);

    if (loading) return <h2 className="text-center mt-10">Loading...</h2>;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
            {products.map(item => (
                <ProductCard key={item.id} product={item} />
            ))}
        </div>
    );
};

export default Products;