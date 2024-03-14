import React, { useEffect } from 'react';

export const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  setCurrentPage,
  totalPages,
  setTotalPages
}) => {
  
  useEffect(() => {
    // Calcular el número total de páginas
    const pages = Math.ceil(totalItems / itemsPerPage);
    setTotalPages(pages);
  }, [totalItems, itemsPerPage]);
  
  const handlePrevPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li key={i} className={i === currentPage ? 'active' : ''}>
          <button onClick={() => handlePageChange(i)} className={`pagination-button px-3 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-100 disabled:opacity-50 ${i === currentPage ? 'shadow-md' : ''}`} style={{ backgroundColor: i === currentPage ? '#DA7272' : '#FAE6E6', color: i === currentPage ? '#FCF4F4' : '#DA7272' }}>
            {i}
          </button>
        </li>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="pagination flex items-center justify-center mt-8">
      <button
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        className={`pagination-button mr-4 px-3 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-100 disabled:opacity-50 ${currentPage === 1 ? '' : 'shadow-md'}`}
      >
        Previous
      </button>
      <ul className="page-numbers flex space-x-2">
        {renderPageNumbers()}
      </ul>
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className={`pagination-button ml-4 px-3 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-100 disabled:opacity-50 ${currentPage === totalPages ? '' : 'shadow-md'}`}
      >
        Next
      </button>
    </div>
  );
};
