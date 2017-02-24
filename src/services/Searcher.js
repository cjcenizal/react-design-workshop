
function getMatchingItems(items, valueProvider, searchTerm) {
  return items.filter(item =>
    valueProvider(item).trim().toLowerCase().indexOf(searchTerm.trim().toLowerCase()) !== -1
  );
}

export class Searcher {
  constructor(valueProvider) {
    this.valueProvider = valueProvider;
  }

  searchItems(items, searchTerm) {
    if (!searchTerm.trim().length) {
      return items.slice();
    }

    return getMatchingItems(items, this.valueProvider, searchTerm);
  }
}