import { useState } from "react";
import { useFetchCars } from "../../hooks/useFetchCars";
import CarCard from "../CarCard";
import Filters from "../Filters";
import SearchBar from "../SearchBar";
import Pagination from "../Pagination";

const Home = () => {
    const [search, setSearch] = useState("");
    const [filters, setFilters] = useState({
        brand: "",
        minPrice: 0,
        maxPrice: 100000,
        fuel: "",
    });
    const [currentPage, setCurrentPage] = useState(1);
    const carsPerPage = 10;

    const { cars, loading, error } = useFetchCars({ ...filters, search });

    const indexOfLastCar = currentPage * carsPerPage;
    const indexOfFirstCar = indexOfLastCar - carsPerPage;
    const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="flex align-center justify-center lg:w-screen">
            <div className="flex flex-col items-center content-center justify-center">
                <SearchBar search={search} setSearch={setSearch} />
                <Filters filters={filters} setFilters={setFilters} />

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {currentCars.map(car => (
                        <CarCard key={car.id} car={car} />
                    ))}
                </div>

                <Pagination
                    totalCars={cars.length}
                    carsPerPage={carsPerPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </div>
    );
};

export default Home;