import { useEffect, useState } from "react";
import fetchImages from "../api/pexels";

const Gallery = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getImages = async () => {
            const data = await fetchImages();

            setImages(data);
            setLoading(false);
        };

        getImages();
    }, []);

    if (loading) {
        return (
            <h1 className="text-center text-2xl font-semibold mt-10">
                Loading Images...
            </h1>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
            {images.map((image) => (
                <div key={image.id}
                    className="overflow-hidden rounded-2xl shadow-md hover:scale-105 transition duration-300">
                    <img
                        src={image.src.medium}
                        alt={image.photographer}
                        className="w-full h-64 object-cover"
                    />

                    <div className="p-3">
                        <p className="text-sm font-medium">
                            {image.photographer}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Gallery;