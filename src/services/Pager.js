export class Pager {
  constructor(itemsPerPage) {
    this.itemsPerPage = itemsPerPage;
  }

  canPagePrevious(currentPage) {
    return currentPage > 0;
  }

  canPageNext(itemsCount, currentPage) {
    const pagesCount = this.getPagesCount(itemsCount);
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

  getPagesCount(itemsCount) {
    return Math.ceil(itemsCount / this.itemsPerPage);
  }
}