export const getRange = (
  total: number,
  perPage: number,
  currentPage: number,
) => {
  const lastPage = Math.ceil(total / perPage);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === lastPage;

  let startItem = 0;
  let endItem = 0;

  if (isFirstPage) {
    startItem = 0;
    endItem = startItem + perPage;

    return [startItem, endItem];
  }

  if (isLastPage) {
    startItem = total - (total % perPage);
    endItem = total + 1;

    return [startItem, endItem];
  }

  startItem = (perPage * (currentPage - 1));
  endItem = startItem + perPage;

  return [startItem, endItem];
};
