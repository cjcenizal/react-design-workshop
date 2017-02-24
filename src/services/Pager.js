export class Pager {
  constructor(itemsPerPage) {
    this.itemsPerPage = itemsPerPage;
  }

  canPagePrevious(currentPage) {
    return currentPage > 0;
  }

  canPageNext(totalItems, currentPage) {
    const pagesCount = Math.ceil(totalItems / this.itemsPerPage);
    return currentPage < pagesCount - 1;
  }

  getItemsOnPage(items, currentPage) {
    const startIndex = currentPage * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return items.filter((item, index) => (
      index >= startIndex
      && index < endIndex
    ));
  }
}