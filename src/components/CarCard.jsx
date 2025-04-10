import { useState } from "react";

const CarCard = ({ car }) => {
    const [isWishlisted, setIsWishlisted] = useState(false);

    const toggleWishlist = () => {
        const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
        if (isWishlisted) {
            const updated = wishlist.filter(item => item.id !== car.id);
            localStorage.setItem("wishlist", JSON.stringify(updated));
        } else {
            localStorage.setItem("wishlist", JSON.stringify([...wishlist, car]));
        }
        setIsWishlisted(!isWishlisted);
    };

    return (
        <div className="border rounded-lg p-4 shadow-md">
            <img src={car.image} alt={car.name} className="w-full h-40 object-cover" />
            <h3 className="text-xl font-bold">{car.name}</h3>
            <p>Brand: {car.brand}</p>
            <p>Price: ${car.price}</p>
            <p>Fuel: {car.fuel}</p>
            <button
                onClick={toggleWishlist}
                className={`mt-2 px-4 py-2 rounded ${isWishlisted ? "bg-red-500" : "bg-blue-500"} text-white`}
            >
                {isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
            </button>
        </div>
    );
};

export default CarCard;