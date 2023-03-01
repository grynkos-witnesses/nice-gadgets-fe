export const getStartItem = (
  total: number,
  perPage: number,
  currentPage: number,
) => {
  const lastPage = Math.ceil(total / perPage);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === lastPage;

  if (isFirstPage) {
    return 0;
  }

  if (isLastPage) {
    return total - perPage;
  }

  const startItem = 1 + perPage * (currentPage - 1);

  return startItem;
};
