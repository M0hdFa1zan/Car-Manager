import { useState, useEffect } from "react";
import { fetchCars } from "../utils/mockApi";

export const useFetchCars = (filters) => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadCars = async () => {
            try {
                setLoading(true);
                const data = await fetchCars(filters);
                setCars(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        loadCars();
    }, [JSON.stringify(filters)]);

    return { cars, loading, error };
};