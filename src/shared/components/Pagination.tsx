// src/shared/components/Pagination.tsx
import React from "react";
import "../../styles/Pagination.scss"; // Adjust the path as necessary

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

/**
 * @param param0 
 * @returns Pagination component that displays a paginated list of items.
 */
const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const getPages = () => {
    const pages: (number | string)[] = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="sticky-pagination" role="navigation" aria-label="Pagination Navigation">
      <button
        className="pagination-button"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        aria-label="Previous page"
      >
        ⬅
      </button>

      {getPages().map((page, idx) =>
        typeof page === "string" ? (
          <span key={idx} className="pagination-button dots" aria-hidden="true">
            ...
          </span>
        ) : (
          <button
            key={idx}
            className={`pagination-button ${page === currentPage ? "active" : ""}`}
            onClick={() => onPageChange(page)}
            aria-label={`Go to page ${page}`}
          >
            {page}
          </button>
        )
      )}

      <button
        className="pagination-button"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        aria-label="Next page"
      >
        ➡
      </button>
    </div>
  );
};

export default Pagination;
