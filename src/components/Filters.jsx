const Filters = ({ filters, setFilters }) => {
    const brands = ["Toyota", "Honda", "Ford", "BMW"];
    const fuelTypes = ["Petrol", "Diesel", "Electric"];

    return (
        <div className="flex flex-wrap gap-4 my-4">
            <select
                value={filters.brand}
                onChange={(e) => setFilters({ ...filters, brand: e.target.value })}
            >
                <option value="">All Brands</option>
                {brands.map(brand => <option key={brand} value={brand}>{brand}</option>)}
            </select>

            <select
                value={filters.fuel}
                onChange={(e) => setFilters({ ...filters, fuel: e.target.value })}
            >
                <option value="">All Fuel Types</option>
                {fuelTypes.map(fuel => <option key={fuel} value={fuel}>{fuel}</option>)}
            </select>

            <input
                type="range"
                min="0"
                max="100000"
                value={filters.maxPrice}
                onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
            />
            <span>Max Price: ${filters.maxPrice}</span>
        </div>
    );
};

export default Filters;