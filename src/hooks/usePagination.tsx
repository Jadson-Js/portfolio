import React from "react";

export function usePagination<T>(items: T[], itemsPerPage: number) {
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedItems = items.slice(start, end);

  const next = async () => setCurrentPage((p) => Math.min(p + 1, totalPages));

  const previous = () => setCurrentPage((p) => Math.max(p - 1, 1));

  return {
    paginatedItems,
    currentPage,
    totalPages,
    next,
    previous,
  };
}
