import { useState, useEffect } from "react";

const SearchBar = ({ search, setSearch }) => {
    const [inputValue, setInputValue] = useState(search);

    // Debounce search input to avoid excessive API calls
    useEffect(() => {
        const timer = setTimeout(() => {
            setSearch(inputValue);
        }, 500); // 500ms delay

        return () => clearTimeout(timer);
    }, [inputValue, setSearch]);

    return (
        <div className="my-4">
            <input
                type="text"
                placeholder="Search cars by name..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
};

export default SearchBar;