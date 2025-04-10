const Pagination = ({ totalCars, carsPerPage, currentPage, setCurrentPage }) => {
    const totalPages = Math.ceil(totalCars / carsPerPage);

    return (
        <div className="flex justify-center mt-4">
            {Array.from({ length: totalPages }, (_, i) => (
                <button
                    key={i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`mx-1 px-3 py-1 rounded ${currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                >
                    {i + 1}
                </button>
            ))}
        </div>
    );
};

export default Pagination;