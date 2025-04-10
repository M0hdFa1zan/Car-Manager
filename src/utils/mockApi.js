export const fetchCars = async (params = {}) => {
    const { search = "", brand = "", minPrice = 0, maxPrice = 100000, fuel = "" } = params;

    const mockCars = [
        { id: 1, name: "Toyota Camry", brand: "Toyota", price: 25000, fuel: "Petrol", image: "camry.jpg" },
        { id: 2, name: "Honda Civic", brand: "Honda", price: 22000, fuel: "Electric", image: "civic.jpg" },
        { id: 3, name: "Toyota Corolla", brand: "Toyota", price: 21000, fuel: "Diesel", image: "corolla.jpg" },
        { id: 4, name: "BMW M8", brand: "BMW", price: 12000, fuel: "Electric", image: "m8.jpg" },
        { id: 5, name: "Lamborghini Aventador", brand: "Lamborghini", price: 25000, fuel: "Petrol", image: "aventador.jpg" },
        { id: 6, name: "Fiat Punto", brand: "Fiat", price: 92000, fuel: "Diesel", image: "punto.jpg" },
        { id: 7, name: "Porsche 911GT3", brand: "Porsche", price: 345000, fuel: "Petrol", image: "911.jpg" },
        { id: 8, name: "Bugatti Veyron", brand: "Bugatti", price: 62000, fuel: "Petrol", image: "veyron.jpg" },
        { id: 9, name: "Ariel Atom", brand: "Ariel", price: 45000, fuel: "Diesel", image: "atom.jpg" },
        { id: 10, name: "Tata Nexon", brand: "Tata", price: 62000, fuel: "Petrol", image: "nexon.jpg" },
        { id: 11, name: "Honda Accord", brand: "Honda", price: 45000, fuel: "Diesel", image: "accord.jpg" },
        { id: 12, name: "Zenvo TSR-S", brand: "Zenvo", price: 22000, fuel: "Electric", image: "tsr.jpg" },
        { id: 13, name: "Apollo IE", brand: "Apollo", price: 25000, fuel: "Petrol", image: "ie.jpg" },
        { id: 14, name: "Audi RS7", brand: "Audi", price: 22500, fuel: "Diesel", image: "rs7.jpg" },
        { id: 15, name: "Audi A8", brand: "Audi", price: 25000, fuel: "Diesel", image: "a8.jpg" },
        { id: 16, name: "Lexus RCF", brand: "Lexus", price: 23000, fuel: "Petrol", image: "rcf.jpg" },
        { id: 17, name: "Saleen S1", brand: "Saleen", price: 25000, fuel: "Electric", image: "s1.jpg" },
        { id: 18, name: "Ford Mustang", brand: "Ford", price: 26000, fuel: "Diesel", image: "mustang.jpg" },
        { id: 19, name: "Mercedes AMG", brand: "Mercedes", price: 28000, fuel: "Petrol", image: "amg.jpg" },
        { id: 20, name: "Volvo Polestar", brand: "Volvo", price: 211000, fuel: "Diesel", image: "polestar.jpg" },
    ];

    await new Promise(resolve => setTimeout(resolve, 500));

    return mockCars.filter(car =>
        car.name.toLowerCase().includes(search.toLowerCase()) &&
        (brand === "" || car.brand === brand) &&
        (fuel === "" || car.fuel === fuel) &&
        car.price >= minPrice && car.price <= maxPrice
    );
};