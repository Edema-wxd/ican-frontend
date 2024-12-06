import * as React from 'react';
import { PaginationProps } from '@/types';

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  onPageChange,
  totalFilteredPosts,
}) => {
  const postsPerPage = 4;
  const totalPages = Math.max(1, Math.ceil(totalFilteredPosts / postsPerPage));

  const renderPageNumbers = () => {
    const pages = [];
    const showEllipsis = totalPages > 5;

    if (showEllipsis) {
      // Always show first page
      pages.push(
        <button
          key={1}
          onClick={() => onPageChange(1)}
          className={`w-8 h-8 flex items-center justify-center rounded-sm
            ${currentPage === 1 ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
          aria-current={currentPage === 1 ? 'page' : undefined}
        >
          1
        </button>
      );

      // Show ellipsis if current page is not 2 or 3
      if (currentPage > 3) {
        pages.push(
          <span key="ellipsis-start" className="px-2 text-gray-400">
            ...
          </span>
        );
      }

      // Show current page and surrounding pages
      for (let i = Math.max(2, currentPage - 1); i <= Math.min(currentPage + 1, totalPages - 1); i++) {
        pages.push(
          <button
            key={i}
            onClick={() => onPageChange(i)}
            className={`w-8 h-8 flex items-center justify-center rounded-sm
              ${currentPage === i ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
            aria-current={currentPage === i ? 'page' : undefined}
          >
            {i}
          </button>
        );
      }

      // Show ellipsis if current page is not totalPages - 1 or totalPages - 2
      if (currentPage < totalPages - 2) {
        pages.push(
          <span key="ellipsis-end" className="px-2 text-gray-400">
            ...
          </span>
        );
      }

      // Always show last page
      pages.push(
        <button
          key={totalPages}
          onClick={() => onPageChange(totalPages)}
          className={`w-8 h-8 flex items-center justify-center rounded-sm
            ${currentPage === totalPages ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
          aria-current={currentPage === totalPages ? 'page' : undefined}
        >
          {totalPages}
        </button>
      );
    } else {
      // If total pages are 5 or less, show all pages
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <button
            key={i}
            onClick={() => onPageChange(i)}
            className={`w-8 h-8 flex items-center justify-center rounded-sm
              ${currentPage === i ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
            aria-current={currentPage === i ? 'page' : undefined}
          >
            {i}
          </button>
        );
      }
    }

    return pages;
  };

  return (
    <div
      className="flex items-center justify-center   rounded-md p-2"
      aria-label="Pagination"
    >
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        Previous
      </button>

      <div className="flex items-center gap-1 mx-4">
        {renderPageNumbers()}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
};

