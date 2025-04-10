import { useEffect, useState } from "react";
import CarCard from "../CarCard";

const Wishlist = () => {
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("wishlist") || "[]");
        setWishlist(saved);
    }, []);

    return (
        <div className="flex flex-col lg:w-screen align-center justify-center px-20">
            <h1 className="text-2xl font-bold mb-4">Your Wishlist</h1>
            {wishlist.length === 0 ? (
                <p>No cars in wishlist.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {wishlist.map(car => (
                        <CarCard key={car.id} car={car} isWishlisted={true} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Wishlist;